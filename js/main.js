const navigation = document.querySelector(".navigation");
const dropDown = document.getElementById('drop-content');
const drop = document.querySelector('.drop');
const activeElements = document.querySelectorAll(".active-element");
const hexag = document.querySelectorAll('.polyg-border');
let a = document.querySelectorAll('a');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('span.close');
let polygBorder = document.querySelectorAll('.polyg-border');
let cards = document.querySelectorAll('.container');

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');

    // window.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     let url = e.target.getAttribute('href');
    //     modal.style.display = "block";
    //     modal.innerHTML = `'<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src=${url}></iframe>'<span class="close">&times;</span>`;
    //
    // });


var toggledMenu = drop.addEventListener("click", function(){
  activeElements.forEach(function(e){
      e.classList.toggle("active");
      console.log('click');
  });
});


  hexag.forEach(function(e){
      e.classList.add('rotate-it');
});
closeBtn.addEventListener('click', (e) => {
  modal.style.display = "none";
});


// window.addEventListener('scroll', function(e) {
//   polygBorder.forEach(function(poly) {
//   let scrolled = window.pageYOffset;
//   // const background = document.querySelector('.polyg-border');
//   polygBorder.style.top = -(scrolled * 0.3) + 'px'
//   });
// });

window.addEventListener('scroll', function(e) {
  for(let i=0; i < cards.length; i++) {
  let scrolled = window.pageYOffset;
  cards[i].style.top = -(scrolled * 2.5) + 'px'
  }
});


// window.addEventListener('scroll', function(e) {
//   let scrolled = window.pageYOffset;
//   const background = document.querySelector('.polyg-border');
//   background.style.top = -(scrolled * 0.2) + 'px'
// });


// window.addEventListener('scroll', function(e) {
//   let scrolled = window.pageYOffset;
//   let background = document.querySelectorAll('.hexag');
//   let backgroundArray = Array.from('background');
//   backgroundArray.forEach(hexag => {
//       backgroundArray.style.top = -(scrolled * 0.2) + 'px'
//   });
});
