import React, { useReducer, useCallback, useMemo } from 'react';
import useSound from 'use-sound';

// import child components
import Mouth from "./mouth/mouth";
import Button from "./startMunchingButton/startMunchingButton"
import GuessInput from "../GuessInput/GuessInput";

import {todaySound, identifier} from "../helpers/todaySound";

import removeAccents from "remove-accents"; 

const mouthReducer = (currentState, action) => {
    switch(action.type) {
        case "STARTMUNCHING":
            return { ...currentState, munching: true  }
        case "STOPMUNCHING":
            return {...currentState, munching: false}
        default:
            return currentState
    }
}

const Main = (props) => {
    const [munchingState, dispatch] = useReducer( mouthReducer, { munching: false, choosedMenu: removeAccents(identifier) } )

    const [play] = useSound(todaySound);

    const startMunching = useCallback(() => {
        play();
        dispatch({type: "STARTMUNCHING"})
    }, [play]); // callback is necesarry because useSound causes re-renders, this callback help me prevent at least one re-render cycle of startMunchingButton

    if (munchingState.munching) {
        setTimeout(() => {
            dispatch({type: "STOPMUNCHING"})
        }, 10000)
    }

    const button = useMemo(() => {
        return <Button clicked={startMunching} munching={munchingState.munching} />
    }, [munchingState.munching, startMunching])

    return(
        <React.Fragment>
            <Mouth munching={munchingState.munching} />
            {button}
            <GuessInput menu={munchingState.choosedMenu} munching={munchingState.munching}/>
        </React.Fragment>
    );
};


export default Main;