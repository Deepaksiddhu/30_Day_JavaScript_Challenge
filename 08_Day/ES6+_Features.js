//Activity 1:Template Literals
//Task 1:use template literals ti create a string that includes variables
let Person={
    name:"Stark",
    age:20
};
console.log(`The name of the Person is => ${Person.name} and the age is => ${Person.age}`);

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 2:create a multiline string using template literals 

console.log(`The name of the Person is => ${Person.name}
    and the age is => ${Person.age}`);

    console.log("=>-------------------------------------------------------------------------------------------------------------<=");


//Activity 2:Destructuring
//Task 3:use array Destructuring to eextract the first and second elements fro an array
let ar=["you","me","that","your"]
const [you,me]=ar;
console.log(you,me);

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 4:use Object literals
let book={
    titles:"DSA",
    author:"DSA sir",
    year:"2024"
};

const {titles,author}=book;
console.log(`The title of book is =>${titles} and the author is =>${author}`);

console.log("=>-------------------------------------------------------------------------------------------------------------<=");


//Activity 3:Spread and Rest Operators
//Task 5:use Spread operator
let newArr = ["hello","hi",...ar]
console.log(newArr);

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 6:use the rest operator 

function sum(...thatsum)
{
    let total=0;
    for (const arg of thatsum) {
        {
            total +=arg;
        }  
    }
    return total;
}

console.log(sum(10,20,10));

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 4:Default Parameters
//Task 7: function that tales two parameters and return their product .2nd has default parameter

let sum1 =((a,b=5)=> a*b)

console.log(sum1(10));

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 5:Enhanced Object Literals
//Task 8:Use enhanced object literals to create an object with methods and properties,and lig the object to the console 

let num1 = 10
let num2 = 20
let num3 = 30

let thereSum= ((num1,num2,num3) => console.log(num1+num2+num3)) 

let thereMul= ((num1,num2,num3) => console.log(num1*num2*num3))

let mathOperation ={num1,num2,num3,thereSum,thereMul}
console.log(mathOperation);

console.log("=>-------------------------------------------------------------------------------------------------------------<=");
//Task 9: create an object with computed property names based on variables and log the object to the console

const prop1='first name'
const prop2='last name'
const prop3='age'

const person ={
    [prop1]:'Hawx',
    [prop2]:'tuf',
    [prop3]:'2',

    getFullName(){
        return `${this["first name"]} ${this["last name"]}`
    }
};

console.log(person);
console.log(person.getFullName());