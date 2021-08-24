import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hero from "./Hero";
import ShortlyLogo from "../images/logo.svg"

const Header = () => {
	return (
			<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><img src={ShortlyLogo} alt="shortly_logo" /></Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Hero />
          </Route>
          <Route path="/features">
            <Hero />
          </Route>
          <Route path="/pricing">
            <Hero />
          </Route>
          <Route path="/resources">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
	)
}

export default Header
