const username = document.querySelector(" #name");
var email = document.querySelector("#email");
var phoneno = document.querySelector("#phoneno");
var password = document.querySelector("#password");
var Cpassword = document.querySelector("#Cpassword");
var input=document.querySelectorAll("input");

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    if (username.value.length < 5) {
      alert("Name should be more than 5 characters!");
    } else if (phoneno.value === "123456789") {
      alert("Invalid Phone number!");
    } else if(password.value!=Cpassword.value){
        alert("Confirm password does not match Password!");
    } else if(password.value==="password"||password.value===username.value||password.value.length < 8){
        alert("Password is not strong!");
    }
    else {
      alert("Form submitted successfully!");
    }
  });
  
  document.querySelector("#btn").addEventListener("click", function(e){
    var button=this;
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    } ,100);
  });
 
 