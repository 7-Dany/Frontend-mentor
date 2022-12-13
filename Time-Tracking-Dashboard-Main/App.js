import data from './data.json' assert {type: 'json'}

function createCard(image, title, timeframes) {
  let time = timeframes["daily"]
  const imageBackground = title.toLowerCase().split(' ').join('-')
  const card = document.createElement('div')
  card.classList.add('category-card')
  card.innerHTML = `
      <div class="category-card__image-container ${imageBackground}">
        <img src=${image} alt="" aria-hidden="true" class="category-card__image">
      </div>
      <div class="category-card__info">
        <h2 class="category-card__title">${title}</h2>
        <button class="category-card__dots" aria-label="options">
          <img src="images/icon-ellipsis.svg" alt="ellipsis">
        </button>
        <p class="category-card__current-time">${time.current}hrs</p>
        <p class="category-card__last-time">Last Week - ${time.previous}hrs</p>
      </div>
  `
  return card
}

const main = document.querySelector('main')
for (let i of data) {
  let newCard = createCard(i.image, i.title, i["timeframes"])
  main.append(newCard)
}

const currentTimes = document.querySelectorAll('.category-card__current-time')
const previousTimes = document.querySelectorAll('.category-card__last-time')
const timeframes = ['daily', 'weekly', 'monthly'].map(e => document.querySelector(`#${e}`))

function changeTimeframe(currentNode) {
  let count = 0
  for (let i of data) {
    currentTimes[count].innerText = `${i["timeframes"][currentNode.id]["current"]}hrs`
    previousTimes[count].innerText = `Last Week - ${i["timeframes"][currentNode.id]["previous"]}hrs`
    count++
  }
  timeframes.forEach(node => node.classList.remove('active'))
  currentNode.classList.add('active')
}

timeframes.forEach(node => {
  node.addEventListener('click', () => {
    changeTimeframe(node)
  })
})
