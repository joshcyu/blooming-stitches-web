let overlay = document.querySelector('.overlay1'),
    exitLogin = document.querySelector('.js-exit-login'),
    userNameInput = document.querySelector('.js-user-input'),
    pwInput = document.querySelector('.js-password-input'),
    submitLogIn = document.querySelector('.js-login-submit'),
    warnings = document.querySelector('.js-warnings'),
    buttons = document.querySelector('.js-button'),
    buttons1 = document.querySelector('.js-button1'),
    loginButton = document.querySelector('.js-login'),
    accountList = JSON.parse(localStorage.getItem('storesName')) || [];

export function openAndExitLogin() {
  let loginButtons = document.querySelectorAll('.js-login');
  
  loginButtons.forEach(button => {
    button.addEventListener('click', () => {
      overlay.style.display = 'block';
    })
  })
  
  exitLogin.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
  }

export function login() {

  submitLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    let userName = userNameInput.value,
        password = pwInput.value,
        index = 0;
  
    if (userName === '' || password === '' ) {
      warnings.innerHTML = '<p>All fields must be filled.</p>'
    } else {
      for (let i = 0; i < accountList.length; i++) {
        if (accountList[i].userNames !== userName) {
          warnings.innerHTML = '<p>Username Not Found! Please sign-up first.</p>'
        } else {
          console.log('acc found');
          index = i;
          if (accountList[i].passwords === password) {
            overlay.style.display = 'none';
            buttons.innerHTML = `<p>${accountList[i].names}</p>`;
            let newName = buttons.innerHTML;
            buttons1.innerHTML = newName;
            sessionStorage.setItem('newName',newName);
            console.log(newName);
          }
          else {
            warnings.innerHTML = '<p>Wrong Password! Try Again.</p>'
          }
          return;
        }
      }
    }
  })
}



