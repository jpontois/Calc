const sub = require('../functions/calcul/sub');

test('sub 2 to 1 equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});