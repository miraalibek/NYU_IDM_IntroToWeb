
var current = 0;
var slides= document.getElementsByClassName("oneView");
//

slides[current].style.display ="flex";
console.log(slides.length);

function oneView(n) {
  slides[current].style.display ="none";

  if (n===1){
    if(current<slides.length-1){
      current++;
      slides[current].style.display ="flex";
    } else{
      current=0;
      slides[current].style.display ="flex";
    }

  }else if (n===-1){
    if(current===0){
      current=slides.length-1;
      slides[current].style.display ="flex";
    }else{
      current--;
      slides[current].style.display ="flex";
    }
  }

}
