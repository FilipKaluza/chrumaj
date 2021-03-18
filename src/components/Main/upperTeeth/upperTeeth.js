import React from 'react';
import Row from "antd/lib/row";


import Tooth from "../../../assets/images/zub.png"

import "./upperTeeth.css";


const UpperTeeth = (props) => {

    return (
        <Row className="UpperTeethWrapper">
            <img className="UpperTooth" src={Tooth} alt="UpperTooth" />
            <img className="UpperTooth" src={Tooth} alt="UpperTooth" />
            <img className="UpperTooth" src={Tooth} alt="UpperTooth" />
            <img className="UpperTooth" src={Tooth} alt="UpperTooth" />
            <img className="UpperTooth" src={Tooth} alt="UpperTooth" />
            <img className="UpperTooth" src={Tooth} alt="UpperTooth" />
        </Row>
    );
};

export default React.memo(UpperTeeth);