import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from "./components/Container/index";
import {Provider} from "react-redux";

import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunkMiddleware)));

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Container />
        </div>
      </Provider>
  );
}

export default App;

//TODO: client-server model, TCP/IP, HTTP verbs, Http requests, HTTP/HTTPS, Rest API
//TODO: Install postgresql
//TODO: Handle Express, Express MVC, JWT Auth,