// Get video element
const video = document.getElementById("video");

// Variable to store previous scroll position
let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// Variable to store the playing state of the video
let isVideoPlaying = false;

// Function to update video playback
function updateVideoPlayback() {
  // Get current scroll position
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // Calculate scroll progress
  const scrollProgress = currentScrollPosition / (document.body.scrollHeight - window.innerHeight);
  // Update video playback time based on scroll progress
  video.currentTime = scrollProgress * video.duration;

  // Start or pause video playback based on scrolling
  if (!isVideoPlaying && Math.abs(currentScrollPosition - lastScrollPosition) > 0) {
    video.play();
    isVideoPlaying = true;
  } else if (isVideoPlaying && Math.abs(currentScrollPosition - lastScrollPosition) === 0) {
    video.pause();
    isVideoPlaying = false;
  }

  // Update last scroll position
  lastScrollPosition = currentScrollPosition;

  // Request the next animation frame
  requestAnimationFrame(updateVideoPlayback);
}

// Start updating video playback
updateVideoPlayback();

// Disable default scroll behavior
document.body.style.overflow = "hidden";
