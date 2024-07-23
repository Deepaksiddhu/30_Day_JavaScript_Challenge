//Activity 1:Function Declaration
//Task 1:

function evenOdd(num){
    if(num%2===0)
    {
        console.log(num+" is Even");
    }
    else
    {
        console.log(num+" is Odd");
    }
}

let num=12
evenOdd(num)


//Task 2:
function square(num){
    let sq=num*num
    return sq;
}

console.log(square(num)+" is square of "+num);


//Activity 2:Function Expression
//Task 3:
const getCircleArea=function(Radius){
    return 3.14*Radius*Radius
};

console.log("Area of circle is "+getCircleArea(5));

//Task 4:
const getConcatenateString=function(str1,str2){
    return str1.concat(" ",str2)
}

console.log(getConcatenateString("hello","Hawx"));


//Activity 3:Arrow Function
//Task 5:
let hi=()=>{
    console.log("Hello");
}
hi();


//Task :6
let CheckChar =(h)=>{
    return (h.indexOf('e') !==-1)
}
console.log(CheckChar("Hello"));


//Activity 4:Function Parameters and Default Values
//Task:7
function product(n1,n2=5){
    return n1*n2
}

console.log(product(3));

//Task:8

let age=(Pname,age=20)=>{
    if(age>=18)
    {
        console.log(`${Pname} is eligible for vote`);
    }
    else{
        console.log(`${Pname} is not eligible for vote`);
    }
}
age("rohit");


//Activity 5:Higher-Order Functions
//Task:9

const place=["shimla","kashmir","goa","mumbai"]

place.forEach( function (city){  //not return any thing
    console.log(city);
} )

//Task:10

function f1(numb) {
    console.log("First function is called:")
    return numb ;
}

function f2(number) {
    console.log("Second function print the number", number)
}

function higherOrder2(f1, f2, num) {
    // let number = num;
    let number = f1(num)

    f2(number)
}

higherOrder2(f1, f2, 6)