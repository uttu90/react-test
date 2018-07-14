import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer, { duckMiddleWares, duckConstants } from './duck';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
  applyMiddleware(duckMiddleWares.validationMiddleware, logger),
  initialState
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
