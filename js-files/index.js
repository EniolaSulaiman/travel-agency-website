function showMenu() {
    const openIcon = document.querySelector(`.icon`)
    const closeIcon = document.querySelector(`.menu-close`)
    const hamMenu = document.querySelector(`.ham-menu`)
    openIcon.addEventListener(`click`, () => {
        hamMenu.classList.add(`menu-active`)
    })
    closeIcon.addEventListener(`click`, () => {
        hamMenu.classList.remove(`menu-active`)
    })
}
showMenu()

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