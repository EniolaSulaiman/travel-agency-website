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
  const toastContainer = document.getElementById(`toastContainer`)
  let toast = document.createElement(`div`)
  toast.classList.add(`toast`)
  toast.innerHTML = `<h1 class="toast-title">${title}</h1>
                        <p class="text">${text}</p>`
  //Add styles for toast type
  toast.classList.add(type)
  //Send toast
  toastContainer.appendChild(toast)
  toast.classList.add(`notify`)
  //Remove toast automatically after 4 seconds
  setTimeout(() => {
    toast.classList.remove(`notify`)
    toastContainer
  }, 4000);
  //Remove toast from container when transition is done
  setTimeout(() => {
    toastContainer.removeChild(toast)
  }, 4600);
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
function returnDestination() {
  const params = new URLSearchParams(window.location.search);
  return params.get(`destination`);
}
async function loadRoute() {
  try {
    const data = await retrieveJSON();
    const destination = returnDestination()
    document.title = data[2][destination].name.split(`,`)[0]
    document.getElementById(`destinationName`).innerHTML = data[2][destination].name
    document.getElementById(`aboutDestination`).innerHTML = data[2][destination].desc
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
document.getElementById(`travelDuration`).addEventListener(`change`, returnTravelPrice)
document.getElementById(`noOfPeople`).addEventListener(`change`, returnTravelPrice)

document.getElementById(`openBtn`).addEventListener(`click`, () => {
  document.getElementById(`modalName`).innerHTML = document.getElementById(`destinationName`).innerHTML
  document.getElementById(`modalNoOfPeople`).innerHTML = document.getElementById(`noOfPeople`).value.split(` `)[0]
  document.getElementById(`modalNoOfDays`).innerHTML = document.getElementById(`travelDuration`).value.split(` `)[0]
  document.getElementById(`modalTotalPrice`).innerHTML = document.getElementById(`destinationPrice`).innerHTML
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