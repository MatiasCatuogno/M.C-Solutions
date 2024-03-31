// OnScroll
window.onscroll = function () {
 var bodyScrollTop = document.body.scrollTop;
 var elementScrollTop = document.documentElement.scrollTop;
 var headerMenuBtn = document.getElementById("header-menu-btn");
 var header = document.getElementById("header");

 var flecha = document.getElementById("flecha");

 if (bodyScrollTop > 70 || elementScrollTop > 70) {
  flecha.style.visibility = "visible";
  header.style.visibility = "hidden";
  headerMenuBtn.style.display = "block";
 } else {
  flecha.style.visibility = "hidden";
  header.style.visibility = "visible";
  headerMenuBtn.style.display = "none";
 }
};