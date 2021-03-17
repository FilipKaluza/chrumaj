import React, {useState, useEffect } from 'react';
import Row from "antd/lib/row";
import useSound from 'use-sound';

// import child components
import Button from "./Button/Button"
import GuessInput from "../GuessInput/GuessInput";

import Tooth from "../../assets/images/zub.png"

import Pear from '../../assets/sounds/pear.mp3';
import Apple from '../../assets/sounds/apple.mp3';
import Carrot from '../../assets/sounds/carrot.mp3';

import "./Mouth.css";

const Mouth = React.memo(props => {

    const [munching, setMunching] = useState(false)
    const [choosedMenu, setChoosedMenu] = useState("")

    const [Mrkva] = useSound(Carrot)
    const [Jablko] = useSound(Apple)
    const [Hruška] = useSound(Pear)

    const myMenu = [Mrkva, Jablko, Hruška]
    const myMenuString = ["Mrkva", "Jablko", "Hruška"]
    
    const startOrStopMunch = () => {
        const chooseMyMenu = Math.floor(Math.random() * myMenuString.length)
        let item = myMenu[chooseMyMenu];
        setMunching(!munching)
        item();
        setChoosedMenu(myMenuString[chooseMyMenu])
    }

    console.log("Mouth rendering")
    console.log(munching)

    let MouthClasses = {
        UpperTooth: ["UpperTooth"],
        LowerTooth: ["LowerTooth"],
        Mouth: ["Mouth"]
    }

    if (munching) {
        MouthClasses.LowerTooth.push("LowerMunching")
        MouthClasses.Mouth.push("MouthMunching")
        setTimeout(() => {
            setMunching(false)
        }, 10000)
    }

    

    return(
        <React.Fragment>
            <div className="MouthWrapper">
                <div className={MouthClasses.Mouth.join(" ")} >
                    <Row className="UpperTeethWrapper">
                        <img className={MouthClasses.UpperTooth.join(" ")} src={Tooth} alt="UpperTooth" />
                        <img className={MouthClasses.UpperTooth.join(" ")} src={Tooth} alt="UpperTooth" />
                        <img className={MouthClasses.UpperTooth.join(" ")} src={Tooth} alt="UpperTooth" />
                        <img className={MouthClasses.UpperTooth.join(" ")} src={Tooth} alt="UpperTooth" />
                        <img className={MouthClasses.UpperTooth.join(" ")} src={Tooth} alt="UpperTooth" />
                        <img className={MouthClasses.UpperTooth.join(" ")} src={Tooth} alt="UpperTooth" />
                    </Row>
                    <Row className="LowerTeethWrapper">
                        <img className={MouthClasses.LowerTooth.join(" ")} src={Tooth} alt="LowerTooth" />
                        <img className={MouthClasses.LowerTooth.join(" ")} src={Tooth} alt="LowerTooth" />
                        <img className={MouthClasses.LowerTooth.join(" ")} src={Tooth} alt="LowerTooth" />
                        <img className={MouthClasses.LowerTooth.join(" ")} src={Tooth} alt="LowerTooth" />
                        <img className={MouthClasses.LowerTooth.join(" ")} src={Tooth} alt="LowerTooth" />
                        <img className={MouthClasses.LowerTooth.join(" ")} src={Tooth} alt="LowerTooth" />

                    </Row>
                </div>
            </div>
            <Row className="StartMunchingButton" >
                <Button clicked={startOrStopMunch} munching={munching} />
            </Row>
            <GuessInput menu={choosedMenu} munching={munching}/>
        </React.Fragment>

    );
});

export default Mouth;