function contactPopup(){
    const contactPopup = document.querySelector(".contactPopup");
    const container = document.getElementById("container");
    contactPopup.classList.add("active");
    container.style.filter = "blur(10px)";
    container.style.pointerEvents = "none";
    container.style.userSelect = "none";
}

const closeX = document.querySelector(".x");

closeX.addEventListener('click',function(){
    const contactPopup = document.querySelector(".contactPopup");
    contactPopup.classList.remove("active");
    const container = document.getElementById("container");
    container.style.filter = "none";
    container.style.pointerEvents = "all";
    container.style.userSelect = "auto";
})


function submitform(){
    console.log("done")
}