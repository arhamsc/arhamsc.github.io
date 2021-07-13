const loginForm = document.getElementsByName('loginForm');
const email = document.getElementsByName('email');
const password1 = document.getElementsByName('password1');
const password2 = document.getElementsByName('password2');

loginForm.addEventListener('submit', e =>{
            e.preventDefault();
            checkInputs();
});

function checkInputs(){
  const emailValue=email.value.trim();
  const password1Value=password1.value.trim();
  const password2Value=password2.value.trim();

  if (emailValue===''){
    setError(email);
  }
  else {
    setSuccess(email);
  }

  if (passowrd1Value===''){
    setError(password1);
  }
  else {
    setSuccess(password1);
  }
  if (passowrd2Value===''){
    setError(password2);
  }
  else if (passowrd1Value!==password2Value){
    setError(password2);
  }
  else {
    setSuccess(password2);
  }

}
function setError(input){
  const formControl=getElementsByName(input);
  formControl.className='loginForm error';
}
function setSuccess(input){
  const formControl=input.parentElement;
  formControl.className = 'loginForm success';
}
