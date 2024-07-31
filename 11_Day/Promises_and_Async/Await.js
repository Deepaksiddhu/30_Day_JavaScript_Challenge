//Activity 1:Understanding promises
//Task 1: Create a promise that resolves with a message after a 2-sec timeout and the message to the console.
//Activity 1:Understanding promises
//Task 1: Create a promise that resolves with a message after a 2-sec timeout and the message to the console.

const promiseOne = new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("This message is after 2 seconds ");
        resolve();
    },2000)
})

promiseOne.then(function(){
    console.log("Async task is complete");
    console.log("=>----------------------------------------------------<=");
})



//Task 2:create a promise that rejects with an error message after a 2-sec time out and handle the error using .catch()
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"Hawx",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },2000)
})

promiseTwo.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
    console.log("error is after 2 sec");
    console.log("=>----------------------------------------------------<=");
})


//Activity 2:Chaining Promises
//Task 3: Create a Sequence of promises that simulate fetching data from a server.chain the promises log messages in specific order.

fetch('https://jsonplaceholder.typicode.com/users')
.then((Response)=>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
    console.log("=>----------------------------------------------------<=");
})
.catch((error)=> console.log(error))
console.log("=>----------------------------------------------------<=");




//Activity 3:Using Async/Await
//Task 4:Write an async function that waits for a promise to resolve and then logs the resolved value.
async function waitForPromise(){
    const result = await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Async/Await");
            resolve('Promise resolved using async await')
        },2000)
    });
    console.log(result);
    console.log("=>----------------------------------------------------<=");
}
waitForPromise();
console.log("=>----------------------------------------------------<=");


//Task 5:Write  an async function that handles a rejected promise using try-catch and log the error message
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error= true;
        if (!error) {
            resolve({username:"javaScript",password:"1234"})
        }else{
            reject('E:JS went wrong')
        }
    },2000)
})
async function consumePromiseThree(){
    try {
        const response = await promiseThree
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseThree();
console.log("=>----------------------------------------------------<=");


//Activity 4:Fetching Data from an API
//Task 6:use the fetch API to get data from a public API and log the response data to the console using promises.
function fetchData(){
    fetch('https://api.example.com/data')
    .then(response =>{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {
        console.log('There was a problem with the fetch operation :',error);
    })
}

fetchData();
console.log("=>----------------------------------------------------<=");


//Task 7:Use the fetch API to get data from a Public API and log the response data to the console using async/await.
async function FetchData(){
    try {
        const resp=await fetch('https://jsonplaceholder.typicode.com/users')
        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await resp.json();
        console.log("Task 7 executed");
        console.log(data);
    } catch (error) {
        console.log("Task 7",error);
    }
}

FetchData();

console.log("=>----------------------------------------------------<=");

//Activity 5:Concurrent Promises
//Task 8:Use Promise.all to wait for multiple promises to resolve and then log all their values.
const all = Promise.all([
    new Promise((resolve,reject)=>setTimeout(()=>resolve(1),3000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve(2),4000)),
    new Promise((resolve,reject)=> setTimeout(()=> resolve(3),5000))
]).catch((error)=>{
    console.log("Task 8",error);
})

all.then(results=> {console.log("Task 8 Executed");
    console.log(results)})
console.log("=>----------------------------------------------------<=");
//Task 9:Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Create an array of promises
const promises = [
    new Promise((resolve) => setTimeout(() => resolve('First promise resolved!'), 2000)),
    new Promise((resolve) => setTimeout(() => resolve('Second promise resolved!'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Third promise resolved!'), 3000))
];

// Use Promise.race to log the value of the first resolved promise
Promise.race(promises)
    .then((value) => {
        console.log('First resolved promise value:', value);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
