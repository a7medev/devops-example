const sum = (...args) => {
  const numbers = args.map(arg => {
    if (isNaN(arg)) {
      throw new TypeError('Expected all arguments to be valid numbers');
    }

    return +arg;
  });

  return numbers.reduce((sum, curr) => sum + curr, 0);
};

module.exports = sum;
