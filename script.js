const toggle = document.getElementById("toggle");
const toggleOff = document.getElementById("toggle-off");
const navList = document.getElementById("navList");

const desktopSize = window.matchMedia('(min-width: 768px)') 

desktopSize.addEventListener('change', sizeChange);



toggle.addEventListener('click', navVisible);
toggleOff.addEventListener('click',navInvisible);
/*https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci*/

function sizeChange() {
    if (desktopSize.matches) {
        navList.style.visibility = 'visible';
        toggle.style.visibility = 'hidden';
        toggleOff.style.visibility = 'hidden';
    } 
    console.log("sizechange")
}

function navVisible() {

    if (navList.classList.visibility = 'hidden') {
        navList.style.visibility = 'visible';
        toggle.style.visibility = 'hidden';
        toggleOff.style.visibility = 'visible';
    } 
    console.log('visible');   
}

function navInvisible() {
    if (navList.style.visibility = 'visible') {
        navList.style.visibility = 'hidden';
        toggle.style.visibility = 'visible';
        toggleOff.style.visibility = 'hidden';
    }
    console.log("invisible");
}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);



