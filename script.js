function showSlide(index, containerId) {
    const slideshowContainer = document.getElementById('.slideshow-container');
    const slides = slideshowContainer.querySelectorAll('.slide');
  
    // Normalize the index to loop around
    slideshowContainer.currentSlideIndex = (index + slides.length) % slides.length;
  
    // Hide all slides and show the current one
    slides.forEach(slide => (slide.style.display = 'none'));
    slides[slideshowContainer.currentSlideIndex].style.display = 'block';
  }
  
  function changeSlide(step, containerId) {
    const slideshowContainer = document.getElementById(containerId);
  
    // Initialize currentSlideIndex if not already set
    if (slideshowContainer.currentSlideIndex === undefined) {
      slideshowContainer.currentSlideIndex = 0;
    }
  
    showSlide(slideshowContainer.currentSlideIndex + step, containerId);
  }
  
  // Initialize each slideshow manually if needed
  showSlide(0, 'slideshow1');
  showSlide(0, 'slideshow2');
  showSlide(0, 'slideshow3');
  showSlide(0, 'slideshow4');
  

  

function showSlide(index, containerId) {
    const slideshowContainer = document.getElementById(containerId);
  
    // If the container does not exist, exit the function
    if (!slideshowContainer) {
      console.error(`Slideshow container with ID '${containerId}' not found.`);
      return;
    }
  
    const slides = slideshowContainer.querySelectorAll('.slide');
  
    // Normalize the index to loop around
    slideshowContainer.currentSlideIndex = (index + slides.length) % slides.length;
  
    // Hide all slides and show the current one
    slides.forEach(slide => (slide.style.display = 'none'));
    slides[slideshowContainer.currentSlideIndex].style.display = 'block';
  }
  
  function changeSlide(step, containerId) {
    const slideshowContainer = document.getElementById(containerId);
  
    // If the container does not exist, exit the function
    if (!slideshowContainer) {
      console.error(`Slideshow container with ID '${containerId}' not found.`);
      return;
    }
  
    // Initialize currentSlideIndex if not already set
    if (slideshowContainer.currentSlideIndex === undefined) {
      slideshowContainer.currentSlideIndex = 0;
    }
  
    showSlide(slideshowContainer.currentSlideIndex + step, containerId);
  }
  
  // Initialize each slideshow
  document.addEventListener('DOMContentLoaded', () => {
    showSlide(0, 'slideshow1');
    showSlide(0, 'slideshow2');
    showSlide(0, 'slideshow3');
    showSlide(0, 'slideshow4');
  });
  

