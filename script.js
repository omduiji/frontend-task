const API_URL = 'https://private-b2e6827-robustatask.apiary-mock.com';
const API_PATH_SIGNUP = '/auth/register';
const API_PATH_SIGNIN = '/auth/login';


const signInForm = document.querySelector('#signInForm')
const loginForm = document.querySelector('#loginForm')
const signInBtn = document.querySelector('[data-nav="signIn"]')
const loginBtn = document.querySelector('[data-nav="login"]')


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
