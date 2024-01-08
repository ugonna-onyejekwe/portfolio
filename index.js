const menu_btn = document.querySelectorAll(".menu_btn");
const nav = document.querySelector("nav");
const anchor = document.querySelectorAll(".links  a");

menu_btn.forEach((i) => {
  i.onclick = () => {
    activateMenu();
  };
});

anchor.forEach((i) => {
  console.log(i);
  i.onclick = () => {
    activateMenu();
  };
});

function activateMenu() {
  nav.classList.toggle("menu");
}
