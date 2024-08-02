//Activity 1:Basic Error Handling with Try-catch
//Task 1:Write a function that intentionally throws an error and use a try-catch block to handle the error 
function throwError(){
    try {
            throw new Error('Intentional error thrown');
    } catch (error) {
        console.error('An error Occurred in task 1:',error.message);
    }
}
throwError()

//Task 2:Create a function that divides two numbers and throws error if the denominator id zero . use the try-catch blocks to observe the execution flow.
function dividesTwoNo (a,b){
    try {
            if(b === 0)
            {
                throw new Error('Division by zero is not allowed')
            }
        return console.log(a/b);
    } catch (error) {
        console.log('Task 2 error is :',error.message);
    }
}
dividesTwoNo(10,2);
dividesTwoNo(20,0);

//Activity 2:Finally Block
//Task 3:Write a script that includes a try-catch block.Log messages in the try,catch.and finally blocks to observe the execution flow.
function finallyBlock (a,b){
    try {
        if (a <= 0) {
            throw new Error(` a => ${a} is less than 0 and equal to zero`)
        }
        return console.log(b/a);
    } catch (error) {
        console.log('Error is in Task 3 :',error.message);
    }
    finally{
        console.log('Enter the correct value of a ');
    }
}
finallyBlock(-1,3)

//Activity 3:Custom Error Objects
//Task 4:Create a custom error class that extends the built-in Error class.Throw an instance of this custom error in a function and handle it using try-catch block.

class checkError extends Error{
    constructor(msg){
        super(msg);
    }

}
try {
    if (10 !=20) {
        throw new checkError('10 is not equal to 20')
    }
} catch (error) {
    console.log('Error of task 4 :',error.message);
}

//Task 5:Write a function that validates user input (e.g.,checking if a string is not empty )and throws a custom error if the validation fails.Handle the custom error using try-catch block.

class customError extends Error{
    constructor(msg){
        super(msg);
        this.name='customError';
    }
}
function checkString(str){
    try {
        if (str === '') {
            throw new customError('String is empty');
        }else{
            console.log('String is valid:',str);
        }
    } catch (error) {
        console.log('Error of task 5 is :',error.message);
    }
}
checkString('hi');
checkString('');

//Activity 4:Error handling in Promises
//Task 6:Create a Promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to console.
// Create a function that returns a Promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            resolve('Promise resolved successfully!');
        } else {
            reject(new Error('Promise rejected'));
        }
    });
}

// Using .catch() to handle the rejection and log an appropriate message
randomPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

//Task 7:USe try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// Create a function that returns a Promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            resolve('Promise resolved successfully!');
        } else {
            reject(new Error('Promise rejected'));
        }
    });
}

// Using .catch() to handle the rejection and log an appropriate message
randomPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error using .catch():', error.message);
    });

// Using an async function with try-catch to handle errors
async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log('Async function result:', result);
    } catch (error) {
        console.error('Error using try-catch within async function:', error.message);
    }
}

// Call the async function to handle the Promise
handlePromise();

//Activity 5:Graceful Error Handling in Fetch
//Task 8:USe the fetch API to request data from an invalid URL and handle the error using .catch().Log an appropriate error message to console.

function fetchError() {
    const invalidUrl = 'https://www.invalidurl.com'; // Invalid URL
    fetch(invalidUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

fetchError();

//Task 9:USe the fetch Api to request data from an invalid URL within an async function and handle the error using try -catch.Log an appropriate error message.

async function invalidURL (){
    const url = 'https://www.invalidurl.com';
    try {
        const response = await fetch(url);
            if (!response.ok) {
            throw new Error('Data not fetched from url');
            }
        const data = await response.json();
        console.log("Data =>",data);
    } catch (error) {
        console.error('Error Fetching data in task 9 :',error);
    }
}
invalidURL();