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
