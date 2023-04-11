const titreSpans = document.querySelectorAll('h1 span');
const image = document.querySelector('img');
window.addEventListener('load', () => {


    const TL = gsap.timeline({paused: true});

TL.staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
.from(image, 1, {x: 100, opacity: 0}, 0.1,)

TL.play();
})