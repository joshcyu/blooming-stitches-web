let  buttons = document.querySelector('.js-button'),
    buttons1 = document.querySelector('.js-button1');

export function renderNames() {
  let newName = sessionStorage.getItem('newName');
  buttons.innerHTML = newName || '<button class="js-login">Login</button><button> | Sign up</button>';
  if (newName === null) {
  buttons1.innerHTML = '<button class="js-login">Login</button><p> | </p><button>Signup</button>' 
  } else {
    buttons1.innerHTML = `Welcome ${newName}!`
  }
}

export function renderNames1() {
  let newName = sessionStorage.getItem('newName');
  buttons.innerHTML = newName || '<button class="js-login">Login</button><button> | Sign up</button>';
}