import React from 'react';

import "./mouth.css";

const Mouth = (props) => {

    let mouthCssClass = ["Mouth"]

    if (props.munching) {
        mouthCssClass.push("MouthMunching")

    }

    return (
        <div className={mouthCssClass.join(" ")} > 
            {props.children}
        </div>
    );
};

export default React.memo(Mouth);