const shareIcon = document.querySelector(".share-icon")
const shareDiv = document.querySelector(".share")
let show = false
shareIcon.addEventListener("click", () => {
    if (!show) {
        shareDiv.classList.add("open")
        shareIcon.classList.add("open")
        show = true
    } else {
        shareDiv.classList.remove("open")
        shareIcon.classList.remove("open")
        show = false
    }
})