import React from 'react';
import Row from "antd/lib/row";


import Tooth from "../../../../assets/images/zub.png"

import "./upperTeeth.css";


const UpperTeeth = (props) => {

    const ToothRow = <img className="UpperTooth" src={Tooth} alt="UpperTooth" />

    return (
        <Row className="UpperTeethWrapper">
            {ToothRow}
            {ToothRow}
            {ToothRow}
        </Row>
    );
};

export default UpperTeeth;