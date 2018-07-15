import { combineReducers } from 'redux';
import * as types from './types';
import { authState, registerState } from './constants';

function authReducer(state=authState.UNAUTHORIZED, action) {
  switch (action.type) {
    case types.REGISTER:
      return authState.SIGNING_UP;
    
    case types.CONFIRM:
      return authState.AUTHORIZED;  

    case types.LOAD_USER:
      return action.payload.authStatus;
    
    case types.UNREGISTER:
    case types.SIGN_OUT:
      return authState.UNAUTHORIZED
    
    default:
      return state;
  }
}


const signUpStrategies = [
  registerState.ANONYMOUS,
  registerState.REGISTERED,
  registerState.UPDATED,
];

function userReducer(state={}, action) {
  const signUpIndex = signUpStrategies.indexOf(state.registerStatus);
  switch (action.type) {
    case types.NEXT_STEP:
      return {
        ...state,
        registerStatus: signUpStrategies[signUpIndex + 1]
      }
    
    case types.LAST_STEP:
      return {
        ...state,
        registerStatus: signUpStrategies[signUpIndex - 1]
      }
    
    case types.UPDATE_USER_DATA:
      return {
        ...state,
        [action.meta]: {
          ...state[action.meta],
          ...action.payload
        }
      }
    
    case types.LOAD_USER:
      return action.payload.user;
    
    case types.UNREGISTER:
    case types.SIGN_OUT:
      return {
        registerStatus: registerState.ANONYMOUS,
        credentials: {},
        infor: {}
      };
      
    default:
      return state;
  }
}

function validateReducer(state = {}, action) {
  switch (action.type) {
    case types.VALIDATE:
      return {
        ...state,
        ...action.payload
      };
    
    case types.UNREGISTER:
    case types.SIGN_OUT:
      return {};
  
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  authStatus: authReducer,
  user: userReducer,
  errors: validateReducer
})

export default rootReducer;
