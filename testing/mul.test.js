const mul = require('../operations/mul');

test('multiply 1 by 2 equal 2', () => {
  expect(mul(1, 2)).toBe(2);
});