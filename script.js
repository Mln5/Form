const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs()
});

function checkInputs(){
    const usernameValue = username.ValueMax.trim();
    const emailValue = email.ValueMax.trim();
    const passwordValue = password.ValueMax.trim();
    const password2Value = password2.ValueMax.trim();

    if(usernameValue === ''){
    setError(username, 'Username cannot be blank');
    } 
    else{
        setSuccessFor(username);
    }

    
    if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank');
    } 
    else if(!isEmail(emailValue)){
        setErrorFor( email, 'Not a valid email');
    }
       else{
        setSuccessFor(email);
    }


    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
        } 
        else{
            setSuccessFor(password);
        }


        if(password2Value === ''){
            setErrorFor(password2, 'Password2 cannot be blank');
            } 
            else if(passwordValue !== password2Value){
            setErrorFor(password2, 'Passwords does not match');
        }
            else{
                setSuccessFor(password2);
            }
        
     function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
     }       
     function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
     }
    }


    



