const features = document.querySelector("#features-link");
const featuresArrow = document.querySelector("#features-arrow");
const featuresNavItems = document.querySelector(".features__nav-items");
const company = document.querySelector("#company")
const companyArrow = document.querySelector("#company-arrow")
const companyNavItems = document.querySelector(".company__nav-items")
let showItemsFeatures = false;
let showItemsCompany = false;
features.addEventListener("click", function () {
    if (!showItemsFeatures) {
        featuresArrow.src = "images/icon-arrow-up.svg";
        featuresNavItems.classList.add("open")
        showItemsFeatures = true;
    } else {
        featuresArrow.src = "images/icon-arrow-down.svg";
        featuresNavItems.classList.remove("open")
        showItemsFeatures = false;
    }
})
company.addEventListener("click", function () {
    if (!showItemsCompany) {
        companyArrow.src = "images/icon-arrow-up.svg";
        companyNavItems.classList.add("open")
        showItemsCompany = true;
    } else {
        companyArrow.src = "images/icon-arrow-down.svg";
        companyNavItems.classList.remove("open")
        showItemsCompany = false;
    }
})
const menuBtn = document.querySelector(".menu-btn");
const menuBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body")
let showMenu = false;
menuBtn.addEventListener("click", function () {
    if (!showMenu) {
        body.classList.add("open")
        menuBtn.classList.add("open-item");
        menuBurger.classList.add("open-item");
        nav.classList.add("open");
        showMenu = true;
    } else {
        body.classList.remove("open")
        menuBtn.classList.remove("open-item");
        menuBurger.classList.remove("open-item");
        nav.classList.remove("open")
        showMenu = false;
    }
})

