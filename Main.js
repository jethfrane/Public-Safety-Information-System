// This is the javascript code of the responsive navigation bar (from text buttons to hamburger icon)
togglebutton = document.querySelector(".toggle-button");
togglebutton.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};