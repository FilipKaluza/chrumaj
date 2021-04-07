import React from 'react';

const RandomCharacter = (props) => {
    
    let randomCharacter = "Zobraziť náhodné písmeno" 
    if (props.show) {
        const menu = props.menu
        const randomCharacterNumber = Math.floor(Math.random() * menu.length )
        randomCharacter = "V slove sa nachádza písmeno " + menu[randomCharacterNumber]
    }

    return(
        <React.Fragment>
            <li className={props.classes} onClick={props.clicked}> {randomCharacter} </li>
        </React.Fragment>           
    );
};

export default RandomCharacter;