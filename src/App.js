import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/SideNavnew'
import RecipeSearch from './components/RecipeSearch';
import NutritionData from './components/NutritionData';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Aboutus from './components/Aboutus';
import Page404 from './components/Page404';
import RecipeCard from './components/RecipeCard';
import ItemCard from './components/ItemCard';
import Registration from '../src/components/Registration';
import Auth0ProviderWithHistory from "./Auth/auth0-provider-with-history";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render () {
    return (
      <div className="App">
        {/* <p className="App-Intro">{this.state.apiResponse}</p> */}
        
        <Router>
        <Auth0ProviderWithHistory>
        <Navbar />{" "}
        <Sidebar />
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/search">
              <RecipeSearch/>
            </Route>
            <Route path="/favorite">
              <Favorite/>
            </Route>
            <Route path="/404">
              <Page404/>
            </Route>
            <Route path="/nutrition">
              <NutritionData/>
            </Route>
            <Route path="/aboutus">
              <Aboutus/>
            </Route>
            <Route path="/recipe">
              <RecipeCard/>
            </Route>
            <Route path="/solo">
              <ItemCard/>
            </Route>
            <Route path="/registration">
              <Registration/>
            </Route>
          </Switch>
          </Auth0ProviderWithHistory>
        </Router>
        
      </div>
    );
  }
}

  export default App;
