//Activity 1 :If-Else Statements

const a=-1;
if (a>0) {
    console.log("Number is positive");
} 
else if(a<0){
    console.log("Number is negative");
}
else if(a===0)
{
    console.log("Number is Equal to Zero");
}

const age =19;
if (age>=18) {
    console.log("Person is Eligible for voting");
} else {
    console.log("Person is Not Eligible for voting");
}



//Activity 2:Nested If-Else Statement

let num1=11
let num2=14
let num3=9

if (num1>num2) {
    if(num1>num3){
        console.log("Largest is"+num1);
    }else{
        console.log("Largest is"+num3);
    }
} else if(num2>num1){
    if(num2>num3){
        console.log("Largest is"+num2);
    }else{
        console.log("Largest is"+num3);
    }
}else{
    if(num3>num1)
    {
        console.log("Largest is"+num3);
    }else{
        console.log("Largest is"+num1);
    }

}


//Activity 3:Switch Case

let day =4
switch(day)
{
    case 1:
        console.log("Monday");
    break;

    case 2:
        console.log("Tuesday");
    break;

    case 3:
        console.log("Wednesday");
    break;

    case 4:
        console.log("Thursday");
    break;

    case 5:
        console.log("Friday");
    break;

    case 6:
        console.log("Saturday");
    break;

    case 7:
        console.log("Sunday");
    break;

    default :
        console.log("Enter number between 1 to 7");

}


//Task:4

const score= 55
switch (true) {
    case (score>=90 && score<=100):
        console.log("A");
    break;
    
    case (score>=80 && score<=89):
        console.log("B");
    break;
    
    case (score>=70 && score<=79):
        console.log("C");
    break;

    case(score>=60 &&score<=69):
        console.log("D");
        break;

    case(score<=60 && score >=0):
        console.log("fail");
    break;
    


    default:
        console.log("Enter score under 0 to 100");
    break;
}

//Activity 4:Conditional (Ternary)Operator

//Task 6:
let k=10;
(k%2===0)? console.log("number is positive: "+k) : console.log("number is negative :"+k)


//Activity 5:Combining 
//Task :7

const year =2004

if (year%4===0) {
    if(year%100===0){
        if(year%400===0){
            console.log("This is leap year :"+year);
        }else{
            console.log("It is not leap year"+year);
        }
    }else{
        console.log("This is leap year :"+year);
    }
} else {
    console.log("It is not leap year"+year);
}
