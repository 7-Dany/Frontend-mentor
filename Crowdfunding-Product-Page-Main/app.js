/* Mobile menu for navigation */
const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
let active = false

menuBtn.addEventListener('click', event => {
    if (!active) {
        menuBtn.classList.add('active')
        nav.classList.add('active')
        active = true
    } else {
        menuBtn.classList.remove('active')
        nav.classList.remove('active')
        active = false
    }
})

/* Bookmark project */
const bookmarkBtn = document.querySelector('.product-header__bookmark-button')
let bookmarked = false

bookmarkBtn.addEventListener('click', event => {
    if (!bookmarked) {
        bookmarkBtn.classList.add('bookmarked')
        bookmarked = true
    } else {
        bookmarkBtn.classList.remove('bookmarked')
        bookmarked = false
    }
})

/* Show modal for back project */
const backBtn = document.querySelector('.product-header__back-project-button')
const closeBtn = document.querySelector('.main-model__close-modal')
const backProject = document.querySelector('.back-project-model')
let showBackProject = false
let selected = null


function toggleModal() {
    if (selected) {
        selected.classList.remove('active')
        selected = null
    }
    if (!showBackProject) {
        backProject.classList.add('show')
        document.body.style.overflow = 'hidden'
        showBackProject = true
    } else {
        backProject.classList.remove('show')
        document.body.style.overflow = 'auto'
        showBackProject = false
    }
}

backBtn.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)

/* Select project and pledge */
const available = document.querySelectorAll('.available')
available.forEach(element => {
    element.addEventListener('click', event => {
        if (!selected) {
            selected = element
            selected.classList.add('active')
        } else {
            selected.classList.remove('active')
            selected = element
            selected.classList.add('active')
        }
    })
})

/* Success modal after click on continue button */
const continueButtons = document.querySelectorAll('.main-model__selection-option-pledge-continue')
const successModal = document.querySelector('.success-modal-container')
const successModalButton = document.querySelector('.success-modal__button')
let showSuccessModal = false

continueButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (!showSuccessModal) {
            successModal.classList.add('active')
            backProject.classList.remove('show')
            document.body.style.overflow = 'hidden'
            showBackProject = false
            showSuccessModal = true
        }
    })
})

successModalButton.addEventListener('click', event => {
    if (showSuccessModal) {
        successModal.classList.remove('active')
        document.body.style.overflow = 'auto'
        showSuccessModal = false
    }
})