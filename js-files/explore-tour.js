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

function sendToast(title, text, type) {
  const toast = document.getElementById(`toast`)
  document.getElementById(`toastTitle`).textContent = title
  document.getElementById(`toastText`).textContent = text
  //Remove previous styles before adding new ones
  toast.classList = `toast`
  toast.classList.add(type)
  toast.classList.add(`notify`)
  //Remove toast on click
  toast.addEventListener(`click`, () => {
    toast.classList.remove(`notify`)
  })
  //Remove toast automatically after 4 seconds
  setTimeout(() => {
    toast.classList.remove(`notify`)
  }, 4000);
}

async function retrieveJSON() {
  try {
    const response = await fetch(`/js-files/components.json`);

    if (!response.ok) {
      throw new Error(`Could not fetch resource`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      document.addEventListener(`DOMContentLoaded`, () => {
        setTimeout(sendToast(`Error loading page`, `Please refresh the page`, `error`), 6000)
      })
    } else {
      console.error(`Error Loading Page`, error);
    }
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
  document.getElementById(`modalName`).innerHTML = document.getElementById(`tourName`).innerHTML
  document.getElementById(`modalNoOfPeople`).innerHTML = document.getElementById(`noOfPeople`).value.split(` `)[0]
  document.getElementById(`modalNoOfDays`).innerHTML = document.getElementById(`tourDuration`).value.split(` `)[0]
  document.getElementById(`modalTotalPrice`).innerHTML = document.getElementById(`tourPrice`).innerHTML
  document.getElementById(`modal`).classList.add(`active`)
})

document.getElementById(`closeBtn`).addEventListener(`click`, () => {
  document.getElementById(`modal`).classList.remove(`active`)
})

document.getElementById(`confirmBtn`).addEventListener(`click`, () => {
  if (document.getElementById(`modalNoOfDays`).innerHTML == 0) {
    sendToast(`Purchase Unsuccesful`, `Please specify number of days greater than 0`, `error`)
  } else {
    sendToast(`Purchase Successful`, ``, `success`)
  } document.getElementById(`modal`).classList.remove(`active`)
})