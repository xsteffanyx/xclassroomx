// Find all slider sections
const sliderSections = document.querySelectorAll('.slider-section');

sliderSections.forEach((sliderSection) => {
    const sliderInner = sliderSection.querySelector('.slider-inner');
    const slides = sliderInner.querySelectorAll('img');
    let currentIndex = 0; // Track the current slide index
    const slideCount = slides.length;

    // Attach wheel event listener to each slider section
    sliderSection.addEventListener('wheel', (event) => {
        // Determine the scroll direction
        const direction = event.deltaY > 0 ? 1 : -1;

        // Calculate the new slide index
        const newIndex = Math.min(Math.max(currentIndex + direction, 0), slideCount - 1);

        // If the slide index changes, update the slider
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Prevent default scrolling only within the slider section
        event.preventDefault();
    }, { passive: false });
});



