let menu: HTMLElement = document.getElementById('menu');
let menuTrigger: HTMLElement = document.getElementById('menu-trigger');
// if (!menu) {
//     throw new Error('menuがありません！');
// } 
// if (!menu_trigger) {
//     throw new Error('menu_triggerがありません！');
// }  
// menu_trigger.addEventListener('click', () => {
//     menu_trigger.classList.toggle('active');
//     if (menu.style.display === "none") {
//         menu.style.display = "block";
//     } else {
//         menu.style.display = "none";
//     }
// }, false);

function toggleNav() {
    menuTrigger.addEventListener('click', function () {
        menuTrigger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    if (menuTrigger.classList.contains('active')) {
        menuTrigger.classList.remove('active');
        menu.classList.remove('active');
    }
}
toggleNav();


let topButton: HTMLElement = document.getElementById('top-button');

function getScrolled() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
}

function scrollToTop() {
    const scrolled = getScrolled();
    window.scrollTo(0, Math.floor(scrolled / 2));
    if (scrolled > 0) {
        window.setTimeout(scrollToTop, 80);
    }
};

window.onscroll = function () {
    (getScrolled() > 500) ? topButton.classList.add('fade-in') : topButton.classList.remove('fade-in');
};

topButton.onclick = function () {
    scrollToTop();
};
