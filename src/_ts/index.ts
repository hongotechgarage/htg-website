let menu: HTMLElement = document.getElementById('menu');
let menu_trigger: HTMLElement = document.getElementById('menu-trigger');
if (!menu) {
    throw new Error('menuがありません！');
} 
if (!menu_trigger) {
    throw new Error('menu_triggerがありません！');
}  
menu_trigger.addEventListener('click', () => {
    menu_trigger.classList.toggle('active');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}, false);

// Barba.Pjax.start();