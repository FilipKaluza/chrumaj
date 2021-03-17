import React from 'react'
import classes from './App.module.css';

// import components
import Mouth from "./components/Mouth/Mouth";

const App = () => {
  return (

    <div className={classes.App}>
      <Mouth />
    </div>
  );
}

export default App;
