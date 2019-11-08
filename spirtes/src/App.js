import React from 'react';
import logo from './logo.svg';
import Home from './components/home.js'
import './css/styles.css'
import { NavLink } from 'react-router-dom'
import Lex from './assets/images/lex3.png'

class App extends React.Component {
render() {
  return (
    <div className="Header">
      <div className="headDiv">
        <img className="headerImage" src={Lex} alt="lex"/>
      </div>
      <div className="NavBox">
        <NavLink exact={true} activeClassName="active" className="home" to="/">HOME</NavLink>
        <NavLink activeClassName="active" className="search" to="/ceramics">CERAMICS</NavLink>
        <NavLink activeClassName="active" className="coding" to="/coding">CODING</NavLink>
        <NavLink activeClassName="active" className="about" to="/about">ABOUT</NavLink>
      </div>
    </div>
  );
}
}

export default App;
