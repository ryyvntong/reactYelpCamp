import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import LandingPage from './containers/landingPage'
import Campgrounds from './containers/campgroundsPage'
import {Route, Switch, Redirect} from 'react-router-dom'


function App() {
  let routes=(
    <Switch>
      <Route path="/campgrounds" component={Campgrounds}></Route>
      <Route exact path="/" component={LandingPage}></Route>
      <Redirect to="/"></Redirect>
      </Switch>
    );
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        {routes}
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
