import pageOne from './pageOne';
import pageTwo from './pageTwo';
import pageThree from './pageThree';

// const functionArray = [pageOne, pageTwo, pageThree];

import './styles.css';
const template = document.querySelector('#main');

// let buttons = document.querySelectorAll('.button');

// buttons.forEach((button, i) => {
//   button.addEventListener('click', () => {
//     template.innerHTML = '';

//     const currentButtonData = button.getAttribute('data-key');

//     if (i == currentButtonData) {
//       functionArray[i]();
//     }
//   });
// });

let buttonNav = document.querySelectorAll('.button');

buttonNav.forEach((button) => {
  // Loop
  button.addEventListener('click', function () {
    template.innerHTML = '';
    const getId = button.getAttribute('id');

    if (getId == 'pageOne') {
      pageOne();
    } else if (getId == 'pageTwo') {
      pageTwo();
    } else if (getId == 'pageThree') {
      pageThree();
    }
  });
});

// let buttonOne = document.getElementById('pageOne');
// let buttonTwo = document.getElementById('pageTwo');
// let buttonThree = document.getElementById('pageThree');

// buttonOne.addEventListener('click', () => {
//   template.innerHTML = '';
//   pageOne();
// });

// buttonTwo.addEventListener('click', () => {
//   template.innerHTML = '';
//   pageTwo();
// });

// buttonThree.addEventListener('click', () => {
//   template.innerHTML = '';
//   pageThree();
// });

pageOne();
