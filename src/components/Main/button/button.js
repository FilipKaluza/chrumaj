import React from 'react'

import "./button.css"


const Button = (props) => {

    console.log("Button start munching rendering")

    let button = <button className="Button"  onClick={props.clicked}> Chrúmať </button>
    if (props.munching) {
        button = <button className="ButtonDisabled" disabled > Uhm mňamka </button>
    }
   
    return (
        <React.Fragment>
            {button}
        </React.Fragment>
    )
}

export default Button;