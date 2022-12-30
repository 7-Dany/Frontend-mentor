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

function observe(className) {
    return new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className)
            } else {
                entry.target.classList.remove(className)
            }
        })
    })
}

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(element => observe('animate').observe(element))