import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home.js'
import Ceramics from './components/ceramics.js'
import Coding from './components/coding.js'
import About from './components/about.js'


const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Coding} />
      <Route path="/ceramics" component={Ceramics} />
      <Route path="/about" component={About} />
      <Route path="/coding" component={Coding} />

    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
