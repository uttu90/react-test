import * as types from './types';

export function register() {
  return {
    type: types.REGISTER
  }
}

export function unregister() {
  return {
    type: types.UNREGISTER
  }
}

export function loadUser(initState) {
  return {
    type: types.LOAD_USER,
    payload: initState
  }
}

export function signOut() {
  return {
    type: types.SIGN_OUT
  }
}

export function submitUserData(field) {
  return {
    type: types.SUBMIT_USER_DATA,
    meta: field
  }
}

export function updateUserData(field, value) {
  return {
    type: types.UPDATE_USER_DATA,
    meta: field,
    payload: value
  }
}

export function nextStep() {
  return {
    type: types.NEXT_STEP
  }
}

export function lastStep() {
  return {
    type: types.LAST_STEP
  }
}

export function confirm(confirmation) {
  return {
    type: types.CONFIRM,
    payload: confirmation
  }
}

export function validate(errors) {
  return {
    type: types.VALIDATE,
    payload: errors
  }
}