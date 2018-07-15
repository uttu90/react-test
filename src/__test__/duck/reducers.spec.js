import { authReducer, userReducer, validateReducer } from '../../duck/reducers';
import { duckActions, duckConstants } from '../../duck';

const { authState, registerState } = duckConstants;

describe('test authState reducer', () => {
  it('The initiate state', () => {
    expect(authReducer(undefined, {})).toEqual(authState.UNAUTHORIZED)
  });

  it('register change authState to sign up', () => {
    expect(
      authReducer(
        authState.UNAUTHORIZED,
        duckActions.register()
      )).toEqual(authState.SIGNING_UP)
  });

  it('unregister change authState to unauthorized', () => {
    expect(
      authReducer(
        authReducer.SIGNING_UP,
        duckActions.unregister()
      )
    ).toEqual(authState.UNAUTHORIZED)
  })

  it('confirm change authState to authorized', () => {
    expect(
      authReducer(
        authReducer.SIGNING_UP,
        duckActions.confirm()
      )
    ).toEqual(authState.AUTHORIZED)
  });
})

describe('Testing user reducer', () => {
  it('The initial state', () => {
    expect(
      userReducer(
        undefined,
        {}
      )
    ).toEqual({})
  });

  it('Load user', () => {
    expect(
      userReducer(
        {},
        duckActions.loadUser({
          user: 'mock user'
        })
      )
    ).toEqual('mock user')
  });

  it('Test next action', () => {
    expect(
      userReducer(
        { registerStatus: registerState.REGISTERED },
        duckActions.nextStep()
      )).toEqual({
        registerStatus: registerState.UPDATED
      })
  });

  it('Test back action', () => {
    expect(
      userReducer(
        { registerStatus: registerState.REGISTERED },
        duckActions.lastStep()
      )).toEqual({
        registerStatus: registerState.ANONYMOUS
      })
  });

  it('Test update user credentials', () => {
    expect(
      userReducer(
        { credentials: {} },
        duckActions.updateUserData('credentials', { key: 'mock data' })
      )
    ).toEqual({
      credentials: { key: 'mock data' }
    })
  });

  it('Test update user infor', () => {
    expect(
      userReducer(
        { infor: {} },
        duckActions.updateUserData('infor', { key: 'mock data' })
      )
    ).toEqual({
      infor: { key: 'mock data' }
    })
  });

  it('Unregister make registerStatus to anymous', () => {
    expect(
      userReducer(
        {},
        duckActions.unregister()
      )
    ).toEqual({
      registerStatus: registerState.ANONYMOUS,
      infor: {},
      credentials: {}
    })
  });

  it('Sign out make registerStatus to anymous', () => {
    expect(
      userReducer(
        {},
        duckActions.signOut()
      )
    ).toEqual({
      registerStatus: registerState.ANONYMOUS,
      infor: {},
      credentials: {}
    })
  });
})

describe('test validate reducer', () => {
  it('Sign out clears the errors state', () => {
    expect(
      validateReducer(
        { key: 'mock error'},
        duckActions.signOut()
      )
    ).toEqual({})
  });

  it('Unregister clears the errors state', () => {
    expect(
      validateReducer(
        { key: 'mock error' },
        duckActions.unregister()
      )
    ).toEqual({})
  });

  it('validate action update errors state', () => {
    expect(
      validateReducer(
        { error1: 'mock error 1' },
        duckActions.validate({ 
          error1: 'mock error one',
          error2: 'mock error 2' 
        })
      )
    ).toEqual({
      error1: 'mock error one',
      error2: 'mock error 2'
    })
  });
})