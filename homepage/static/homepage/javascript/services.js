const serviceTitle = document.querySelectorAll('.service-title')

serviceTitle.forEach((title) => {
    title.addEventListener('click', () => {
        const allServices = document.querySelectorAll('.service');
        for(service of allServices){
            service.classList.remove('active');
        }
        let parentElement = event.target.parentElement;
        parentElement.classList.add('active');

    })
}) 