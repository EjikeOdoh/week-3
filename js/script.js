
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
    let choice = prompt(`
    Please enter an option:

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

    let records = [
        { id: 1, name: "Amina Bello", currentClass: "SS1", gender: "Female", age: 14 },
        { id: 2, name: "Chinedu Okafor", currentClass: "SS2", gender: "Male", age: 15 },
        { id: 3, name: "Fatima Musa", currentClass: "SS1", gender: "Female", age: 13 },
        { id: 4, name: "Ibrahim Sadiq", currentClass: "SS3", gender: "Male", age: 16 },
        { id: 5, name: "Blessing Nwoye", currentClass: "SS2", gender: "Female", age: 15 },
        { id: 6, name: "Tunde Adeyemi", currentClass: "SS1", gender: "Male", age: 14 },
        { id: 7, name: "Zainab Abdullahi", currentClass: "SS3", gender: "Female", age: 16 },
        { id: 8, name: "Emeka Obi", currentClass: "SS2", gender: "Male", age: 15 },
        { id: 9, name: "Hauwa Usman", currentClass: "SS1", gender: "Female", age: 13 },
        { id: 10, name: "Sola Ogunleye", currentClass: "SS3", gender: "Male", age: 17 }
    ]

    while (condition) {
        switch (choice) {
            case 1:
                console.log('Add Student')
                let name = prompt(`Enter student name`)
                let id = prompt(`Enter student ID`)
                let currentClass = prompt(`Enter student class`)
                let gender = prompt(`Enter student gender`)
                let age = parseInt(prompt(`Enter student age`))

                const newStudent = CreateStudent(id, name, currentClass, gender, age)
                console.log(newStudent)
                records.push(newStudent)
                alert(`Student was added successfully`)
                choice = getChoice()
                break;
            case 2:
                console.log('View All Students')
                console.table(records)
                choice = getChoice()
                break;
            case 3:
                console.log('Search Student')

                // Implementing search based on student name
                let searchTerm = prompt(`Enter student name`)

                const results = records.filter((student) => {
                    return student.name.includes(searchTerm)
                })
                console.log(results)
                choice = getChoice()
                break;
            case 4:
                console.log('Update Student')
                console.log(records)
                //We need to be able to update all properties except id
                let searchID = prompt(`Enter student ID`)
                let student = records.find((x) => {
                    return x.id === parseInt(searchID)
                })

                if (!!student) {
                    let name = prompt(`Enter student name`)
                    let currentClass = prompt(`Enter student class`)
                    let gender = prompt(`Enter student gender`)
                    let age = parseInt(prompt(`Enter student age`))

                    //Conditon variables that depend on the inputs above
                    let isNameEntered = !!name
                    let isCurrentClassEntered = !!currentClass
                    let isGenderEntered = !!gender
                    let isAgeEntered = !!age

                    records = records.map((x) => {
                        if (x.id === parseInt(searchID)) {
                            return {
                                ...x,
                                name: isNameEntered ? name : x.name,
                                currentClass: isCurrentClassEntered ? currentClass : x.currentClass,
                                gender: isGenderEntered ? gender : x.gender,
                                age: isAgeEntered ? age : x.age
                            }
                        }
                        return x
                    })
                    console.log(records)
                    alert(`Update successful`)
                } else {
                    alert(`Student with ID ${searchID} not found in records`)
                }

                choice = getChoice()
                break;
            case 5:
                console.log('Delete Student')
                let studentId = parseInt(prompt(`Enter student ID`))
                let studentX = records.find((x) => {
                    return x.id === parseInt(studentId)
                })
                if (!!studentX) {
                    let remaining = records.filter((x)=>{
                        return x.id !== studentId
                    })
                    records = remaining
                } else {
                    alert(`Student with ID ${searchID} not found in records`)
                }
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

studentManager()
