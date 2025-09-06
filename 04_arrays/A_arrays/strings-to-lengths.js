// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
// should return a new array containing the lengths of the elements of the original array.

const stringsToLengths = strings => {
    let newArray = []
    for (i = 0; i < strings.length; i++) {
        newArray.push(strings[i].length)
    }
    return newArray
}

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
