'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
//SELECING ELEMENTS 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const header = document.querySelector('.header');
const allSections  = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log( document.getElementsByClassName('btn'));


//CREATING AND INSERT ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

//adds the element as fist child
// header.prepend(message);

//adds the element as last child
header.append(message);
// header.append(message.cloneNode(true));

//adds elements before or after the header element as sibling
// header.before(message);
// header.after(message);

//DELETE ELEMENTS
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//ATRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//NON-STANDART ATRIBUTE
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')
console.log(logo.getAttribute('src'));


const link = document.querySelector('.nav__link--btn')
console.log(link.href);
console.log(link.getAttribute('href'));


//DATA ATRIBUTES
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'i')
logo.classList.remove('c', 'i')
logo.classList.toggle('c')
logo.classList.contains('c')

//DONT USE
logo.clasName = 'jonas'
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log('height/width viewport', document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset, 
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//EVENT LISTENER AND EVENT HANDLERS

const h1 = document.querySelector('h1');
const alertH1 = (e) => {
  alert('addEventListener: great! you are reading the heading');
  
  
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = (e) => alert('addEventListener: great! you are reading the heading')










