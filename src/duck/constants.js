// app states
const UNAUTHORIZED = 'unauthorized';
const SIGNING_UP = 'signing-up';
const AUTHORIZED = 'authorized';

const authState =  {
  UNAUTHORIZED,
  SIGNING_UP,
  AUTHORIZED
}

// signing states
const GET_STARTED = 'get-started';
const REGISTERED = 'registered';
const UPDATED = 'updated';
const ACCEPTED = 'accepted';
const UNACCEPTED = 'unaccepted';
const CONFIRMED = 'confirmed';

const signingState = {
  GET_STARTED,
  REGISTERED,
  UPDATED,
  ACCEPTED,
  UNACCEPTED,
  CONFIRMED
}

export {
  authState,
  signingState
}

