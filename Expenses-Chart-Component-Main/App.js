import data from './data.json' assert {type: 'json'}

function isSameAsToday(day) {
  const date = new Date().toDateString().split(' ')[0].toLowerCase()
  return day === date
}

function createChart(price, day) {
  const chart = document.createElement('div')
  if (isSameAsToday(day)) {
    chart.classList.add('chart', 'active')
  } else {
    chart.classList.add('chart')
  }
  const priceElement = document.createElement('p')
  priceElement.innerText = `$${price}`
  priceElement.classList.add('chart__price')
  chart.appendChild(priceElement)
  const bar = document.createElement('div')
  bar.classList.add('chart__bar')
  bar.style.height = `${(price / 60) * 160}px`
  chart.appendChild(bar)
  const dayElement = document.createElement('p')
  dayElement.innerText = `${day}`
  dayElement.classList.add('chart__day')
  chart.appendChild(dayElement)
  return chart
}

const chartsContainer = document.querySelector('.days-spending__charts')

for (let i of data) {
  chartsContainer.appendChild(createChart(i.amount, i.day))
}