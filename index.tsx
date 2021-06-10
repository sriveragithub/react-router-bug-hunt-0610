import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";

import Home from './components/Home.tsx';
import Blog from './components/Blog.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact';
import Error from './components/Error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <div>
            <nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route  path="*">
              <Error />
            </Route>
          </Switch>
      </div>
  );
}
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
