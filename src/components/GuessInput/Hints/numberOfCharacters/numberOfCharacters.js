import React from 'react';

const NumberOfCharacters = (props) => {

    let numberOfCharacters = "Zobraziť dĺžku slova"
    if (props.show) {
        numberOfCharacters = "Slovo je dlhé " + props.menu.length + " písmen";
    }

    return(
        <React.Fragment>
            <li className={props.classes} onClick={props.clicked}> {numberOfCharacters} </li>
        </React.Fragment>           
    );
};

export default NumberOfCharacters;




