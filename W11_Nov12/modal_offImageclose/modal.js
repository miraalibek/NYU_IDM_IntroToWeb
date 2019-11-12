var img = document.createElement("img");

function closeModal(){
  document.getElementById('my_modal').style.display="none";
  document.getElementById('my_modal').removeChild(img);
}

function loadImg(imagePth){
  document.getElementById('my_modal').style.display="block";

  //var btn = document.createElement("button");
  //document.getElementById('my_modal').appendChild(btn);
  //btn.innerText="click me"


  document.getElementById('my_modal').appendChild(img);

  img.src=imagePth;
  img.style.position="relative";
  img.style.maxHeight="90vh";
  img.style.left="50%";
  img.style.top="50%";
  img.style.transform="translate(-50%,-50%)";

}


// close modal off-image // script 1 using window object
/*

var modal = document.getElementById("my_modal")

window.onclick = function(event) {
  console.log("yep");
  if (event.target == modal) {
     modal.style.display = "none";
  }
}
*/



// close off-image // script 2 using window object

document.getElementById("my_modal").onclick = doStuff;

function doStuff() {
  //console.log("clickedinside");
  //console.log("nodeName  "+event.target.nodeName); // nodeName is element name
  //console.log("className  "+event.target.className); // class is element name
  //console.log("id  "+event.target.id);//id of the target

  if(event.target == img){
    console.log("dont close it!");
  }else{
    console.log("now you can close it!");
    document.getElementById("my_modal").style.display="none";
  }

}
