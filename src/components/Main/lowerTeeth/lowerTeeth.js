import React from 'react';
import Row from "antd/lib/row";


import Tooth from "../../../assets/images/zub.png"

import "./lowerTeeth.css";


const LowerTeeth = (props) => {

    let lowerTeethCssClass = ["LowerTooth"]

    if (props.munching) {
        lowerTeethCssClass.push("LowerMunching")
    }


    return (
        <Row className="LowerTeethWrapper">
            <img className={lowerTeethCssClass.join(" ")} src={Tooth} alt="LowerTooth" />
            <img className={lowerTeethCssClass.join(" ")} src={Tooth} alt="LowerTooth" />
            <img className={lowerTeethCssClass.join(" ")} src={Tooth} alt="LowerTooth" />
            <img className={lowerTeethCssClass.join(" ")} src={Tooth} alt="LowerTooth" />
            <img className={lowerTeethCssClass.join(" ")} src={Tooth} alt="LowerTooth" />
            <img className={lowerTeethCssClass.join(" ")} src={Tooth} alt="LowerTooth" />
        </Row>
    );
};

export default React.memo(LowerTeeth);