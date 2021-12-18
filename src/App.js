import React, { Component, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/SideNavnew'
import RecipeSearch from './components/RecipeSearch';
import NutritionData from './components/NutritionData';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Profile from './components/profile'
import Aboutus from './components/Aboutus';
import Page404 from './components/Page404';
import RecipeCard from './components/RecipeCard';
import ItemCard from './components/ItemCard';
import ProtectedRoute from './Auth/protectedRoute';
import Auth0ProviderWithHistory from "./Auth/auth0-provider-with-history";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App (props) {
  
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  // useEffect() {
  //   callAPI()
  // }

  
    return (
      <div className="App">
        {/* <p className="App-Intro">{this.state.apiResponse}</p> */}
        
        <Router>
        <Auth0ProviderWithHistory>
        <Navbar />{" "}
        <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <ProtectedRoute path="/search">
              <RecipeSearch/>
            </ProtectedRoute>
            <ProtectedRoute path="/favorite">
              <Favorite/>
            </ProtectedRoute>
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
            <ProtectedRoute path="/profile">
              <Profile/>
            </ProtectedRoute>
          </Switch>
          </Auth0ProviderWithHistory>
        </Router>
        
      </div>
    );
  
}

  export default App;
