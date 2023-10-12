document.addEventListener('DOMContentLoaded', () => {

    const aboutWorkActiveClass = 'active';
    const aboutWorkItems = document.querySelectorAll('.about-work__item');
    const aboutWorkImages = document.querySelectorAll('.about-work__mobile-img img');
    const mobileImgImage = document.querySelector('.about-work__mobile-img');

    aboutWorkItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains(aboutWorkActiveClass)) {
                return;
            }
            if (!window.matchMedia('(max-width:768px)').matches) {
                return;
            }

            clearActive(aboutWorkItems, aboutWorkActiveClass);

            item.classList.add(aboutWorkActiveClass);

            clearActive(aboutWorkImages, aboutWorkActiveClass);

            document.querySelector(`.about-work__mobile-img img.${item.dataset.imgClass}`).classList.add('active')
        });
    });

    function clearActive(arrayItems, removedClass) {
        arrayItems.forEach(item => {
            item.classList.remove(removedClass);
        });
    }
});