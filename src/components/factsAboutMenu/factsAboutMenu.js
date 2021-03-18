import React from 'react';

import "./factsAboutMenu.css";

const FactsAboutMenu = (props) => {

    console.log("Rendering facts")

    const Facts = ["Najbohatší zdroj betakaroténov.", "Odborníci preferujú jej varenú formu", "Pravidelná konzumácia mrkvy pomáha očiam", "Konzumácia zmenšuje pravdepodobnosť rakoviny pečene"
    , "Spomaľuje starnutie buniek", "Schopnosť prevencie pred infekciou", "Prevencia srdcovo-cievnych ochorení", "Počas hryzenia mrkvy Vám mrkva cistí zuby a ďasná"]

    const listOfFacts = <ul className="ListOfFacts"> { Facts.map(Fact => <li key={Math.floor(Math.random() * 100)} > {Fact} </li> ) } </ul>


    return(
        <section id="factsAboutMenu">
            {listOfFacts}
        </section>
    );
};

export default React.memo(FactsAboutMenu);