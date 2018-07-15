import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer, { duckMiddleWares, duckConstants, duckActions } from './duck';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {
  authStatus: duckConstants.authState.UNAUTHORIZED,
  user: {
    registerStatus: duckConstants.registerState.ANONYMOUS,
    credentials: {},
    infor: {}
  }
}

const store = createStore(
  rootReducer, 
  initialState,
  applyMiddleware(
    duckMiddleWares.submitValidationMiddleware, 
    duckMiddleWares.localSavingMiddleware,
    logger
  )
);

store.dispatch(duckActions.loadUser(initialState));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
