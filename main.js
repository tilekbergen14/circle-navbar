const hamburger = document.querySelector(".hamburger")
const links = document.querySelector(".links")

hamburger.addEventListener("click", () => {
    links.classList.toggle("fade");
    hamburger.classList.toggle("toggle")
})