// Hide header when clicking on "MENU" button

$(document).ready(function(){
	$('#navbar-toggler').click(function(){
	var mainHeader = $("#center-block")[0];
    if (mainHeader.style.display === "none") {
        mainHeader.style.display = "block";
    } else {
        mainHeader.style.display = "none";
    }

    $(".toggle-icon")[0].classList.toggle("anim");
	});


	$('.materialsCarousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  draggable: false,
   autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
     {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

	$('.portfolioCarousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  draggable: false,
   autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
     {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

});

