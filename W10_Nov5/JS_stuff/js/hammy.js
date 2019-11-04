// This is sticky nav stuff.  NOTICE HOW I AM COMMENTING INSIDE JS SCRIPT.
         window.onscroll = function() {scrollIT()};

         var navbar = document.getElementById("navbar");
         var sticky = navbar.offsetTop;

         function scrollIT() {
           if (window.pageYOffset >= sticky) {
             navbar.classList.add("sticky")
           } else {
             navbar.classList.remove("sticky");
           }
         }


     // This is hamburger nav section.

         function hammy() {
             var x = document.getElementById("navbar");
             if (x.className === "topnav") {
                 x.className += " responsive";
             } else {
                 x.className = "topnav";
             }
         }
