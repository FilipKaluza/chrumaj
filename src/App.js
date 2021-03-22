import React from 'react'
import "./App.css"

// import components
import Logo from "./components/logo/logo";
import Eyes from "./components/eyes/eyes";
import Main from "./components/Main/Main";
import Footer from "./components/footer/footer";

const App = () => {

  return (
    <React.Fragment>
      <div className="App">
        <Logo />
        <Eyes />
        <Main />
      </div>
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
