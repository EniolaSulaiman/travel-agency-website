async function retrieveJSON() {
  try {
    const response = await fetch(`js-files/components.json`);

    if (!response.ok) {
      throw new Error(`Could not fetch resource`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function displayDestinations() {
  try {
    const data = await retrieveJSON();
    const destinationCards = document.getElementById(`destinationCards`);
    const destinationsDisplay = document.getElementById(`destinationsDisplay`);

    //Create new div for new destinations
    const moreContent1 = document.createElement(`div`);
    moreContent1.classList.add(`moreContent`);
    moreContent1.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent1);

    for (let i = 0; i < 9; i++) {
      moreContent1.innerHTML += `
            <div class="card">
                <img loading="lazy" src="${data[0][i].image}" alt="Image">
                <h3>
                    ${data[0][i].name}
                </h3>
                <p>
                ${data[0][i].desc}
                </p>
              <p><span class="price info">${data[0][i].price}</span><span class="duration info">${data[0][i].duration}</span></p>
                <a href="explore-destination.html?id=${data[0][i].id}" class="btn">Explore Tour</a>
            </div>
            `;
    }

    moreContent1.innerHTML += `
    <button class="see-all" id="destinationsDisplay2">See more</button>
    <button class="hide-all" id="hideDestinations1">Hide all</button>
    `;

    const moreContent2 = document.createElement(`div`);
    moreContent2.classList.add(`moreContent`);
    moreContent2.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent2);
    for (let i = 9; i < 18; i++) {
      moreContent2.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[0][i].image}" alt="Image">
            <h3>
                ${data[0][i].name}
            </h3>
            <p>
            ${data[0][i].desc}
            </p>
              <p><span class="price info">${data[0][i].price}</span><span class="duration info">${data[0][i].duration}</span></p>
            <a href="explore-destination.html?id=${data[0][i].id}" class="btn">Explore Tour</a>
        </div>
        `;
    }

    moreContent2.innerHTML += `
    <button class="see-all" id="destinationsDisplay3">See more</button>
    <button class="hide-all" id="hideDestinations2">Hide all</button>
    `;

    const moreContent3 = document.createElement(`div`);
    moreContent3.classList.add(`moreContent`);
    moreContent3.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent3);
    for (let i = 19; i < 28; i++) {
      moreContent3.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[0][i].image}" alt="Image">
            <h3>
                ${data[0][i].name}
            </h3>
            <p>
            ${data[0][i].desc}
            </p>
              <p><span class="price info">${data[0][i].price}</span><span class="duration info">${data[0][i].duration}</span></p>
            <a href="explore-destination.html?id=${data[0][i].id}" class="btn">Explore Tour</a>
        </div>
        `;
    }

    moreContent3.innerHTML += `
    <button class="see-all" id="destinationsDisplay4">See more</button>
    <button class="hide-all" id="hideDestinations3">Hide all</button>
    `;

    const moreContent4 = document.createElement(`div`);
    moreContent4.classList.add(`moreContent`);
    moreContent4.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent4);

    for (let i = 29; i < 38; i++) {
      moreContent4.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[0][i].image}" alt="Image">
            <h3>
                ${data[0][i].name}
            </h3>
            <p>
            ${data[0][i].desc}
            </p>
              <p><span class="price info">${data[0][i].price}</span><span class="duration info">${data[0][i].duration}</span></p>
            <a href="explore-destination.html?id=${data[0][i].id}" class="btn">Explore Tour</a>
        </div>
        `;
    }

    moreContent4.innerHTML += `
    <button class="see-all" id="destinationsDisplay5">See more</button>
    <button class="hide-all" id="hideDestinations4">Hide all</button>
    `;

    const moreContent5 = document.createElement(`div`);
    moreContent5.classList.add(`moreContent`);
    moreContent5.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent5);

    for (let i = 38; i < 47; i++) {
      moreContent5.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[0][i].image}" alt="Image">
            <h3>
                ${data[0][i].name}
            </h3>
            <p>
            ${data[0][i].desc}
            </p>
              <p><span class="price info">${data[0][i].price}</span><span class="duration info">${data[0][i].duration}</span></p>
            <a href="explore-destination.html?id=${data[0][i].id}" class="btn">Explore Tour</a>
        </div>
        `;
    }

    moreContent5.innerHTML += `
            <button class="see-all" id="destinationsDisplay6">See more</button>
    <button class="hide-all" id="hideDestinations5">Hide all</button>
    `;

    const moreContent6 = document.createElement(`div`);
    moreContent6.classList.add(`moreContent`);
    moreContent6.classList.add(`grid-3`);
    destinationCards.appendChild(moreContent6);

    for (let i = 47; i < 57; i++) {
      moreContent6.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[0][i].image}" alt="Image">
            <h3>
                ${data[0][i].name}
            </h3>
            <p>
            ${data[0][i].desc}
            </p>
              <p><span class="price info">${data[0][i].price}</span><span class="duration info">${data[0][i].duration}</span></p>
            <a href="explore-destination.html?id=${data[0][i].id}" class="btn">Explore Tour</a>
        </div>
        `;
    }

    moreContent6.innerHTML += `
    <button class="hide-all" id="hideDestinations6">Hide all</button>
    `;

    const hideDestinations1 = document.getElementById(`hideDestinations1`);
    const hideDestinations2 = document.getElementById(`hideDestinations2`);
    const hideDestinations3 = document.getElementById(`hideDestinations3`);
    const hideDestinations4 = document.getElementById(`hideDestinations4`);
    const hideDestinations5 = document.getElementById(`hideDestinations5`);
    const hideDestinations6 = document.getElementById(`hideDestinations6`);
    const destinationsDisplay2 =
      document.getElementById(`destinationsDisplay2`);
    const destinationsDisplay3 =
      document.getElementById(`destinationsDisplay3`);
    const destinationsDisplay4 =
      document.getElementById(`destinationsDisplay4`);
    const destinationsDisplay5 =
      document.getElementById(`destinationsDisplay5`);
    const destinationsDisplay6 =
      document.getElementById(`destinationsDisplay6`);

    hideDestinations1.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay);
      moreContent1.classList.remove(`show`);
    });
    hideDestinations2.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      destinationsDisplay2.style.display = `block`;
      hideDestinations1.style.display = `block`;
    });
    hideDestinations3.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      moreContent3.classList.remove(`show`);
      destinationsDisplay2.style.display = `block`;
      destinationsDisplay3.style.display = `block`;
      hideDestinations1.style.display = `block`;
      hideDestinations2.style.display = `block`;
    });
    hideDestinations4.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      moreContent3.classList.remove(`show`);
      moreContent4.classList.remove(`show`);
      destinationsDisplay2.style.display = `block`;
      destinationsDisplay3.style.display = `block`;
      destinationsDisplay4.style.display = `block`;
      hideDestinations1.style.display = `block`;
      hideDestinations2.style.display = `block`;
      hideDestinations3.style.display = `block`;
    });
    hideDestinations5.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      moreContent3.classList.remove(`show`);
      moreContent4.classList.remove(`show`);
      moreContent5.classList.remove(`show`);
      destinationsDisplay2.style.display = `block`;
      destinationsDisplay3.style.display = `block`;
      destinationsDisplay4.style.display = `block`;
      destinationsDisplay5.style.display = `block`;
      hideDestinations1.style.display = `block`;
      hideDestinations2.style.display = `block`;
      hideDestinations3.style.display = `block`;
      hideDestinations4.style.display = `block`;
    });
    hideDestinations6.addEventListener(`click`, () => {
      destinationCards.appendChild(destinationsDisplay);
      moreContent1.classList.remove(`show`);
      moreContent2.classList.remove(`show`);
      moreContent3.classList.remove(`show`);
      moreContent4.classList.remove(`show`);
      moreContent5.classList.remove(`show`);
      moreContent6.classList.remove(`show`);
      destinationsDisplay2.style.display = `block`;
      destinationsDisplay3.style.display = `block`;
      destinationsDisplay4.style.display = `block`;
      destinationsDisplay5.style.display = `block`;
      destinationsDisplay6.style.display = `block`;
      hideDestinations1.style.display = `block`;
      hideDestinations2.style.display = `block`;
      hideDestinations3.style.display = `block`;
      hideDestinations4.style.display = `block`;
      hideDestinations5.style.display = `block`;
    });

    destinationsDisplay.addEventListener(`click`, () => {
      moreContent1.classList.add(`show`);
      destinationCards.removeChild(destinationsDisplay);
    });
    destinationsDisplay2.addEventListener(`click`, () => {
      moreContent2.classList.add(`show`);
      destinationsDisplay2.style.display = `none`;
      hideDestinations1.style.display = `none`;
    });
    destinationsDisplay3.addEventListener(`click`, () => {
      moreContent3.classList.add(`show`);
      destinationsDisplay3.style.display = `none`;
      hideDestinations2.style.display = `none`;
    });
    destinationsDisplay4.addEventListener(`click`, () => {
      moreContent4.classList.add(`show`);
      destinationsDisplay4.style.display = `none`;
      hideDestinations3.style.display = `none`;
    });
    destinationsDisplay5.addEventListener(`click`, () => {
      moreContent5.classList.add(`show`);
      destinationsDisplay5.style.display = `none`;
      hideDestinations4.style.display = `none`;
    });
    destinationsDisplay6.addEventListener(`click`, () => {
      moreContent6.classList.add(`show`);
      destinationsDisplay6.style.display = `none`;
      hideDestinations5.style.display = `none`;
    });
  } catch (error) {
    console.error(`Extra destinations failed to load`, error);
  }
}
displayDestinations();

async function displayTours() {
  try {
    const data = await retrieveJSON();
    const toursContainer = document.getElementById(`toursContainer`);
    const toursDisplay = document.getElementById(`toursDisplay`);

    //Create new div for new tours
    const moreContent1 = document.createElement(`div`);
    moreContent1.classList.add(`moreContent`);
    moreContent1.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent1);

    let tourDestinationsVisited = null;

    for (let i = 0; i < 6; i++) {
      tourDestinationsVisited = data[1][i].destinationsVisited;

      for (let j = 0; j < tourDestinationsVisited.length; j++) {
        tourDestinationsVisited[
          j
        ] = `<a href="explore-destination.html?id=${tourDestinationsVisited[
          j
        ].toLowerCase()}" class="destinations"
                >${tourDestinationsVisited[j]}</a>`;
      }

      tourDestinationsVisited = tourDestinationsVisited.join(``);

      moreContent1.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[1][i].image}" alt="Image">
            <h3>
                ${data[1][i].name}
            </h3>
            <p>
            ${data[1][i].desc}
            </p>
            <p>${tourDestinationsVisited}</p>
            <a href="explore-tour.html?id=${data[1][i].id}" class="btn">Explore Tour</a>
        </div>
        `;
      tourDestinationsVisited = null;
    }

    moreContent1.innerHTML += `
    <button class="see-all" id="toursDisplay2">See more</button>
    <button class="hide-all" id="hideTours1">Hide all</button>
    `;

    const moreContent2 = document.createElement(`div`);
    moreContent2.classList.add(`moreContent`);
    moreContent2.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent2);

    for (let i = 6; i < 12; i++) {
      tourDestinationsVisited = data[1][i].destinationsVisited;

      for (let j = 0; j < tourDestinationsVisited.length; j++) {
        tourDestinationsVisited[
          j
        ] = `<a href="explore-destination.html?id=${tourDestinationsVisited[
          j
        ].toLowerCase()}" class="destinations"
                >${tourDestinationsVisited[j]}</a>`;
      }
      moreContent2.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[1][i].image}" alt="Image">
            <h3>
                ${data[1][i].name}
            </h3>
            <p>
            ${data[1][i].desc}
            </p>
            <p>${data[1][i].destinationsVisited.join("")}</p>
            <a href="explore-tour.html?id=${
              data[1][i].id
            }" class="btn">Explore Tour</a>
        </div>
        `;
      tourDestinationsVisited = null;
    }

    moreContent2.innerHTML += `
        <button class="see-all" id="toursDisplay3">See more</button>
    <button class="hide-all" id="hideTours2">Hide all</button>
    `;

    const moreContent3 = document.createElement(`div`);
    moreContent3.classList.add(`moreContent`);
    moreContent3.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent3);

    for (let i = 12; i < 18; i++) {
      tourDestinationsVisited = data[1][i].destinationsVisited;
      for (let j = 0; j < tourDestinationsVisited.length; j++) {
        tourDestinationsVisited[
          j
        ] = `<a href="explore-destination.html?id=${tourDestinationsVisited[
          j
        ].toLowerCase()}" class="destinations"
                >${tourDestinationsVisited[j]}</a>`;
      }
      moreContent3.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[1][i].image}" alt="Image">
            <h3>
                ${data[1][i].name}
            </h3>
            <p>
            ${data[1][i].desc}
            </p>
            <p>${data[1][i].destinationsVisited.join("")}</p>
            <a href="explore-tour.html?id=${
              data[1][i].id
            }" class="btn">Explore Tour</a>
        </div>
        `;
      tourDestinationsVisited = null;
    }

    moreContent3.innerHTML += `
    <button class="see-all" id="toursDisplay4">See more</button>
    <button class="hide-all" id="hideTours3">Hide all</button>
    `;

    const moreContent4 = document.createElement(`div`);
    moreContent4.classList.add(`moreContent`);
    moreContent4.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent4);

    for (let i = 19; i < 25; i++) {
      tourDestinationsVisited = data[1][i].destinationsVisited;
      for (let j = 0; j < tourDestinationsVisited.length; j++) {
        tourDestinationsVisited[
          j
        ] = `<a href="explore-destination.html?id=${tourDestinationsVisited[
          j
        ].toLowerCase()}" class="destinations"
                >${tourDestinationsVisited[j]}</a>`;
      }
      moreContent4.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[1][i].image}" alt="Image">
            <h3>
                ${data[1][i].name}
            </h3>
            <p>
            ${data[1][i].desc}
            </p>
            <p>${data[1][i].destinationsVisited.join("")}</p>
            <a href="explore-tour.html?id=${
              data[1][i].id
            }" class="btn">Explore Tour</a>
        </div>
        `;
      tourDestinationsVisited = null;
    }

    moreContent4.innerHTML += `
    <button class="see-all" id="toursDisplay5">See more</button>
    <button class="hide-all" id="hideTours4">Hide all</button>
    `;

    const moreContent5 = document.createElement(`div`);
    moreContent5.classList.add(`moreContent`);
    moreContent5.classList.add(`grid-3`);
    toursContainer.appendChild(moreContent5);

    for (let i = 25; i < 37; i++) {
      tourDestinationsVisited = data[1][i].destinationsVisited;
      for (let j = 0; j < tourDestinationsVisited.length; j++) {
        tourDestinationsVisited[
          j
        ] = `<a href="explore-destination.html?id=${tourDestinationsVisited[
          j
        ].toLowerCase()}" class="destinations"
                >${tourDestinationsVisited[j]}</a>`;
      }
      moreContent5.innerHTML += `
        <div class="card">
            <img loading="lazy" src="${data[1][i].image}" alt="Image">
            <h3>
                ${data[1][i].name}
            </h3>
            <p>
            ${data[1][i].desc}
            </p>
            <p>${data[1][i].destinationsVisited.join("")}</p>
            <a href="explore-tour.html?id=${
              data[1][i].id
            }" class="btn">Explore Tour</a>
        </div>
        `;
      tourDestinationsVisited = null;
    }

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
      hideTours2.style.display = `none`;
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
displayTours();
const destinationInput = document.getElementById("destinationInput");
const resultsContainer = document.createElement(`div`);
resultsContainer.classList.add(`grid-3`, `moreContent`);

destinationInput.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    const data = await retrieveJSON();

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
        </div>
      `;

      resultsContainer.appendChild(noResultCard);
      return; // stop execution here
    }

    // Otherwise, show matching cards
    filteredContent.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="card-img">
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <p>
                <span class="price info">${item.price}</span>
                <span class="duration info">${item.duration}</span>
              </p>
        </div>
      `;

      resultsContainer.appendChild(card);
    });
    document.getElementById(`dsMain`).innerHTML = null;
    document.getElementById(`dsMain`).appendChild(resultsContainer);
  }
});
