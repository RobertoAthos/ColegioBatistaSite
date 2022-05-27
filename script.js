//Mobile Menu

var btn = document.getElementById("menu-mobile");

btn.addEventListener("click", () => {
  var x = document.getElementById("mobile-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

//Popup Cadastro

let Openpopup = document.querySelector(".btn");
let popup = document.querySelector("#popup-background");

Openpopup.addEventListener("click", () => {
  let x = document.querySelector("#popup-close");
  popup.style.display = "block";
  x.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

// Verificação de Form em geral

function validateForm() {
  let name = document.forms["NL-Form"]["name"].value;
  let email = document.forms["NL-Form"]["email"].value;
  let errorName = document.querySelector(".empty-name");
  let errorEmail = document.querySelector(".empty-email");

  if (name == "") {
    console.log("Name not Valid");
    errorName.style.display = "block";
  }
  console.log("name sent");

  if (email == "") {
    console.log("Email not Valid");
    errorEmail.style.display = "block";
    return false;
  }
  console.log("email sent");
}
