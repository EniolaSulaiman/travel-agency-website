function clearFilterInputs() {
  document.getElementById("tourTypes").value = `All Tours`
  document.getElementById("destinationInput").value = ``
}

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

let dataPromise;

async function retrieveJSON() {
  try {
    if (!dataPromise) {
      dataPromise = (async () => {
        const res = await fetch(`/js-files/components.json`);

        if (!res.ok) {
          throw new Error(`Could not fetch resource`);
        }
        return await res.json()
      })()
    }
    return dataPromise
  }
  catch (error) {
    if (error instanceof TypeError) {
      document.addEventListener(`DOMContentLoaded`, () => {
        setTimeout(sendToast(`Error loading page`, `Please refresh the page`, `error`), 6000)
      })
    } else {
      console.error(`Error Loading Page`, error);
    }
  }
}

function returnBaseContent() {
  return `<section class="destination-cards" id="destinationCards">
      <article class="flex">
        <h2>POPULAR DESTINATIONS</h2>
        <div class="grid">
          <div class="destinations card" id="destinations">
            <img loading="lazy" src="images/paris-2.jpg" alt="destination-picture" />
            <h3>Paris, France</h3>
            <p>Experience the romance and charm of the City Of Lights.</p>
            <a href="explore-destination.html?destination=paris" class="btn">Explore Destination</a>
          </div>

          <div class="destinations card" id="destinations">
            <img loading="lazy" src="images/bahamas-3.jpg" alt="destination-picture" />
            <h3>Bahamas</h3>
            <p>Relax on pristine beaches and enjoy crystal clear waters.</p>
            <a href="explore-destination.html?destination=bahamas" class="btn">Explore Destination</a>
          </div>

          <div class="destinations card" id="destinations">
            <img loading="lazy" src="images/sydney-1.jpg" alt="destination-picture" />
            <h3>Sydney, Australia</h3>
            <p>Opera, ocean waves, and laid-back vibes.</p>
            <a href="explore-destination.html?destination=sydney" class="btn">Explore Destination</a>
          </div>

          <div class="destinations card" id="destinations">
            <img loading="lazy" src="images/japan-1.jpg" alt="destination-picture" />
            <h3>Tokyo, Japan</h3>
            <p>A neon jungle where tradition meets high-tech future.</p>
            <a href="explore-destination.html?destination=tokyo" class="btn">Explore Destination</a>
          </div>
        </div>
      </article>

      <button class="see-all" id="destinationsDisplay">
        See more destinations
      </button>
    </section>

    <section class="popular-tours" id="toursContainer">
      <h2>POPULAR TOURS</h2>
      <div class="grid">
        <div class="card">
          <img loading="lazy" src="images/europe-2.jpg" alt="destination-picture" />
          <h3>Safari Gateway Adventure</h3>
          <p>
            Discover vibrant African cities that serve as gateways to legendary wildlife experiences.
          </p>
          <p class="destinations-visited">
            <a href="explore-destination.html?destination=nairobi" class="destinations">Nairobi</a><a
              href="explore-destination.html?destination=capeTown" class="destinations">Cape Town</a><a
              href="explore-destination.html?destination=johannesburg" class="destinations">Johannesburg</a>
          </p>
          <a href="explore-tour.html?tour=safariGatewayAdventure" class="btn">Explore Tour</a>
        </div>

        <div class="card">
          <img loading="lazy" src="images/paris-2.jpg" alt="destination-picture" />
          <h3>Asian Nature Explorer</h3>
          <p>
            A journey through scenic Asian cities blending nature, culture, and urban excitement.
          </p>
          <p class="destinations-visited">
            <a href="explore-destination.html?destination=bangkok" class="destinations">Bangkok</a><a
              href="explore-destination.html?destination=kyoto" class="destinations">Kyoto</a><a
              href="explore-destination.html?destination=seoul" class="destinations">Seoul</a>
          </p>
          <a href="explore-tour.html?tour=asianNatureExplorer" class="btn">Explore Tour</a>
        </div>

        <div class="card">
          <img loading="lazy" src="images/paris-2.jpg" alt="destination-picture" />
          <h3>Luxury Middle East Retreat</h3>
          <p>
            Indulge in high-end hotels, stunning sky lines, and glamarous desert experiences.
          </p>
          <p class="destinations-visited">
            <a href="explore-destination.html?destination=dubai" class="destinations">Dubai</a><a
              href="explore-destination.html?destination=doha" class="destinations">Doha</a><a
              href="explore-destination.html?destination=amman" class="destinations">Amman</a>
          </p>
          <a href="explore-tour.html?tour=luxuryMiddleEastRetreat" class="btn">Explore Tour</a>
        </div>

        <div class="card">
          <img loading="lazy" src="images/paris-2.jpg" alt="destination-picture" />
          <h3>Southern Europe Escaape</h3>
          <p>
            Dive into sun-soaked streets, coastal charm, and vibrant Mediterranean culture.
          </p>
          <p class="destinations-visited">
            <a href="explore-destination.html?destination=florence" class="destinations">Florence</a><a
              href="explore-destination.html?destination=santorini" class="destinations">Santorini</a><a
              href="explore-destination.html?destination=athens" class="destinations">Athens</a>
          </p>
          <a href="explore-tour.html?tour=southernEuropeEscape" class="btn">Explore Tour</a>
        </div>

        <div class="card">
          <img loading="lazy" src="images/paris-2.jpg" alt="destination-picture" />
          <h3>Americas Adventure Trail</h3>
          <p>
            Experience energetic cities across the Americas, packed with culture, colour, and excitement.
          </p>
          <p class="destinations-visited">
            <a href="explore-destination.html?destination=buenosAires" class="destinations">BuenosAires</a><a
              href="explore-destination.html?destination=mexicoCity" class="destinations">Mexico City</a><a
              href="explore-destination.html?destination=newYorkCity" class="destinations">New York City</a>
          </p>
          <a href="explore-tour.html?tour=greatWallOfChina" class="btn">Explore Tour</a>
        </div>

        <div class="card">
          <img loading="lazy" src="images/paris-2.jpg" alt="destination-picture" />
          <h3>Pacific Island Discovery</h3>
          <p>
            A refreshing coastal-themed escape through vibrant cities known for beaches, culture, and stunning
            waterfronts.
          </p>
          <p class="destinations-visited">
            <a href="explore-destination.html?destination=capeTown" class="destinations">Cape Town</a><a
              href="explore-destination.html?destination=barcelona" class="destinations">Barcelona</a><a
              href="explore-destination.html?destination=santorini" class="destinations">Santorini</a>
          </p>
          <a href="explore-tour.html?tour=pacificIslandDiscovery" class="btn">Explore Tour</a>
        </div>
      </div>
      <span class="see-all" id="toursDisplay">See more tours</span>
    </section>
    <section class="about bg-primary">
      <img loading="lazy" src="images/Discover-Your-Next-Adventure.png" alt="About-us" />
      <div class="container">
        <h2>Discover Your Next Adventure</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          expedita ullam magnam doloremque minima reiciendis unde modi sed
          explicabo similique. <br />
        </p>
        <a href="#" class="btn">About Us</a>
      </div>
    </section>
    <section class="plan-your-trip flex">
      <h2 class="text-center">Plan Your Trip Easily</h2>
      <div class="container">
        <div class="card grid">
          <span>
            Departure<br />
            <input type="text" placeholder="Date" />
          </span>
          <span>
            Destination<br />
            <input type="text" placeholder="Place" />
          </span>
          <span>
            Length <br />
            <select name="" id="">
              <option value="">Show All</option>
              <option value="">5 Days</option>
              <option value="">1 Week</option>
              <option value="">2 Weeks</option>
              <option value="">1 Month</option>
              <option value="">2 Month</option>
            </select>
          </span>
          <a href="#" class="btn">Search</a>
        </div>
      </div>
    </section>`;
}
async function destinationCardsTemplate(min, max) {
  const data = await retrieveJSON()
  let content = ``;
  for (let i = min; i < max + 1; i++) {
    content += `
            <div class="card">
                <img loading="lazy" src="${data[0][i].image}" alt="destination-picture">
                <h3>
                    ${data[0][i].name}
                </h3>
                <p>
                ${data[0][i].desc}
                </p>
                <a href="explore-destination.html?destination=${data[0][i].id}" class="btn">Explore Destination</a>
            </div>
            `;
  }
  return content;
}

async function tourCardsTemplate(min, max) {
  let content = ``;
  const data = await retrieveJSON()
  for (let i = min; i < max + 1; i++) {
    let destinationsVisited = data[1][i].destinationsVisited;
    let processedDestinationsVisited = destinationsVisited.map(
      (destination) => {
        return `<a href="explore-destination.html?destination=${destination}" class="destinations">${destination.charAt(0) + destination.slice(1).toLowerCase()
          }</a>`;
      }
    );
    content += `
            <div class="card">
            <img loading="lazy" src="${data[1][i].image}" alt="destination-picture">
            <h3>
                ${data[1][i].name}
            </h3>
            <p>
            ${data[1][i].desc}
            </p>
            <p class="destinations-visited">${processedDestinationsVisited}</p>
            <a href="explore-tour.html?tour=${data[1][i].id}" class="btn">Explore Tour</a>
        </div>
        `;

  }
  return content;
}

async function displayDestinations() {
  try {
    const destinationCards = document.getElementById(`destinationCards`);
    const destinationsDisplay = document.getElementById(`destinationsDisplay`);

    //Create new div for new destinations
    const moreContent1 = document.createElement(`div`);
    moreContent1.classList.add(`moreContent`);
    moreContent1.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent1);

    moreContent1.innerHTML = await destinationCardsTemplate(0, 8);

    moreContent1.innerHTML += `
    <button class="see-all" id="destinationsDisplay2">See more</button>
    <button class="hide-all" id="hideDestinations1">Hide all</button>
    `

    const moreContent2 = document.createElement(`div`);
    moreContent2.classList.add(`moreContent`);
    moreContent2.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent2);
    moreContent2.innerHTML = await destinationCardsTemplate(9, 17);

    moreContent2.innerHTML += `
    <button class="see-all" id="destinationsDisplay3">See more</button>
    <button class="hide-all" id="hideDestinations2">Hide all</button>
    `

    const moreContent3 = document.createElement(`div`);
    moreContent3.classList.add(`moreContent`);
    moreContent3.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent3);
    moreContent3.innerHTML = await destinationCardsTemplate(18, 26);

    moreContent3.innerHTML += `
    <button class="see-all" id="destinationsDisplay4">See more</button>
    <button class="hide-all" id="hideDestinations3">Hide all</button>
    `


    const moreContent4 = document.createElement(`div`);
    moreContent4.classList.add(`moreContent`);
    moreContent4.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent4);

    moreContent4.innerHTML = await destinationCardsTemplate(27, 35);


    moreContent4.innerHTML += `
    <button class="see-all" id="destinationsDisplay5">See more</button>
    <button class="hide-all" id="hideDestinations4">Hide all</button>
    `

    const moreContent5 = document.createElement(`div`);
    moreContent5.classList.add(`moreContent`);
    moreContent5.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent5);

    moreContent5.innerHTML = await destinationCardsTemplate(36, 44);

    moreContent5.innerHTML += `
    <button class="see-all" id="destinationsDisplay6">See more</button>
    <button class="hide-all" id="hideDestinations5">Hide all</button>
    `;

    const moreContent6 = document.createElement(`div`);
    moreContent6.classList.add(`moreContent`);
    moreContent6.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent6);

    moreContent6.innerHTML = await destinationCardsTemplate(45, 57);
    moreContent6.innerHTML += `
    <button class="hide-all" id="hideDestinations6">Hide all</button>
    `

    const hideDestinations1 = document.getElementById(`hideDestinations1`)
    const hideDestinations2 = document.getElementById(`hideDestinations2`)
    const hideDestinations3 = document.getElementById(`hideDestinations3`)
    const hideDestinations4 = document.getElementById(`hideDestinations4`)
    const hideDestinations5 = document.getElementById(`hideDestinations5`)
    const hideDestinations6 = document.getElementById(`hideDestinations6`)
    const destinationsDisplay2 = document.getElementById(`destinationsDisplay2`)
    const destinationsDisplay3 = document.getElementById(`destinationsDisplay3`)
    const destinationsDisplay4 = document.getElementById(`destinationsDisplay4`)
    const destinationsDisplay5 = document.getElementById(`destinationsDisplay5`)
    const destinationsDisplay6 = document.getElementById(`destinationsDisplay6`)

    hideDestinations1.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay)
      moreContent1.classList.remove(`show`)
    })
    hideDestinations2.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay)
      moreContent1.classList.remove(`show`)
      moreContent2.classList.remove(`show`)
      destinationsDisplay2.style.display = `block`
      hideDestinations1.style.display = `block`
    })
    hideDestinations3.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay)
      moreContent1.classList.remove(`show`)
      moreContent2.classList.remove(`show`)
      moreContent3.classList.remove(`show`)
      destinationsDisplay2.style.display = `block`
      destinationsDisplay3.style.display = `block`
      hideDestinations1.style.display = `block`
      hideDestinations2.style.display = `block`
    })
    hideDestinations4.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay)
      moreContent1.classList.remove(`show`)
      moreContent2.classList.remove(`show`)
      moreContent3.classList.remove(`show`)
      moreContent4.classList.remove(`show`)
      destinationsDisplay2.style.display = `block`
      destinationsDisplay3.style.display = `block`
      destinationsDisplay4.style.display = `block`
      hideDestinations1.style.display = `block`
      hideDestinations2.style.display = `block`
      hideDestinations3.style.display = `block`
    })
    hideDestinations5.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay)
      moreContent1.classList.remove(`show`)
      moreContent2.classList.remove(`show`)
      moreContent3.classList.remove(`show`)
      moreContent4.classList.remove(`show`)
      moreContent5.classList.remove(`show`)
      destinationsDisplay2.style.display = `block`
      destinationsDisplay3.style.display = `block`
      destinationsDisplay4.style.display = `block`
      destinationsDisplay5.style.display = `block`
      hideDestinations1.style.display = `block`
      hideDestinations2.style.display = `block`
      hideDestinations3.style.display = `block`
      hideDestinations4.style.display = `block`
    })
    hideDestinations6.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay)
      moreContent1.classList.remove(`show`)
      moreContent2.classList.remove(`show`)
      moreContent3.classList.remove(`show`)
      moreContent4.classList.remove(`show`)
      moreContent5.classList.remove(`show`)
      moreContent6.classList.remove(`show`)
      destinationsDisplay2.style.display = `block`
      destinationsDisplay3.style.display = `block`
      destinationsDisplay4.style.display = `block`
      destinationsDisplay5.style.display = `block`
      destinationsDisplay6.style.display = `block`
      hideDestinations1.style.display = `block`
      hideDestinations2.style.display = `block`
      hideDestinations3.style.display = `block`
      hideDestinations4.style.display = `block`
      hideDestinations5.style.display = `block`
    })
    destinationsDisplay.addEventListener(`click`, () => {
      moreContent1.classList.add(`show`)
      destinationCards.removeChild(destinationsDisplay)
    })
    destinationsDisplay2.addEventListener(`click`, () => {
      moreContent2.classList.add(`show`)
      destinationsDisplay2.style.display = `none`
      hideDestinations1.style.display = `none`
    })
    destinationsDisplay3.addEventListener(`click`, () => {
      moreContent3.classList.add(`show`)
      destinationsDisplay3.style.display = `none`
      hideDestinations2.style.display = `none`
    })
    destinationsDisplay4.addEventListener(`click`, () => {
      moreContent4.classList.add(`show`)
      destinationsDisplay4.style.display = `none`
      hideDestinations3.style.display = `none`
    })
    destinationsDisplay5.addEventListener(`click`, () => {
      moreContent5.classList.add(`show`)
      destinationsDisplay5.style.display = `none`
      hideDestinations4.style.display = `none`
    })
    destinationsDisplay6.addEventListener(`click`, () => {
      moreContent6.classList.add(`show`)
      destinationsDisplay6.style.display = `none`
      hideDestinations5.style.display = `none`
    })
  }
  catch (error) {
    console.error(error)
  }
}

async function displayTours() {
  try {
    const response = await fetch(`/js-files/components.json`)
    if (!response.ok) {
      throw new Error(`Could not fetch resource`)
    }
    const data = await response.json()

    const toursContainer = document.getElementById(`toursContainer`)
    const moreContent1 = document.createElement(`div`);
    moreContent1.classList.add(`moreContent`);
    moreContent1.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent1);
    moreContent1.innerHTML = await tourCardsTemplate(0, 5);

    moreContent1.innerHTML += `
    <button class="see-all" id="toursDisplay2">See more</button>
    <button class="hide-all" id="hideTours1">Hide all</button>
    `

    const moreContent2 = document.createElement(`div`);
    moreContent2.classList.add(`moreContent`);
    moreContent2.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent2);

    moreContent2.innerHTML = await tourCardsTemplate(6, 11);

    moreContent2.innerHTML += `
        <button class="see-all" id="toursDisplay3">See more</button>
    <button class="hide-all" id="hideTours2">Hide all</button>
    `;

    const moreContent3 = document.createElement(`div`);
    moreContent3.classList.add(`moreContent`);
    moreContent3.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent3);

    moreContent3.innerHTML = await tourCardsTemplate(12, 17);
    moreContent3.innerHTML += `
    <button class="see-all" id="toursDisplay4">See more</button>
    <button class="hide-all" id="hideTours3">Hide all</button>
    `

    const moreContent4 = document.createElement(`div`);
    moreContent4.classList.add(`moreContent`);
    moreContent4.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent4);
    moreContent4.innerHTML = await tourCardsTemplate(18, 23);


    moreContent4.innerHTML += `
    <button class="see-all" id="toursDisplay5">See more</button>
    <button class="hide-all" id="hideTours4">Hide all</button>
    `

    const moreContent5 = document.createElement(`div`);
    moreContent5.classList.add(`moreContent`);
    moreContent5.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent5);

    moreContent5.innerHTML = await tourCardsTemplate(24, 29);

    moreContent5.innerHTML += `
    <button class="hide-all" id="hideTours5">Hide all</button>
    `;

    const hideTours1 = document.getElementById(`hideTours1`);
    const hideTours2 = document.getElementById(`hideTours2`);
    const hideTours3 = document.getElementById(`hideTours3`);
    const hideTours4 = document.getElementById(`hideTours4`);
    const hideTours5 = document.getElementById(`hideTours5`);
    const toursDisplay2 = document.getElementById(`toursDisplay2`);
    const toursDisplay3 = document.getElementById(`toursDisplay3`);
    const toursDisplay4 = document.getElementById(`toursDisplay4`);
    const toursDisplay5 = document.getElementById(`toursDisplay5`);

    hideTours1.addEventListener(`click`, () => {
      toursContainer.appendChild(toursDisplay);
      moreContent1.classList.remove(`show`);
      toursDisplay.style.display = `block`;
    });
    hideTours2.addEventListener(`click`, () => {
      toursContainer.appendChild(toursDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      toursDisplay.style.display = `block`;
      toursDisplay2.style.display = `block`;
      hideTours1.style.display = `block`;
    });
    hideTours3.addEventListener(`click`, () => {
      toursContainer.appendChild(toursDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      moreContent3.classList.remove(`show`);
      toursDisplay.style.display = `block`;
      toursDisplay2.style.display = `block`;
      toursDisplay3.style.display = `block`;
      hideTours1.style.display = `block`;
      hideTours2.style.display = `block`;
    });
    hideTours4.addEventListener(`click`, () => {
      toursContainer.appendChild(toursDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      moreContent3.classList.remove(`show`);
      moreContent4.classList.remove(`show`);
      toursDisplay.style.display = `block`;
      toursDisplay2.style.display = `block`;
      toursDisplay3.style.display = `block`;
      toursDisplay4.style.display = `block`;
      hideTours1.style.display = `block`;
      hideTours2.style.display = `block`;
      hideTours3.style.display = `block`;
    });
    hideTours5.addEventListener(`click`, () => {
      toursContainer.appendChild(toursDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      moreContent3.classList.remove(`show`);
      moreContent4.classList.remove(`show`);
      moreContent5.classList.remove(`show`);
      toursDisplay.style.display = `block`;
      toursDisplay2.style.display = `block`;
      toursDisplay3.style.display = `block`;
      toursDisplay4.style.display = `block`;
      toursDisplay5.style.display = `block`;
      hideTours1.style.display = `block`;
      hideTours2.style.display = `block`;
      hideTours3.style.display = `block`;
      hideTours4.style.display = `block`;
    });

    toursDisplay.addEventListener(`click`, () => {
      moreContent1.classList.add(`show`);
      toursDisplay.style.display = `none`;
    });
    toursDisplay2.addEventListener(`click`, () => {
      moreContent2.classList.add(`show`);
      toursDisplay2.style.display = `none`;
      hideTours1.style.display = `none`;
    });
    toursDisplay3.addEventListener(`click`, () => {
      moreContent3.classList.add(`show`);
      toursDisplay3.style.display = `none`;
      Tours2.style.display = `none`;
    });
    toursDisplay4.addEventListener(`click`, () => {
      moreContent4.classList.add(`show`);
      toursDisplay4.style.display = `none`;
      hideTours3.style.display = `none`;
    });
    toursDisplay5.addEventListener(`click`, () => {
      moreContent5.classList.add(`show`);
      toursDisplay5.style.display = `none`;
      hideTours4.style.display = `none`;
    });
  } catch (error) {
    console.error(`Extra tours failed to load`, error);
  }
}

async function filterDestinations() {
  const destinationInput = document.getElementById("destinationInput");
  const resultsContainer = document.createElement(`div`);
  const baseContent = returnBaseContent()
  const data = await retrieveJSON()
  resultsContainer.classList.add(`grid-3`, `moreContent`);

  destinationInput.addEventListener("input", async function () {
    try {
      let filteredContent;
      if (destinationInput.value.trim() === "") {
        filteredContent = data[0];
      }
      filteredContent = data[0].filter((item) =>
        item.name.toLowerCase().includes(destinationInput.value.toLowerCase())
      );

      // Clear old results
      resultsContainer.innerHTML = "";

      if (filteredContent.length === 0) {
        // Show "not found" card
        const noResultCard = document.createElement("div");
        noResultCard.classList.add("card");

        noResultCard.innerHTML = `
        <div class="card-body">
          <h3 class="card-title">No destinations found</h3>
          <p class="card-desc">Try another destination or check your spelling.</p>
          <button class="clear" id="clearFilterBtn">Clear Results</button>
        </div>
      `;

        resultsContainer.appendChild(noResultCard);
        document.getElementById(`dsMain`).innerHTML = ``;
        document.getElementById(`dsMain`).appendChild(resultsContainer);
        document
          .getElementById(`clearFilterBtn`)
          .addEventListener(`click`, () => {
            document.getElementById(`dsMain`).removeChild(resultsContainer);
            document.getElementById(`dsMain`).innerHTML = baseContent;

            destinationInput.value = ``;
          });
        return; // stop execution here
      }

      // Otherwise, show matching cards
      filteredContent.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${item.image}" alt="destination-picture" class="card-img">
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
              <a href="explore-destination.html?destination=${item.id}" class="btn">Explore destination</a>
        </div>
      `;

        resultsContainer.appendChild(card);
      });
      resultsContainer.innerHTML += `<div class="card">
          <h3 class="card-title">No more destinations</h3>
          <p class="card-desc">Try another destination name or explore one above.</p>
          <button class="clear" id="clearFilterBtn">Clear Results</button>
        </div>`;
      document.getElementById(`dsMain`).innerHTML = ``;
      document.getElementById(`dsMain`).appendChild(resultsContainer);
      document
        .getElementById(`clearFilterBtn`)
        .addEventListener(`click`, () => {
          document.getElementById(`dsMain`).removeChild(resultsContainer);
          document.getElementById(`dsMain`).innerHTML = baseContent;
          displayDestinations()
          displayTours()
          destinationInput.value = ``;
        });
    
    } catch (error) {
    console.error(`Filtered content failed to load`, error);
  }
});
}

async function filterTours(tourType) {
  let filteredContent;
  const data = await retrieveJSON();
  const baseContent = returnBaseContent()
  const resultsContainer = document.createElement(`div`);
  resultsContainer.classList.add(`grid-3`, `moreContent`);
  resultsContainer.innerHTML = "";
  if (tourType === `all`) {
    filteredContent = data[1];
  } else {
    filteredContent = data[1].filter((tour) => {
      return tour.type === tourType;
    });
  }
  filteredContent.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    let destinationsVisited = item.destinationsVisited;
    let destinationsVisitedLink = destinationsVisited
      .map((destination) => {
        return `<a href="explore-destination.html?destination=${destination}" class="destinations">${destination.charAt(0).toUpperCase() +
          destination.slice(1).toLowerCase()
          }</a>`;
      })
      .join(``);
    card.innerHTML = `
        <img src="${item.image}" alt="destination-picture" class="card-img">
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <p>
                ${destinationsVisitedLink}
              </p>
              <a href="explore-tour.html?tour=${item.id}" class="btn">Explore Tour</a>
        </div>
      `;
    resultsContainer.appendChild(card);
  });
  resultsContainer.innerHTML += `<div class="card">
          <h3 class="card-title">No more tours</h3>
          <p class="card-desc">Try another tour type or explore one above.</p>
          <button class="clear" id="clearFilterBtn">Clear Results</button>
        </div>`;
  document.getElementById(`dsMain`).innerHTML = ``;
  document.getElementById(`dsMain`).appendChild(resultsContainer);
  document.getElementById(`clearFilterBtn`).addEventListener(`click`, () => {
    document.getElementById(`dsMain`).removeChild(resultsContainer);
    document.getElementById(`dsMain`).innerHTML = baseContent;
    document.getElementById(`tourTypes`).value = `All Tours`
    displayDestinations()
    displayTours()
    if (sessionStorage.getItem(`filterFromHomepage`)) {
      filterDestinations()
      sessionStorage.clear(`filterFromHomepage`)
    }
  });
}

function checkForTourTypeParameter() {
  const params = new URLSearchParams(window.location.search);

  if (params.get(`tourType`)) {
    let tourTypesDropdown = document.getElementById(`tourTypes`)

    switch (params.get(`tourType`)) {
      case `adventure`: tourTypesDropdown.value = `Adventure Tours`; break;
      case `cultural`: tourTypesDropdown.value = `Cultural Tours`; break;
      case `luxury`: tourTypesDropdown.value = `Luxury Tours`; break;
      case `nature`: tourTypesDropdown.value = `Nature & Wildlife Tours`; break;
    }

    filterTours(params.get(`tourType`))
    params.delete(`tourType`)
    const url = params.toString()
    history.replaceState({}, ``, url ? `?` + url : location.pathname)
    sessionStorage.setItem(`filterFromHomepage`, true)
  } else {
    clearFilterInputs()
    displayDestinations()
    displayTours()
    filterDestinations()
  }
}
checkForTourTypeParameter()
