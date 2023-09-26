$('.companies__slider').slick({
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 3,
    infinite: true,
    speed: 300,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '250px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1170,
            settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '15%',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '10%',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 560,
            settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
            }
        }
    ],
});
