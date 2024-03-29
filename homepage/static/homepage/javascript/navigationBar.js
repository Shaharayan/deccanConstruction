const menuOpen = document.querySelector('.hamburger-menu-icon');

const menuClose = document.querySelector('.menu-close-icon');

const navigationMenu = document.querySelector('.navigation-menu');



document.addEventListener('DOMContentLoaded',()=>{
    navigationMenu.style.transform = 'translateX(-100%)';
})

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