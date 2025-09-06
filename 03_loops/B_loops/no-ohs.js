// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

const noOhs = s => {
    for (i = 0; i <= s.length -1; i++){
        if (s[i] !== 'o'){
            console.log(s[i])
        }
    }
}

noOhs("code");
// prints
//  c
//  d
//  e

noOhs("school");
// prints
//  s
//  c
//  h
//  l
