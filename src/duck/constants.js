// auth states
const authState =  {
  UNAUTHORIZED : 'unauthorized',
  SIGNING_UP: 'signing-up',
  AUTHORIZED: 'authorized'
}

// signing states
const registerState = {
  ANONYMOUS: 'anonymous',
  REGISTERED: 'registered',
  UPDATED: 'updated',
  ACCEPTED: 'accepted',
  UNACCEPTED: 'unaccepted',
  CONFIRMED: 'confirmed'
}

export {
  authState,
  registerState
}

