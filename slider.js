// script.js

const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Optional: Auto-advance slides (autoplay)
// setInterval(nextSlide, 3000); // Change interval as desired
