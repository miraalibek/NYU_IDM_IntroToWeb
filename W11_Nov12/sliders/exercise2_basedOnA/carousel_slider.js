
// get all the cards into an array

// what is current index or where we start

// use a loop to display only 3; make it into a function

// execute that function at loading

// oneView function: increment current index to display next 3 (!but need to clear the old ones:)

// so write clearAll function with for loop

// what to do when go to the end of >> how to figure out the showRemainder

// alternate color (if statment for odd and even)












// this is full code below

/*var current = 0;
var slides= document.getElementsByClassName("card");


// show only the first 3 before we press any buttons
function displayThree(){
  for (var i = current; i < current+3; i++) {

    slides[i].style.display="block";


    // alternate the color

    if (i===0){
    //  console.log("even");
      slides[i].style.backgroundColor="#161c73";
    } else if (i % 2 ===0){
    //  console.log("even");
      slides[i].style.backgroundColor="#161c73";
    } else{
    //  console.log("odd");
      slides[i].style.backgroundColor="#39118f";
    }

  }

}



displayThree(); //execute at loading



// clear all
function clearAll(){
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
    slides[i].style.order="0"; // this is default order for flex items, just sets them back to what the order is in html
  }
}

function showRemainder(){
  //calculate remainder
  var remnant = 3-(slides.length-current);
  if (remnant<=0 ){

    displayThree();

  } else {
    //show current+
    for (var i = current; i < slides.length; i++) {
        slides[i].style.display="block";

    }
    //show remainder
    for (var i = 0; i < remnant; i++) {
        slides[i].style.display="block";
        slides[i].style.order="3"; // flex item order, append this baby at the end not at the front

    }
  }
}




function oneView(n){
  if (current<slides.length-3){               // if current index of card is less than 12-3 (or is at the last screen)
    clearAll();                               // clear all first
    current+=n;

    if (current>=0){                          // then increment current
      displayThree();                         // display new set of cards

    } else if (current<0){
      current = (slides.length-current)-3;
      showRemainder();
    }

  } else if (current>=slides.length-3 && current<slides.length){

    clearAll();
    current+=n;
    showRemainder();

    if(current===slides.length){
      current=0;
    }
  }

}*/
