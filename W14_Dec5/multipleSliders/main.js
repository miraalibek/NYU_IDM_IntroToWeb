
$(".slide_bttn").click(function(){

  var myself=$(this).attr("class");//prev or next?
  var myParent =$(this).parent(); // finding out where this button is
  var slides = myParent.find(".video");// then find all divs with video class
  var numSlides=slides.length;//how many slides
  var activeSlide = myParent.find('.active');

  if (myself=="next slide_bttn"){
    var nextSlide=activeSlide.next();
    slides.last().after(activeSlide);
    myParent.find(".hiding").css({left:"25.5%"});
    activeSlide.removeClass('active');
    nextSlide.addClass('active').addClass('anim');
    myParent.find(".hiding").animate({left: "0px"},100);
  } else if(myself=="prev slide_bttn"){
    var nextSlide=slides.last();
      myParent.find(".hiding").css({left:"-25.5%"});
    slides.first().before(slides.last());
    activeSlide.removeClass('active');
    nextSlide.addClass('active').addClass('anim');
    myParent.find(".hiding").animate({left: "0px"},100);
  }


});
