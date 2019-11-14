
// get all the cards
var slides= document.getElementsByClassName("card");
console.log(slides.length);

// define initial position
// what is the max position and increment
var position=0;

var maxPos = 25*(slides.length-4);


function oneView(n){
  if(n===1 && position>=0 && position < maxPos){
    position += 25; //assignment operator means position=position+25;
    document.getElementById('thisMoves').style.left = "-"+position+"%";
  } else if (n===-1 && position>0 ){
    position -= 25; //assignment operator means position=position-25;
    document.getElementById('thisMoves').style.left = "-"+position+"%";
  } else if (n===1 && position===200){
    //if we are trying to move forward and are at the very end, then go back to initial position
    position = 0;
    document.getElementById('thisMoves').style.left = "0";
  } else if (n===-1 && position===0){
    //console.log("here");
    document.getElementById('thisMoves').style.left = "-200%";
    position=200;
  }

}







// what is the max position and increment

// write a function to increment position with each click

// if statements and conditions for forward/backwards and when reaches maxPos or 0















/// this is the code

/*

var position=0;
var slides= document.getElementsByClassName("card");


var maxPos = 25*(slides.length-4);
console.log("max"+maxPos);


function oneView(n) {
  if(n===1 && position>=0 && position < maxPos){
    position += 25; //assignment operator means position=position+25;
    document.getElementById('thisMoves').style.left = "-"+position+"%";
  } else if (n===-1 && position>0 ){
    position -= 25; //assignment operator means position=position-25;
    document.getElementById('thisMoves').style.left = "-"+position+"%";
  } else if (n===1 && position===200){
    //if we are trying to move forward and are at the very end, then go back to initial position
    position = 0;
    document.getElementById('thisMoves').style.left = "0";
  } else if (n===-1 && position===0){
    //console.log("here");
    document.getElementById('thisMoves').style.left = "-200%";
    position=200;
  }

  //set up transition, make sure there is initial left set in css, so transition does apply
  document.getElementById('thisMoves').style.transition = "all .3s";
}*/
