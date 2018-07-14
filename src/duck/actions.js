import * as types from './types';
import { signingState } from './constants';

export function register() {
  return {
    type: types.REGISTER
  }
}

export function loadUser() {
  return {
    type: types.LOAD_USER
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
    type: types.UPDATE_USER_DATA
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

export function confirm(accepted = true) {
  return {
    type: types.CONFIRM,
    payload: accepted ? signingState.ACCEPTED : signingState.UNACCEPTED
  }
}

export function validate(field, errors) {
  return {
    type: types.VALIDATE,
    meta: field,
    payload: errors
  }
}