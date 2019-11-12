
// Get all the slides > array getElementsByClassName

// what is current/active slide use classList.add() to set initial slides

// set the onclick event for buttons onclick=slideIt >> need to use loop to get through all bttn

// now define function slideIt >> what happens?

// first which button is this? next or previous >> getAttribute('id'). check out 'this'

// now we need to switch active class: take it from the active one and give it to the next slides

// what happens when you get to the end or have to go back >> if statement with those conditions










// this is the full code


/*
// Get all the slides
var current=0;
var slides= document.getElementsByClassName("oneView");
var len = slides.length;
//console.log(len+" len");
var activeSlide = slides[current];
activeSlide.classList.add("active");



// all the buttons in the bttn array, make them clickable
for(i=0;i<2;i++){
  var bttn = document.getElementsByClassName('bttn')[i];
  bttn.onclick = slideIt;
  //or document.getElementsByClassName('bttn')[i].onclick = slideIt;
}

function slideIt() {
  var which=this.getAttribute("id");

  if (which == "next"){

    // Move first slide with active class to the end, so the user can call it up later

    // move the class to the next slide
    activeSlide.classList.remove("active");

    if(current<len-1){
      current+=1;
      //console.log("yep");
      activeSlide = slides[current];
      activeSlide.classList.add("active");
    } else{

      //console.log("reached the end");
      current=0;
      activeSlide = slides[current];
      activeSlide.classList.add("active");
    }
  }else{

    // move the class to the next slide
    activeSlide.classList.remove("active");

    if(current>0){
      console.log("going down");
      current-=1;
      activeSlide = slides[current];
      activeSlide.classList.add("active");


    }else{
      current=len-1;
      activeSlide = slides[current];
      activeSlide.classList.add("active");
    }
  }


}

*/
