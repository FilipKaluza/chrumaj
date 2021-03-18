import React, { useState } from 'react';
import Row from "antd/lib/row";
import useSound from 'use-sound';

// import child components
import Mouth from "./mouth/mouth";
import UpperTeeth from "./upperTeeth/upperTeeth";
import LowerTeeth from "./lowerTeeth/lowerTeeth";
import Button from "./button/button"
import GuessInput from "../GuessInput/GuessInput";

import Pear from '../../assets/sounds/pear.mp3';
import Apple from '../../assets/sounds/apple.mp3';
import Carrot from '../../assets/sounds/carrot.mp3';

import "./Main.css";

const Main = React.memo(props => {

    const [munching, setMunching] = useState(false)
    const [choosedMenu, setChoosedMenu] = useState("")

    const [Mrkva] = useSound(Carrot)
   
    const myMenu = [Mrkva]
    const myMenuString = ["Mrkva", "Jablko", "Hruška"]
    
    const startOrStopMunch = () => {
        const chooseMyMenu = 0 /* Math.floor(Math.random() * myMenuString.length) */
        let item = myMenu[chooseMyMenu];
        setMunching(!munching)
        item();
        setChoosedMenu(myMenuString[chooseMyMenu])
    }

    console.log("Main rendering")
    console.log(munching)

    if (munching) {
        setTimeout(() => {
            setMunching(false)
        }, 10000)
    }

    
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
});

export default Main;