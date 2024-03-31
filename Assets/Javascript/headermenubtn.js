// Header Menu Btn
function HeaderMenuBtn () {
 var layers = document.querySelectorAll(".div-menu-btn span");
 var ul = document.querySelector(".header-nav-bar-ul");
  layers.forEach((layers) => {
    layers.classList.toggle("active")
  });
 if (ul.classList.contains("show")) { 
  return ul.classList.remove("show");
 } else { 
  return ul.classList.add("show");
 }
};