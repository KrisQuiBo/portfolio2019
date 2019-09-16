const navigation = document.querySelector(".navigation");
const dropDown = document.getElementById('drop-content');
const drop = document.querySelector('.drop');
const activeElements = document.querySelectorAll(".active-element");
const hexag = document.querySelectorAll('.polyg-border');
let a = document.querySelectorAll('a');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('span.close');
let cards = document.querySelectorAll('.container');

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM fully loaded and parsed');

  var toggledMenu = drop.addEventListener("click", function() {
    activeElements.forEach(function(e){
        e.classList.toggle("active");
        console.log('click');
    });
  });
  hexag.forEach(function(e) {
    e.classList.add('rotate-it');
  });
  closeBtn.addEventListener('click', (e) => {
    modal.style.display = "none";
  });

  window.addEventListener('scroll', function(e) {
    for(let i=0; i < cards.length; i++) {
      let scrolled = window.pageYOffset;
      cards[i].style.top = -(scrolled * 5.5) + 'px'
      }
  });

});
