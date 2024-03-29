document.addEventListener('DOMContentLoaded',()=>{
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let reviewContainer = document.querySelector('.all-testimonials');
    
    next.addEventListener('click',function(){
        let reviews = document.querySelectorAll('.review');
        console.log(reviews);
        reviewContainer.appendChild(reviews[0]);
        reviewContainer.style.transitionDuration="500ms";
        organise()
    })

    prev.addEventListener('click',function(){
        let reviews = document.querySelectorAll('.review');
        console.log(reviews);
        reviewContainer.prepend(reviews[reviews.length-1]);
        organise()
    })
})


function organise(){
    let n = 1;
    let gap = 10
    let eachreviews = document.querySelectorAll('.reviews');
    let reviewContainer = document.querySelector('.all-testimonials');
    
    eachreviews.forEach((item,index) => {
        // const left = index * 14;
        if (index === n){
            item.style.right = `calc(-5% + -${gap}rem)`;
            item.style.backgroundColor = '#EBD18F';
            item.style.transitionDuration = '200ms';
            item.style.opacity = '0.7';
            n++;
            gap = gap + 15;
            reviewContainer.style.transitionDuration = '500ms';
            reviewContainer.appendChild(item);
        } else {
            item.style.backgroundColor = '#CFB573';
            item.style.opacity = '1';
        }
    })
}