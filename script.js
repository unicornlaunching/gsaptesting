// GSAP Animation Timeline
const tl = gsap.timeline();

// Define keyframes
tl.to("#video", {currentTime: 0, duration: 0.5}); // Start
tl.to("#video", {currentTime: 5, duration: 0.5}); // Scroll position at 500px
tl.to("#video", {currentTime: 10, duration: 0.5}); // Scroll position at 1000px
// Add more keyframes as needed

// Get video element
const video = document.getElementById("video");

// Variables to store previous scroll position
let lastScrollPosition = 0;

// Listen for scroll event
window.addEventListener("scroll", () => {
  // Get current scroll position
  const currentScrollPosition = window.scrollY;
  // Calculate scroll direction
  const scrollDirection = currentScrollPosition > lastScrollPosition ? "down" : "up";
  // Update last scroll position
  lastScrollPosition = currentScrollPosition;
  // Calculate the video time based on scroll position and direction
  const videoTime = currentScrollPosition / (document.body.scrollHeight - window.innerHeight) * video.duration;
  // Reverse video playback if scrolling up
  if (scrollDirection === "up") {
    video.currentTime = video.duration - videoTime;
  } else {
    video.currentTime = videoTime;
  }
});

// Disable default scroll behavior
document.body.style.overflow = "hidden";
