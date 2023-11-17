let $header = document.querySelector("header");
const $logo = document.querySelectorAll('.logo')[0];
const $navbar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];

window.addEventListener("scroll", toggleHeader, false);


function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove("max-header");
        $header.classList.add("min-header");
        $logo.classList.remove("max-logo");
        $logo.classList.add("min-logo");
        $navbar.classList.remove('max-nav');
        $navbar.classList.add('min-nav');
        $menu.firstElementChild.classList.remove('max-hamburger')
        $menu.firstElementChild.classList.add('min-hamburger')
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.add("max-header");
        $header.classList.remove("min-header");
        $logo.classList.add("max-logo");
        $logo.classList.remove("min-logo");
        $navbar.classList.add('max-nav');
        $navbar.classList.remove('min-nav');
        $menu.firstElementChild.classList.add('max-hamburger');
        $menu.firstElementChild.classList.remove('min-hamburger');
    }
}

$menu.addEventListener("click", toggleMenu, false);
let isOpen = false;
function toggleMenu() {
    if (!isOpen) {
        $navbar.classList.add('menu-opended');
        $menu.firstElementChild.classList.add('close-btn');
        isOpen = true;
    } else {
        $navbar.classList.remove('menu-opended');
        $menu.firstElementChild.classList.remove('close-btn');
        isOpen = false;
    }
}

$navbar.addEventListener('click', navClick, false);
function navClick(evt) {
    if(evt.target.tagName == 'A') {
        toggleMenu();
    }
}
