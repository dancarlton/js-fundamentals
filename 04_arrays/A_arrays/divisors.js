// Write a function `divisors` that accepts a number as an argument. The function should return an
// array containing all positive numbers that can divide into the argument.

const divisors = n => {
    let newArray = []
    for (i = 0; i <= n; i++){
        if (n % i === 0) {
            newArray.push(i)
        }
    }

    return newArray
}

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
