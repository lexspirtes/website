import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home.js'
import Ceramics from './components/ceramics.js'
import Coding from './components/coding.js'
import About from './components/about.js'



class Page extends React.Component {
  componentDidMount() {
    document.title = this.props.title
  }
  render() {
    const PageComponent = this.props.component
    return (
      <PageComponent />
    )
  }
}

const routing = (
  <Router>
    <div>
      <Route path="/" render={props => ( <Page {...props} component={App}/>)}/>
      <Route exact path="/" render={props =>
        ( <Page {...props} component={Home} title="Home – Lex Spirtes"/>)}/>
      <Route path="/ceramics" render={props =>
        ( <Page {...props} component={Ceramics} title="Ceramics – Lex Spirtes"/>)} />
      <Route path="/about" render={props =>
        ( <Page {...props} component={About} title="About – Lex Spirtes"/>)}/>
      <Route path="/coding" render={props =>
        ( <Page {...props} component={Coding} title="Coding – Lex Spirtes"/>)} />

    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
