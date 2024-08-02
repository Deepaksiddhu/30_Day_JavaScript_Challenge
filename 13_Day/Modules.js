import { addTwoNum } from "./add.js"; //For Task => 1
import { Person } from "./Object.js";//For Task 2


import { multNum } from "./add.js";//Task 3
import { subNum } from "./add.js";//Task 3


import hi from "./Export_default.js"//Task 4

import * as Task from './Task_5.js'//Task 5

// import { constant1,constant2 } from "./constants.js";//Task 8:
// import { function1,function2 } from "./fuctions.js";//Task 8

//Activity 1:Creating and Exporting Modules
//Task 1:Create a module that exports a function to add two numbers. import and use this module in another script.
const result= addTwoNum(5,4);
console.log(result);

//Task 2:Create a module that exports an object representing a person with properties and methods . import and use this module in another script.
console.log(Person.sayHi());

//Activity 2:Named and Default Exports
//Task 3:Create a module that exports multiple function using named exports. Import and use these functions in another script.
const resmul=multNum(5,5);
console.log(resmul);

const resSub=subNum(10,2);
console.log(resSub);

//Task 4:Create a module that exports a single function using default export. Import and use this function in another Script.
hi();

//Activity 3:Importing Entire Modules 
//Task 5:Create a module that exports multiple constants and functions.Import the entire module as an object in another script and use its properties.
console.log(`This first constant export ${Task.name}`);

console.log(`This is the second constant export ${Task.age}`);

const resFor5=Task.display1();
console.log(resFor5);

const resForTask5=Task.display2();
console.log(resForTask5);

//Activity 4:Using Third -party Modules
//Task 6:Install a third-party module (eg.,lodash)using npm.Import and use a function from this module in a script

//IN Module =>Task6.js

//Task 7:Install a third-Party module (eg.,axios)using npm . Import and use this module to make a network request in script


//IN module =>Task7.js

//Activity 5:Module Building 
//Task 8:Use a module bundler like Webpack or Parcel to bundle multiple Javascript files into a single file. Write a script to demonstrate the building process.

// console.log(constant1,constant2);
// function1();
// function2();
