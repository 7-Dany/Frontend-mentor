let arrows = {
  "product": {
    active: false,
    arrow: document.querySelector('.product-arrow'),
    element: document.querySelector('.product')
  },
  "company": {
    active: false,
    arrow: document.querySelector('.company-arrow'),
    element: document.querySelector('.company')
  },
  "connect": {
    active: false,
    arrow: document.querySelector('.connect-arrow'),
    element: document.querySelector('.connect')
  }
}

for (let i in arrows) {
  arrows[i].arrow.addEventListener('click', event => {
    if (!arrows[i].active) {
      arrows[i].element.classList.add('animate-nav-up')
      arrows[i].arrow.classList.add('active')
      arrows[i].active = true
    } else {
      arrows[i].element.classList.remove('animate-nav-up')
      arrows[i].arrow.classList.remove('active')
      arrows[i].active = false
    }
  })
}

const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
let active = false

menuBtn.addEventListener('click', event => {
  if (!active) {
    menuBtn.classList.add('active')
    nav.classList.add('animate-nav')
    active = true
  } else {
    menuBtn.classList.remove('active')
    nav.classList.remove('animate-nav')
    Object.keys(arrows).forEach(key => {
      arrows[key].active = false
      arrows[key].element.classList.remove('animate-up')
      arrows[key].arrow.classList.remove('active')
    })
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

const hiddenUp = document.querySelectorAll('.hidden-up')
const hiddenRight = document.querySelectorAll('.hidden-right')
const hiddenLeft = document.querySelectorAll('.hidden-left')

hiddenUp.forEach(element => observe('animate-up').observe(element))
hiddenRight.forEach(element => observe('animate-right').observe(element))
hiddenLeft.forEach(element => observe('animate-left').observe(element))
