let menu: HTMLElement = document.getElementById('menu');
let menuTrigger: HTMLElement = document.getElementById('menu-trigger');

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


function currentPage() {
    let links: HTMLCollectionOf<HTMLAnchorElement> = menu.getElementsByTagName("a");

    for (let i: number = 0; i < links.length; i++) {
        let linkurl: string = links[i].getAttribute("href");
        let currenturl: string = window.location.href;

        if (linkurl.indexOf('..') != -1) {
            if(i == 0)
                continue
            linkurl = linkurl.split('/')[1];
        }

        if (currenturl.indexOf(linkurl) != -1) {
            links[i].className = "current";
        }
    }
}

window.addEventListener('load', currentPage);