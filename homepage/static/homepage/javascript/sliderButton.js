const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

const heroImages = document.getElementsByClassName("heroImg");
var counter = 0

function handleRightClick(){
    console.log(heroImages.length)
    if (counter < heroImages.length - 1){
        counter++
        slideImage()
    }

}

function handleLeftClick(){
    if(counter != 0){
        counter--
        slideImage()
    }
}

function slideImage(){
    for(slide of heroImages){
        slide.style.transform = `translateY(-${counter*101}%)`;
    }
}