


const userName = document.getElementById('userName');
const password = document.getElementById('password');
const form = document.getElementById('login');
const errorElement = document.getElementById('error');



form.addEventListener('submit', (e) =>{
  // alert(userName.value + " " +password.value)
  let messages = []

  messages = validateSignIn(messages)

  if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  alert("Success")
})

// simple checks to monitor sign-in field input
function validateSignIn(errorMsg){
  if(userName.value.length <= 4){
    errorMsg.push('Username must be at least 4 characters')
  }
  if(userName.value.length > 15){
    errorMsg.push('Username must be less than 15 characters')
  }
  if(userName.value.toUpperCase() == 'USERNAME'){
    errorMsg.push('Username cannot be "username"')
  }
  if(password.value.length <= 6){
    errorMsg.push('Password must be longer than 6 characters')
  }
  if(password.value.length >= 20){
    errorMsg.push('Password must be less than 20 characters')
  }
  if(password.value == 'password'){
    errorMsg.push('Password cannot be "password"')
  }
  return errorMsg
}
