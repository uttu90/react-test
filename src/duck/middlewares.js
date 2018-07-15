import * as types from './types';
import { nextStep, validate } from './actions';
import { 
  validateAttribute, 
  checkValidData, 
  saveDataToLocalStorage, 
  getDataFromLocalStorage
} from './utils';

const localSavingMiddleware = ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case types.LOAD_USER:
      const user = getDataFromLocalStorage('auth');
      action.payload = user || action.payload;
      return next(action);

    case types.CONFIRM:
      let result = next(action);
      saveDataToLocalStorage('auth', getState());
      return result;

    case types.SIGN_OUT:
      localStorage.removeItem('auth');
      return next(action);

    default:
      return next(action);
  }
}

const submitValidationMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== types.SUBMIT_USER_DATA) {
    return next(action);
  }
  const field = action.meta;
  const { user } = getState();
  const errors = validateAttribute(field, user[field]);
  dispatch(validate(errors));
  if (!checkValidData(errors)) {
    dispatch(nextStep());
  }
}

export { submitValidationMiddleware, localSavingMiddleware };