import { 
  validateEmpty, 
  validateEmail, 
  validateName, 
  validatePassword 
} from '../../duck/validators';

describe('test validate empty', () => {
  it('undefined is not accepted', () => {
    expect(validateEmpty(undefined)).toEqual('is required')
  });

  it('Empty string is not accepted', () => {
    expect(validateEmpty('')).toEqual('is required')
  });

  it('A string without zero length is accepted', () => {
    expect(validateEmpty('mock')).toEqual('')
  });
})

describe('test validate name', () => {
  it('undefined is not accepted', () => {
    expect(validateName(undefined)).toEqual('is required')
  });

  it('Empty string is not accepted', () => {
    expect(validateName('')).toEqual('is required')
  });

  it('Accepted string is not loner than 40', () => {
    expect(validateName('Brad pitt')).toEqual('')
  });

  it('A very long string is invalid', () => {
    expect(validateName('This is very long sentence that may be longer than 40 in length')
    ).toEqual('is not longer than 40 chars')
  })
})

describe('test validate email', () => {
  it('undefined is not accepted', () => {
    expect(validateEmail(undefined)).toEqual('is required')
  });

  it('Empty string is not accepted', () => {
    expect(validateEmail('')).toEqual('is required')
  });

  it('Email without @ is unaccepted', () => {
    expect(validateEmail('dummyEmail')).toEqual('is invalid')
  });

  it('Email without name is unaccepted', () => {
    expect(validateEmail('@example.com')).toEqual('is invalid')
  });

  it('Email domain must be longer than 3', () => {
    expect(validateEmail('abc@ex')).toEqual('is invalid')
  });

  it('Accepted email', () => {
    expect(validateEmail('example@domain.com')).toEqual('')
  });
})

describe('test validate password', () => {
  it('undefined is not accepted', () => {
    expect(validatePassword(undefined)).toEqual('is required')
  });

  it('Empty string is not accepted', () => {
    expect(validatePassword('')).toEqual('is required')
  });

  it('The password should be longer than 8', () => {
    expect(validatePassword('1@Ac')).toEqual('is invalid')
  });

  it('The valid password', () => {
    expect(validatePassword('1#Abcdlkjl')).toEqual('')
  });
})