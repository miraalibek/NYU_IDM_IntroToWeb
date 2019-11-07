
// define starting position : we are going to move a whole row that has overflow: hidden

// what is the maximum position, or how long is the whole row so we know how to move it

// write the function to move the row with oneView, that would involve know what our position is and incrementing it

// we need an if statement to know when we can't move the row anymore

// should we hide arrow buttons when they are not used?






















/*var position=0;
var slides= document.getElementsByClassName("card");
document.getElementById('prev').style.display = "none";


var maxPos = 25*(slides.length-4);
console.log("max"+maxPos);


function oneView(n) {
  if(n===1 && position>=0 && position < maxPos){
    position=position+25;

    document.getElementById('thisMoves').style.left = "-"+position+"%";
  } else if (n===-1 && position>0 ){
    position=position-25;
    document.getElementById('thisMoves').style.left = "-"+position+"%";
  }
  document.getElementById('thisMoves').style.transition = "all .3s";

  //hide buttons when dont need them
  if (position>0 && position < maxPos){
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
  } else if (position===0){
    document.getElementById('prev').style.display = "none";
  } else if (position===200){
    document.getElementById('next').style.display = "none";
  }




}*/
