// DOM Selection
const menuBtn = document.querySelector(".site__header--burger");
const menu = document.querySelector(".site__header--menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

// Functions
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => {
      item.classList.add("show");
    });

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });

    // Set Menu State
    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);
