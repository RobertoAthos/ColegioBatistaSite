var btn = document.getElementById("menu-mobile")

btn.addEventListener('click', ()=>{
        var x = document.getElementById("mobile-links");
        if (x.style.display === "block") {
          x.style.display = "none";
        }else{
            x.style.display = "block";
        }
})