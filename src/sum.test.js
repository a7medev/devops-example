const sum = require('./sum');

it('sums 6 and 5 to 11', () => {
  const result = sum(6, 5);

  expect(result).toEqual(11);
});

it('accepts string numbers', () => {
  const result = sum('5', 6);

  expect(result).toEqual(11);
});

it('throws an error when passing a none-number value', () => {
  const fn = () => sum(5, 'x');

  expect(fn).toThrow(TypeError);
});
