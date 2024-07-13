
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
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow #slideshowimg");
  const ctrlButtons = document.querySelectorAll(".ctrlbtn"); // Add this line
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
//Category carousel imaage slider
$(document).ready(function() {
  $('#responsive').lightSlider({
      item:4,

      slideMove:1,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed:600,
      responsive : [
        {
          breakpoint:1300,
          settings: {
              item:3,
              slideMove:1,
              slideMargin:6,
            }
      },
          {
              breakpoint:950,
              settings: {
                  item:2,
                  slideMove:1,
                  slideMargin:6,
                }
          },
          
          {
              breakpoint:500,
              settings: {
                  item:1,
                  slideMove:1
                }
          }
      ]
  });  
});