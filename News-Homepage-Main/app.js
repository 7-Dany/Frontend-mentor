const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
let active = false

menuBtn.addEventListener('click', (event) => {
  if (!active) {
    menuBtn.classList.add('active')
    nav.classList.add('active')
    document.body.style.overflow = 'hidden'
    active = true
  } else {
    menuBtn.classList.remove('active')
    nav.classList.remove('active')
    document.body.style.overflow = 'auto'
    active = false
  }
})