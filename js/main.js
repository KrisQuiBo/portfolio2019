
const drop = document.querySelector('.drop');
const activeElements = document.querySelectorAll(".active-element");
const hexag = document.querySelectorAll('.polyg-border');
let container = document.querySelectorAll('.container');
let cards = document.querySelectorAll('.card')
const about = document.getElementById('about');
var windowheight = window.innerHeight;
const skills = document.querySelector('.skills');
var scrollheight = document.body.scrollHeight;
let skillsHeight = getComputedStyle(skills).height.split('px')[0];
let hexagArea = document.querySelectorAll(".hexag");
let tiltHeadline = document.querySelectorAll('.tiltHeadline');
const upBtn = document.querySelector('.up');
const portHead = document.querySelector('.portHeader');
const closeBtn = document.querySelector('.closeBtn');
const cardsContainer = document.querySelector('.cards-container');
const gridComputedStyle = window.getComputedStyle(cardsContainer);

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM fully loaded and parsed');

  var toggledMenu = drop.addEventListener("mouseover", function() {
    activeElements.forEach(function(e){
        e.classList.add('active');
    });
  });

function toggleMenuOff(e) {
  activeElements.forEach(function(e){
    e.classList.remove('active');
  });
}

closeBtn.addEventListener('click', toggleMenuOff);

  hexag.forEach(function(e) {
    e.classList.add('rotate-it');
  });

  // function menuFix() {
  //   tiltHeadline.forEach(headline => {
  //   if (document.documentElement.scrollTop > 80 || document.body.scrollTop > 80) {
  //     tiltHeadline.removeClass('tiltHeadline');
  //     // tiltHeadline.addClass('tiltStart');
  //   } else if (document.documentElement.scrollTop < 80 || document.body.scrollTop < 80) {
  //       document.getElementById('tilt').classList.add('tilt');
  //       // document.getElementById('tilt').classList.remove('tiltStart');
  //     }
  //   });
  // }

  function revealUpBtn() {
    let bottomAbout = about.getBoundingClientRect().bottom;
    if(bottomAbout < 0) {
      upBtn.classList.add('show');
    } else {
      upBtn.classList.remove('show');
    }
  }

function toggleAngle() {
    this.classList.toggle('tilt');
  }
 tiltHeadline.forEach(tilt => {tilt.addEventListener('mouseover', toggleAngle)});
 
  function scrollHighlight() {
    if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
      document.querySelector('.myName').classList.add('highlightName');
    } else if (document.documentElement.scrollTop < 155 || document.body.scrollTop < 155){
      document.querySelector('.myName').classList.remove('highlightName');
    }
  }

  function scrollBorder() {
    if (document.documentElement.scrollTop > 800 || document.body.scrollTop > 1260) {
      document.querySelector('.skills').classList.add('highlight');
    } else if (document.documentElement.scrollTop < 955 || document.body.scrollTop < 955){
      document.querySelector('.skills').classList.remove('highlight');
    }
  }

  function scrollSlide() {
    if (document.documentElement.scrollTop > 975 || document.body.scrollTop > 975) {
      portHead.classList.add('slideOver');
    } else if (document.documentElement.scrollTop < 600 || document.body.scrollTop < 600) {
      portHead.classList.remove('slideOver');
    }
  }

window.onscroll = function() {
    scrollHighlight();
    scrollBorder();
    scrollSlide();
    revealUpBtn();
    // menuFix();
  };








});
