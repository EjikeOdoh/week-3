//Loops - ways we can do repetitive actions, based on a condition

// while (condition) {
//     // commands
// }

// do {
//     // command
// } while (condition)


// for (let i = 0; i < 10; i++) {
//     // Commands
// }


// Challenge - Print numbers 1 to 10, and omit numbers divisible by 3
// let counter = 1

// while (counter <= 10) {
//     if (counter % 3 === 0) {

//     } else {
//         console.log(counter)
//     }
//     counter++
// }

// Is there another way to do this?

// console.log("Start of the loop")

// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0){
//         continue
//     }
//     console.log(i)

//     if ( i === 7) {
//         console.log('This is the end')
//         break;
//     }
// }

// console.log("End of the loop statement")


// let counter = 0

// while (counter < 10) {
//      counter++
//     if (counter % 3 === 0) {
//         continue
//     }
//     console.log(counter)
// }


// let myName = "Deborah"
// let myAge = 70

// function myFunction () {
//     let myAge = 10
//     console.log(myName)
//     console.log(myAge)
// }

// console.log(myName)
// console.log(myAge)

// myFuncti



let myName = 'Ngozi'
//this is a global variable because it is not specified inside a block
function myFunction() {
    let myAge = 10
    //this is a local variable since it is inside a block
    console.log(myName)
    console.log(myAge)
}


// Using loops for an array

let i = "Ejike"
const isFemale = false;

const myObj = {
    name: "Audrey",
    class: "JSS 1"
}


// console.log(numbers)

// Challenge - Double all numbers in the array
// 0 to length - 1

// Using an ordinary for loop
// const doubles = []

// for (let i = 0; i < numbers.length; i++) {
//     doubles.push(numbers[i]*2)
// }

// console.log(doubles)

// Using array specific loop
// const newDoubles = []
// for (let i of numbers) {
//    newDoubles.push(i*2)
// }

// const newerDoubles = []
// for(let i in numbers) {
// newerDoubles.push(numbers[i]*2)
// }


// console.log(newDoubles)
// console.log(newerDoubles)


const numbers = [3, 7, 8, 13, 9, 5, 17, 21, 54, 950]

// Challenge - Largest number inside array
// Compare each item, against the previous one, and when one is greater, assign to a variable
let maximum = numbers[0]
for (let number of numbers) {
    if (maximum < number) {
        maximum = number
    }
}

// console.log(maximum)

// Challenge - Smallest number inside array

let minimum = numbers[0]
for (number of numbers) {
    if (minimum > number) {
        minimum = number
    }
}

// console.log(minimum)

// Challenge - Add up all the numbers inside an array

let sum = 0;

for (let number of numbers) {
    sum = sum + number
}

// console.log(sum)


// Challenge - filter out all numbers less than 10
const filtered = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        filtered.push(numbers[i])
    }
}


const result = []

for (let number of numbers) {
    if (number > 10) {
        result.push(number)
    }
}

// console.log(result)


// Modern Javascript

// Old way
var name = "Ejike"

// New ways
// Creating variables
let num = []
const isFalse = true

// Functions
// Old way

function oldWay() {
    console.log('Old way')
}

// oldWay()

//New way
const newWay = () => {
    console.log('New way')
}

// newWay()

// Conditions 

// Old way
// let option = parseInt(prompt(`Enter number`))

// if (option > 5) {
//     console.log('Number greater than 5')
// } else {
//     console.log(`number less than 5`)
// }


// const isGreater = (option > 5) ? true : false
// console.log(isGreater)

// New way

// (option > 5) ? console.log("True") : console.log("False")

// console.log(name)


// Challenge - enter a score, and the system tells you the corresponding grade

// STEPS
// 1. Get score (as a number, and it can be decimal)
// 2. Compare score against the grading system below, and alert the Grade:
/**
 * 70 & above - A
 * Below 70 to 60 - B
 * Below 60 to 50 - C
 * Below 50 to 45 - D
 * Below 45 - 40 - E
 * Below 40 - F
 */

// Implementation
// 1. Get score (as a number, and it can be decimal)

let score = prompt(`Enter Score`);
score = parseInt(score);

// 2. Compare score against the grading system below:
(score >= 70) ?
    alert("A") : (score >= 60 && score < 70) ?
        alert("B") : (score >= 50 && score < 60) ?
            alert("C") : (score >= 45 && score < 50) ?
                alert("D") : (score >= 40 && score < 45) ?
                    alert("E") : alert("F")

/**
 * Foreach
 * Modern Array methods
 * Creating Objects
 * Factory functions
 * Groundwork for Student manager project
 * 1. Add Student
 * 2. View All Students
 * 3. Search Student
 * 4. Update Student
 * 5. Delete Student
 * 6. Exit
 */



