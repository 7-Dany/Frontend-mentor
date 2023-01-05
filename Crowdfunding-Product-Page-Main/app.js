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
