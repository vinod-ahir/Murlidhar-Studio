// Function to update the menu image source
function updateMenuIcon(src) {
  const menuImg = document.getElementById("menu-img");
  menuImg.src = src;
}

// Function to toggle the sidebar
function toggleSidebar() {
  const nav = document.getElementById("nav");
  const menuImg = document.getElementById("menu-img");

  menuImg.style.opacity = 0;
  setTimeout(() => {
    if (nav.classList.contains("active")) {
      updateMenuIcon("icons/menu.svg");
      nav.classList.replace("active", "unactive");
      document.body.classList.remove("no-scroll");
    } else {
      updateMenuIcon("icons/cross.svg");
      nav.classList.replace("unactive", "active");
      document.body.classList.add("no-scroll");
    }
    setTimeout(() => {
      menuImg.style.opacity = 1;
    }, 100); // Ensuring the image fades back in after the transition
  }, 100);
}

// Function to close the sidebar
function closeSidebar() {
  const nav = document.getElementById("nav");
  if (nav.classList.contains("active")) {
    updateMenuIcon("icons/menu.svg");
    nav.classList.replace("active", "unactive");
    document.body.classList.remove("no-scroll");
  }
}

// Event listener for header click to toggle sidebar
document.getElementById("header").addEventListener("click", toggleSidebar);

// Close sidebar when clicking or touching outside of nav and header
document.addEventListener("click", (event) => {
  if (!event.target.closest("#nav") && !event.target.closest("#header")) {
    closeSidebar();
  }
});

document.addEventListener("touchstart", (event) => {
  if (!event.target.closest("#nav") && !event.target.closest("#header")) {
    closeSidebar();
  }
});

// Close sidebar when scrolling while nav is open
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  if (nav.classList.contains("active")) {
    closeSidebar();
  }
});

document.addEventListener("touchmove", (event) => {
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
      btn.style.backgroundColor = i === index ? "black" : "rgb(227, 227, 227)"; // Example colors
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

  // Add click and touch event listeners to control buttons
  ctrlButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      slideIndex = i;
      showSlide(slideIndex);
      resetTimer();
    });

    btn.addEventListener("touchstart", (e) => {
      e.preventDefault(); // Prevents default touch behavior
      slideIndex = i;
      showSlide(slideIndex);
      resetTimer();
    });
  });
});

// Category carousel image slider
$(document).ready(function () {
  $("#responsive").lightSlider({
    item: 3,
    slideMove: 3,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          item: 2,
          slideMove: 2,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });
});
