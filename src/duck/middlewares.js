import * as types from './types';
import { nextStep, validate } from './actions';
import validateAttribute, { checkValidData } from './utils';

const submitValidationMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== types.SUBMIT_USER_DATA) {
    return next(action);
  }
  const { field } = action.meta;
  const { user } = getState();
  const errors = validateAttribute(user[field]);
  if (checkValidData(errors)) {
    localStorage.setItem('auth', getState());
    dispatch(nextStep());
  } else {
    dispatch(validate(errors));
  }
}

export { validationMiddleware };