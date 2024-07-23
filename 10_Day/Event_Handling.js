//Activity 1:Basic Event Handling
//Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.getElementById("button");
const para =document.querySelector(".para");

btn.addEventListener('click',e =>{
    para.textContent = "button is clicked"
})

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 2:Add a double-click event listener to an image that toggles its visibility

const img = document.getElementById("myImage");

img.addEventListener('dblclick',e =>{
    if (img.style.display==='none') {
        img.style.display = 'block';
    }else{
        img.style.display = 'none'
    }
});

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 2:Mouse Events
//Task 3:Add a mouseover event listener to an element that changes its background color.
const hover = document.querySelector(".hover");

hover.addEventListener('mouseover',e => {
    e.target.style.backgroundColor = 'Orange'
})

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 4:Add a mouseout event listener to an element that resets its background color

hover.addEventListener('mouseout',e =>{
    e.target.style.backgroundColor = 'chartreuse'
})

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 3:Keyboard Events
//Tasks 5:Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField =document.querySelector("#myInput");
inputField.addEventListener('keydown', e=>{
    console.log(`Key pressed : ${e.key}`);
});

console.log("=>-------------------------------------------------------------------------------------------------------------<=");
//Task 6:Add a  keyup event listener to an input field that display the current value in a paragraph.
const inputField2 = document.querySelector("#myInput2");
const disPara = document.querySelector(".disPara");


inputField2.addEventListener('keyup',e=>{
        disPara.textContent = inputField2.value;
});

console.log("=>-------------------------------------------------------------------------------------------------------------<=");


//Activity 4:form Events
//Task 7:Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector("#form");
form.addEventListener('submit',e => {
    e.preventDefault();
})

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 8:Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select = document.querySelector("#mySelect");
const disSeOp = document.querySelector(".disSeOp");

select.addEventListener('change',e => {
    disSeOp.textContent = select.value;
})
console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Activity 5:Event Delegation
//Task 9:Add a click event listener to a list that logs the text content of  the clicked list item using event delegation.

const list = document.getElementById('myList');

list.addEventListener('click', e => {
    if(e.target && e.target.nodeName == 'LI'){
        console.log(e.target.textContent);
    }
})

console.log("=>-------------------------------------------------------------------------------------------------------------<=");

//Task 10:Add an event listener to a parent element that listens for events from dynamically added child element.
const parentElement  = document.querySelector(".parentElement");

parentElement.addEventListener('click', e=>{
    if (e.target.matches('.your-child-element-class')) {
        console.log('Event from dynamically added child element : ',e.target);
    }
})




console.log("=>-------------------------------------------------------------------------------------------------------------<=");

const newChildElement = document.createElement('div')

newChildElement.classList.add('your-child-element-class');
newChildElement.textContent = 'Dynamically Added Child Element';
parentElement.appendChild(newChildElement);