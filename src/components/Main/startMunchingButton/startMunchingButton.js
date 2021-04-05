import React from 'react'
import Row from "antd/lib/row";

import "./startMunchingButton.css"

const Button = (props) => {

    let button = <button className="Button"  onClick={props.clicked}> Chrúmať </button>
    if (props.munching) {
        button = <button className="ButtonDisabled" disabled > Uhm mňamka </button>
    }
   
    return (
        <Row className="StartMunchingButton" >
            {button}
        </Row>
    )
}

export default React.memo(Button);