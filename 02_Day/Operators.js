//Activity 1 : Arithmetic Operations

const a= 500
const b=10000
console.log(a+b);

console.log(b-a);

console.log(a*b);

console.log(b/a);

const A=10
const B=3
console.log(10%3);


//Activity 2 :Assignment Operators
let C = 19;
console.log(C);
// use (+=) Operator 
C +=7;
console.log(C);

// use (-=) Operator 
C -=8;
console.log(C);

//Activity 3:Comparison Operators
if(A>B)
{
    console.log("A is Greater ");
}
else
{
    console.log("B is Greater");
}

if (A<C) {
    console.log("A is Less");
}
else
{
    console.log("C is Less");
}

const X=10
const Y=10
if(X >= Y)
{
    console.log("X is Greater and Equal to Y");
}
else
{
    console.log("not equal and Greater");
}


if(X<=Y)
{
    console.log("X is less and Equal to Y");
}
else
{
    console.log("X is not less and Equal");
}

if (X=='10')
{
    console.log("Yes");
}
else
{
    console.log("No");
}

if (X==='10') {
   console.log("Equal"); 
}
else{
    console.log("Not Equal");
}

if (X===Y) {
    console.log(`X => ${X} is Equal to Y=>${Y}`);
}

//Activity 4:Logical Operators
if(X===10 && Y===10)
{
    console.log("Both are equal to 10");
}else{
    console.log("not equal");
}


if (X==Y || Y===9) {
    console.log("X=Y ");
}
else{
    console.log("No");
}

if (X!==11) {
    console.log("Not Equal to 11");
} else {
    console.log("Equal to 11");
}



//Activity 4:Ternary Operator
(A>=0)?console.log("Positive"):console.log("Negative")