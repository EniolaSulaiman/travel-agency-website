const navIcon = document.querySelector(`.icon`)
navIcon.addEventListener(`click`, () => {
    const hamMenu = document.querySelector(`.ham-menu`)

    if (hamMenu.style.opacity == `0`) {
        hamMenu.style.opacity = `1`
        hamMenu.style.opacity = `1`
    }
    else {
        hamMenu.style.opacity = `0`
    }
})


/* function sliderHover() {
    const images = document.querySelectorAll(`#slides`)
    const destinations = document.querySelectorAll(`#destinations`)
    const destinationName = document.querySelectorAll(`#destinationName`)
    

    for(let i = 0;  i < destinations.length; i++ ){
        const currentImage = images[i]
        const currentDestination = destinations[i]
        const currentDestinationName = destinationName[i]
        currentDestination.addEventListener(`mouseover`, () => {
            currentDestinationName.style.opacity = `1`
            currentImage.style.transform = `scale(1.1)`
            currentDestination.style.width = `7.7em`
            currentDestination.style.height = `11em`
        })

        currentDestination.addEventListener(`mouseout`, () => {
            currentDestinationName.style.opacity = `0`
            currentImage.style.transform = `scale(1)`
            currentDestination.style.width = `min-content`
            currentDestination.style.height = `min-content`
        })

    }

}
sliderHover() */