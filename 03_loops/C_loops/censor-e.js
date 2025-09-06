// Write a function `censorE` that accepts a string as an argument. The function should return the a new
// version of string where all characters that are 'e's are replaced with '*'s.

const censorE = s => {
  let newString = ''
  for (i = 0; i < s.length; i++) {
    if (s[i].includes('e')) {
      newString += '*'
    } else {
        newString += s[i]
    }
  }
  return newString
}

console.log(censorE('speedy')) // 'sp**dy'
console.log(censorE('pending')) // 'p*nding'
console.log(censorE('scene')) // 'sc*n*'
console.log(censorE('heat')) // 'h*at'
