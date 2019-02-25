import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer"
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeWithDevTools({
    name: `Redux`,
    realtime: true,
    trace: true,
    traceLimit: 25
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
