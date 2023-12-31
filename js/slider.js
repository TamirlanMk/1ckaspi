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

$('.price-list__slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    speed: 300,
    variableWidth: true,
    nextArrow: $('.price-next'),
    prevArrow: $('.price-prev'),
    responsive: [
        {
            breakpoint: 1300,
            settings: {
            }
        },
        {
            breakpoint: 1170,
            settings: {
                variableWidth: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                variableWidth: false,
            }
        },
        {
            breakpoint: 560,
            settings: {
                variableWidth: false,
            }
        }
    ],
});

$('.price-list__slider').on('setPosition', function () {
    $(this).find('.price-list__slide').height('auto');
    var slickTrack = $(this).find('.slick-track');
    var slickTrackHeight = $(slickTrack).height();
    $(this).find('.price-list__slide').css('height', slickTrackHeight + 'px');
});