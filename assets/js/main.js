/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu')
    })
}
/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imggallery() {
    let mainImg = document.querySelector('.details__img'); // Corrected the class name here
    let smallimg = document.querySelectorAll('.details__small-img');

    smallimg.forEach((img) => {
        img.addEventListener('click', () => {
            mainImg.src = img.src; // Corrected 'scr' to 'src' and used 'img' instead of 'this'
        });
    });
}


imggallery();

/*=============== SWIPER CATEGORIES ===============*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 44,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".new__container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});
/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active-tab');
        });
        target.classList.add('active-tab');
        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });
        tab.classList.add('active-tab');
    });
});