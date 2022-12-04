const form = document.querySelector('.form')
const email = document.querySelector('#email')
const fieldset = document.querySelector('.form__fieldset')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false) {
    email.setAttribute('placeholder', 'email@example.com')
    email.value = ''
    fieldset.classList.add('error')
  } else {
    fieldset.classList.remove('error')
  }
})