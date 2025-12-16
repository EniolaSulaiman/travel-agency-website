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
    document.getElementById(`destinationPrice`).innerHTML = `$${data[2][destination].pricePerNight * Number(document.getElementById("travelDuration").value.split(" ")[0]) * Number(document.getElementById("noOfPeople").value.split(" ")[0])}`
  }
  catch (error) {
    console.error(`Failed to load data for route`, error)
  }
}
loadRoute();
async function returnTravelPrice() {
  const data = await retrieveJSON()
  const destination = returnDestination()
  document.getElementById("destinationPrice").innerHTML = `$${data[2][destination].pricePerNight * Number(document.getElementById("travelDuration").value.split(" ")[0]) * Number(document.getElementById("noOfPeople").value.split(" ")[0])}`
}
document.getElementById(`travelDuration`).addEventListener(`change`,returnTravelPrice)
document.getElementById(`noOfPeople`).addEventListener(`change`,returnTravelPrice)