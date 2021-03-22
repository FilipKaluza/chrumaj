import React, { useState } from 'react';
import Row from "antd/lib/row";
import useSound from 'use-sound';

// import child components
import Mouth from "./mouth/mouth";
import UpperTeeth from "./upperTeeth/upperTeeth";
import LowerTeeth from "./lowerTeeth/lowerTeeth";
import Button from "./button/button"
import GuessInput from "../GuessInput/GuessInput";

import {todaySound, identifier} from "../helpers/todaySound";

import removeAccents from "remove-accents";

import "./Main.css";

const Main = (props) => {

    const [munching, setMunching] = useState(false)
    const [choosedMenu, setChoosedMenu] = useState(null)

    const [play] = useSound(todaySound);

    const startOrStopMunch = () => {
        play();
        setMunching(!munching)
        setChoosedMenu(removeAccents(identifier))
    }

    console.log("Main rendering")

    if (munching) {
        setTimeout(() => {
            setMunching(false)
        }, 10000)
    }
    console.log(choosedMenu)

    
    return(
        <React.Fragment>
            <div className="MouthWrapper">
                <Mouth munching={munching}>
                    <UpperTeeth />
                    <LowerTeeth munching={munching} />
                </Mouth>
            </div>
            <Row className="StartMunchingButton" >
                <Button clicked={startOrStopMunch} munching={munching} />
            </Row>
            <GuessInput menu={choosedMenu} munching={munching}/>
        </React.Fragment>

    );
};

export default Main;