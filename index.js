
// closing the navbar
const html = document.documentElement;
const menu_btn = document.querySelector('.menu-button');
const menu = document.querySelector('.dropdown-list');
const menuItems = document.querySelectorAll('.dropdown-list li');
const body = document.querySelector('body');

menuItems.forEach(item => {
    item.addEventListener('click', openMenu);
});

function openMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('visible');
    menu_btn.classList.toggle('change');
}

menu_btn.addEventListener('click', () => {
    body.classList.toggle('fixed-position');
})



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


// FULL SCREEN IMAGE PREVIEW

const closeModalBtn = document.querySelector(".btn-close");
const modal = document.querySelector("#img-viewer");
const overlay = document.querySelector(".overlay");

function full_view(ele) {
    document.querySelector('#img-viewer').classList.toggle("hidden");
    document.querySelector('.overlay').classList.toggle("hidden");
}

// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
