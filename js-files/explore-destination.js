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
const slides = document.querySelectorAll(`#image`);
let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider() {
  slides[slideIndex].classList.add(`displaySlide`);
  intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  } else {
    slides.forEach((slide) => {
      slide.classList.remove(`displaySlide`);
    });
    slides[index].classList.add(`displaySlide`);
  }
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  console.log(slideIndex);
  showSlide(slideIndex);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  showSlide(slideIndex);
}
async function retrieveJSON() {
  try {
    const response = await fetch(`js-files/components.json`);

    if (!response.ok) {
      throw new Error(`Could not fetch resource ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function loadRoute() {
  try{
  const data = await retrieveJSON();
  const params = new URLSearchParams(window.location.search);
  const destinationId = params.get(`id`);

   document.getElementById(`toursMain`).innerHTML = `
<div class="container card">
                    <img id="image" src="${data[2][destinationId].img1}" alt="Destination Image">
                    <img id="image" src="${data[2][destinationId].img2}" alt="Destination Image">
                    <img id="image" src="${data[2][destinationId].img3}" alt="Destination Image">
                    <span id="prevBtn" class="prev-btn" onclick="prevSlide()">&#10094;</span>
                    <span id="nextBtn" class="next-btn" onclick="nextSlide()">&#10095;</span>
                    <span class="h1-container flex">
                        <h1>${data[2][destinationId].name}</h1>
                    </span>
                    <div class="text">
                        <span class="about-text">
                            <h2>About the Tour</h2>
                        </span>
                        <p>${data[2][destinationId].desc}</p>
                        <div class="grid-3">
                            <span>
                                <h3>Price</h3>
                                ${data[2][destinationId].price}
                            </span>
                            <span>
                                <h3>Duration</h3>
                                ${data[2][destinationId].duration}
                            </span>
                            <span>
                                <a href="#" class="btn">Book Now</a>
                            </span>
                        </div>
                    </div>
                </div>
                `; 
}
catch(error){
  console.error(`Failed to load data for route`, error)
}}
loadRoute();
