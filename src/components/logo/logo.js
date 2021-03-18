import React from 'react';

import "./logo.css"


const Logo = (props) => {
    console.log("LOgo rendering")

    return(
        <React.Fragment>
            <h1 className="Logo">
                Chrumaj.sk
            </h1>
        </React.Fragment>
    );
};

export default Logo;