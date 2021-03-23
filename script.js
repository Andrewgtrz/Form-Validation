const form =document.getElementById('form');
const passwordElement1=document.getElementById('password1');
const passwordElement2 = document.getElementById('password2');
const messageContainer= document.querySelector('.message-container');
const message=document.getElementById('message');

let isValid=false;
let passwordMatch= false;

function validateForm(){
    isValid=form.checkValidity();

   if(!isValid){
       message.textContent='Please fill out all fields';
       message.style.color= 'red';
       messageContainer.style.borderColor='red';
       return;
   }
   if(passwordElement1.value===passwordElement2.value){
       passwordMatch=true;
       passwordElement1.style.borderColor='green';
       passwordElement2.style.borderColor='green';
   }else{
       passwordMatch=false;
       message.textContent='Make sure the passwords match';
       messageContainer.style.borderColor='red';
       passwordElement1.style.borderColor='red';
       passwordElement2.style.borderColor='red';
       return;
   }
   if(isValid && passwordMatch){
       message.textContent= 'SuccessFully Registered!';
       message.style.color='green';
       messageContainer.style.borderColor='green';
   }
};

function storeFormData(){
    const user={
        name:form.name.value,
        phone:form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password:form.password.value
    };

    //do something here with user data (send to a server)

    console.log(user);
};

function processFormData(e){
    e.preventDefault();

    validateForm();

    if(isValid && passwordMatch){
        storeFormData();
    }
};

form.addEventListener('submit', processFormData);
