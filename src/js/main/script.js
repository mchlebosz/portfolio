new WOW().init();

// hamburger

function hamb_active() {
    document.getElementById('hamburger_menu').style.display = 'block';
    let hamburgerlist = document.querySelectorAll('#hamburger_menu div ul li');
    document.getElementById('hamburger_button').classList.add('is-active');

    hamburgerlist[1].classList.add

    hamburgerlist.forEach(function (item) {
            item.classList.remove('animate__bounceOutLeft');
            item.classList.add('animate__bounceInLeft');
    });
}

function hamb_disabled() {
    document.getElementById('hamburger_button').classList.remove('is-active');

    let hamburgerlist = document.querySelectorAll('#hamburger_menu div ul li');

    hamburgerlist.forEach(function (item) {
            item.classList.remove('animate__bounceInLeft');
            item.classList.add('animate__bounceOutLeft');
    });
    setTimeout(() => {
        document.getElementById('hamburger_menu').style.display = 'none';
    }, 1400);


}

document.getElementById('hamburger_button').addEventListener("click", function () {
    if (this.classList.contains('is-active')) {
        hamb_disabled();
    } else hamb_active();
});

let hamburgerlist = document.querySelectorAll('#hamburger_menu div ul li a');

hamburgerlist.forEach(function (item) {
    item.addEventListener("click", function () {
        hamb_disabled();
    });
});


// scrollanim
