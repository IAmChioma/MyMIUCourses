
/**app.js */

let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", submitForm);
function submitForm(event){
   let email_address = document.getElementById("email");
   let password = document.getElementById("password");
   let check = document.getElementById("check");
   let url = document.getElementById("url");
   let user_details = {
       email: email_address.value,
       password: password.value,
       url: url.value,
       check: check.value
   }
   if(email_address.value == '' || password.value ==''|| url.value ==''|| check.value ==''){
       console.log("Enter information in all fields");
   }
   else{
       console.log(user_details);
       alert("Check the console");
   }
   event.preventDefault();
}