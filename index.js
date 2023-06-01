let menubar = document.getElementById("menu")
let closebar = document.getElementById("close")
let nav  = document.querySelector("nav")


menubar.addEventListener("click", showmenu)
function showmenu() {
    nav.classList.remove("unactive")
    nav.classList.add("active")
}

closebar.addEventListener("click", removemenu)
function removemenu() {
    nav.classList.remove("active")
    nav.classList.add("unactive")
}


let link =document.querySelector(".link")
for(let i=0; i < link.length; i++) {
    let links = link[i]
    links.addEventListener("click", open)
}
 function open(event) {
let openlink = event.target
openlink.parentElement.classList.add("active")
 }
    
 