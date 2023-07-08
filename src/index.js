import initialPageLoad from "./initial-page-load"
import menu from "./menu";

console.log('hello')
initialPageLoad();

let tabSwitchingModule = (function(){
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener('click', initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener('click', menu);
})();