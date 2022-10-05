const stringLength = (string) => {
  if (string.length === 0 || string.length > 10)
    return 'Error: The string is null or more than 10 characters'
  return string.length 
}

module.exports = stringLength;