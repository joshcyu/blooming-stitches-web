let namee = document.querySelector('.js-name'),
    userName = document.querySelector('.js-user-name'),
    password = document.querySelector('.js-password'),
    confirmPw = document.querySelector('.js-confirm-password'),
    signUpButton = document.querySelector('.js-signup-button'),
    userTaken = document.querySelector('.js-taken-user'),
    pwdNotMatch = document.querySelector('.js-password-not'),
    emptyField = document.querySelector('.js-empty-field');

let nameList = JSON.parse(localStorage.getItem('storesName')) || [{}];


    
signUpButton.addEventListener('click', (e) => {

  e.preventDefault();
  let names = namee.value,
      userNames = userName.value,
      passwords = password.value,
      confirmPws = confirmPw.value;
  checnAndCreate();

})

namee.addEventListener('click', () => {

  emptyField.innerHTML = '';

})

function checnAndCreate(){
  let names = namee.value,
  userNames = userName.value,
  passwords = password.value,
  confirmPws = confirmPw.value;
  if (names === '' || userNames === '' || passwords === ''|| confirmPws === '') {
    emptyField.innerHTML = `<p>All fields must be filled!</p>`
  }
  else {
    for(let i = 0; i < nameList.length; i++) {
      if (nameList[i].userNames === userNames) {
        userTaken.innerHTML = '<p>Username Already Taken</p>';
        console.log('User Taken');
        return;
      }
    }
    createUser();
}
}

function createUser() {
  let names = namee.value,
  userNames = userName.value,
  passwords = password.value,
  confirmPws = confirmPw.value;
  if (passwords !== confirmPws) {
    pwdNotMatch.innerHTML =  '<p>Password does not match!</p>';
  } else {
    nameList.push({
      names,
      userNames,
      passwords
    });
    localStorage.setItem('storesName', JSON.stringify(nameList));
    console.log("account created");
    userTaken.innerHTML = '';
    pwdNotMatch.innerHTML = '';
  }
}


console.log(nameList);





