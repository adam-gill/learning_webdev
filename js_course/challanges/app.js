// EASY CHALLANGES

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

// q13: check if user logged in or subbed

// function logandsub(login, sub) {
//     return login === "LOGGED_IN" || sub === "SUBSCRIBED"
// }

// console.log(logandsub("LOGGED_IN", "SUBSCRIBED"))

// MEDIUM CHALLANGES

// q1: falsy or truthy

// function fort(val1, val2) {
//     return (!val1) ? val1 : val2
// }

// console.log(fort(false, 100))

// q2: return array length

// function arrlen(arr) {
//     return arr.length
// }

// console.log(arrlen([1, 2, 3, 4, 5]))

// q3: last array element

// function lastelm(arr) {
//     return arr[arr.length - 1]
// }

// console.log(lastelm([1, 2, 3, 4, 99]))

// q4: sum of array

// function arraySum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(arraySum([1, 2, 3, 4, 99]))

// q5: add up nums from a single number

// function numSum(num) {
//     sum = 0
//     for (let i = 0; i < num; i++) {
//         sum += i + 1
//     }
//     return sum
// }

// console.log(numSum(7))

// q6: calc time

// function calcTime(sec) {
//     let minutes = Math.floor(sec / 60)
//     let seconds = sec % 60

//     if (minutes > 9) {
//         return minutes + ":" + seconds
//     } else {
//         return "0" + minutes + ":" + seconds
//     }

// }

// console.log(calcTime(5000))

// q7: largest num in array

// function largest(arr) {
//     let max = arr[0]

//     for(i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(largest([-1, -2, 4, -11, 500, 23, 9]))

// q8: reverse a string

// function rev(str) {
//     res = ""

//     // increment
//     // for (i = str.length - 1; i >= 0; i--) {
//     //     res += str[i]
//     // }

//     // decrement
//     // for (i = 0; i < str.length; i++) {
//     //     res += str[str.length - 1 - i]
//     // }

//     // 'string'.split('').reverse().join('') to reverse string

//     // shortcut using split, reverse, and join
//     // split makes string into an array
//     res = str.split('').reverse().join('')

//     return res
// }

// console.log(rev("Hello"))

// q9: turn every element in array to 0

// function all0(arr) {

//     // for loop
//     // let newArr = []
//     // for (i = 0; i < arr.length; i++) {
//     //     newArr.push(0)
//     // }
//     // return newArr

//     // fill method
//     // return new Array(arr.length).fill(0)

//     // map callback function method *most important*
//     let newArr = arr.map(() => 0)

//     // let newArr = arr.map(() => {
//     //     return 0
//     // })
//     return newArr
// }

// console.log(all0([-1, -2, 4, -11, 500, 23, 9]))

// q10: filter out apples

// function noApples(arr) {

//     // for loop method
//     // let newArr = []

//     // for(i = 0; i < arr.length; i++) {
//     //     if (arr[i] !== 'Apple') {
//     //         newArr.push(arr[i])
//     //     }
//     // }
//     // return newArr

//     // filter method
//     return arr.filter((elem) => elem !== 'Apple')

// }

// console.log(noApples(['Banana', 'Apple', 'Orange', 'Apple', 'Banana']))

// q11: filter falsy values

// function filterFalsy(arr) {

//     // determine if truthy = !!elem === true or !!elem
//     return arr.filter((elem) => !!elem)
// }

// console.log(filterFalsy(['Banana', 6, NaN, undefined, null, false, 0]))

// q12: truthy to true, falsy to false

// function tttftf(arr) {
//     return arr.map((elem) => !!elem)
// }

// console.log(tttftf([500, 0, 'David', "", []]))

// ADVANCED CHALLANGES

// q1: show rating

// function rating(rating) {

//     if (rating === 0.5) {
//         return "."
//     }
//     let res = ""

//     for (i = 0; i < Math.floor(rating); i++) {
//         res += "*"
//     }
//     if ((rating % 1) !== 0) {
//         res += "."
//     }

//     return res
// }

// console.log(rating(3.5))

// q2: sort by lowest to highest price

// function low2high(arr) {
//     return arr.sort((a, b) => a - b)
// }

// arr = [4, -4, 2, 1, 6, 7, 10, 12]
// console.log(low2high(arr))

// q3: sort by highest to lowest price

// function high2low(arr) {
//     return arr.sort((a, b) => b.price - a.price)
// }

// arr = [{id : 1, price : 50},
//        {id : 2, price : 30},
//        {id : 3, price : 60},
//        {id : 4, pric : 10}]

// console.log(high2low(arr))

// q4: promises

// watch firship "the async await episode 1 promised"
// watch async await javascript es7 (1.5x)
// watch async JS crash course (1.5x)

// q5: find all the posts by a single user

// async before function, await before fetch 

// async function singleUserPosts(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//     const res = await promise.json()

//     const posts = res.filter(element => element.userId === userId)

//     console.log(posts)
// }

// singleUserPosts(3)


// q6: first 6 incomplete todos

async function first6incompletes () {
    
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

    const res = await promise.json()

    return res.filter((element) => !element.completed).slice(0, 6)

}

console.log(first6incompletes())