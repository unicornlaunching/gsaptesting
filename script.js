// Get video element
const video = document.getElementById("video");

// Get video position relative to the viewport
const videoRect = video.getBoundingClientRect();

// Listen for scroll event
window.addEventListener("scroll", () => {
  // Calculate the position of the video relative to the viewport
  const videoTop = videoRect.top + window.pageYOffset;
  const videoBottom = videoRect.bottom + window.pageYOffset;
  
  // Calculate the scroll progress relative to the video's position
  const scrollProgress = (window.scrollY - videoTop) / (videoBottom - videoTop);
  
  // Limit scroll progress to [0, 1]
  const normalizedProgress = Math.min(Math.max(scrollProgress, 0), 1);
  
  // Update video playback time based on scroll progress
  video.currentTime = normalizedProgress * video.duration;
});

// Disable default scroll behavior
document.body.style.overflow = "hidden";
