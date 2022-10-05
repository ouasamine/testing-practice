const {stringLength , reverseString, capitalize} = require('./practice')

test('Return String Length', () => {
  expect(stringLength('test')).toBe(4);
  expect(stringLength('testing the test'))
  .toBe('Error: The string is null or more than 10 characters');
})

test('Return reversed String', () => {
  expect(reverseString('test')).toBe('tset');
})

test('Testing capitalize', () => {
  expect(capitalize('humsphere')).toBe('Humsphere');
  expect(capitalize('get')).toBe('Get');
  expect(capitalize('post')).toBe('Post');
})