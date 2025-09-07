// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

// function dec that accepts a string
// split sentence into an array
// every odd word goes to uppercase
// added back to a string

let alternatingCaps = function (sentence) {
  let words = sentence.split(' ')
  let newWords = []

  for (i = 0; i < words.length; i++) {
    let word = words[i]

    if (i % 2 === 0) {
      newWords.push(word.toLowerCase())
    } else {
      newWords.push(word.toUpperCase())
    }
  }
  return newWords.join(' ')
}

console.log(alternatingCaps('take them to school')) // 'take THEM to SCHOOL'
console.log(alternatingCaps('What did ThEy EAT before?')) // 'what DID they EAT before?'
