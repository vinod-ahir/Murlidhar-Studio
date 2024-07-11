
// Function to toggle the sidebar's active/unactive state
function toggleSidebar() {
  var nav = document.getElementById("nav");
  var menuImg = document.getElementById("menu-img");
  
  menuImg.style.opacity = 0;
  setTimeout(function() {
    if (nav.classList.contains("active")) {
      updateMenuIcon("icons/menu.svg");
      nav.classList.remove("active");
      nav.classList.add("unactive");
    } else {
      updateMenuIcon("icons/cross.svg");
      nav.classList.remove("unactive");
      nav.classList.add("active");
    }
    setTimeout(function() {
      menuImg.style.opacity = 1;
    }, 100); // Ensuring the image fades back in after the transition
  }, 100);
}

// Function to update the menu image source
function updateMenuIcon(src) {
  var menuImg = document.getElementById("menu-img");
  menuImg.src = src;
}

// Function to close the sidebar
function closeSidebar() {
  var nav = document.getElementById("nav");
  if (nav.classList.contains("active")) {
    updateMenuIcon("icons/menu.svg");
    nav.classList.remove("active");
    nav.classList.add("unactive");
  }
}

// Event listener for header click to toggle sidebar
document.getElementById("header").addEventListener("click", function(event) {
  toggleSidebar();
});

// Event listener for clicks outside the sidebar to close it
window.onclick = function(event) {
  var nav = document.getElementById("nav");
  if (!event.target.closest('#nav') && !event.target.closest('#header')) {
    closeSidebar();
  }
};

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
setInterval(nextSlide, 5000);
