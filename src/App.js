import React from 'react'
import classes from './App.module.css';

// import components
import Logo from "./components/logo/logo";
import Eyes from "./components/eyes/eyes";
import Main from "./components/Main/Main";

const App = () => {
  return (

    <div className={classes.App}>
      <Logo />
      <Eyes />
      <Main />
    </div>
  );
}

export default App;
