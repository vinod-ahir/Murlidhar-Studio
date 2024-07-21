// Function to toggle the sidebar's active/unactive state
function toggleSidebar() {
  const nav = document.getElementById("nav");
  const menuImg = document.getElementById("menu-img");

  menuImg.style.opacity = 0;
  setTimeout(() => {
    if (nav.classList.contains("active")) {
      updateMenuIcon("icons/menu.svg");
      nav.classList.replace("active", "unactive");
    } else {
      updateMenuIcon("icons/cross.svg");
      nav.classList.replace("unactive", "active");
    }
    setTimeout(() => {
      menuImg.style.opacity = 1;
    }, 100); // Ensuring the image fades back in after the transition
  }, 100);
}

// Function to update the menu image source
function updateMenuIcon(src) {
  const menuImg = document.getElementById("menu-img");
  menuImg.src = src;
}

// Function to close the sidebar
function closeSidebar() {
  const nav = document.getElementById("nav");
  if (nav.classList.contains("active")) {
    updateMenuIcon("icons/menu.svg");
    nav.classList.replace("active", "unactive");
  }
}

// Event listener for header click to toggle sidebar
document.getElementById("header").addEventListener("click", toggleSidebar);

// Event listener for clicks outside the sidebar to close it
window.addEventListener("click", (event) => {
  const nav = document.getElementById("nav");
  if (!event.target.closest("#nav") && !event.target.closest("#header")) {
    closeSidebar();
  }
});

// Slideshow
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow #slideshowimg");
  const ctrlButtons = document.querySelectorAll(".ctrlbtn");
  let slideIndex = 0;
  let timer;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");

    // Update control button opacity (you can customize this part)
    ctrlButtons.forEach((btn, i) => {
      btn.style.backgroundColor = i === index ? "black" : "gray"; // Example colors
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 3000);
  }

  function startSlideshow() {
    timer = setInterval(nextSlide, 3000);
  }

  function stopSlideshow() {
    clearInterval(timer);
  }

  // Show the first slide immediately
  showSlide(slideIndex);

  // Start the slideshow
  startSlideshow();
});

// Category carousel image slider
$(document).ready(() => {
  $("#responsive").lightSlider({
    item: 4,
    loop: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 600,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 950,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 500,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });
});