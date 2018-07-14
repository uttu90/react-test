import userValidators from './validators';

function validateAttribute(data) {
  return Object.keys(data).reduce((errors, attribute) => {
    errors[attribute] = validators[attribute](data[attribute]);
  }, {})
}

export function checkValidData(errors) {
  return !Object.keys(errors).reduce((valid, error) => {
    return valid || error;
  }, false)
}

export default validateAttribute;