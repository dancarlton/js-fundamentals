// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.

// const caseChange = (a, b) => {
//     if (a && b) {
//         return a.toUpperCase()
//     } else if (a) {
//         return a.toLowerCase()
//     }
// }

const caseChange = (a, b) => a && b ? a.toUpperCase() : a.toLowerCase()

console.log(caseChange("Super", true)); // 'SUPER'
console.log(caseChange("Super", false)); // 'super'
console.log(caseChange("tAmBourine", true)); // 'TAMBOURINE'
console.log(caseChange("tAmBourine", false)); // 'tambourine'
