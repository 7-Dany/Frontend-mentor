let form = {
  'first-name': '',
  'last-name': '',
  'email': '',
  'password': ''
}
let keys = Object.keys(form)
let inputs = keys.map(e => {
  return document.querySelector(`#${e}`)
})

let fields = keys.map(e => {
  return document.querySelector(`#${e}-field`)
})

for (let i of inputs) {
  i.addEventListener('change', (event) => {
    form[event.target.name] = event.target.value
  })
}
const signIn = document.querySelector('#sign-in')
signIn.addEventListener('submit', (event) => {
  event.preventDefault()
  let count = 0
  for (let i in form) {
    if (form[i].length === 0) {
      if (i === 'email') {
        fields[count].classList.add('error-email')
        inputs[count].setAttribute('placeholder', 'email@.example.com')
      } else {
        fields[count].classList.add('error')
      }
    }
    count++
  }
})
