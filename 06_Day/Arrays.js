//Activity 1:Array Creation and Access
//Task 1:

let numbers=[1,2,3,4,5]
console.log(numbers);


//Task 2:
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

//Activity 2:Array Methods(Basic)
//Task 3:push
numbers.push(6)
console.log(numbers);

//Task 4:pop
numbers.pop()
console.log(numbers);

//Task  5:shift
numbers.shift()
console.log(numbers);

//Task 6:unshift
numbers.unshift(1)
console.log(numbers);

//Activity 3:Array Methods (Intermediate)
//Task 7:map
let newNumbers=numbers.map( (item) => item + 20 )
console.log(newNumbers);

//Task 8:filter
newNumbers =numbers.filter( (num)=>{
    return num >2
} )
console.log(newNumbers);

//Task 9:reduce

const sumOfNumbers=numbers.reduce( (acc,currVal)=>{
    return acc + currVal},0);
console.log(sumOfNumbers);

//Activity 4:Array Iteration
//Task 10:use for loop on array
for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]); 
    
}

//Task 11:forEach on Array
numbers.forEach(element => {
    console.log(element+2);
});

//Activity 5:Multi-dimensional Arrays
//Task :12
const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);

//Task:13
for (let index = 0; index < matrix.length; index++) {
    for (let j= 0; j< matrix[0].length; j++) {
        console.log(`Elementt at matrix [${index}][${j}] is: ${matrix[index][j]}`);
    }
    
}