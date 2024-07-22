console.log('Event handling');

//Basic
//Task 1:  Add a click event listener to a button that changes the text content of a paragraph.

const changePeraButton = document.querySelector('.change-paragraph');
const paragraph = document.querySelector('.main-content');
changePeraButton.addEventListener('click', () => {
  paragraph.textContent = 'lorem parvej change content';
});

//Task 2 :  Add a double-click event listener to an image that toggles its visibility.

const toggleButton = document.querySelector('.toggle-image');

const coverImage = document.querySelector('.cover-image');

toggleButton.addEventListener('dblclick', () => {
  coverImage.classList.toggle('hidden');
});

//Task 3:  Add a mouseover event listener to an element that changes its background color.

changePeraButton.addEventListener('mouseover', () => {
  changePeraButton.style.backgroundColor = 'red';
});
changePeraButton.addEventListener('mouseout', () => {
  changePeraButton.style.backgroundColor = 'white';
});

/** Activity 3: Keyboard Events */

//Task 5 :  Add a keydown event listener to an input field that logs the key pressed to the console.
document.querySelector('.name-input').addEventListener('keydown', (event) => {
  const ky = event.code;
  console.log(ky, event.keyCode);
  //Task 6 : show current value of input field
  console.log('current value', event.target.value);
});

//**Activity 4: Form Events */

//Task 7 :  Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector('.contact-form');

// Function to get form data
function getFormData(form) {
  return Object.fromEntries(new FormData(form));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = getFormData(form);

  console.log(formData, 'Form Data submit');
});

const selectValue = document.querySelector('.select-value');
document.querySelector('.select-option').addEventListener('change', (e) => {
  const value = e.target.value;
  selectValue.textContent = value;
});

//** Activity 5: Event Delegation */

//Task 9 :  Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

document.getElementById('item-list').addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('delete-btn')) {
    console.log('Delete button clicked for item with ID:', event.target);
  }
});

//Task 10 :  Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById('parent');
parent.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.classList.contains('update')) {
      console.log('update successfully');
    }
    if (event.target.classList.contains('delete')) {
      console.log('delete successfully');
    }
  }
});
