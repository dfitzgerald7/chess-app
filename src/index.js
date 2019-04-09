import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer"
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render((
  <Router >
      <Provider store={store} >
          <App />
      </Provider>
  </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
