const sum = require('./sum');

test('ajoute 1 + 2 pour donner 3', () => {
  expect(sum(1, 2)).toBe(3);
});
