// create a function for closing button
var img = document.createElement("img");

function closeModal(){
  document.getElementById('close').style.display="none";
}


function openModal(imagePth){
  document.getElementById('close').style.display="block";

  //var btn = document.createElement("button");
  //document.getElementById('my_modal').appendChild(btn);
  //btn.innerText="click me"


  document.getElementById('close').appendChild(img);

  console.log(document.getElementsByClassName('my_modal'));

  img.src=imagePth;
  img.style.position="relative";
  img.style.left="50%";
  img.style.top="50%";
  img.style.transform="translate(-50%,-50%)";
  img.style.maxHeight="90vh";

}

closeModal();



// create a function for loading the image with a parameter that sets file path

// createElement var img =

// apprendChild(img) to modal

// style the image (style.src, style.position with left/right/transform, style.width, style.maxHeight)
