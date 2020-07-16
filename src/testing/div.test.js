const div = require('../functions/calcul/div');

test('divide 1 by 2 to equal 0.5', () => {
  expect(div(1, 2)).toBe(0.5);
});