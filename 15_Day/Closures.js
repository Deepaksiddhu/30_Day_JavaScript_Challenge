//Activity 1:Understanding closures
//*Task 1:Write a function that returns another function accesses variable from  the  outer function's scope. Call the inner function and log the result.*/

function myFun(){
    const name ="Hawx"

    function callName(){
        console.log(name);
    }

    return callName;
}

const makeFun = myFun();
makeFun();


//* Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter. */

function createCounter(){
    let counter =0;

    function incrementCounter(){
        counter++;
    }

    function get_Counter(){
        return counter;
    }

    return {incrementCounter,get_Counter}
}

const myCounter= createCounter();
console.log("Counter variable before increment ",myCounter.get_Counter());
myCounter.incrementCounter();
myCounter.incrementCounter();
console.log("Counter variable After increment ",myCounter.get_Counter());


//Activity 2:Practical Closures
//*Task 3: Write a function that generate unique IDs.Use a closure to keep track of the  last generated ID and increment it with each call.

function generateUniqueId()
{
    let lastId=0;

    return()=>{
        lastId++;
        return lastId;
    }
}

const UniqueId = generateUniqueId()
console.log("Id is incremented after every call",UniqueId());
console.log("Id is incremented after every call",UniqueId());
console.log("Id is incremented after every call",UniqueId());

//*Task 4:Create a closure that captures a user's name and return a function that greets user by name.

const createGreet=(name)=>{
    const greet=()=>{
        return `Hello, ${name} welcome in Java Script 30 day Challenge`
    }

    return greet;
}

const hawx= createGreet("Hawx");
console.log(hawx());

const happy=createGreet("Happy");
console.log(happy());

/*Activity 3:Closures in Loops */
//*Task 5:Write a loop that creates an array of functions.Each function should log its index when called.Use a closure to ensure each function logs the correct index.

function create_Array(size)
{
    const functionArray=[]

    for(let i=0;i<size-1;i++)
    {
        functionArray.push((function(index){
            return function(){
                console.log(`Function index:${index}`);
                
            }
        })(i));
    }
    return functionArray ;
}

const func = create_Array(6);
func.forEach(func => func());


//Activity 4:Module Pattern
//*Task 6:Use closure to create a simple module for managing a collection of items.Implement method to add, remove, and list items.

function create_Items()
{
    const items = [];
    function addItems(item)
    {
        items.push(item)
    }

    function removeItem(index)
    {
        if (index >= 0 && index < items.length) {
            items.splice(index,1)
        }
        else{
            console.log(`Invalid index to remove i.e. ${index}`);
            
        }
    }

    function listItems()
    {
        console.log(`Items are added :${items}`);
    }

    return {addItems,removeItem,listItems}
}

const myItems = create_Items();

myItems.addItems("Ghee")
myItems.addItems("ots")
myItems.addItems("buscit")

myItems.listItems();

myItems.removeItem(1)
myItems.listItems()


// Activity 5: Memoization 

//* Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations. */
function memoize(fun){

    const cache = {};

    return function(arg){
        if(cache[arg] !== undefined){
            return cache[arg];
        }

        const result = fun(arg);
        cache[arg] = result;
        return result;
    }
}

function square(num){
    return `Square of number ${num} is: ${num*num}`;
}

const memozied_square = memoize(square);

console.log(memozied_square(4)); //computed
console.log(memozied_square(4)); // from cache

//* Task 8: Create a memoized version of a function that calculates the factorial of a number.  */

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoized_fact = memoize(factorial);

console.log("Factorial is: ",memoized_fact(5));