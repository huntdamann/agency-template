console.log('Hello WOld ');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const workDropDown = document.querySelector('.menu__dropdown-work');
const tab = document.querySelector('.tab');
const n = document.getElementById('name');
const n_two = document.getElementById('name-2');

let menuOpen = 0;
let workmenuOpen = 0;
let agencymenuOpen = 0;

function dropDown() {

  if (workmenuOpen == 0) {
    workDropDown.classList.toggle('showWork');
    console.log('Show Work Dropdown');
    workmenuOpen = 1;
  }
  else {
    workDropDown.classList.toggle('showWork');
    console.log('Show Work Dropdown');
    workmenuOpen = 0;
  }

}


function mouseOver() {
  if (menuOpen == 0) {

    menuBtn.classList.add('open');
    menu.classList.toggle('showMenu');
    console.log('Show Menu');
    menuOpen = 1;
  }
  else {
    menuBtn.classList.remove('open');
    menu.classList.toggle('showMenu');
    console.log('Close Menu');
    menuOpen = 0;
  }
}

menuBtn.addEventListener('click', mouseOver);
tab.addEventListener('click', dropDown);

