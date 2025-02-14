document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splash-screen");
  const splashLogo = document.getElementById("splash-logo");
  const splashName = document.getElementById("splash-name");
  const navbarLogo = document.getElementById("navbar-logo");

  function startAnimation() {
    // Get positions of splash logo & navbar logo
    const navRect = navbarLogo.getBoundingClientRect();
    const splashRect = splashLogo.getBoundingClientRect();

    // Adjust movement (Move left & slightly up)
    let translateX = navRect.left - splashRect.left - 15; // Move 15px left
    let translateY = navRect.top - splashRect.top - 5; // Move 5px up

    // Calculate scale factor to shrink to 50px × 50px
    const scaleFactor = 50 / splashLogo.offsetWidth;

    // Move and scale logo smoothly
    splashLogo.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleFactor})`;
    splashLogo.style.transition = "transform 1.5s ease-in-out";

    // Enlarge text & apply gradient
    setTimeout(() => {
      splashName.classList.add("enlarge-text");
    }, 500);

    // Fade out text as logo reaches navbar
    setTimeout(() => {
      splashName.classList.add("fade-out");
    }, 1200);

    // Ensure logo stops at correct size & position
    setTimeout(() => {
      navbarLogo.src = splashLogo.src; // Set navbar logo
      splashLogo.style.transition = "none"; // Stop further movement
      splashLogo.style.opacity = "0"; // Hide splash logo smoothly
      splashScreen.classList.add("hide-splash"); // Hide splash screen instantly
    }, 1500);
  }

  // Click to start animation
  splashLogo.addEventListener("click", startAnimation);

  // Auto-run after 3 seconds
  setTimeout(startAnimation, 3000);
});


const nextButton = document.querySelector(".nxt-btn");
const video = document.querySelector(".hero-video");
const image = document.querySelector(".hero-image");
const title = document.querySelector(".hero-info h1");
const lastText = document.querySelector(".last-text");

const mediaList = [
  { type: "video", src: "video/hero-1.mp4" }, // First video (default)
  { type: "image", src: "img/chess.jpg" },
  { type: "image", src: "img/image1.jpg" },
  { type: "image", src: "img/image2.jpg" },
  { type: "image", src: "img/image3.jpg" },
];

const colorPairs = [
  { title: "white", lastText: "white" },
  { title: "#ff0000", lastText: "#00ff00" },
  { title: "#0000ff", lastText: "#ff00ff" },
  { title: "#ffa500", lastText: "#800080" },
  { title: "#00ffff", lastText: "#ffcc00" },
];

let index = 0;

nextButton.addEventListener("click", function () {
  index = (index + 1) % mediaList.length; // Cycle through mediaList

  // Smooth color transition for text
  title.style.transition = "color 0.8s ease-in-out";
  lastText.style.transition = "color 0.8s ease-in-out";
  title.style.color = colorPairs[index].title;
  lastText.style.color = colorPairs[index].lastText;

  // Fade out both media elements before switching
  video.style.transition = "opacity 0.8s ease-in-out";
  image.style.transition = "opacity 0.8s ease-in-out";
  video.style.opacity = "0";
  image.style.opacity = "0";

  setTimeout(() => {
    if (mediaList[index].type === "video") {
      image.style.display = "none"; // Hide image
      video.style.display = "block"; // Show video
      video.src = mediaList[index].src;
      video.load(); // Ensures smooth playback
      video.play();
    } else {
      video.style.display = "none"; // Hide video
      image.style.display = "block"; // Show image
      image.src = mediaList[index].src;
    }

    // Fade in after the switch
    setTimeout(() => {
      video.style.opacity = mediaList[index].type === "video" ? "1" : "0";
      image.style.opacity = mediaList[index].type === "image" ? "1" : "0";
    }, 50);
  }, 800); // Delay ensures a smooth fade-out before switching
});
const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");

// Auto-play music when page loads
window.addEventListener("load", () => {
  music.play().catch(() => {
    console.log("Autoplay blocked by browser, user needs to interact.");
  });
});

// Toggle music on button click
musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicIcon.classList.remove("fa-play-circle");
    musicIcon.classList.add("fa-pause-circle");
  } else {
    music.pause();
    musicIcon.classList.remove("fa-pause-circle");
    musicIcon.classList.add("fa-play-circle");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".head-right p");
  const hoverBg = document.querySelector(".hover-bg");

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const rect = item.getBoundingClientRect();
      hoverBg.style.width = `${rect.width}px`;
      hoverBg.style.left = `${item.offsetLeft}px`;
      hoverBg.style.opacity = "1";
    });
  });

  document.querySelector(".head-right").addEventListener("mouseleave", function () {
    hoverBg.style.opacity = "0";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".head-right p");
  const hoverBg = document.querySelector(".hover-bg");

  // Preload sound
  const hoverSound = new Audio("img/pop.wav");

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Play hover sound
      hoverSound.currentTime = 0; // Rewind to start
      hoverSound.play();

      // Get position of hovered item
      const rect = item.getBoundingClientRect();
      const parentRect = document.querySelector(".head-right").getBoundingClientRect();

      // Set oval background width and position
      hoverBg.style.width = `${rect.width + 5}px`; // Adjust width to center better
      hoverBg.style.height = `${rect.height + 8}px`; // Adjust height for better fit
      hoverBg.style.left = `${item.offsetLeft - 5}px`; // Center horizontally
      hoverBg.style.top = `${item.offsetTop+10}px`; // Center vertically
      hoverBg.style.opacity = "1"; // Show oval
    });
  });

  // Hide the hover background when mouse leaves navbar
  document.querySelector(".head-right").addEventListener("mouseleave", function () {
    hoverBg.style.opacity = "0";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contact-btn");
  const contactSection = document.querySelector(".contact-section");
  const contactFormSection = document.getElementById("contact-form-section");
  const contactForm = document.getElementById("contact-form");
  const backButton = document.getElementById("back-btn");

  // Ensure form is hidden initially
  contactFormSection.style.display = "none";

  // Show form & fade out contact section
  contactButton.addEventListener("click", function () {
    contactSection.style.opacity = "0";
    contactSection.style.transform = "scale(0.9)";

    setTimeout(() => {
      contactSection.style.display = "none";
      contactFormSection.style.display = "block";
      setTimeout(() => {
        contactForm.classList.add("show");
      }, 50);
    }, 500);
  });

  // Hide form & restore contact section
  backButton.addEventListener("click", function () {
    contactForm.classList.remove("show");

    setTimeout(() => {
      contactFormSection.style.display = "none";
      contactSection.style.display = "flex";
      setTimeout(() => {
        contactSection.style.opacity = "1";
        contactSection.style.transform = "scale(1)";
      }, 50);
    }, 500);
  });
});

// Mail function using mailto:
function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:jithubaiju05@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  window.location.href = mailtoLink;
}
// Dynamically set the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
