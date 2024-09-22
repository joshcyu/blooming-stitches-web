export let overlay = document.querySelector('.overlay1'),
    exitLogin = document.querySelector('.js-exit-login'),
    userNameInput = document.querySelector('.js-user-input'),
    pwInput = document.querySelector('.js-password-input'),
    submitLogIn = document.querySelector('.js-login-submit'),
    warnings = document.querySelector('.js-warnings'),
    buttons = document.querySelector('.js-button'),
    buttons1 = document.querySelector('.js-button1'),
    loginButton = document.querySelector('.js-login'),
    accountList = JSON.parse(localStorage.getItem('storesName')),
    loginButtons = document.querySelectorAll('.js-login');

