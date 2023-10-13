// let laptopJson = $.getJSON("../assets/lottie/data.json", function (data) {
//     return data;
// });

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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

    animation.addEventListener("DOMLoaded", function () {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
            scrollTrigger: st
        });
    });
}

const ScrollLottie = (obj) => {

    let anim = lottie.loadAnimation({
        container: document.querySelector(obj.target),
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        path: obj.path
    });

    let timeObj = {currentFrame: 0}
    let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";

    ScrollTrigger.create({
        trigger: obj.target,
        scrub: true,
        pin: obj.pin,
        start: "top top",
        end: endString,
        onUpdate: self => {
            if(obj.duration) {
                gsap.to(timeObj, {
                    duration: obj.duration,
                    currentFrame:(Math.floor(self.progress *  (anim.totalFrames - 1))),
                    onUpdate: () => {
                        anim.goToAndStop(timeObj.currentFrame, true)
                    },
                    ease: 'expo'
                })
            } else {
                anim.goToAndStop(self.progress *  (anim.totalFrames - 1), true)
            }
        }
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

window.addEventListener('resize', () => {
    laptopScreen = window.matchMedia('(min-width:992px)')
}, {
    passive: true
})

if (laptopScreen.matches) {

    let tlHero = gsap.timeline({
        toggleActions: 'play none none reverse'
    });

    tlHero.add('hero__image')
        .to('.hero__image-1', {
            y: 0,
            duration: 1.5
        }, 'hero__image')
        .to('.hero__image-2', {
            y: 0,
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
                duration: 0.3
            }, '>')
    }

    let tlAboutWork = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-work",
            start: '-100px center',
            toggleActions: 'play none none reverse',
        }
    });

    const aboutWorkItems = document.querySelectorAll('.about-work__item');

    for (let i = 1; i <= aboutWorkItems.length; i++) {
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
                duration: 2,
                ease: CustomEase.create("custom", "M0,0 C0.046,0.51 0.148,0.724 0.314,0.862 0.415,0.946 0.856,1 1,1 ")
            }, '<')
            .fromTo(`.about-work__item:nth-child(${i}) .after-line`, {
                width: '0px'
            }, {
                width: '100%',
                delay: .25,
                duration: 1.25
            }, '<')
            .fromTo(`.about-work__item:nth-child(${i}) .before-line`, {
                width: '0px'
            }, {
                width: '100%',
                duration: 1.25
            }, '<')
    }

    let tlProsIntegration = gsap.timeline({
        scrollTrigger: {
            trigger: ".pros-integration",
            start: 'center center',
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
                    duration: .6
                }, '<'
            )
    }

    let priceList = document.querySelector('.price-list');

    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.price-list',
    //         start: 'center-=100 center',
    //         toggleActions: 'play none none reverse',
    //         markers: true,
    //         pin: '.price-list',
    //         scrub: true,
    //         end: () => "+=" + priceList.offsetWidth,
    //     },
    // }).
    // to('.price-list__slider', {
    //     xPercent: -110,
    // });

    let elem = document.getElementById('lottie__notebook');

    gsap.to('.integration__title', {
        scrollTrigger: {
            trigger: '.integration',
            start: "400 center",
            end: 2200,
            scrub: 1,
        },
        autoAlpha: 0,
        scale: 0.5,
    })

    LottieScrollTrigger({
        target: "#lottie__notebook",
        path: getPathForLottie(),
        speed: "medium",
        pin: ".integration",
        start: "60% center",
        anticipatePin: 1,
        // markers: true,
        renderer: 'canvas', // Required
        end: () => `+=${elem.offsetHeight / 2}`,
        scrub: 1,
    });

    // ScrollLottie({
    //     target: "#lottie__notebook",
    //     path: getPathForLottie(),
    //     speed: "medium",
    //     pin: ".integration",
    //     start: "60% center",
    //     markers: true,
    //     renderer: 'canvas', // Required
    //     end: () => `+=${elem.offsetHeight / 2}`,
    //     scrub: 1,
    // });
}

function getPathForLottie() {
    const urlArray = window.location.href.split('/');
    const checkUrl = urlArray[urlArray.length - 1].indexOf('.html');

    let path = '';

    if (checkUrl > 0) {
        urlArray.pop();
    }

    return path = `${urlArray.join('/')}/assets/lottie/data.json`;
}