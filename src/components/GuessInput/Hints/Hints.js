import React, { useState, useCallback, useMemo } from 'react';

// import child components
import FirstCharacter from "./firstCharacter/firstCharacter";
import RandomCharacter from "./randomCharacter/randomCharacter";
import NumberOfCharacters from "./numberOfCharacters/numberOfCharacters";

import "./Hints.css";

const Hints = (props) => {

    const [ showFirstCharacter, setShowFirstCharacter ] = useState(false);
    const [ showRandomCharacter, setShowRandomCharacter ] = useState(false);
    const [ showNumberOfCharacters, setShowNumberOfCharacters ] = useState(false);

    const showRandomCharacterHandler = useCallback(() => {
        setShowRandomCharacter(!showRandomCharacter)
    }, [showRandomCharacter])

    const showfirstCharacterHandler = useCallback(() => {
        setShowFirstCharacter(!showFirstCharacter)
    }, [showFirstCharacter])

    const showNumberOfCharactersHandler = useCallback(() => {
        setShowNumberOfCharacters(!showNumberOfCharacters)
    }, [showNumberOfCharacters])

    const firstCharacterHint = useMemo(() => {
        return <FirstCharacter clicked={showfirstCharacterHandler} show={showFirstCharacter} classes={showFirstCharacter ? "Hint OpenHint" : "Hint"} {...props} />
    }, [showFirstCharacter, showfirstCharacterHandler, props])

    const randomCharacterHint = useMemo(() => {
        return <RandomCharacter clicked={showRandomCharacterHandler} show={showRandomCharacter} classes={showRandomCharacter ? "Hint OpenHint" : "Hint"} {...props} />
    }, [showRandomCharacter, showRandomCharacterHandler, props])

    const numberOfCharactersHint = useMemo(() => {
        return <NumberOfCharacters clicked={showNumberOfCharactersHandler} show={showNumberOfCharacters} classes={showNumberOfCharacters ? "Hint OpenHint" : "Hint"} {...props} />
    }, [showNumberOfCharacters, showNumberOfCharactersHandler, props])

    return(
        <ul className="HintList" >
            {firstCharacterHint}
            {randomCharacterHint}
            {numberOfCharactersHint}
        </ul>
    );
};

export default Hints; // memo here is because I want avoid re-rendering component after stop munching (because it change my randomHint)