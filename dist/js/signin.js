const formLabel = document.querySelectorAll(".form-label"),
  inputs = document.querySelectorAll("form .item input"),
  userEmail = document.getElementById("userEmail"),
  userPassword = document.getElementById("userPassword"),
  checkboxShopPass = document.querySelector("#show");
(signinBtn = document.querySelector(".btn")),
  (form = document.querySelector("form"));

// split label text to leeters
formLabel.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

// style the letters as wavy when focused on input
inputs.forEach((input) => {
  input.addEventListener("focus", (input) => {
    document.querySelectorAll(`.${input.target.id} span`).forEach((letter) => {
      letter.style.transform = "translateY(-30px)";
    });
  });
    // remove eventlister when leave from focus
    input.removeEventListener("mouseleave", () => {
        document.querySelectorAll(`.${input.target.id} span`).forEach((letter) => {
            letter.style.transform = "translateY(30px)";
          });
    })
});

let userList = [];
userList = JSON.parse(localStorage.getItem("users"));

signinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
  for (let i in userList) {
    if (userList[i].email === userEmail.value && userList[i].password === userPassword.value) {
      let name = userList[i].username;
      localStorage.setItem("username", name);
      location.href = "./home.html" ;
      clearForm();
    } else {
        alert("Invalid email or password!");
    }
  }
});

function clearForm() {
  document
    .querySelectorAll("form .item input")
    .forEach((input) => (input.value = ""));
}

function show() {
  if (userPassword.type === "password") {
    userPassword.type = "text";
  } else {
    userPassword.type = "password";
  }
}

checkboxShopPass.addEventListener("click", show);
