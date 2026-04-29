
/**
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


// Array Find method

const randomArray = ["Students", "Ejike", true, [1, 0, 5], undefined, { name: "Ejike" }]

const result = randomArray.find((item) => {
    return (typeof item === 'string' && item.includes('j'))
});

// console.log(result)

// const number = 34
// const string = 'Gift'
// const isStudent = true

// console.log(string.includes('i'))
// console.log(number.)


// Reduce Method

const nums = [15, 10, 110, 50, 25, 100, 82, 38]

//Sum up the numbers in the array above

let sum = 0

for (let num of nums) {
    sum += num
}
// console.log("Sum: " + sum)

const total = nums.reduce((x, y) => {
    return x + y
})
// console.log("Total: " + total)


const object = {
    name: "Gift",
    age: 16,
    class: "SS3",
    greet: () => {
        console.log('Hello world')
    }
}


// console.log(object.class) //Dot notation
// console.log(object["class"])
// object.greet()


// name:
// id
// class
// gender
// age

// const student1 = {
//     name: 'Jemila',
//     id: 1,
//     class: 'SS2',
//     gender: 'F', 
//     age: 10
// }


function CreateStudent(id, name, currentClass, gender, age) {
    return {
        id: id,
        name: name,
        currentClass: currentClass,
        gender: gender,
        age: age
    }
}

const student1 = CreateStudent(1, 'Jemila', 'SS3', 'F', 10)
const student2 = CreateStudent()

// console.log(student1)
// console.log(student2)


//  * Groundwork for Student manager project
//  * 1. Add Student
//  * 2. View All Students
//  * 3. Search Student
//  * 4. Update Student
//  * 5. Delete Student
//  * 6. Exit

function getChoice() {
    let choice = prompt(`Please enter an option:
    1. Add Student
    2. View All Students
    3. Search Student
    4. Update Student
    5. Delete Student
    6. Exit   
`);
    choice = parseInt(choice);
    return choice
}


function studentManager() {
    //Get choice of user
    let choice = getChoice()
    let condition = true

    while (condition) {
        switch (choice) {
            case 1:
                console.log('Add Student')
                choice = getChoice()
                break;
            case 2:
                console.log('View All Students')
                choice = getChoice()
                break;
            case 3:
                console.log('Search Student')
                choice = getChoice()
                break;
            case 4:
                console.log('Update Student')
                choice = getChoice()
                break;
            case 5:
                console.log('Delete Student')
                choice = getChoice()
                break;
            case 6:
                console.log('Exit')
                condition = false
                break;
            default:
                console.log('Invalid option, please try again')
                choice = getChoice()
        }
    }

}


// STEPS
// The function should have ability to select a particular option based on your choice
// Do the above using switch
// Before this, we should be able to get the choice of the user, and validate if it'

// studentManager()

let count = 1
while (count <= 10) {
    console.log(count)
    count++
}