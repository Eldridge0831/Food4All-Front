import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './Redux/reducers/rootReducer';
import { createStore } from "redux";
import Auth0ProviderWithHistory from './Auth/auth0-provider-with-history';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


const store = createStore (rootReducer);

render (
  <Provider store={store}>
    
    <App />
    
  </Provider>,
  document.getElementById('root')
)