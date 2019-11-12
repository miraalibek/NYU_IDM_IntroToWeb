
var current = 0;
var slides= document.getElementsByClassName("card");
console.log(slides.length);

// show only the first 3 before we press any buttons
for (var i = 0; i < 3; i++) {
  slides[i].style.display="block";
}

function oneView(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }

  if (current<slides.length-3){
    current=current+n;

  }else{
    current=0;

  }

  if (current<0 && n===-1){
    //more stuff here
  }

  for (var i = current; i < current+3; i++) {
    slides[i].style.display="block";
  }

}
