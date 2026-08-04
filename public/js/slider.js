console.log("Slider JS Loaded");

const images = [
    "assets/images/farm1.jpeg",
    "assets/images/farm2.jpeg",
    "assets/images/farm3.jpeg",
    "assets/images/farm4.jpeg",
    "assets/images/farm5.jpeg"
];

let index = 0;
const slider = document.getElementById("slider");
let slideInterval;

function changeImage() {
    slider.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        slider.src = images[index];
        slider.style.opacity = 1;
    }, 400);
}

function startSlider() {
    clearInterval(slideInterval);
    slideInterval = setInterval(changeImage, 4000); // 4 seconds
}

// Start automatic slider
startSlider();

// When image is clicked
slider.addEventListener("click", () => {
    changeImage();     // Show next image
    startSlider();     // Restart the 4-second timer
});