var myVar;



function preloading() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("my_header").style.display = "block";
}
