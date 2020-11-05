/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
(function(document, window){
	if (!document || !window) {
		return;
	}

	var styleText = '::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;';
	var unfocus_style = document.createElement('STYLE');

	window.unfocus = function(){
		document.getElementsByTagName('HEAD')[0].appendChild(unfocus_style);

		document.addEventListener('mousedown', (function(){
			unfocus_style.innerHTML = styleText+'}';
		}));
		document.addEventListener('keydown', (function(){
			unfocus_style.innerHTML = '';
		}));
	};

	unfocus.style = function(style){
		styleText += style;
	};

	unfocus();
})(document, window);

new WOW().init();

// hamburger

function hamb_active() {
    document.getElementById('hamburger_menu').style.display = 'block';
    let hamburgerlist = document.querySelectorAll('#hamburger_menu div ul li');
    document.getElementById('hamburger_button').classList.add('is-active');

    hamburgerlist[1].classList.add

    hamburgerlist.forEach((function (item) {
            item.classList.remove('animate__bounceOutLeft');
            item.classList.add('animate__bounceInLeft');
    }));
}

function hamb_disabled() {
    document.getElementById('hamburger_button').classList.remove('is-active');

    let hamburgerlist = document.querySelectorAll('#hamburger_menu div ul li');

    hamburgerlist.forEach((function (item) {
            item.classList.remove('animate__bounceInLeft');
            item.classList.add('animate__bounceOutLeft');
    }));
    setTimeout(() => {
        document.getElementById('hamburger_menu').style.display = 'none';
    }, 1400);


}

document.getElementById('hamburger_button').addEventListener("click", (function () {
    if (this.classList.contains('is-active')) {
        hamb_disabled();
    } else hamb_active();
}));

let hamburgerlist = document.querySelectorAll('#hamburger_menu div ul li a');

hamburgerlist.forEach((function (item) {
    item.addEventListener("click", (function () {
        hamb_disabled();
    }));
}));


// scrollanim

$(document).ready((function(){
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
}));