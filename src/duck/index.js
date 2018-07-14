import rootReducer from './reducers';
import * as duckTypes from './types';
import * as duckActions from './actions';
import * as duckMiddleWares from './middlewares';
import * as duckConstants from './constants';

export {
  duckActions,
  duckTypes,
  duckMiddleWares,
  duckConstants
}

export default rootReducer;