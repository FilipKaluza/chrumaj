import React from 'react';
import { HeartOutlined } from "@ant-design/icons";

import "./footer.css";

const Footer = () => {

    const firstPart = "<Kaluza."
    const secondPart = "DEV />"

    return(
        <div id="Footer" >
            <p className="FooterDescription"> Stránka vyhotovená zo <HeartOutlined /> k chrúmaniu od</p>
            <a href="https://kaluza.dev" className="LogoFooter">
                <p className="FirstPartLogo"> {firstPart} </p> <p className="SecondPartLogo"> {secondPart} </p>
            </a>
            <p className="Copyright" >  © 2021 Filip Kaluža  </p>
        </div>
    );
};

export default Footer;