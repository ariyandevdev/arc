const slides = [
    {
        image: "/arcengroup-assets/img/1.jpg",
        title: "Ava General Commercial Complex",
        location: "Tehran - Shariati Abad",
    },
    {
        image: "/arcengroup-assets/img/2.jpg",
        title: "Nakhil Residential Complex",
        location: "Tehran - Koohak Blvd",
    },
    {
        image: "/arcengroup-assets/img/4.jpg",
        title: "Chahar Bagh",
        location: "Tehran - Elahiyeh",
    },
];

let currentSlide = 0;

const sliderImage = document.getElementById("slider-img");
const sliderTitle = document.getElementById("slider-title");
const sliderLocation = document.getElementById("slider-location");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showSlide(index) {
    sliderImage.src = slides[index].image;
    sliderTitle.textContent = slides[index].title;
    sliderLocation.textContent = slides[index].location;
}

nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Initialize slider
showSlide(currentSlide);
