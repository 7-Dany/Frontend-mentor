const testimonials = document.querySelectorAll('.testimonial')
const rightBtn = document.querySelector('.slider-buttons__right')
const leftBtn = document.querySelector('.slider-buttons__left')
let active = 0
let length = testimonials.length - 1
testimonials.forEach(testimonial => testimonial.style.display = 'None')
testimonials[active].style.display = 'grid'

function next() {
    if (active < length) {
        testimonials[active].style.display = 'None'
        testimonials[active + 1].style.display = 'grid'
        active++
    } else {
        testimonials[active].style.display = 'None'
        testimonials[length].style.display = 'grid'
        active = length
    }
}

function previous() {
    if (active !== 0) {
        testimonials[active].style.display = 'None'
        testimonials[active - 1].style.display = 'grid'
        active--
    } else {
        testimonials[active].style.display = 'None'
        testimonials[0].style.display = 'grid'
        active = 0
    }
}

rightBtn.addEventListener('click', event => {
    next()
})
leftBtn.addEventListener('click', event => {
    previous()
})

document.querySelector('html').addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        previous()
    } else if (event.key === 'ArrowRight') {
        next()
    }
})