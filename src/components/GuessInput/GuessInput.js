import React, {useState} from 'react';

import "./GuessInput.css";


const GuessInput = (props) => {

    const [guess, setGuess] = useState("")
    const [guessValid, setGuessValid] = useState(false)
    const [touched, setTouched] = useState(false)

    const checkValidity = (guess) => {
        if(props.menu === guess) {
            setGuessValid(true)
        }
    };

    const guessInputHandler = (e) => {
        let updatedGuess = {...guess} // copy old state
        updatedGuess = e.target.value
        checkValidity(updatedGuess)
        setGuess(updatedGuess)
        setTouched(true)
    };
    console.log("rendering input")
    console.log("Guess", guess)
    console.log("touched", touched)
    console.log("guessValid", guessValid)
    console.log("menu", props.menu)


    return(
        <React.Fragment>
             <form className="Form">
                {props.menu !== "" ? <input type="text" onChange={(e) => guessInputHandler(e)} value={guess} placeholder={props.munching ? "Vieš čo práve chrúmam ?" : "Tipni si moju dnešnú laškotku tu"} /> : null }
            </form>
            {touched ? 
            <div>
                {guessValid ? <p className="GuessSucess"> Tss, dal si to ! je to {props.menu} </p> : <p className="GuessInvalid"> nie je to {guess} </p>  }
            </div> :
            <p className="DefaultText"> No tak, pochrúmaj a tipni si moju dnešnú laškotku :)</p>}
            
        </React.Fragment>

       
    );
};

export default React.memo(GuessInput);