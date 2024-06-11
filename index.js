// shading the body when navbar is open
const navbar = document.querySelector('.dropdown-reveal');
const body = document.querySelector('body');

navbar.addEventListener('click', () => {
    body.classList.toggle('fixed-position');
})



// closing the navbar
// const html = document.documentElement;
// const menu = document.getElementById('myMenuId');

// function openMenu() {
//     // add class to the menu to make it show
//     menu.classList.add('animate');

//     // add event listener to the html element
//     html.addEventListener('click', closeMenuOnBodyClick);
// }

// function closeMenu() {
//     // add class to the menu to make it show
//     menu.classList.remove('animate');

//     // add event listener to the html element
//     html.removeEventListener('click', closeMenuOnBodyClick);
// }

// function closeMenuOnBodyClick(event) {
//     // get the event path
//     const path = event.composedPath();

//     // check if it has the menu element
//     if (path.some(elem => elem.id === 'myMenuId')) {
//         // terminate this function if it does
//         return;
//     }
//     closeMenu();
// }



// FUNKCIONALNOSTI OPEN/CLOSE ON CLICK
const funkc = document.querySelector('#funkcionalnosti .text-div');
const funkc_naslovi = { ...funkc };

const funkc_opis = document.querySelector('#funkcionalnosti .open-funkc');
const funkc_opisi = { ...funkc_opis };

const arrow = document.querySelector('#funkcionalnosti .text-div .arrow-up');

// funkc_naslovi.forEach((naslov) => {
//     naslov.classList.toggle("open-section");
//     naslov.classList.toggle("closed-section");
//     console.log('div was clicked');
// })
funkc.addEventListener('click', function () {
    funkc.classList.toggle("open-section");
    funkc.classList.toggle("closed-section");

    funkc_opis.classList.toggle("open-funkc");
    funkc_opis.classList.toggle("closed-funkc");

    arrow.classList.toggle("arrow-up");
    arrow.classList.toggle("arrow-down");


})


// GALERY SLIDE
let timer;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // clearTimeout(timer);
    // timer = setTimeout(() => plusSlides(1), 3000);
}


// CLIENT REVIEW SLIDE
let reviewTimer;
let reviewIndex = 1;
showReviews(reviewIndex);

function plusReview(n) {
    showReviews(reviewIndex += n);
}

function currentReview(n) {
    showReviews(reviewIndex = n);
}

function showReviews(n) {
    let i;
    let reviews = document.getElementsByClassName("myReview");
    let dotsR = document.getElementsByClassName("dotR");
    if (n > reviews.length) { reviewIndex = 1 }
    if (n < 1) { reviewIndex = reviews.length }
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    for (i = 0; i < dotsR.length; i++) {
        dotsR[i].className = dotsR[i].className.replace(" active", "");
    }
    reviews[reviewIndex - 1].style.display = "block";
    dotsR[reviewIndex - 1].className += " active";
    // clearTimeout(reviewTimer);
    // reviewTimer = setTimeout(() => plusReview(1), 5000);
}
