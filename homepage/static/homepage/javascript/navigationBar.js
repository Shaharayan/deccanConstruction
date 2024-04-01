const menuOpen = document.querySelector('.hamburger-menu-icon');

const menuClose = document.querySelector('.menu-close-icon');

const navigationMenu = document.querySelector('.navigation-menu');


function selectedTab(){
    const navtabs = document.getElementsByClassName("navigation-tab");
    for (tab of navtabs){
        tab.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeTab");
}

document.addEventListener('DOMContentLoaded',()=>{
    x = window.matchMedia("(max-width: 500px)")
    responsive(x);
})

function responsive(x){
    if (x.matches){
        navigationMenu.style.transform = 'translateX(-100%)';
    }
}

menuOpen.addEventListener('click', () => {
    const navigationMenu = document.querySelector('.navigation-menu');
    navigationMenu.classList.remove('unactive');
    navigationMenu.classList.add('active');
    menuOpen.style.display = 'none';
    
})

menuClose.addEventListener('click', () => {
    const navigationMenu = document.querySelector('.navigation-menu');
    navigationMenu.classList.remove('active');
    navigationMenu.classList.add('unactive');
    menuOpen.style.display = 'block';  
})