const navigationContainer = document.querySelector('.navigation-container')
const menuBtn = document.querySelector('.menu-btn')
let active = false

menuBtn.addEventListener('click', event => {
    if (!active) {
        navigationContainer.classList.add('active')
        document.body.style.overflow = 'hidden'
        active = true
    } else {
        navigationContainer.classList.remove('active')
        document.body.style.overflow = 'auto'
        active = false
    }
})