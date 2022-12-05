const mark = document.querySelector('.header__button')
const userCards = document.querySelectorAll('.user-card')
const headerCount = document.querySelector('.header__count')

mark.addEventListener('click', (event) => {
  headerCount.innerText = 0
  for (let i of userCards) {
    i.classList.remove('new')
  }
})