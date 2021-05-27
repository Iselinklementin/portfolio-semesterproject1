const hamburger = document.querySelector(".hamburger-label");
const search = document.querySelector(".search-label");


hamburger.addEventListener("click", () => {

    if (!hamburger.control.checked) {
        search.control.checked = false;
    }
});

search.addEventListener("click", () => {
    if (!search.control.checked) {
        hamburger.control.checked = false;
    }
});

const loader = document.querySelector(".preload-spinner-wrap");
const main = document.querySelector("main");

main.style.display = "none";

window.onload = () => {
    window.setInterval(function () {
        loader.style.display = "none";
        main.style.display = "block";
    },1200)
};