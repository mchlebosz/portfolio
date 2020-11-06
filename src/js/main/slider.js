$(document).ready(function(){
    $('#slider').slick({
        draggable: true,
        focusOnSelect: true,
        pauseOnHover: true,
        swipe: true,
        arrows: true,
        prevArrow: "<button type'button' class='slick-prev'><i class='fas fa-arrow-circle-left'></i></button>" ,
        nextArrow: "<button type='button' class='slick-next'><i class='fas fa-arrow-circle-right'></i></button>" ,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 4,
        responsive: [
            {
            breakpoint: 1300,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 992,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
            }
        ]
  });
});