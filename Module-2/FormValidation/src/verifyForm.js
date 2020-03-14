const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGTH = 8;

const verifyNameLength = name => name.length >= MIN_NAME_LENGTH;
const verifyInNameSigns = name => !name.match(/\W+/);
const ifEmail = email => email.includes('@');
const emailHasDomain = email => !!email.match(/@\w+[.]\w+/);
const checkPasswordLength = password => password.length >= MIN_PASSWORD_LENGTH;
const ifPasswordUpperCase = password => password != password.toLowerCase();
const ifPasswordHasNumber = password => !!password.match(/\d+/);
const verifyInPasswordSigns = password => !!password.match(/\W+/);
const verifyConfirm = (confirm, password) => {
  return password === confirm && password !== undefined && password !== '';
};
const ifRODOBoolean = rodoBtn => typeof rodoBtn === 'boolean';

export {
  verifyNameLength,
  verifyInNameSigns,
  ifEmail,
  emailHasDomain,
  checkPasswordLength,
  ifPasswordUpperCase,
  ifPasswordHasNumber,
  verifyInPasswordSigns,
  verifyConfirm,
  ifRODOBoolean
};
