const sliderImages = document.querySelector(".slider-images");
const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

// This function updates the slider to display the slide at the given index.
function showSlide(index) {
     sd = sliderImages.style.transform = `translateX(-${index * 100}%)`;
    currentSlideIndex = index;
}
// function for displaying the previous image
function prevSlide() {
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }
    showSlide(currentSlideIndex);
}
// function for displaying the next image 
function nextSlide() {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }
    showSlide(currentSlideIndex);
}

// Initial display
showSlide(currentSlideIndex);

// Optional: Auto slide change
setInterval(nextSlide, 10000); // Change slide every 3 seconds