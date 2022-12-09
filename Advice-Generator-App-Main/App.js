const adviceNumber = document.querySelector('.advice-card__number')
const adviceText = document.querySelector('.advice-card__text')
const adviceButton = document.querySelector('.advice-card__button')

async function getAdvice() {
  const data = await fetch('https://api.adviceslip.com/advice', {method: 'get'})
  return data.json()
}

adviceButton.addEventListener('click', (event) => {
  getAdvice()
      .then(data => {
        console.log(data)
        adviceNumber.innerText = data.slip.id
        adviceText.innerText = data.slip.advice
      })
      .catch(error => {
        console.log(error)
      })
})