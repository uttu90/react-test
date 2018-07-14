// action types for updating app state
const REGISTER = 'duck/auth/register';
const AUTHORIZE = 'duck/auth/authorize';
const SIGN_OUT = 'duck/auth/sign-out';
const LOAD_USER = 'duck/auth/load-user';

// action types for user signing state
const UPDATE_USER_DATA = 'duck/user/update-user-data';
const SUBMIT_USER_DATA = 'duck/user/submit-user-data';
const SET_USER_STATUS = 'duck/user/set-user-status';
const CONFIRM = 'duck/user/confirm-agreement';
const NEXT_STEP = 'duck/user/next-step';
const LAST_STEP = 'duck/user/last-step';

// action types for validate
const VALIDATE = 'duck/user/validate';

export {
  REGISTER,
  AUTHORIZE,
  SIGN_OUT,
  LOAD_USER,
  UPDATE_USER_DATA,
  SUBMIT_USER_DATA,
  CONFIRM,
  NEXT_STEP,
  LAST_STEP,
  SET_USER_STATUS,
  VALIDATE
}