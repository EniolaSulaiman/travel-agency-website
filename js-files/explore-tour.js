/* const images = [`images/paris-1.jpg`, `images/paris-2.jpg`, `images/paris-3.jpg`];
let idx = 0;

function slider() {
    if (idx > 2) { idx = 0 }
    if (idx < 0) { idx = 2 }
    const img = document.getElementById(`image`)
    img.src = images[idx]
    idx++;
}

document.getElementById(`nextBtn`).addEventListener(`click`, () => {
    idx++
    slider()
})
document.getElementById(`prevBtn`).addEventListener(`click`, () => {
    idx--
    slider()
})
setInterval(slider, 5000); */
const slides = document.querySelectorAll(`#image`)
let slideIndex = 0;
let intervalId = null;

initializeSlider()

function initializeSlider() {
    slides[slideIndex].classList.add(`displaySlide`)
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
    if (index >= slides.length) {
        index = 0;
    }
    else if (index < 0) {
        index = slides.length - 1;
    } else {
        slides.forEach(slide => {
            slide.classList.remove(`displaySlide`)
        })
        slides[index].classList.add(`displaySlide`)
    }
}

function prevSlide() {
    clearInterval(intervalId)
    slideIndex--
    console.log(slideIndex)
    showSlide(slideIndex)
}

function nextSlide() {
    clearInterval(intervalId)
    slideIndex++
    showSlide(slideIndex)
}

const params = new URLSearchParams(window.location.search)
const tourId = params.get(`id`)

const destinationsData = {
    paris:{
        h1: `Paris, France`,
        img1:`images/paris-1.jpg`,
        img2:`images/paris-2.jpg`,
        img3:`images/paris-3.jpg`,
        desc:`Experience the romance and charm of the City Of Lights.`,
        price:``,
        duration:``
    }
}

document.getElementById(`toursMain`).innerHTML = `
<div class="container card">
                    <img id="image" src="${destinationsData[tourId].img1}" alt="Destination Image">
                    <img id="image" src="${destinationsData[tourId].img2}" alt="Destination Image">
                    <img id="image" src="${destinationsData[tourId].img3}" alt="Destination Image">
                    <span id="prevBtn" class="prev-btn" onclick="prevSlide()">&#10094;</span>
                    <span id="nextBtn" class="next-btn" onclick="nextSlide()">&#10095;</span>
                    <span class="h1-container flex">
                        <h1>${destinationsData[tourId].h1}</h1>
                    </span>
                    <div class="text">
                        <span class="about-text">
                            <h2>About the Tour</h2>
                        </span>
                        <p>${destinationsData[tourId].desc}</p>
                        <div class="grid-3">
                            <span>
                                <h3>Price</h3>
                                ${destinationsData[tourId].price}
                            </span>
                            <span>
                                <h3>Duration</h3>
                                ${destinationsData[tourId].duration}
                            </span>
                            <span>
                                <a href="#" class="btn">Book Now</a>
                            </span>
                        </div>
                    </div>
                </div>
                `