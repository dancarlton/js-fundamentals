// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

// const bleepVowels = s => {
//     let newString = ''
//     for (i = 0; i < s.length; i++) {
//         if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
//             newString += '*'
//         } else {
//             newString += s[i]
//         }
//     }
//     return newString
// }

const bleepVowels = s => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let newString = ''
    for (i = 0; i < s.length; i++) {
        let char = s[i]
        if (vowels.includes(char)) {
            newString+= '*'
        } else {
            newString += char
        }
    }
    return newString
}

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
