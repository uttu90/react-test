import userValidators from './validators';

function validateAttribute(field, data) {
  const validators = userValidators[field];
  return Object.keys(validators).reduce((errors, attribute) => {
    errors[attribute] = validators[attribute](data[attribute]);
    return errors;
  }, {})
}

export function checkValidData(errors) {
  return Object.keys(errors).reduce((valid, key) => {
    return valid || errors[key];
  }, false)
}

export default validateAttribute;