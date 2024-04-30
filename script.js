// Get video element
const video = document.getElementById("video");

// Listen for scroll event
window.addEventListener("scroll", () => {
  // Calculate the scroll progress relative to the entire document
  const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  // Update video playback time based on scroll progress
  video.currentTime = scrollProgress * video.duration;
});

// Disable default scroll behavior
document.body.style.overflow = "hidden";
