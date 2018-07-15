import configureMockStore from 'redux-mock-store';
import { duckMiddleWares, duckActions, duckConstants } from '../../duck';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../duck/utils'

const middlewares = [
  duckMiddleWares.localSavingMiddleware, 
  duckMiddleWares.submitValidationMiddleware
];
const mockStore = configureMockStore(middlewares);

describe('testing validate middleware', () => {
  it('Expect calling validate when submit data', () => {
    const store = mockStore({
      user: {
        credentials: {
          first_name: '', // Empty name
          last_name: 'Name',
          email: 'abc', // Invalid email
          password: 'Name', // Invalid password
          account_type: 'Name',
        }
      }
    });
    store.dispatch(duckActions.submitUserData('credentials'));
    expect(store.getActions()).toEqual([duckActions.validate({
      first_name: 'is required',
      last_name: '',
      email: 'is invalid',
      password: 'is invalid',
      account_type: ''
    })]);
  });

  it('Successfull submit data will call nextStep', () => {
    const store = mockStore({
      user: {
        credentials: {
          first_name: 'Name',
          last_name: 'Name',
          email: 'abc@example.com',
          password: '1@Abcljla', // Invalid password
          account_type: 'Teacher',
        }
      }
    });
    store.dispatch(duckActions.submitUserData('credentials'));
    expect(store.getActions()).toEqual([
      duckActions.validate({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        account_type: ''
      }),
      duckActions.nextStep()
    ]);
  });
})

describe('Test localStorage middleware', () => {
  it('Expect load data', () => {
    const store = mockStore({});

    // when there is nothing in localstorage: the original payload 
    //is kept

    store.dispatch(duckActions.loadUser({ key: 'mock state'}));
    expect(store.getActions()[0].payload).toEqual({ key: 'mock state' });

    // when there is something store in localstorage:
    const currentState = {
      authStatus: duckConstants.authState.AUTHORIZED,
      user: {
        registerStatus: duckConstants.registerState.UPDATED,
        infor: {},
        credentials: {}
      },
      errors: {}
    }
    saveDataToLocalStorage('auth', currentState);
    expect(getDataFromLocalStorage('auth')).toEqual(currentState);

    store.dispatch(duckActions.loadUser({ key: 'mock state'}));
    // The payload will be changed if there is sth stored in local
    expect(getDataFromLocalStorage('auth')).toEqual(currentState);
  });

  it('Expect store data when confirm', () => {
    // The state after dispatching confirm
    const store = mockStore({
      authStatus: duckConstants.authState.AUTHORIZED,
      user: {
        registerStatus: duckConstants.registerState.UPDATED,
        infor: {},
        credentials: {}
      },
      errors: {}
    });

    store.dispatch(duckActions.confirm());

    expect(getDataFromLocalStorage('auth')).toEqual({
      authStatus: duckConstants.authState.AUTHORIZED,
      user: {
        registerStatus: duckConstants.registerState.UPDATED,
        infor: {},
        credentials: {}
      },
      errors: {}
    })
  })

  it('Expect remove data when sign out', () => {
    const currentState = {
      authStatus: duckConstants.authState.AUTHORIZED,
      user: {
        registerStatus: duckConstants.registerState.UPDATED,
        infor: {},
        credentials: {}
      },
      errors: {}
    }

    saveDataToLocalStorage('auth', currentState);
    expect(getDataFromLocalStorage('auth')).toEqual(currentState);

    const store = mockStore(currentState);
    store.dispatch(duckActions.signOut());
    expect(getDataFromLocalStorage('auth')).toEqual();
  })
})