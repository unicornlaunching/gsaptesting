// Get video element
const video = document.getElementById("video");

// Variable to store previous scroll position
let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// Listen for scroll event
window.addEventListener("scroll", () => {
  // Get current scroll position
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // Calculate scroll direction
  const scrollDirection = currentScrollPosition > lastScrollPosition ? "down" : "up";
  // Update last scroll position
  lastScrollPosition = currentScrollPosition;
  // Calculate the video playback rate based on scroll speed and direction
  const scrollSpeed = Math.abs(currentScrollPosition - lastScrollPosition);
  const playbackRate = scrollDirection === "down" ? 1 + scrollSpeed / 100 : 1 - scrollSpeed / 100;
  // Update video playback rate
  video.playbackRate = playbackRate;
});

// Disable default scroll behavior
document.body.style.overflow = "hidden";
