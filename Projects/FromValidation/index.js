const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validname = false;
let validemail = false;
let validphone = false;

name.addEventListener("blur", () => {
  let str = name.value;
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  if (regex.test(str)) {
    console.log("Your name is valid");
    name.classList.remove("is-invalid");
    validname=true;
  } else {
    console.log("Your name is not valid");
    name.classList.add("is-invalid");
    validname=false;
  }
});
email.addEventListener("blur", () => {
  let str = email.value;
  let regex =
    /^([_ \- \. 0-9a-zA-z]+)@([_ \- \. 0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;
  if (regex.test(str)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    validemail=true;
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
    validemail=false;
  }
});
phone.addEventListener("blur", () => {
  let str = phone.value;
  let regex = /^([0-9]){10}$/;
  if (regex.test(str)) {
    console.log("Your phone is valid");    
    phone.classList.remove("is-invalid");
    validphone=true;
  } else {
    console.log("Your phone is not valid");
    phone.classList.add("is-invalid");
    validphone=false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked");
  
  let popup = document.getElementById("popup");
  if (validemail && validname && validphone) {
    console.log("submitted properly");
    // if(popup.classList.contains("alert-danger")){
        popup.classList.remove("alert-danger");
    // }
    popup.classList.add("alert-success");
    popup.classList.add("show");
    popup.innerHTML=`<strong>Success!</strong> Your travel request has been successfully submitted.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    
  } else {    
    console.warn("not submitted properly");
    // if(popup.classList.contains("alert-success")){
        popup.classList.remove("alert-success");
    // }
    popup.classList.add("alert-danger");
    popup.classList.add("show");
    popup.innerHTML=`<strong>Error!</strong> Your travel request has been not submitted.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

  }
});
