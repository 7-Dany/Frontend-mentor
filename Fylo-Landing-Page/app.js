const menuBtn = document.querySelector(".menu-btn")
const burger = document.querySelector(".menu-btn__burger")
const nav = document.querySelector(".nav")
const menuNav = document.querySelector(".menu-nav")
const menuNavItems = document.querySelectorAll(".menu-nav__item")
const links = {
    link1: document.querySelector("#link1"),
    link2: document.querySelector("#link2"),
    link3: document.querySelector("#link3"),
}
let showLinks = false


function openNav() {
    // To open navigation bar once the burger get clicked
    menuBtn.classList.add("open")
    menuBtn.style.position = "fixed"
    burger.classList.add("open")
    nav.classList.add("open")
    menuNav.classList.add("open")
    for (let item of menuNavItems)
        item.classList.add("open")
    showLinks = true
}

function closeNav() {
    // To close navigation bar once links or X get click
    menuBtn.classList.remove("open")
    menuBtn.style.position = "absolute"
    burger.classList.remove("open")
    nav.classList.remove("open")
    menuNav.classList.remove("open")
    for (let item of menuNavItems)
        item.classList.remove("open")
    showLinks = false
}

menuBtn.addEventListener("click", function () {
    if (!showLinks) {
        openNav()
        // It will close the nav once any link get clicked on
        for (let link in links) {
            links[link].addEventListener("click", function () {
                closeNav()
            })
        }
    } else {
        closeNav()
    }
})
