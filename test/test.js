const repeat = require('../repeat');

test('repeat string', () => {
  expect(repeat('s', 2)).toBe('ss');
  expect(repeat('s', 1)).toBe('s');
  expect(repeat('s', 0)).toBe('');
  expect(repeat('ss', 2)).toBe('');
});