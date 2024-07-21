'use strict';
//**  Selecting and manipulation element */

//Task 1:  Select an HTML element by its ID and change its text content.
const headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Nav Bar';

//Task 2 :  Select an HTML element by its class and change its background color.

const menu = document.getElementsByClassName('menu');

for (let index = 0; index < menu.length; index++) {
  let menuItem = menu[index];
  menuItem.style.backgroundColor = 'red';
}

/** Activity 2: Creating and Appending Elements */

//Task 3 :  create a new div element with some text content and append it to the body.
const root = document.getElementById('root');
const sectionEl = document.createElement('div');

sectionEl.innerHTML = `<h1>About user</h1>
 <p>this is about me</p>
`;

root.appendChild(sectionEl);

//Task 4 : create a new li  element and add it to an existing ul element

const mainMenu = document.getElementById('main-menu');

const contactUs = document.createElement('li');
contactUs.classList.add('menu-item');
contactUs.innerText = 'Contact us';

mainMenu.appendChild(contactUs);

//** Activity 3: Removing Elements */
//task 5 :  Select an HTML element and remove it from the DOM.

sectionEl.remove();

//Task 6 : remove last child from specific element

console.log(mainMenu.removeChild(mainMenu.lastChild));

//**Activity 4: Modifying Attributes and Classes */

//Task 7 :  Select an HTML element and change one of its attributes (e.g.,

const imgInfo = document.querySelector('.info-cover');
console.log(imgInfo, 'img');
const newSrc =
  'https://images.pexels.com/photos/17696222/pexels-photo-17696222/free-photo-of-man-with-backpack-walking-down-stairs-by-wall.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load';
imgInfo.setAttribute('src', newSrc);

//Task 8 : Add and remove a CSS class to/from an HTML element.

imgInfo.classList.add('main-image');
imgInfo.classList.remove('info-cover');

//** Activity 5: Event Handling */

//Task 9:  Add a click event listener to a button that changes the text content of a paragraph.

const button = document.createElement('button');
const p = document.createElement('p');
p.textContent = `before button submit button click content`;
button.textContent = 'Submit';
root.appendChild(p);
root.appendChild(button);
button.addEventListener('click', () => {
  p.textContent = 'after submit button click content ';
});

//Task 10 :  Add a mouseover event listener to an element that changes its border color.

button.addEventListener('mouseover', () => {
  button.style.borderColor = 'green';
});
