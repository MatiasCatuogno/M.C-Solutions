// DarkMode
function DarkMode () {
 var body = document.querySelector("body");
  if (body.classList.contains("blackmode")) {
   return body.classList.remove("blackmode");
  } else {
   return body.classList.add("blackmode");
  }
};