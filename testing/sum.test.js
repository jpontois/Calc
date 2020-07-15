const sum = require('../operations/sum');

test('adds 1 to 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});