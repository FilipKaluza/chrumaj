import React, {useState, useEffect} from 'react';
import axios from "axios";

import Spinner from "../spinner/spinner.js";
import ScrollAnimation from 'react-animate-on-scroll';

import "./factsAboutMenu.css";

const FactsAboutMenu = (props) => {

    const [facts, setFacts] = useState(null)
    const [hastag, setHastag] = useState(null);

    let fetchedFacts = []

    useEffect(() => {
        let queryparmas = props.menu
        axios.get('https://chrumaj-1bbf4-default-rtdb.europe-west1.firebasedatabase.app/Facts.json?orderBy="$key"&equalTo="' + queryparmas + '"' )
            .then(response => {
                for (let key in response.data) {
                    fetchedFacts.push(response.data[key])
                }
                fetchedFacts = Object.values(fetchedFacts[0]) // converts objects to string values withous keys
                let hastag = fetchedFacts.pop() // remove hastag from list of facts and save him to separate variable
                setHastag( <h1 className="Hastag"> {hastag} </h1>) // setState for hastag
                setFacts( <ul>  {fetchedFacts.map((fact, id) => <li key={Math.floor(Math.random() * 5000)}> {fact} <br/></li>) } </ul>)  //map list of facts to state
            })
            .catch(error => {
                setFacts(<h1> Niekde nastala chyba, pracujeme na náprave  </h1>)
            })
      }, [props.menu])

    return(
        <ScrollAnimation animateIn="fadeIn">
            <section id="factsAboutMenu">
                {facts ? <h1  className="ListOfFacts"> {facts} </h1>    : <Spinner />}
                {hastag}
                <h2 className="GoodByeText"> Ďakujeme za návštevu, príď si tipnúť pochúťku aj zajtra !</h2>
            </section>
        </ScrollAnimation>
    );
};

export default React.memo(FactsAboutMenu);