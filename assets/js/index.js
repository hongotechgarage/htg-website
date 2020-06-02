"use strict";

var menu = document.getElementById('menu');
var menu_trigger = document.getElementById('menu-trigger');

if (!menu) {
  throw new Error('menuがありません！');
}

if (!menu_trigger) {
  throw new Error('menu_triggerがありません！');
}

menu_trigger.addEventListener('click', function () {
  menu_trigger.classList.toggle('active');

  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}, false); // Barba.Pjax.start();
//# sourceMappingURL=index.js.map