const hamburger = document.querySelector(".hamburger")
const links = document.querySelector(".links")

hamburger.addEventListener("click", () => {
    links.classList.toggle("fade");
    hamburger.classList.toggle("toggle")
})

//cursor

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {
    cursor.setAttribute('style', 'top: ' +(e.pageY - 10)+ 'px; left: '+(e.pageX - 10)+'px;')
})