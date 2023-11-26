const navBar = document.getElementById("topnav");
const closeMenu = document.getElementById("close");
const menuBox = document.getElementById("menu");

navBar.addEventListener("click", function () {
  menuBox.classList.add("responsive");
});
closeMenu.addEventListener("click", function () {
  menuBox.classList.remove("responsive");
});
