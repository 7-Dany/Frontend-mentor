const rangeInput = document.querySelector('.range-input')
const views = document.querySelector('.views__number')
const period = document.querySelector('.period')
const price = document.querySelector('.price__value')
const toggle = document.querySelector('.toggle')
let activeToggle = false
let value = 1

let data = {
  "1": {views: '10K', price: 8},
  "2": {views: '50K', price: 12},
  "3": {views: '100K', price: 16},
  "4": {views: '500K', price: 24},
  "5": {views: '1M', price: 36}
}

toggle.addEventListener('click', event => {
  if (!activeToggle) {
    toggle.classList.add('active')
    activeToggle = true
    showData(activeToggle, data[value].views, data[value].price)
  } else {
    toggle.classList.remove('active')
    activeToggle = false
    showData(activeToggle, data[value].views, data[value].price)
  }
})

rangeInput.addEventListener('input', event => {
  let target = event.target
  const min = Number(target.min)
  const max = Number(target.max)
  value = Number(target.value)
  target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
  showData(activeToggle, data[value].views, data[value].price)
})

function showData(active, viewsNumber, priceNumber) {
  if (!active) {
    views.innerText = viewsNumber
    price.innerText = priceNumber.toFixed(2)
    period.innerText = 'month'
  } else {
    views.innerText = viewsNumber
    price.innerText = ((priceNumber * 12) * (75 / 100)).toFixed(2)
    period.innerText = 'year'
  }
}