let laptopJson = $.getJSON("/js/laptop.json", function (data) {
    return data;
});


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

var elem = document.getElementById('lottie__notebook');

gsap.to('.integration__title', {
    scrollTrigger: {
        trigger: '.integration',
        start: "center+=200 center+=300",
        end: 2200,
        scrub: 1,
        markers:true
    },
    y: -200,
    autoAlpha: 0,
    scale: 0.5
})


LottieScrollTrigger({
    target: "#lottie__notebook",
    path: "https://gist.githubusercontent.com/TamirlanMk/e1eceb4a62583408e90e36ddc5b39848/raw/80c79eb27d3cc5b58d0309faa3072ed179914af9/laptop.json",
    speed: "medium",
    pin: ".integration",
    start: "350 center",
    end: () => `+=${elem.offsetHeight}`,
    scrub: 1,
});


function LottieScrollTrigger(vars) {
    let playhead = {frame: 0},
        target = gsap.utils.toArray(vars.target)[0],
        speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
        st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 1},
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path
        });

    for (let p in vars) { // let users override the ScrollTrigger defaults
        st[p] = vars[p];
    }

    console.log(st);
    animation.addEventListener("DOMLoaded", function () {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
            scrollTrigger: st
        });
    });
}


const text = [
    'Увеличение конверсии продаж',
    'Улучшение эффективности рабочего времени',
    'Улучшение качества обслуживания клиентов',
    'Порядок на складе и в программе',
    'Снижение риска ошибок',
]

// Laptop Animations
let laptopScreen = window.matchMedia('(min-width:992px)')

if (laptopScreen.matches) {

    let tlHero = gsap.timeline({
        toggleActions: 'play none none reverse'
    });

    tlHero.add('hero__image').from('.hero__image-1', {
        yPercent: 100,
        duration: 1.5
    }, {}, 'hero__image').from('.hero__image-2', {
        yPercent: -100,
        duration: 1.5
    }, {}, 'hero__image')

    let tlAdvantages = gsap.timeline({
        scrollTrigger: {
            trigger: ".advantages",
            start: '-100px center',
            toggleActions: 'play none none reverse',
        }
    });

    for (let i = 1; i <= 4; i++) {
        tlAdvantages
            .fromTo(`.advantages__grid-item:nth-child(${i})`, {
                opacity: 0,
                xPercent: i % 2 ? -100 : 100,
            }, {
                opacity: 1,
                xPercent: 0,
                duration: 0.4
            }, '>')
    }

    let tlAboutWork = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-work",
            start: '-100px center',
            toggleActions: 'play none none reverse',
        }
    });

    for (let i = 1; i <= 4; i++) {
        tlAboutWork
            .fromTo(`.about-work__item:nth-child(${i}) .about-work__item-title`, {
                color: '#fff'
            }, {
                color: '#3db3e4',
                duration: 1
            }, '<')
            .fromTo(`.about-work__item:nth-child(${i}) .about-work__item-img`, {
                xPercent: i % 2 ? 100 : -100,
                autoAlpha: 0
            }, {
                xPercent: 0,
                autoAlpha: 1,
                duration: 0.6
            }, '<')
            .fromTo(`.about-work__item:nth-child(${i}) .about-work__item-description`, {
                color: '#fff'
            }, {
                color: '#000',
                duration: 1
            }, '<')
            .fromTo(`.about-work__item:nth-child(${i}) .after-line`, {
                width: '0px'
            }, {
                width: '100%',
                delay: .25,
                duration: 1
            }, '<')
            .fromTo(`.about-work__item:nth-child(${i}) .before-line`, {
                width: '0px'
            }, {
                width: '100%',
                duration: 1
            }, '<')
    }

    let tlProsIntegration = gsap.timeline({
        scrollTrigger: {
            trigger: ".pros-integration",
            start: '-100px center',
            toggleActions: 'play none none reverse',
        }
    })

    for (let i = 1; i <= 5; i++) {
        tlProsIntegration
            .fromTo(`.pros-integration__item:nth-child(${i}) .pros-integration__item-number`, {
                opacity: 0,
                xPercent: -100
            }, {
                opacity: 1,
                xPercent: 0,
                duration: 0.4
            }, '>')
            .to(`.pros-integration__item:nth-child(${i}) .pros-integration__item-text`, {
                    text: {
                        value: text[i - 1],
                    },
                    duration: 1
                }, '<'
            )
    }
}