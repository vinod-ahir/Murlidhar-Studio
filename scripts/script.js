document.getElementById("header").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  var menuImg = document.getElementById("menu-img");
  menuImg.style.opacity = 0;
  setTimeout(function () {
    if (nav.classList.contains("active")) {
      menuImg.src = "icons/menu.svg";
      nav.classList.remove("active");
      nav.classList.add("unactive");
    } else {
      menuImg.src = "icons/cross.svg";
      nav.classList.remove("unactive");
      nav.classList.add("active");
    }
    setTimeout(function () {
      menuImg.style.opacity = 1;
    }, 100); // Ensuring the image fades back in after the transition
  }, 100);
});

//Slideshow

let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Automatic slideshow
setInterval(nextSlide, 5000);
