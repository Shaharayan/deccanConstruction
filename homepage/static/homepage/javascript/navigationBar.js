const menuOpen = document.querySelector('.hamburger-menu-icon');
const menuClose = document.querySelector('.menu-close-icon');
const navigationMenu = document.querySelector('.navigation-menu');


const navTabs = document.querySelectorAll(".navigation-tab");
const sections = document.querySelectorAll(".section");
window.addEventListener('scroll', () => {

    let currentSection = ""

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/5)){
            currentSection = section.getAttribute('id');
            console.log(currentSection);
        }
    });

    navTabs.forEach(link => {
        if (link.getAttribute('href').slice(1) === currentSection) {
            document.querySelector('.activeSection').classList.remove('activeSection');
            link.classList.add('activeSection');
            currentSection = ""
        }
      });
});



function selectedTab(){
    const navtabs = document.getElementsByClassName("navigation-tab");
    for (tab of navtabs){
        tab.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeTab");
}



document.addEventListener('DOMContentLoaded',() => {
    width = window.innerWidth;
    if (width < 500){
        navigationMenu.style.transform = 'translateX(-100%)';
    }
})



menuOpen.addEventListener('click', () => {
    const navigationMenu = document.querySelector('.navigation-menu');
    navigationMenu.classList.remove('unactive');
    navigationMenu.classList.add('active');
    menuOpen.style.visibility = 'hidden';
    
})

menuClose.addEventListener('click', () => {
    const navigationMenu = document.querySelector('.navigation-menu');
    navigationMenu.classList.remove('active');
    navigationMenu.classList.add('unactive');
    menuOpen.style.visibility = 'visible'; 
})