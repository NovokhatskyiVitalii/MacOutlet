let slideIndex = 1;

const plusSlide = () => {
    showSlides((slideIndex += 1));
};

const minusSlide = () => {
    showSlides((slideIndex -= 1));
};

const currentSlide = (n) => {
    showSlides((slideIndex = n));
};

const showSlides = (n) => {
    const slides = Array.from(document.querySelectorAll("#slider .item"));
    const dots = Array.from(document.querySelectorAll(".slider-dots .dot"));
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

export default function initSliderBanner() {
    window.plusSlide = plusSlide;
    window.minusSlide = minusSlide;
    window.currentSlide = currentSlide;
    showSlides();
}
