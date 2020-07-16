const isValid = require('../functions/user/isValid');

test('Everything valid', () => {
  expect(isValid('jon', 'jim', 'jim@jon.fr', 14)).toBe(true);
});

test('First name not provided', () => {
  expect(isValid(null, 'jim', 'jim@jon.fr', 14)).toBe(false);
});

test('Last name not provided', () => {
  expect(isValid('jon', null, 'jim@jon.fr', 14)).toBe(false);
});

test('Email not provided', () => {
  expect(isValid('jon', 'jim', null, 14)).toBe(false);
});

test('Email not valid', () => {
  expect(isValid('jon', 'jim', 'jimjon.fr', 14)).toBe(false);
});

test('Not old enough', () => {
  expect(isValid('jon', 'jim', 'jimjon.fr', 10)).toBe(false);
});