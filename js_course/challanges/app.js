// q1: function that takes two args and returns thier sum

// function sum(x, y) {
//     return x + y
// }

// console.log(sum(-3,-9))


// q2: convert hours into seconds

// function htos(hours) {
//     return hours * 60 * 60
// }

// console.log(htos(2))


// q3: calculate perimiter of rectangle

// function perimiter(length, width) {
//     return length * 2 + width * 2
// }

// console.log(perimiter(10, 20))


// q4: calculate area of a triangle

// function area_tri(base, height) {
//     return 0.5 * base * height
// }

// console.log(area_tri(20,20))


// q5: extend a string

// function ext(str) {
//     return str + " Lebron James"
// }

// console.log(ext("Apple"))

// q6: greater than 100

// function gt100(x, y) {
//     return (x + y) > 100
// }

// console.log(gt100(20, 71))


// q7: less or equal to zero

// function le0(num) {
//     return num <= 0
// }

// console.log(le0(0))


// q8: opposite boolean

// function opp(boo) {
//     return ! boo
// }

// console.log(opp(false))


// q9: is not 0

// function not0(val) {
//     return val !== 0
// }

// console.log(not0(0))


// q10: calc remainder

// function remainder(quotent, divisor) {
//     return quotent % divisor
// }

// console.log(remainder(4, 3))


// q11: is odd

// function isOdd(num) {
//     return num % 2 !== 0
// }

// console.log(isOdd(10))


// q12: if even return 1 else -1

// function eoro(num) {
//     return num % 2 === 0 ? 1:-1 //turinary variable true = return first, else return second | also returns truthy values
// }
// // if not false, null, undefined, 0, NaN, '' = truthy

// console.log(eoro(4))


// q13: check if user logged in and subbed

function logandsub(login, sub) {
    return login === "LOGGED_IN" && sub === "SUBSCRIBED"
}

console.log(logandsub("LOGGED_IN", "SUBSCRIBED"))