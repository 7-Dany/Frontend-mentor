let numbers = ['one', 'two', 'three', 'four', 'five'].map(e => document.querySelector(`#${e}`))
let chosen = ''
for (let i of numbers) {
  i.addEventListener('click', (event) => {
    numbers.forEach(number => number.classList.remove('active'))
    i.classList.add('active')
    chosen = i.innerText
  })
}
const submit = document.querySelector('#submit')
const rated = document.querySelector('#rated')
const ratingState = document.querySelector('.rating-state')
const thankingState = document.querySelector('.thanking-state')

submit.addEventListener('click', (event) => {
  if (!chosen) {
  } else {
    rated.innerText = chosen
    ratingState.classList.add('disable')
    thankingState.classList.add('active')
    console.log(chosen)
  }
})