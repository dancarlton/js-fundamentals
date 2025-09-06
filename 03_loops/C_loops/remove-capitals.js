// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

const removeCapitals = s => {
    let newStr = ''
    for (i = 0; i < s.length; i++){
        let char = s[i]
        if (char === char.toLowerCase()){
            newStr += char
        }
    }
    return newStr
}

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'
