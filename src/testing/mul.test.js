const mul = require('../functions/calcul/mul');

test('multiply 1 by 2 equal 2', () => {
  expect(mul(1, 2)).toBe(2);
});