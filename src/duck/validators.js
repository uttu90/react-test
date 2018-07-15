const userValidators = {
  credentials: {
    first_name: validateName,
    last_name: validateName,
    email: validateEmail,
    password: validatePassword,
    account_type: validateEmpty
  },
  infor: {
    language: validateEmpty,
    country: validateEmpty,
    timezone: validateEmpty,
    birth_year: validateEmpty
  }
}

function validateEmpty(value='') {
  return value.length === 0 ? 'is required' : '';
}

function validateName(name='') {
  if (name.length === 0) return 'is required';
  if (name.length > 40) return 'is not longer than 40 chars';
  return '';
}

function validateEmail(email='') {
  if (email.length === 0) return 'is required';
  const [ emailName, domain = '' ] = email.split('@');

  return emailName.length === 0 || domain.length < 3 ? 'is invalid' : '';
}

function validatePassword(password='') {
  if (password.length === 0) return 'is required';
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])(?=.{8,})/;
  return !passwordReg.test(password) ? 'is invalid' : '';
}

export default userValidators;