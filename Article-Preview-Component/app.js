const shareInfo = document.querySelector(".share-button");
const button = document.querySelector("button");
let showFooter = false;

button.addEventListener("click", function () {
    if (showFooter === false) {
        shareInfo.classList.add("open")
        button.classList.add("open")
        showFooter = true
    } else {
        shareInfo.classList.remove("open")
        button.classList.remove("open")
        showFooter = false
    }
})