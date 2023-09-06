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
// console.log(document.querySelector('#title'))

// // second way
// console.log(document.getElementById('title'))

// // change HTML
// document.querySelector('#title').innerHTML = 'Dodo Bird'

// // Change CSS
// document.querySelector(".title").style.color = 'red'

// // event listener

// function changeTitleColor() {
//     document.querySelector(".title").style.color = 'blue'
// }

// function dark() {
//     document.querySelector('body').classList.toggle('dark-theme')
// }

// PROMISES = something that gives you a
// value some time in the future

// use case = logging in, registering, payments, etc.
// communicating to backend server
// used when need to use data front backend (database)

// front end uses the promise, back end creates it

// doesn't load data correctly
// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

// unlock data with 1. then

// const emailRef = document.querySelector(".email");
// //console.log(emailRef)

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     // console.log(response.json())

//     // to unlock promise method 1
//     // response.json().then(data =>  {
//     //     emailRef.innerHTML = data.email
//     // })

//     //method 2: just return (shorthand)
//     // promise that allows data to be read
//     return response.json();
//   }) // second .then unlocks data
//   .then((data) => {
//     console.log(data)
//     emailRef.innerHTML = data.email
//   });
// doesn't wait, runs in background, data out of order

// callback statement ^

// or with 2. async/await = best practice ***

// async function
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

//     // unlock promise
//     const data = await response.json()
//     console.log(data)
// }
// // runs line by line; better to use

// // have to call function for data also
// main()

// Create a PROMISE
// callback = () => {}



const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video")

function getSubStatus() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("VIP");
      }, 2000);
    });
  }

// Method 1 (then)
// getSubStatus().then((response) => console.log(response));

// Method 2 (async function & await)
// async function to unlock promise

function getVideo(subStatus) {
  return new Promise((resolve, reject) => {
    if (subStatus === "VIP") {
      resolve("show video");
    } else if (subStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main() {
  const status = await getSubStatus();
  statusRef.innterHTML = status
  videoRef.innerHTML = await getVideo(status)

  try {
    console.log(await getVideo(status))
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e
  }
}

// make sure to call main() to view data
main();
