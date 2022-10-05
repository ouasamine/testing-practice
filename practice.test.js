const stringLength = require('./practice')

test('Return String Length', () => {
  expect(stringLength('test')).toBe(4);
  expect(stringLength('testing the test'))
  .toBe('Error: The string is null or more than 10 characters');
})
