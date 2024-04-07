
document.addEventListener('DOMContentLoaded',() => {
    let width = window.innerWidth;

    if (width > 900){
        organiseReview()
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');
        const reviewContainer = document.querySelector('.all-testimonials');

        next.addEventListener('click', () => {
            organiseReview('append')
        })

        prev.addEventListener('click',() => {
            organiseReview('prepend')
        })
    }else{
        const reviewContainer = document.querySelector('.all-testimonials');
        next.addEventListener('click', () => {
            reviewContainer.appendChild(review[0]);
        })
        
        prev.addEventListener('click', () => {
            reviewContainer.prepend(review[review.length-1]);
        })
    }
})

function organiseReview(args){
    const reviewContainer = document.querySelector('.all-testimonials');
    const review = document.querySelectorAll('.review');

    let n=1;
    let gap=50;

    review.forEach((item,index) => {
        console.log(index);
        if (index == 0){
            item.style.top = '0';
            item.style.left = '0';
            item.style.backgroundColor = '#cfb579';
            item.style.opacity = '1';
            item.style.width = '50%'
            item.style.height = '90%'
        }else if(index == n){
            item.style.backgroundColor = '#d3c5a5';
            item.style.top = '10%'
            item.style.opacity = '0.7';
            item.style.height = '70%';
            item.style.width = '30%';
            item.style.left = `calc(${gap}%)`;
            n++;
            gap = gap + gap -20;
            if(args == 'append'){
                reviewContainer.appendChild(review[0]);
            }else if(args == 'prepend'){
                reviewContainer.prepend(review[review.length-1]);
            }else{
                console.log('organised')
            }
            item.style.transitionDuration = '700ms';
        }
    })
}