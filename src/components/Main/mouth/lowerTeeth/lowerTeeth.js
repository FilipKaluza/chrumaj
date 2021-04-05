import React from 'react';
import Row from "antd/lib/row";


import Tooth from "../../../../assets/images/zub.png"

import "./lowerTeeth.css";


const LowerTeeth = (props) => {

    let lowerTeethCssClass = ["LowerTooth"]

    if (props.munching) {
        lowerTeethCssClass.push("LowerMunching")
    }

    const ToothRow = <img className={lowerTeethCssClass.join(" ")} src={Tooth} alt="LowerTooth" />

    return (
        <Row className="LowerTeethWrapper">
            {ToothRow}
            {ToothRow}
            {ToothRow}
            {ToothRow}
        </Row>
    );
};

export default LowerTeeth;