const userValidators = {
  first_name: validateName,
  last_name: validateName,
  email: validateEmail,
  password: validatePassword
}

function validateName(name='') {
  return name.length === 0 || name.length > 40;
}

function validateEmail(email='') {
  const domain = email.split('@')[1] || '';
  return domain.length > 3;
}

function validatePassword(password='') {
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%])(?=.{8,})/;
  return !passwordReg.test(password);
}

export default userValidators;