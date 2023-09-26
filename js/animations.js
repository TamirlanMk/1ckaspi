gsap.utils.toArray(".advantages__cards-item").forEach(function(card) {
    gsap.set(card, {
        transformStyle: "preserve-3d",
    });
    const q = gsap.utils.selector(card);
    const front = q(".advantages__cards-item__front");
    const back = q(".advantages__cards-item__back");

    gsap.set(back, { rotationY:-180 });

    const tl = gsap.timeline({ paused: true })
        .to(front, { duration: 0.6, rotationY: 180 })
        .to(back, { duration: 0.6, rotationY: 0 }, 0)
        .to(card, { z: 50 }, 0)
        .to(card, { z: 0 }, 0.5);

    card.addEventListener("mouseenter", function() {
        tl.play();
    });
    card.addEventListener("mouseleave", function() {
        tl.reverse();
    });
});