document.documentElement.setAttribute('data-theme', 'light')
const toggle = document.querySelector('.header__toggle')
let active = false

toggle.addEventListener('click', event => {
    if (!active) {
        toggle.classList.add('active')
        document.documentElement.setAttribute('data-theme', 'dark')
        active = true
    } else {
        toggle.classList.remove('active')
        document.documentElement.setAttribute('data-theme', 'light')
        active = false
    }
})