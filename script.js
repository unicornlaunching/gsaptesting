// GSAP Animation Timeline
const tl = gsap.timeline();

// Define keyframes
tl.to("#video", {currentTime: 0, duration: 0.5}); // Start
tl.to("#video", {currentTime: 5, duration: 0.5}); // Scroll position at 500px
tl.to("#video", {currentTime: 10, duration: 0.5}); // Scroll position at 1000px
// Add more keyframes as needed

// Get video element
const video = document.getElementById("video");

// Listen for scroll event
window.addEventListener("scroll", () => {
  // Get scroll position
  const scrollPos = window.scrollY;
  // Calculate the video time based on scroll position
  const videoTime = scrollPos / (document.body.scrollHeight - window.innerHeight) * video.duration;
  // Seek the video to the calculated time
  video.currentTime = videoTime;
});

// Disable default scroll behavior
document.body.style.overflow = "hidden";
