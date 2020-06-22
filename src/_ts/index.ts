let menu: HTMLElement = document.getElementById('menu');
let header: HTMLElement = document.getElementById('header');
let menuTrigger: HTMLElement = document.getElementById('menu-trigger');

function toggleNav() {
    menuTrigger.addEventListener('click', function () {
        menuTrigger.classList.toggle('active');
        menu.classList.toggle('active');
        header.classList.toggle('active');
    });
    if (menuTrigger.classList.contains('active')) {
        menuTrigger.classList.remove('active');
        menu.classList.remove('active');
        header.classList.remove('active');
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


function currentPage() {
    let links: HTMLCollectionOf<HTMLAnchorElement> = menu.getElementsByTagName("a");
    let current: number = 0;

    for (let i: number = 0; i < links.length; i++) {
        let linkurl: string = links[i].getAttribute("href");
        let currenturl: string = window.location.href;

        if (currenturl.indexOf(linkurl) != -1) {
            current = i;
        }
    }
    links[current].className = "current";
}

window.addEventListener('load', currentPage);