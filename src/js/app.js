require("../css/app.css");
require("../../node_modules/bulma/css/bulma.css");
require("../../node_modules/@fortawesome/fontawesome-free/js/all");

var burger = document.querySelector(".navbar-burger");
var menu = document.querySelector(".navbar-menu");
burger.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
