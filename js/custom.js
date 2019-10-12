/*============ Navbar transparent to solid ============*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
            $('.nav-link').addClass('white');
            $('.name').addClass('white');
        } else {
            $('.navbar').removeClass('solid');
            $('.nav-link').removeClass('white');
            $('.name').removeClass('white');
        }
    })
})

/*============ Close mobile nav on click ============*/
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    })
})

/*============ Smooth scrolling to links ============*/
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        } // End if
    });
});

/*============ Bouncing Down Arrow ============*/
$(document).ready(function () {
    $(window).scroll(function () {
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 333)
    });
});

/*============ Meet the Team ============*/
$(document).ready(function(){
    $("#team-slider").owlCarousel({
      items:3,
      autoplay: false,
      smartSpeed: 700,
      loop:true,
      autoplayHoverPause:true,
      responsive : {
      0 : {
        items: 1
      },
      576 : {
        items: 2
      },
      768 : {
        items: 3
       }
      }
    }
   );
  });

  /*============ Skills Counter ============*/

  $(document).ready(function() {
      $('.counter').counterUp({
          delay: 10,
          time: 1800
      });
  });

 /*============ Clients Carousel ============*/

  $(document).ready(function(){
    $("#clients-slider").owlCarousel({
      items:2,
      autoplay: false,
      smartSpeed: 1700,
      loop:true,
      autoplayHoverPause:true,
      responsive : {
      0 : {
        items: 1
      },
      768 : {
        items: 2
       }
      }
    }
   );
  });


 /*============ Top Scroll ============*/

 $(document).ready(function() {
     $(window).scroll(function() {
         if($(this).scrollTop() > 500){
            $('.topscroll').fadeIn();
         } else {
             $('.topscroll').fadeOut();
         }
     });
 });