const username = document.getElementById("Username"),
    validName = document.querySelector(" .valid-name"),
    invalidName = document.querySelector(".invalid-name"),
    email = document.getElementById("Email"),
    validEmail = document.querySelector(".valid-email"),
    invalidEmail = document.querySelector(".invalid-email"),
    Password = document.getElementById("Password"),
    validPassword = document.querySelector(".valid-password"),
    invalidPassword = document.querySelector(".invalid-password"),
    signupBtn = document.getElementById("signup"),
    successfulMsg = document.querySelector(".successfulAdd"),
    closeBtn = document.querySelector(".bx-exit"),
    showPassCheckbox = document.getElementById("showpass"),
    userExistingBox = document.querySelector(".userExisitingAlert"),
    form = document.querySelector("form");

let users = [];

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"));
    
}

function addUser() {
    let user = {
        username: username.value,
        email: email.value,
        password: Password.value
    }
    let userExist = users.some(currentUser => currentUser.email === user.email)
    if (userExist) {
        userExistingBox.style.display = "block"
        return
    } 

    if (validateUsername(username.value) && validateEmail(email.value) && validatePassword(Password.value)) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        document.querySelectorAll(".correctIcon").forEach(icon => icon.classList.add("d-none"));
        clearForm()
        successfulMsg.classList.replace("hide", "show")
        
    }
    
}

function clearForm() {
    document.querySelectorAll(".form-control").forEach(input => input.value = "")
}

function validateUsername(name) {
    let regex = /[A-Za-z]\w/;
    if (regex.test(name) ) {
        validName.classList.replace("d-none", "d-block")
        invalidName.classList.add("d-none")
        return true;
    } else {
        validName.classList.add("d-none")
        invalidName.classList.replace("d-none", "d-block")
    }
}

function validateEmail(email) {
    let regex = /^[A-Za-z0-9_!#$&'*+\/=?`|}~^-]+@gmail\.com$/
    if (regex.test(email)) {
        validEmail.classList.replace("d-none", "d-block")
        invalidEmail.classList.add("d-none")
        return true;
        
    } else {
        validEmail.classList.add("d-none")
        invalidEmail.classList.replace("d-none", "d-block")
    }
}

function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (regex.test(password)) {
        validPassword.classList.replace("d-none", "d-block")
        invalidPassword.classList.add("d-none")
        return true;
    } else {
        validPassword.classList.add("d-none")
        invalidPassword.classList.replace("d-none", "d-block")
    }
}

function showPass() {
    if (Password.type === "password") {
        Password.type = "text";
    } else {
        Password.type = "password"
    }
}

form.addEventListener("submit", (e) => e.preventDefault())

closeBtn.addEventListener("click", () => {
    successfulMsg.classList.remove("show")
    successfulMsg.classList.add("hide")
})