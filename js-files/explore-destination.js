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
function returnDestination() { 
  const params = new URLSearchParams(window.location.search);
return params.get(`destination`);
}
async function loadRoute() {
  try {
  const data = await retrieveJSON();
    const destination = returnDestination()
    document.title = data[2][destination].name.split(`,`)[0]
    document.getElementById(`destinationName`).innerHTML= data[2][destination].name
    document.getElementById(`aboutDestination`).innerHTML= data[2][destination].desc
    document.getElementById(`destinationPrice`).innerHTML = `$${data[2][destination].pricePerNight * Number(document.getElementById("travelDuration").value.split(" ")[0])}`
  }
  catch (error) {
    console.error(`Failed to load data for route`, error)
  }
}
loadRoute();
async function returnTravelPrice() {
  const data = await retrieveJSON()
  const destination = returnDestination()
  document.getElementById("destinationPrice").innerHTML = `$${data[2][destination].pricePerNight * Number(document.getElementById("travelDuration").value.split(" ")[0])}`
}
document.getElementById(`travelDuration`).addEventListener(`change`,returnTravelPrice)