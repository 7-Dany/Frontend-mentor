const questions = document.querySelectorAll('.question')
let active = ''
for (let i of questions) {
  i.addEventListener('click', (event) => {
    questions.forEach(question => question.classList.remove('active'))
    if (i !== active) {
      i.classList.add('active')
      active = i
    } else {
      active = ''
    }
  })
}