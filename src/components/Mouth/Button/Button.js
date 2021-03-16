import React from 'react'

import classes from "./Button.module.css"

import Pear from '../../../assets/sounds/pear.mp3';
import Apple from '../../../assets/sounds/apple.mp3';
import Carrot from '../../../assets/sounds/carrot.mp3';


const Button = (props) => {


    return (
        <button className={classes.Button} onClick={props.clicked}>{props.munching ? "Uhm, mňamka" : "Chrúmať"}</button>
    )
}

export default Button