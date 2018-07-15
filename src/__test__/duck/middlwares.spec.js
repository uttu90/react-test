import configureMockStore from 'redux-mock-store';
import { duckMiddleWares, duckActions, duckTypes } from '../../duck';

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