const navigation = document.querySelector(".navigation");
const dropDown = document.getElementById('drop-content');
const drop = document.querySelector('.drop');
const activeElements = document.querySelectorAll(".active-element");
const hexag = document.querySelector('.polyg-border');



var toggledMenu = drop.addEventListener("click", function(){
     // forEach is not supported in IE11
  activeElements.forEach(function(e){
      e.classList.toggle("active");
      console.log('click');
  });
     // for(var activated = 0; activated < activeElements.length; activated++){
     //      activeElements[activated].classList.toggle("active");
     // }
})

const addRotate = () => {
  hexag.classList.add('rotate-it');
}
hexag.addEventListener('click', addRotate);

//
//
// drop.addEventListener('click', showDrop);
//
// function showDrop() {
//   dropDown.classList.toggle("hide");
//   dropDown.style.position="absolute";
// }
