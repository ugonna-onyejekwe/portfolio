// let menubar = document.getElementById("menu");
// let closebar = document.getElementById("close");
// let nav = document.querySelector("nav");

// menubar.addEventListener("click", showmenu);
// function showmenu() {
//   nav.classList.remove("unactive");
//   nav.classList.add("active");
// }

// closebar.addEventListener("click", removemenu);
// function removemenu() {
//   nav.classList.remove("active");
//   nav.classList.add("unactive");
// }

// let link = document.querySelector(".link");
// for (let i = 0; i < link.length; i++) {
//   let links = link[i];
//   links.addEventListener("click", open);
// }
// function open(event) {
//   let openlink = event.target;
//   openlink.parentElement.classList.add("active");
// }

const menu_bar = document.querySelector(".menu_btn");
const nav = document.querySelector("nav");

const activate_menu = () => {
  nav.classList.toggle("active");
};

menu_bar.onclick = activate_menu;
