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
