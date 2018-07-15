import { checkValidData } from '../../duck/utils';

describe('test check valid data', () => {
  it('Empty string will be returned if no errors', () => {
    expect(checkValidData({
      error1: '',
      error2: ''
    })).toEqual('')
  });

  it('An unemty string will be returned', () => {
    expect(checkValidData({
      error1: '',
      error2: 'Error'
    }).length).toBeGreaterThan(0)
  });
})