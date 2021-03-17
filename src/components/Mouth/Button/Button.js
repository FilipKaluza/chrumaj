import React from 'react'

import classes from "./Button.module.css"


const Button = (props) => {

    let button = <button className={classes.Button}  onClick={props.clicked}> Chrúmať </button>
    if (props.munching) {
        button = <button className={classes.ButtonDisabled} disabled > Uhm mňamka </button>
    }
   
    return (
        <React.Fragment>
            {button}
        </React.Fragment>
    )
}

export default Button;