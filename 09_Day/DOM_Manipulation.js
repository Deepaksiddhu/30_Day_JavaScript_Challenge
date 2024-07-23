//Activity 1:Selecting and Manipulating Elements
//Task 1:Select an Html element by its ID and change its text content.

document.getElementById("First-heading").innerHTML="<h1>This is java script challenge</h1>"


console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 2:select html element by its class 
const class1 =document.querySelector(".tree") 

class1.style.backgroundColor='black'
class1.style.color='#ffff'
console.log("=>-------------------------------------------------------------------------------------------------------------<=");


//Activity 2:Creating and Appending Elements
//Task 3:create a new div element with some text content and append it ti the body.

const div = document.createElement("div")
console.log(div);
div.className="newDiv"
div.setAttribute("title","generated title")
div.style.backgroundColor="green"
div.style.padding="5px"
// div.innerText="This text is inserted by DOM Manipulation"
const addText=document.createTextNode("This text is inserted by DOM Manipulation")
div.appendChild(addText)

document.body.appendChild(div)

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 4:Create a new li element and add it to an existing ul list

const list = document.createElement("li")
list.className = "newList"
list.style.backgroundColor = "orange"
list.style.border = "solid black 5px"
list.textContent = "Python";


const unorderedList = document.querySelector(".unOrdList");
unorderedList.appendChild(list)

function addList(langName){
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector(".unOrdList").appendChild(li)
}
addList("C++")
addList("Java")
addList("React")
addList("Html")

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 3:Removing Elements
//Task 5:Select an Html element and remove it from the DOM.
const htmlElement = document.querySelector(".Remove")
htmlElement.remove()

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 6:Remove the last child of a specific Html element
const lastLang = document.querySelector("li:last-child")
lastLang.remove()
console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 4:Modifying Attributes and classes
//Task 7:Select an html element and change one of its attributes(eg.src of an img tag)
const image =document.querySelector(".image")
image.src = 'https://images.pexels.com/photos/26796134/pexels-photo-26796134/free-photo-of-desert-rainbow.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
console.log("=>-------------------------------------------------------------------------------------------------------------<=");
//Task 8:Add and remove a css class to/from an html element.

const paragraph = document.querySelector(".paragraphs")
paragraph.classList.add("red")
paragraph.classList.remove("paragraphs")

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 5:Event Handling
//Task 9:Add a click event listener to a button that changes the text content of a paragraph.
const btn =document.querySelector(".button");
const para2=document.querySelector(".para2")

btn.addEventListener('click',(e)=>{
    console.log(e);
    para2.textContent="This is change on click button"
})

console.log("=>-------------------------------------------------------------------------------------------------------------<=");
//Task 10:add a mouseover event listener to an element that changes its border color
const myBox = document.getElementById("hoverElement");
myBox.addEventListener("mouseover",e =>{
    e.target.style.backgroundColor='Yellow';
    e.target.textContent="Don't do it";
})

myBox.addEventListener("mouseout",e =>{
    e.target.backgroundColor = 'red';
    e.target.textContent = "Click Me"
})

console.log("=>-------------------------------------------------------------------------------------------------------------<=");
