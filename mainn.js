    var moon = document.getElementById("moon");
    moon.onclick = function(){
      document.body.classList.toggle("dark-mode");
      if(document.body.classList.contains("dark-mode")){
        moon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        nav_img.src = "./images/logo white.svg";
        quotes.src = "./images/icon-quotes dark.svg";
      } else {
        moon.innerHTML = '<i class="fa-solid fa-moon"></i>';
        nav_img.src = "./images/logo.svg";
        quotes.src = "./images/icon-quotes.svg";
      }
    }
