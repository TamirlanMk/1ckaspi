gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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