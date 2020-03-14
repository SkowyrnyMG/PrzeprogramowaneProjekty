const {
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
} = require('../src/verifyForm.js');

test('If name is not long enough', () => {
  const shortName = 'l';
  expect(verifyNameLength(shortName)).toBe(false);
});

test('If name is long enough', () => {
  const longName = 'Long Enough';
  expect(verifyNameLength(longName)).toBe(true);
});

test('If name has special signs', () => {
  const nameWithSigns = 'Mark!@';
  expect(verifyInNameSigns(nameWithSigns)).toBe(false);
});

test('If name does not have special signs', () => {
  const nameWithOutSigns = 'Mark';
  expect(verifyInNameSigns(nameWithOutSigns)).toBe(true);
});

test('If email does not include @', () => {
  const wrongEmail = 'wrongemailgmail.com';
  expect(ifEmail(wrongEmail)).toBe(false);
});

test('If email includes @', () => {
  const correctEmail = 'correctemail@gmail.com';
  expect(ifEmail(correctEmail)).toBe(true);
});

test('If email does not have domain', () => {
  const wrongEmail = 'wrong@email';
  expect(emailHasDomain(wrongEmail)).toBe(false);
});

test('If email has domain', () => {
  const correctEmail = 'correctemail@gmail.com';
  expect(emailHasDomain(correctEmail)).toBe(true);
});

test('If password is not long enough', () => {
  const shortPassword = 'short';
  expect(checkPasswordLength(shortPassword)).toBe(false);
});

test('If password is long enough', () => {
  const shortPassword = 'LongPassword';
  expect(checkPasswordLength(shortPassword)).toBe(true);
});

test('If password does not have upper case', () => {
  const wrongPassword = 'onlylowercase';
  expect(ifPasswordUpperCase(wrongPassword)).toBe(false);
});

test('If password includes upper case', () => {
  const correctPassword = 'IncludesUpperCases';
  expect(ifPasswordUpperCase(correctPassword)).toBe(true);
});

test('If password does not includes any number', () => {
  const wrongPassword = 'doesnothavenumber';
  expect(ifPasswordHasNumber(wrongPassword)).toBe(false);
});

test('If password includes number', () => {
  const correctPassword = 'includes1';
  expect(ifPasswordHasNumber(correctPassword)).toBe(true);
});

test('If password does not have special signs', () => {
  const wrongPassword = 'passwordwithoutspecialsigns';
  expect(verifyInPasswordSigns(wrongPassword)).toBe(false);
});

test('If password does not have special signs', () => {
  const correctPassword = 'Wehavesome@#$!';
  expect(verifyInPasswordSigns(correctPassword)).toBe(true);
});

test('If confirm does not match password', () => {
  const password = 'matchMe!';
  const wrongConfirm = 'doesNotMatch';
  expect(verifyConfirm(password, wrongConfirm)).toBe(false);
});

test('If confirm does match password', () => {
  const password = 'matchMe!';
  const wrongConfirm = 'matchMe!';
  expect(verifyConfirm(password, wrongConfirm)).toBe(true);
});

test('If RODO is not boolean', () => {
  const wrongRodo = 'thisisnotRadioBtn';
  expect(ifRODOBoolean(wrongRodo)).toBe(false);
});

test('If RODO is boolean', () => {
  const corrrectRodo = true;
  expect(ifRODOBoolean(corrrectRodo)).toBe(true);
});
