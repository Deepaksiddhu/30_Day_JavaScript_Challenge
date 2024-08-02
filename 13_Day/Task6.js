//Import the entire lodash library
const _=require('lodash');

//use the chunk function from lodash
const array =[1,2,3,4,5,6,7,8,9];
const chunkedArray =_.chunk(array,3);

console.log(chunkedArray);
//Output:[[1,2,3],[4,5,6],[7,8,9]]

