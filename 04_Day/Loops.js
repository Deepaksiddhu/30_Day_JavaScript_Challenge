//Activity 1:For Loop
//Task :1

for (let index = 1; index < 11; index++) {
    console.log(index);
    
}

//Task :2
let a=5;
for (let index = 1; index < 11; index++) {
    a
    console.log(a+"*"+index +"="+a*index);
}

//Activity 2:While Loop
//Task:3
let X=1
let count=0
while (X<=10) {
    count =count+X
    X++;
}
console.log(count);
//Task:4
let Y=10
while (Y>=1){
    console.log("=>:"+Y);
    Y--;
}

//Activity 3:Do...While Loop
//Task:5
let Z=1
do {
    console.log(Z);
    Z++;
} while (Z<=5);

//Task:6
let n=1
let ans=1;
if(n===0||n==1){
    console.log("Factorial of "+n+" is :=>"+ans);
}else{let i=2
do {
    ans=ans*i
    i++
} while (i<=n);
console.log("Factorial of "+n+" is :=>"+ans);}

//Activity 4:Nested Loops

//Task :7


for (let i = 1; i <=5; i++) {
    for (let j = 1; j <=i; j++) {
        process.stdout.write("*");
    }
    console.log()
}

//Activity 5:Loop Control Statements
//Task :8
for (let index = 1; index <=10; index++) {
    if(index===5){
        continue
    }
    console.log(index);
}

//Task:9
for (let index = 1; index <=10; index++) {
    if (index===7) {
        break;
    }
    console.log(index);
}