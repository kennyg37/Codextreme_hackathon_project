document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                /*observer.unobserve(entry.target);*/
            }else {
                entry.target.classList.remove('visible'); 
            }
        });
    });

    const fadeElements = document.querySelectorAll('.animated-p');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    const fadeDivs = document.querySelectorAll('.service');
    fadeDivs.forEach(element => {
        observer.observe(element)
    })
});
