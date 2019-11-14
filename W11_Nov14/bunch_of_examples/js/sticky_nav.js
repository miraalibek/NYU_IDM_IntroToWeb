window.onscroll = function() {stickyNav()};
var menu=document.getElementById('my_nav');

//var menuLoc=menu.getBoundingClientRect().top ;

function stickyNav(){

  var menuLoc=window.pageYOffset ;

  if (menuLoc > 0){
    //so now it's sticky, so add some styles
    menu.classList.add("sticky");
  } else if(menuLoc ===0){
    menu.classList.remove("sticky");
  }

  
}
