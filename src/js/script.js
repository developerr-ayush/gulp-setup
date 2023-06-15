const buttonArray = document.querySelectorAll("button");
buttonArray.forEach(toggleButtonAria);
function toggleButtonAria(button) {
    button.addEventListener("click", () => {
        let buttonAriaExpanded = button.getAttribute("aria-expanded");
        buttonAriaExpanded == "true"
            ? button.setAttribute("aria-expanded", "false")
            : button.setAttribute("aria-expanded", "true");
    });
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("sticky-navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
