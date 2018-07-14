import { combineReducer } from 'redux';
import * as types from './types';
import { authState, signingState } from './constants';

function authReducer(state, action) {
  switch (action.type) {
    case types.REGISTER:
      return authState.SIGNING_UP;
    
    case types.CONFIRM:
      return authState.AUTHORIZED;  

    case types.LOAD_USER:
      return action.payload.authStatus;
    
    case types.SIGN_OUT:
      return authState.UNAUTHORIZED
    
    default:
      return state;
  }
}

function userReducer(state, action) {
  const signUpStrategies = [
    signingState.GET_STARTED, 
    signingState.REGISTERED, 
    signingState.UPDATED
  ];
  const signUpIndex = signUpStrategies.indexOf(state.authStatus);
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
    
    case types.CONFIRM:
      return {
        ...state,
        registerStatus: action.payload
      }

    case types.UPDATE_USER:
      return {
        ...state,
        [action.meta]: {
          ...state[action.meta],
          ...action.payload
        }
      }
    
    case types.LOAD_USER:
      return action.payload.user;
      
    default:
      return state;
  }
}

function validateReducer(state = {}, action) {
  if (action.type === types.VALIDATE) {
    return {
      ...state,
      [action.meta]: {
        ...state[action.meta],
        ...action.payload
      }
      
    }
  }
  return state;
}


const rootReducer = combineReducer({
  authStatus: authReducer,
  user: userReducer,
  errors: validateReducer
})

export default rootReducer;
