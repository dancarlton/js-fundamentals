// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

const filterLongWords = strings => {
    let newArray = []
    for (i = 0; i < strings.length; i++) {
        if (strings[i].length < 5) {
            newArray.push(strings[i])
        }
    }
    return newArray
}

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
