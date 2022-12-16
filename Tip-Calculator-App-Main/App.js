const tipAmount = document.querySelector('#tip-amount')
const totalAmount = document.querySelector('#total-amount')
const bill = document.querySelector('#bill')
const peopleNumbers = document.querySelector('#people-number')
const customInput = document.querySelector('#percentage')
const reset = document.querySelector('.reset')

let data = {bill: 0, people: 0}
bill.addEventListener('change', event => {
  data = {...data, bill: event.target.value}
})
peopleNumbers.addEventListener('change', event => {
  data = {...data, people: event.target.value}
})

const buttons = [5, 10, 15, 25, 50].map(n => {
  return {percentage: n, button: document.querySelector(`#percentage-${n}`)}
})

function validateInput(value, container) {
  const inputContainer = document.querySelector(`.${container}`)
  const inputError = document.querySelector(`.${container}__error`)
  if (!value) {
    inputContainer.classList.add('error')
    return false
  }
  if (!isNaN(Number(value))) {
    inputContainer.classList.remove('error')
    return true
  } else {
    inputContainer.classList.add('error')
    inputError.innerText = 'Only Numbers Allowed'
    return false
  }
}

for (let i of buttons) {
  i.button.addEventListener('click', event => {
    if (validateInput(data.bill, 'bill') && validateInput(data.people, 'people-number')) {
      let amount = Number(data.bill) * (i.percentage / 100)
      tipAmount.innerText = `${amount.toFixed(2)}`
      totalAmount.innerText = `${(amount / data.people).toFixed(2)}`
    }
  })
}

customInput.addEventListener('keyup', event => {
  if (validateInput(event.target.value, 'percentage')) {
    if (validateInput(data.bill, 'bill') && validateInput(data.people, 'people-number')) {
      let amount = Number(data.bill) * (event.target.value / 100)
      tipAmount.innerText = `${amount.toFixed(2)}`
      totalAmount.innerText = `${(amount / data.people).toFixed(2)}`
    }
  }
})

reset.addEventListener('click', event => {
  let inputs = [bill, peopleNumbers, customInput]
  inputs.forEach(e => e.value = '')
  let containers = ['bill', 'people-number', 'percentage']
  containers.forEach(e => {
    document.querySelector(`.${e}`).classList.remove('error')
  })
  tipAmount.innerText = `0.00`
  totalAmount.innerText = `0.00`
})
