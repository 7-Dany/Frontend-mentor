const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
let active = false

menuBtn.addEventListener('click', event => {
  if (!active) {
    menuBtn.classList.add('active')
    nav.classList.add('active')
    nav.classList.remove('disabled')
    active = true
  } else {
    menuBtn.classList.remove('active')
    nav.classList.remove('active')
    nav.classList.add('disabled')
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


const right = document.querySelectorAll('.hidden-right')
const left = document.querySelectorAll('.hidden-left')

right.forEach(element => observe('animate-right').observe(element))
left.forEach(element => observe('animate-left').observe(element))