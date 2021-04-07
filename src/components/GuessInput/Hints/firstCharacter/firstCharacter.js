import React from 'react';

const FirstLetter = (props) => {

    let firstCharacter = "Zobraziť prvé písmeno"
    if (props.show) {
        firstCharacter = "Prvé písmeno je " + props.menu[0]
    }

    return(
        <React.Fragment>
            <li className={props.classes} onClick={props.clicked}> {firstCharacter} </li>
        </React.Fragment>           
    );
};

export default FirstLetter;
