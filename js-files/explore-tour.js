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
  try {
    const data = await retrieveJSON();
    const params = new URLSearchParams(window.location.search);
    const tour = params.get(`tour`);

    document.getElementById(`tourName`).innerHTML=data[3][tour].name
    document.getElementById(`tourAbout`).innerHTML=data[3][tour].desc
    document.getElementById(`tourDuration`).innerHTML=data[3][tour].
    document.getElementById(`tourPrice`).innerHTML=data[3][tour].pricePerNight * Number(tourDuration.value.split(` `)[0])
  } catch (error) {
    console.error(`Failed to load data for route`, error);
  }
}
loadRoute();
