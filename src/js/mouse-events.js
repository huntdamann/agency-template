console.log('Hello WOld ');
const temp = document.querySelector('#logo-handle');
const n = document.getElementById('name');
const n_two = document.getElementById('name-2');

let show = 0;

function mouseOver() {
  if (show == 0) {
    n.classList.toggle('show');
    n_two.classList.toggle('show');
    console.log('Show Text');
    show = 1;
  }
}

function func1() {
  if (show == 1) {
    show = 0;
    n.classList.toggle('show');
    n_two.classList.toggle('show');
    console.log('Hide Text');
  }
}
temp.addEventListener('mouseover', mouseOver);
temp.addEventListener('mouseout', func1);
