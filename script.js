// Get video element
const video = document.getElementById("video");

// Function to handle intersection changes
const handleIntersection = (entries) => {
  entries.forEach(entry => {
    // If the video is in view
    if (entry.isIntersecting) {
      // Calculate the scroll progress relative to the video's position
      const scrollProgress = (entry.intersectionRatio * entry.target.duration) / entry.target.clientHeight;
      // Update video playback time based on scroll progress
      entry.target.currentTime = scrollProgress;
    }
  });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe the video element
observer.observe(video);

// Disable default scroll behavior
document.body.style.overflow = "hidden";
