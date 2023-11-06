function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    let email = document.forms["welcome_form"]["email"].value;
    
    sessionStorage.setItem("name", name);
    // localStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
  
    location.href = "quiz.html";
  }

  
const username = document.getElementById('username');


