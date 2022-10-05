class Calculator {
  static add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  static substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  static divide(firstNumber, secondNumber) {
    if(secondNumber === 0)
      return false
    
    return firstNumber / secondNumber;
  }

  static multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }
}

module.exports = Calculator;