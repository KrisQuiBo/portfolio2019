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






  // closeBtn.addEventListener('click', (e) => {
  //   modal.style.display = "none";
  // });
  //
  // window.addEventListener('scroll', function(e) {
  //   for(let i=0; i < cards.length; i++) {
  //     let scrolled = window.pageYOffset;
  //
  //     var scrollamount = (scrolled / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
  //
  //   // cards[i].style.top = -100 + scrollamount + '%';
  //       // cards[i].style.top = -(scrolled * 5.5) + scrollamount + '%';
  //       // cards[i].style.top = -(scrolled * 5.5) + 'px';
  //       cards[i].style.top = -(scrolled * 5.5) + 'px';
  //       windowheight = scrollheight +(scrolled * 5.5) + 'px';
  //   }
  // });

 //
 //
 //  function parallaxbubbles(){
 //   var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 //   var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
 //   bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
 //   bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
 //   fish.style.left = -100 + scrollamount + '%';
 // }


});
