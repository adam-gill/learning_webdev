// ARRAYS & FUNCTIONS

// console.log("lebron".length);

// let str = "lebron";

// console.log(str[str.length - 1]);

// console.log(typeof str);

// console.log(5 / 3);

// == checks values
// checks values and data types
// !== if values aren't equal

// let lebron = 'lebron'

// console.log(`hello mr, ${lebron}`)

// function ctof (celsius) {
//     return celsius * 1.8 + 32
// }

// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(30))

// console.log(ctof(30))

// arr = [3, 4, 5, 5, 2, 1, 100]

// arr.push(40)

// // loops over array and looks for true condition to print array
// // element is an element in the array
// let newArr = arr.filter((element) => {
//     if (element % 2 == 0) {
//         return true
//     }
// }) // call back function

// // one line method

// let newArr2 = arr.filter(element => element > 50)

// console.log(newArr2)
// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']

// let passing = grades.filter(grade => grade != 'FAIL')

// let passing2 = grades.filter((grade) => {
//     return grade != 'FAIL'
// })

// console.log(passing)
// console.log(passing2)

// let grades = ['A+', 'A', 'FAIL']
// let good_grades = []

// for(let i = 0; i < grades.length; i++) {
//     if (grades[i] == 'FAIL') {
//         good_grades.push(grades[i])
//     }
// }

// console.log(good_grades)

// console.log('hi')

// let arr = [1, 5, 9, 39, 344];

// // changes each elements it loops over
// let newArr = arr.map((element) => {
//   return 23;
// });

// console.log(newArr)

// let dollars = [1, 5, 10, 3]

// // let cents = dollars.map((dollar) => {
// //     return dollar * 100
// // })

// let cents = dollars.map(dollar => dollar * 100)

// // let cents = []

// // for (let i = 0; i < dollars.length; i++) {
// //     cents.push(dollars[i] * 100)
// // }

// console.log(cents)

// OBJECTS

// let users = [
//     {
//         username: 'LeBron',
//         email: 'lebron@gmail.com',
//         password: '123',
//         status: true,
//         discordID: 'LeBron_James',
//         lessonsCompleted: [0, 1, 2, 3]
//     },
//     {
//         username: 'DaBaby',
//         email: 'dababy@gmail.com',
//         password: 'felon',
//         status: true,
//         discordID: 'Suge',
//         lessonsCompleted: [0, 1000, 2, 3]
//     }
// ]



// console.log(users[1].lessonsCompleted.map(elem => elem *2))


// function login(email, password) {
//     for (let i = 0; i < users.length; i++) {
//         console.log('this ran')
//         if (users[i].email === email) {
//             console.log(users[i])
//             if (users[i].password === password) {
//                 console.log('log in - correct')
//             }
//             else {
//                 console.log('log in - error')
//             }
//             return
//         }
        
//     }
//     console.log('could not find match')
// }

// login('dababy@gmail.com', 'felon')

// function register (username, email, password, status, discordID, lessonsCompleted) {
//     users.push({username, email, password, status, discordID, lessonsCompleted})

// }

// register('ab', 'ab@gmail.com', 'password', true, 'ab3', [0,1,2])

// console.log(users)

// DOM

//first way & best practice
console.log(document.querySelector('#title'))


// second way
console.log(document.getElementById('title'))

// change HTML
document.querySelector('#title').innerHTML = 'Dodo Bird'


// Change CSS
document.querySelector(".title").style.color = 'red'

// event listener

function changeTitleColor() {
    document.querySelector(".title").style.color = 'blue'
}

function dark() {
    document.querySelector('body').classList.toggle('dark-theme')
}