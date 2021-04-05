import React, { useEffect, useReducer} from 'react';
import axios from "axios";

import Spinner from "../../spinner/spinner.js";
import ScrollAnimation from 'react-animate-on-scroll';

import "./FactsAboutMenu.css";

const httpReducer = (httpState, action) => {
    switch(action.type) {
        case "SEND":
            return { ...httpState, loading: true }
        case "RESPONSE":
            return { ...httpState, loading: false, facts: action.Facts }
        case "ERROR":
            return { loading: false, error: action.ErrorMessage}
        default:
            throw new Error("This never happen")
    }
}

const FactsAboutMenu = (props) => {

    const [httpState, dispatch] = useReducer( httpReducer, { error: null, loading: null, facts: null } )

    useEffect(() => {
        let fetchedFacts = []
        let queryparmas = props.menu
        dispatch({ type: "SEND" })
        axios.get('https://chrumaj-1bbf4-default-rtdb.europe-west1.firebasedatabase.app/Facts.json?orderBy="$key"&equalTo="' + queryparmas + '"' )
            .then(response => {
                for (let key in response.data) {
                    fetchedFacts.push(response.data[key])
                }
                fetchedFacts = Object.values(fetchedFacts[0]) // converts objects to string values withous keys
                let hastag = fetchedFacts.pop() // remove hastag from list of facts and save him to separate variable
                dispatch( { type: "RESPONSE",
                            Facts:   
                            <div className="ListOfFacts"> 
                                <ul>  {fetchedFacts.map((fact, id) => <li key={Math.floor(Math.random() * 5000)}> {fact} <br/></li>) } </ul> {/* map list of facts to state */}
                                <h1 className="Hastag" > {hastag} </h1>
                                <h2 className="GoodByeText"> Ďakujeme za návštevu, príď si tipnúť pochúťku aj zajtra !</h2>
                            </div>   
                })
            })
            .catch(error => {
                dispatch({ type: "ERROR", ErrorMessage: "Something went wrong" })
            })
      }, [props.menu])

    return( 
        <ScrollAnimation animateIn="fadeIn">
            <section id="factsAboutMenu">
                { httpState.error && <h1 className="ErrorMessage"> {httpState.error} </h1> }
                { httpState.loading ? <Spinner /> : <React.Fragment> {httpState.facts}  </React.Fragment>}
            </section>
        </ScrollAnimation>
    );
};

export default FactsAboutMenu;