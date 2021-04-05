import React from 'react';

// imporch child components
import UpperTeeth from "./upperTeeth/upperTeeth";
import LowerTeeth from "./lowerTeeth/lowerTeeth";

import "./mouth.css";

const Mouth = (props) => {

    let mouthCssClass = ["Mouth"]

    if (props.munching) {
        mouthCssClass.push("MouthMunching")

    }

    return (
        <div className="MouthWrapper">
            <div className={mouthCssClass.join(" ")} > 
                <UpperTeeth />
                <LowerTeeth {...props} />
            </div>
        </div>

    );
};

export default React.memo(Mouth);