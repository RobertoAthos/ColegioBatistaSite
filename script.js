//Mobile Menu
var btn = document.getElementById("menu-mobile")

btn.addEventListener('click', ()=>{
        var x = document.getElementById("mobile-links");
        if (x.style.display === "block") {
          x.style.display = "none";
        }else{
            x.style.display = "block";
        }
})

//Popup Cadastro

let Openpopup = document.querySelector(".btn")
let popup = document.querySelector("#popup-background")

Openpopup.addEventListener('click', ()=>{
  let x = document.querySelector("#popup-close")
  popup.style.display = "block"
  x.addEventListener('click',()=>{
    popup.style.display = "none"
  })
})