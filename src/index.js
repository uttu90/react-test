import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer, { duckMiddleWares, duckConstants } from './duck';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {
  authStatus: duckConstants.authState.UNAUTHORIZED,
  user: {
    registerStatus: duckConstants.signingState.GET_STARTED,
    credentials: {},
    infor: {}
  }
}

const store = createStore(
  rootReducer, 
  initialState,
  applyMiddleware(duckMiddleWares.submitValidationMiddleware, logger)
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
