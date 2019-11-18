var clicky = document.getElementById('clicky');
var cursor = document.getElementById('newCursor');


clicky.onmousemove=function() {getCoord(event)};

function getCoord(e){
  //this is where we are going to put stuff
  var x = e.clientX;
  var y = e.clientY;
  var pageLoc=window.pageYOffset;
  var clickyLoc=clicky.offsetTop;
  var yCursorLoc=y+(pageLoc-clickyLoc);
  console.log(yCursorLoc);

  cursor.style.left=x+"px";
  cursor.style.top=yCursorLoc+"px";
}

/*var clicky = document.getElementById('clicky');
var cursor = document.getElementById('newCursor');

clicky.onmousemove=function() {getCoord(event)}; /// define what happens on the event
//window.onscroll=function() {getCoord(event)};
//var testDiv = document.getElementById("clicky").offsetTop;

//console.log(testDiv);

function getCoord(e){
  var x = e.clientX;
  var y = e.clientY;
  var pageLoc=window.pageYOffset;
  var clickyLoc=clicky.offsetTop;
  var yCursorLoc=y+(pageLoc-clickyLoc);
  console.log(yCursorLoc);

  //console.log(yPage + ", " + y  ); //notice that coordinates are absolute, not relative
  //console.log(clicky.offsetParent);
  //console.log(clicky.offsetTop);

  // how much image in the frame


  cursor.style.left=x+"px";
  cursor.style.top=yCursorLoc+"px";
}*/
