const stringLength = (string) => {
  if (string.length === 0 || string.length > 10)
    return 'Error: The string is null or more than 10 characters'
  return string.length 
}

const reverseString = (string) => {
  return string.split('').reverse().toString().replace(/,/g, '')
}

const capitalize = (string) => {
  return string.replace(string.charAt(0), string.charAt(0).toUpperCase())
}

module.exports = {stringLength, reverseString, capitalize};