//MAKE SURE YOU HAVE JQUERY CDN IN YOUR HTML DOC


$(".slide_bttn").click(function(){

  var myself=$(this).attr("class");//prev or next? get the class
  var myParent =$(this).parent(); // finding out where this button is, what element is the parent
  var slides = myParent.find(".video");// then find all divs with video class in that parent only (so you do not move other sliders too)
  var numSlides=slides.length;//how many slides to scroll through
  var activeSlide = myParent.find('.active'); //which slide is active? ...make sure you have that class in css and in your html on the first slide

  if (myself=="next slide_bttn"){ //if its next button

    var nextSlide=activeSlide.next(); //what's the next slide
    slides.last().after(activeSlide); //put the first slide at the end of your slides
    myParent.find(".hiding").css({left:"25.5%"});//this is for animation, so do not need it or change it if you dont wnant it
    activeSlide.removeClass('active'); // remove active class from current slide
    nextSlide.addClass('active').addClass('anim'); // move active slide to your next slide and add animation class // makes that sliding motion
    myParent.find(".hiding").animate({left: "0px"},100); // more animation stuff if you want this puppy to slide

  } else if(myself=="prev slide_bttn"){ //if its prev button

    var nextSlide=slides.last();  // this time next slide is your last slide in the slides array
    myParent.find(".hiding").css({left:"-25.5%"}); // you move hiding part over so you can animate it in
    slides.first().before(slides.last()); //than move the last slide to the first spot
    activeSlide.removeClass('active'); // remove active class
    nextSlide.addClass('active').addClass('anim');// and add it to the next class + animation class
    myParent.find(".hiding").animate({left: "0px"},100); // more animation stuff
  }


});
