
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

const randomArray = ["Students", "Ejike" ,true, [1, 0, 5], undefined, {name: "Ejike"}]

const result = randomArray.find((item)=> {
    return (typeof item === 'string' && item.includes('j'))
});

console.log(result)

const number = 34
const string = 'Gift'
const isStudent = true

// console.log(string.includes('i'))
// console.log(number.)

