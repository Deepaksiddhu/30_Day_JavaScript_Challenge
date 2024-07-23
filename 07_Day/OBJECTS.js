//Activity 1:Object creation and Access
//Task1:
let book={
    titles:"DSA",
    author:"DSA sir",
    year:"2024"
}
console.log(book);
console.log("-----------------------------------------------------");


//Task 2: Access title and author property of book
console.log(book.titles);
console.log(book["author"]);
console.log("-----------------------------------------------------");


//Activity 2:Object Methods\
//Task 3:Add method to book obj
book={
    titles:"DSA",
    author:"DSA sir",
    year:"2024",
    RtTitleAuthor() {
        return (`The title of book is ${this.titles} and author of book is ${this.author}`)
    }
}

let returnVal=book.RtTitleAuthor()
console.log(returnVal);
console.log("-----------------------------------------------------");


//Task 4:Add a method to the book object that takes a parameter (year)
book.updateYear=(year)=>{
    book.year=year;
};
book.updateYear(2025);
console.log(book);
console.log("-----------------------------------------------------");


//Activity 3:Nested Objects
//Task 5:create a nested object representing a library with properties kike name and books 

let library ={
    name:"new library",
    books:[{
        title:"java script :the good Parts",
        author:"Douglas Crockford",
        year:2008,
    },
    {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: 2008
    },
    {
        title: "Introduction to the Theory of Computation",
        author: "Michael Sipser",
        year: 1996
    },
    {
        title: "You Don't Know JS: Up & Going",
        author: "Kyle Simpson",
        year: 2015
    },
],
};

console.log(library);
console.log("-----------------------------------------------------");


//Task :6 Access and log the name of the library and the titles of the books in the library
console.log(library.name);

const titleOfBooks=library.books.map(bookTitle => bookTitle.title);
console.log(titleOfBooks);
console.log("-----------------------------------------------------");


//Activity 4:The this keyword
function getInfo(){
    return `the title of book is ${this.titles} and author is ${this.author}`
}

book.getInfo=getInfo;

console.log(book.getInfo()); 
console.log("-----------------------------------------------------");


//Activity 5:Object Iteration
//Task 8:for in loop
for ( const properties in book) {
    console.log(`${properties}: ${book[properties]}`);
};
console.log("-----------------------------------------------------");

//Task 9:use Object.keys and Object.values method
console.log(Object.keys(book));
console.log(Object.values(book));
console.log("-----------------------------------------------------");

