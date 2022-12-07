/* All texts on cards to manipulate */
const cardNumbers = document.querySelector('.front-card__card-numbers')
const userName = document.querySelector('.front-card__user-name')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const securityNumber = document.querySelector('.back-card__security-number')

/* Select inputs to store their values and update card texts */
const nameInput = document.querySelector('#name')
const cardNumberInput = document.querySelector('#card-number')
const monthNumberInput = document.querySelector('#month-number')
const yearNumberInput = document.querySelector('#year-number')
const securityNumberInput = document.querySelector('#security-number')


let formInputs = {
  'name': '',
  'card-number': '',
  'month-number': '',
  'year-number': '',
  'security-number': ''
}

/* Listening to changes that happen in input fields */
nameInput.addEventListener('keyup', (event) => {
  formInputs[event.target.name] = event.target.value
  if (event.target.value.length < 30) {
    userName.innerText = event.target.value
  }
})

cardNumberInput.addEventListener('keyup', (event) => {
  let clicked = event.key === 'Backspace';
  let cardNumbersString = cardNumbers.innerText.split('')
  let length = event.target.value.length
  if (length === 4 || length === 9 || length === 14) {
    if (!clicked) event.target.value = event.target.value + ' '
  }
  for (let i = 0; i < cardNumbersString.length; i++) {
    if (!event.target.value[i]) {
      cardNumbersString[i] = i === 4 || i === 9 || i === 14 ? ' ' : 0
    } else {
      cardNumbersString[i] = event.target.value[i]
    }
  }
  cardNumbers.innerText = cardNumbersString.join('')
  formInputs[event.target.name] = event.target.value
})

monthNumberInput.addEventListener('keyup', (event) => {
  formInputs[event.target.name] = event.target.value
  month.innerText = event.target.value
})

yearNumberInput.addEventListener('keyup', (event) => {
  formInputs[event.target.name] = event.target.value
  year.innerText = event.target.value
})

securityNumberInput.addEventListener('keyup', (event) => {
  formInputs[event.target.name] = event.target.value
  securityNumber.innerText = event.target.value
})

let names = ['name', 'card-number', 'expire-date', 'security-number']
let fields = names.map(e => document.querySelector(`.visa-form__${e}-fieldset`))
let errorMsg = names.map(e => document.querySelector(`.visa-form__${e}-error`))


function checkError() {
  let error = false

  /* Name input validation */
  if (!formInputs['name'].length) {
    /* Checking if name input has any value or not*/
    fields[0].classList.add('error')
    error = true
  }

  /* Card number validation*/
  if (!formInputs['card-number'].length) {
    /* Checking if card number has any value or not */
    fields[1].classList.add('error')
    error = true
  } else if (formInputs['card-number'].length < 19) {
    /* If it has values check if they are 16 numbers along with empty spaces in between */
    fields[1].classList.add('error')
    console.log(formInputs['card-number'])
    errorMsg[1].innerText = 'Not Valid'
    error = true
  } else {
    /* Check if any of the card numbers contains any letter or not */
    for (let i of formInputs['card-number']) {
      if (isNaN(Number(i))) {
        if (i !== ' ') {
          fields[1].classList.add('error')
          errorMsg[1].innerText = 'Wrong format, numbers only'
          error = true
          break
        }
      }
    }
  }

  /* Month number and Year number validation */
  if (!formInputs['month-number'].length && !formInputs['year-number'].length) {
    /* Checking if both fields have values or not */
    fields[2].classList.add('error')
    error = true
  } else if (!formInputs['month-number'].length) {
    /* Checking if month number input has value or not */
    fields[2].classList.add('error-month')
    error = true
  } else if (!formInputs['year-number'].length) {
    /* Checking if year number input has value or not */
    fields[2].classList.add('error-year')
    error = true
  }

  /* Security number validation */
  if (!formInputs['security-number'].length) {
    /* Checking if security number input has value or not */
    fields[3].classList.add('error')
    error = true
  }

  return error
}


/* Submit the form */
const form = document.querySelector('.visa-form')
const formSuccess = document.querySelector('.form-success')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!checkError()) {
    form.classList.add('success')
    formSuccess.classList.add('success')
  }
})