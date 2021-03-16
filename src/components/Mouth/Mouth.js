import React, {useState } from 'react';
import Row from "antd/lib/row";
import useSound from 'use-sound';

// import child components
import Button from "./Button/Button"

import Tooth from "../../assets/images/zub.png"

import Pear from '../../assets/sounds/pear.mp3';
import Apple from '../../assets/sounds/apple.mp3';
import Carrot from '../../assets/sounds/carrot.mp3';

import "./Mouth.css";

const Mouth = (props) => {

    const [munching, setMunching] = useState(false)

    const [carrot] = useSound(Carrot)
    const [apple] = useSound(Carrot)
    const [pear] = useSound(Carrot)

    const array = [carrot, apple, pear]

    let item = array[Math.floor(Math.random() * array.length)];

    const startOrStopMunch = () => {
        setMunching(!munching)
        item();
    }

    let MouthClasses = {
        UpperTooth: ["UpperTooth"],
        LowerTooth: ["LowerTooth"]
    }

    if (munching) {
        MouthClasses.UpperTooth.push("UpperMunching")
        MouthClasses.LowerTooth.push("LowerMunching")
        setTimeout(() => {
            setMunching(false)
        }, 10000)
    } 

    return(
        <div className="Mouth" >
            <Row className="UpperTeethWrapper">
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
            </Row>
            <Row className="StartMunchingButton" >
                <Button clicked={startOrStopMunch} munching={munching} />
            </Row>
        </div>
    );
};

export default Mouth;