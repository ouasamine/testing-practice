const Calculator = require('./calculator.js');

describe('Testing The Calculator', () => {
  test('Test add function', () => {
    expect(Calculator.add(3,2)).toBe(5);
    expect(Calculator.add(3,-1)).toBe(2);
    expect(Calculator.add(0,2)).toBe(2);
  })
  test('Test substract function', () => {
    expect(Calculator.substract(7,2)).toBe(5);
    expect(Calculator.substract(1,-1)).toBe(2);
    expect(Calculator.substract(0,2)).toBe(-2);
  })
  test('Test divide function', () => {
    expect(Calculator.divide(10,2)).toBe(5);
    expect(Calculator.divide(8,-1)).toBe(-8);
    expect(Calculator.divide(2,0)).toBeFalsy();
  })
  test('Test multiply function', () => {
    expect(Calculator.multiply(3,2)).toBe(6);
    expect(Calculator.multiply(3,1)).toBe(3);
    expect(Calculator.multiply(0,2)).toBe(0);
  })
})