import React, {useState} from 'react';

// import child components
import FactsAboutMenu from "./FactsAboutMenu/FactsAboutMenu";
import Hints from "./Hints/Hints";

import "./GuessInput.css";
import { Link } from "react-scroll";

import removeAccents from "remove-accents";
import capitalize from "capitalize-first-letter";


const GuessInput = (props) => {

    const [guess, setGuess] = useState("")
    const [guessValid, setGuessValid] = useState(false)
    const [touched, setTouched] = useState(false)
    const [showHintList, setShowHintList] = useState(false)

    const checkValidity = (guess) => {
        if(props.menu === guess) {
            setGuessValid(true)
        }
    };

    const guessInputHandler = (e) => {
        let updatedGuess = {...guess} // copy old state
        updatedGuess = e.target.value
        updatedGuess = removeAccents(capitalize(updatedGuess)); // remove accents and upperCase first letter for better checkvalidity 
        checkValidity(updatedGuess)
        setGuess(updatedGuess)
        setTouched(true)
    };

    const showHintHandler = () => {
        setShowHintList(!showHintList)
    };

    let btnHintText = "Zobraziť nápovedy"
    if(showHintList) {
        btnHintText = "Skryť nápovedy"
    }

    return(
        <React.Fragment>
            {touched ? 
            <div>
                {guessValid ? <p className="GuessSucess"> Tss, dal si to ! je to {props.menu}. Nižšie sa dozvieš viac o mojej dnešnej laškotke :) </p> : <p className="GuessInvalid"> Tvoj tip "{guess}" nie je správny, skúšaj ďalej :)  </p>  }
            </div> :
            <p className="DefaultText"> Pochrúmaj a tipni si moju dnešnú laškotku :)</p>}
             <form className="Form">
                {props.menu !== "" ? <input type="text" onChange={(e) => guessInputHandler(e)} value={guess} placeholder={props.munching ? "Vieš čo práve chrúmam ?" : "Tipni si moju dnešnú laškotku tu"} /> : null }
            </form>
                { touched && !guessValid ? <div className="ShowHintBtnWrapper"> <button className={showHintList ? "ShowHintBtn ShowHintBtnOpen" : "ShowHintBtn"} onClick={showHintHandler} > {btnHintText} </button> </div> : null}
                { showHintList && !guessValid ?  <Hints menu={props.menu} /> : null }
            { guessValid ?  
            <React.Fragment>
                <Link className="ShowFactsBtn" to="factsAboutMenu" smooth={true} offset={0} duration={1000} > <button > Dozvi sa viac o mojej dnešnej pochúťke </button> </Link>
                <FactsAboutMenu menu={props.menu} /> 
            </React.Fragment> : null} 
        </React.Fragment>

       
    );
};

export default React.memo(GuessInput);