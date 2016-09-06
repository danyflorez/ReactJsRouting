import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link , IndexRoute,hashHistory} from 'react-router';
import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails'
import ServerError from './ServerError'

class App extends Component {
  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link activeClassName="active" to="/about">About</Link></li>
            <li><Link activeClassName="active" to="/repos">Repos</Link></li>
          </ul>
        </menu>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} title="About Us"/>
      <Route path="repos" component={Repos}>
        <Route path="/repo/:repo_name" component={RepoDetails} />
      </Route>
      <Route path="error" component={ServerError}/>  
    </Route>
  </Router>
), document.getElementById('root'));
