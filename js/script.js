const hamburgerButton = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".mobile-nav")

hamburgerButton.addEventListener("click", () => {
    mobileNav.classList.toggle("display-none");
})