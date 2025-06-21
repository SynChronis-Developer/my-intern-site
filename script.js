// You can add interactive elements here later
console.log("RouteX Travel site loaded!");

//navbar interaction
let prevScrollPos = window.scrollY;
let timeoutId;
const navbar = document.getElementById('navbar');

function hideNavbar() {
  navbar.classList.add('navbar-hidden');
}

function showNavbar() {
  navbar.classList.remove('navbar-hidden');
}

// Auto hide after 2 seconds of no scroll
function resetAutoHideTimer() {
  clearTimeout(timeoutId);
  showNavbar();
  timeoutId = setTimeout(hideNavbar, 5000); // 5 sec delay
}

window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
    hideNavbar(); // Scroll down = hide now
  } else {
    showNavbar(); // Scroll up = show now
  }

  prevScrollPos = currentScrollPos;

  resetAutoHideTimer(); // Restart auto-hide timer on scroll
});

// Optional: hide again after page load
window.addEventListener('load', () => {
  timeoutId = setTimeout(hideNavbar, 2000);
});

//image background switch
// Background image switch with correct CSS format
const bgImages = [
  "travelimage1.jpg",
  "travelimage2.jpg",
  "travelimage3.jpg",
  "travelimage4.jpg"
];

let currentImage = 0;
const bgOverlay = document.querySelector('.services-bg-overlay');

function rotateBackground() {
  if (!bgOverlay) return; // Safety check
  bgOverlay.style.backgroundImage = `url('${bgImages[currentImage]}')`;
  currentImage = (currentImage + 1) % bgImages.length;
}

// Start rotation
rotateBackground(); // Initial image
setInterval(rotateBackground, 7000); 
