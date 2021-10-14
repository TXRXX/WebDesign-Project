const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const wrapperSlide = document.querySelector(".wrapper-slide");

let slideIndex = 0;

const toggleArrow = (direction) => {
    if (direction === "left") {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = 2;
        }
        // (slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
        if (slideIndex < 2) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
    }
    wrapperSlide.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

arrowLeft.addEventListener("click", () => toggleArrow("left"));
arrowRight.addEventListener("click", () => toggleArrow("right"));