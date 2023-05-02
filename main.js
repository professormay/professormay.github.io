                /* sticky header */
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

                    /* слайдер */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { 
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
 
  for (let slide of slides) {
    slide.style.display = "none";
}

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";    
    } 

