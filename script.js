// Get video element
const video = document.getElementById("video");

// Variable to store previous scroll position
let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// Variable to store the playing state of the video
let isVideoPlaying = false;

// Listen for scroll event
window.addEventListener("scroll", () => {
  // Get current scroll position
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // Calculate scroll progress
  const scrollProgress = currentScrollPosition / (document.body.scrollHeight - window.innerHeight);
  // Update video playback time based on scroll progress
  video.currentTime = scrollProgress * video.duration;
  
  // Start video playback when scrolling
  if (!isVideoPlaying) {
    video.play();
    isVideoPlaying = true;
  }
  
  // Pause video if scrolling stops
  clearTimeout(videoScrollTimeout);
  const videoScrollTimeout = setTimeout(() => {
    video.pause();
    isVideoPlaying = false;
  }, 100); // Adjust the timeout value as needed
});

// Disable default scroll behavior
document.body.style.overflow = "hidden";
