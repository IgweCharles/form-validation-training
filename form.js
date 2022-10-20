

const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    verifyUserInfo();
    email_input();
    
   

})
const button = document.getElementById('button')

function verifyUserInfo(){
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const pwd1 = document.getElementById('password1')
    const pwd2 = document.getElementById('password2')

// Username
    if (username.value.trim() == ''){
        displayError(username, "Oops! Username cannot be blank!");
    }else{
        displaySuccess(username)
    }

    if (email.value.trim() == ''){
        displayError(email, "Oops! email cannot be blank!");
    }else{
        displaySuccess(email)
    }

    if (pwd1.value.trim() == ''){
        displayError(pwd1, "Oops! password cannot be blank!");
    }else{
        displaySuccess(pwd1)
    }
    if (pwd1.value.trim() !== pwd2.value.trim()){
        displayError(pwd2, "Oops! password does not match");
    }else{
        displaySuccess(pwd2)
    }



function displayError(input_field, message){
      
       input_field.parentElement.classList.add('error')
       input_field.parentElement.querySelector('small').textContent = message

}
function displaySuccess(input_field){
    input_field.parentElement.classList.add('success')
    input_field.parentElement.classList.remove('error')
}

}