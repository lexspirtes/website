import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js'
import './css/styles.css'
import { NavLink } from 'react-router-dom'

class App extends React.Component {
render() {
  return (
    <div className="Header">
      <h1></h1>
      <NavLink activeClassName="active" className="home" to="/">Home</NavLink>
      <NavLink className="search" to="/ceramics">Ceramics</NavLink>
      <NavLink className="coding" to="/coding">Coding</NavLink>
      <NavLink className="about" to="/about">About</NavLink>
    </div>
  );
}
}

export default App;
