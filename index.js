
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

function open_funkc(divId) {
    var ceoDiv = document.getElementById(divId);
    const funkc_opis = ceoDiv.querySelector(".open-funkc, .closed-funkc");
    const arrow = ceoDiv.querySelector(".arrow-up, .arrow-down");

    ceoDiv.classList.toggle("open-section");
    ceoDiv.classList.toggle("closed-section");

    if (funkc_opis) {
        funkc_opis.classList.toggle("open-funkc");
        funkc_opis.classList.toggle("closed-funkc");
    }

    if (arrow) {
        arrow.classList.toggle("arrow-up");
        arrow.classList.toggle("arrow-down");
    }
}

function updateClassesBasedOnWidth() {
    document.querySelectorAll('.text-div').forEach(function (div) {
        if (window.innerWidth > 480) {
            div.classList.add("open-section");
            div.classList.remove("closed-section");
            div.classList.add("no-click");

            var funkcDiv = div.querySelector(".open-funkc, .closed-funkc");
            if (funkcDiv) {
                funkcDiv.classList.add("open-funkc");
                funkcDiv.classList.remove("closed-funkc");
            }

            var arrow = div.querySelector(".arrow-up, .arrow-down");
            if (arrow) {
                arrow.classList.add("arrow-up");
                arrow.classList.remove("arrow-down");
            }
        } else {
            div.classList.remove("no-click");
        }
    });
}

window.addEventListener('resize', function () {
    if (window.innerWidth <= 480) {
        updateClassesBasedOnWidth();
    }
});


if (window.innerWidth > 480) {
    updateClassesBasedOnWidth();
}



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



// GALERY GRID SLIDE
let gridTimer;
let currentSlideIndex = 0;

const slides = document.querySelectorAll(".oneSlide");
const totalSlides = slides.length;

function showGridSlides() {
    slides.forEach(slide => slide.classList.remove('left', 'middle', 'right'));

    const prevSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;

    slides[prevSlideIndex].classList.add('left');
    slides[currentSlideIndex].classList.add('middle');
    slides[nextSlideIndex].classList.add('right');
    clearTimeout(gridTimer);
    gridTimer = setTimeout(() => plusGridSlides(1), 3000);
}

function plusGridSlides(n) {
    currentSlideIndex = (currentSlideIndex + n + totalSlides) % totalSlides;
    showGridSlides();
}

function currentGridSlide(n) {
    currentSlideIndex = (n - 1 + totalSlides) % totalSlides;
    showGridSlides();
}

// Initial call to display the slides
showGridSlides();



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
    body.classList.toggle('fixed-position');
}

// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    body.classList.toggle('fixed-position');
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
