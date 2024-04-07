document.addEventListener('DOMContentLoaded',() => {
    let width = window.innerWidth;
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const reviewContainer = document.querySelector('.all-testimonials');

    if (width > 900){
        organiseReview()

        next.addEventListener('click', () => {
            organiseReview('append')
        })


        prev.addEventListener('click',() => {
            organiseReview('prepend')
        })
    }else{
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





// document.addEventListener('DOMContentLoaded',()=>{
//     let next = document.getElementById('next');
//     let prev = document.getElementById('prev');
//     let reviewContainer = document.querySelector('.all-testimonials');
    
//     next.addEventListener('click',function(){
//         let reviews = document.querySelectorAll('.review');
//         console.log(reviews);
//         reviewContainer.appendChild(reviews[0]);
//         reviewContainer.style.transitionDuration="500ms";
//         organise()
//     })

//     prev.addEventListener('click',function(){
//         let reviews = document.querySelectorAll('.review');
//         console.log(reviews);
//         reviewContainer.prepend(reviews[reviews.length-1]);
//         organise()
//     })
// })


// function organise(){
//     let n = 1;
//     let gap = 10
//     let eachreviews = document.querySelectorAll('.reviews');
//     let reviewContainer = document.querySelector('.all-testimonials');
    
//     eachreviews.forEach((item,index) => {
//         // const left = index * 14;
//         if (index === n){
//             item.style.right = `calc(-5% + -${gap}rem)`;
//             item.style.backgroundColor = '#EBD18F';
//             item.style.transitionDuration = '200ms';
//             item.style.opacity = '0.7';
//             n++;
//             gap = gap + 15;
//             reviewContainer.style.transitionDuration = '500ms';
//             reviewContainer.appendChild(item);
//         } else {
//             item.style.backgroundColor = '#CFB573';
//             item.style.opacity = '1';
//         }
//     })
// }