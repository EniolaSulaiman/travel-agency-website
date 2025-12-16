const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;
let intervalId;
const intervalTime = 7000;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    currentSlide += 1;
    if (currentSlide > slides.length - 1) {
      currentSlide = 0
    }
    showSlide(currentSlide);
  }, intervalTime);
}

function resetAutoSlide() {
  clearInterval(intervalId);
  startAutoSlide();
}

prev.addEventListener('click', () => {
  currentSlide -= 1
  if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }
  showSlide(currentSlide);
  resetAutoSlide();
});

next.addEventListener('click', () => {
  currentSlide += 1
  if (currentSlide > slides.length - 1) {
    currentSlide = 0
  }
  showSlide(currentSlide);
  resetAutoSlide();
});

startAutoSlide();

async function retrieveJSON() {
  try {
    const response = await fetch(`/js-files/components.json`);

    if (!response.ok) {
      throw new Error(`Could not fetch resource ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function returnTour() {
  const params = new URLSearchParams(window.location.search);
  return params.get(`tour`);
}
async function loadRoute() {
  try {
    const data = await retrieveJSON()
    const tour = returnTour()

    document.title = data[3][tour].name

    document.getElementById(`tourName`).innerHTML = data[3][tour].name
    document.getElementById(`aboutTour`).innerHTML = data[3][tour].desc
    document.getElementById(`tourDuration`).innerHTML = ((data[3][tour].durationArray).map((duration) => {
      return `<option>${duration}</option>`
    }))
    document.getElementById(`tourPrice`).innerHTML = `$${data[3][tour].pricePerNight * Number(tourDuration.value.split(` `)[0]) * Number(document.getElementById(`noOfPeople`).value.split(` `)[0])}`
  } catch (error) {
    console.error(`Failed to load data for route`, error);
  }
}
loadRoute();
async function updatePrice() {
  const data = await retrieveJSON();
  const tour = returnTour()
  document.getElementById(`tourPrice`).innerHTML = `$${data[3][tour].pricePerNight * Number(tourDuration.value.split(` `)[0]) * Number(document.getElementById(`noOfPeople`).value.split(` `)[0])}`
}
document.getElementById(`tourDuration`).addEventListener(`change`, updatePrice)
document.getElementById(`noOfPeople`).addEventListener(`change`, updatePrice)


document.getElementById(`openBtn`).addEventListener(`click`, () => {
  document.getElementById(`modal`).classList.add(`active`)
})

document.getElementById(`closeBtn`).addEventListener(`click`, () => {
  document.getElementById(`modal`).classList.remove(`active`)
})