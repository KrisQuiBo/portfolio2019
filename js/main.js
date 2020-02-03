const navigation = document.querySelector(".navigation");
const dropDown = document.getElementById('drop-content');
const drop = document.querySelector('.drop');
const activeElements = document.querySelectorAll(".active-element");
const hexag = document.querySelectorAll('.polyg-border');
let a = document.querySelectorAll('a');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('span.close');
let cards = document.querySelectorAll('.container');
const id= document.getElementById('about');
var windowheight = window.innerHeight;
const skills = document.querySelector('.skills');
var scrollheight = document.body.scrollHeight;
let skillsHeight = getComputedStyle(skills).height.split('px')[0];
let hexagArea = document.querySelectorAll(".hexag");



window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM fully loaded and parsed');

  // var toggledMenu = drop.addEventListener("click", function() {
  //   activeElements.forEach(function(e){
  //       e.classList.toggle("active");
  //       console.log('click');
  //   });
  // });
  hexag.forEach(function(e) {
    e.classList.add('rotate-it');
  });

  function menuFix() {
    if (document.documentElement.scrollTop > 80 || document.body.scrollTop > 80) {
      document.getElementById('tilt').classList.remove('tilt');
      document.getElementById('tilt').classList.add('tiltStart');
    } else if (document.documentElement.scrollTop < 80 || document.body.scrollTop < 80) {
        document.getElementById('tilt').classList.add('tilt');
        document.getElementById('tilt').classList.remove('tiltStart');
      }
  }

  function scrollHighlight() {
    if (document.documentElement.scrollTop > 195 || document.body.scrollTop > 195) {
      document.querySelector('.myName').classList.add('highlightName');
    } else if (document.documentElement.scrollTop < 155 || document.body.scrollTop < 155){
      document.querySelector('.myName').classList.remove('highlightName');
    }
  }

  function scrollBorder() {
    if (document.documentElement.scrollTop > 1060 || document.body.scrollTop > 1260) {
      document.querySelector('.skills').classList.add('highlight');
    } else if (document.documentElement.scrollTop < 955 || document.body.scrollTop < 955){
      document.querySelector('.skills').classList.remove('highlight');
    }
  }

  function scrollSlide() {
    if (document.documentElement.scrollTop > 975 || document.body.scrollTop > 975) {
      document.querySelector('.portHeader').classList.add('slideOver');
    } else if (document.documentElement.scrollTop < 600 || document.body.scrollTop < 600) {
      document.querySelector('.portHeader').classList.remove('slideOver');
    }
  }

// const revealLinks = (e) => {
//   for (let i=0; i < hexag.length; i++) {
//     hexag[i].classList.add("revealLinks");
//   }
// }
// for(let i=0; i<hexagArea.length;i++) {
// hexagArea[i].addEventListener('mouseover', function(e) {
//   for(let i=0;i<hexagArea.length;i++) {
//     hexag[i].classList.add("revealLinks");
//   // revealLinks();
//   }
// });
// }


var f = function(e) {

  // the event target, can be any element in the page at this point
  var t = e.target;

  // check if the event target is an img element
  if(t.tagName.toLowerCase() == 'img') {

    // then toggle its active class
    t.classList.toggle('revealLinks');
  }
}

// // add listeners to the window (or on whatever image container you have)
// window.addEventListener('mouseover', f /* call this function f on mouseover */, false);
// window.addEventListener('mouseout', f, false);
//
// for(let i=0; i<cards.length;i++) {
//   cards[i].addEventListener('mouseover', () => {
//     let visLink = document.querySelectorAll('repoLink');
//     visLink[0].classList.toggle('showLink');
//   })
// }


// for(let i=0; i<cards.length; i++) {
//   cards[i].addEventListener('mouseover', ()=> {
//     let addLinks = "";
//     addLinks +=
//     `<p class="repoLink">
//       <a href="https://github.com/KrisQuiBo/portfolio2019/tree/gh-pages">Take me to gitHub repo</a><br><br>
//       <a href="https://krisquibo.github.io/web_app_dashboard_v3.1/">Take me to example</a>
//     </p>`;
//     hexagArea.innerHTML = addLinks;
//   });
// }
//
// var f = function(e) {
//
//   // the event target, can be any element in the page at this point
//   var t = e.target;
//
//   // check if the event target is an img element
//   if(t.className.toLowerCase() == 'polygBorder') {
//
//     // then toggle its active class
//     t.classList.toggle('revealLinks');
//   }
// }

// add listeners to the window (or on whatever image container you have)
window.addEventListener('mouseover', f /* call this function f on mouseover */, false);
window.addEventListener('mouseout', f, false);


// hexagArea.addEventListener('mouseout', function() {
//   hexag[i].classList.remove("revealLinks");
// })

  // function scrollSkills() {
  //   // let skillsHeight = getComputedStyle(header).height.split('px')[0];
  //   if(skillsHeight + (window.pageYOffset  - skillsHeight) == 0) {
  //     skills.classList.add('.highlight');
  //   }
  // }
  //
  // window.onscroll = function() {
  //   scrollSkills();
  //   scrollEmbellish()
  // }

  window.onscroll = function() {
    scrollHighlight();
    scrollBorder();
    scrollSlide();
    menuFix();
  };








});
