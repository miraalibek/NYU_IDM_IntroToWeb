var current=0;
var n=0;
var slides = document.getElementsByClassName("one_slide");

// first show no slides and then show the current one
function showSlides(n) {

  if (current===0 && n===-1) {current=slides.length;showSlides(0);};
  current+=n;

///  if(n===-1){slides[current].classList.add("slideRight")} else {slides[current].classList.remove("slideRight");};

  if (current>=0 && current<slides.length){
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('activeSlide');
    }
    slides[current].classList.add("activeSlide");

  }else{

    if (current===slides.length && n===1){current=0;showSlides(0);};

  }
}

showSlides(0);//execute onload
