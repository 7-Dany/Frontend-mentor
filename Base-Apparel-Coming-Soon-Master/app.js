const form = document.querySelector(".form")
const input = document.querySelector('.form__email')
form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.value) === false) {
    form.classList.add('invalid-email')
  } else {
    form.classList.remove('invalid-email')
  }
})

const array = [1, 2, 3]