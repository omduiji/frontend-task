const API_URL = 'https://private-b2e6827-robustatask.apiary-mock.com';
const API_PATH_SIGNUP = '/auth/register';
const API_PATH_SIGNIN = '/auth/login';

const signInBtn = document.querySelector('[data-nav="signIn"]')
const loginBtn = document.querySelector('[data-nav="login"]')
const signInForm = document.querySelector('#signInForm')
const loginForm = document.querySelector('#loginForm')
const spans = document.querySelectorAll('[data-validate]')
const signInInputs = document.querySelectorAll('#signIn input')
const loginInputs = document.querySelectorAll('#logIn input')
const alertSpan = document.querySelector('[data-response-alert="server-response"]')
const container = document.querySelector('.container')

function validateInputs(Inputs) {
  Inputs.forEach(input => {
  input.addEventListener('input', function (e) {
    if (!input.validity.valid) showError(input)
    if (input.validity.valid) {
      spans.forEach(element => {
        if (element.parentElement === input.parentElement) {
          element.textContent = ''
        }
      })
    }
  })
})
}

validateInputs(signInInputs)
// validateInputs(loginInputs)

signInBtn.addEventListener('click', function (e) {
  e.preventDefault()
  signIn.classList.remove('hide')
  signIn.classList.add('fade-in-left')
  signInBtn.classList.add('active')
  loginBtn.classList.remove('active')
  logIn.classList.add('hide')
})
loginBtn.addEventListener('click', function (e) {
  e.preventDefault()
  signIn.classList.add('hide')
  logIn.classList.remove('hide')
  logIn.classList.add('fade-in-right')
  loginBtn.classList.add('active')
  signInBtn.classList.remove('active')
})



function showError(element) {
    spans.forEach(span => {
      if (span.parentElement === element.parentElement) {
        span.classList.add('fade-in-left')
        element.validity.patternMismatch ? span.textContent = element.getAttribute('data-validate-pattern') : span.textContent = element.getAttribute('data-validate-missing')
      }
    })
}




function submitForm(form, inputs, path) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault()
    inputs.forEach(input => {
      if (!input.validity.valid) showError(input)
    })
    if(Array.from(inputs).find(input => !input.validity.valid)) return
    spans.forEach(item => {
      item.textContent = ''
    })
    container.classList.add('loader')
    var res = await fetch(`${API_URL}${path}`, {method: 'POST', body: new FormData(form)})
    var response = await res.json()
    res.status === 200 ? alertSpan.classList.add('success') : alertSpan.classList.add('error')
    container.classList.remove('loader')
    alertSpan.classList.add('fade-in-left')
    alertSpan.textContent = response.message
  })
}
submitForm(loginForm, loginInputs, API_PATH_SIGNIN)
submitForm(signInForm, signInInputs, API_PATH_SIGNUP)