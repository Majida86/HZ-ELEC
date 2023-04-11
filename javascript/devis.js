const txt = document.querySelector('p');
const image = document.querySelectorAll('img');

const TL1 = new TimelineMax({paused: true});

TL1 
.from(txt, 1, {y: -100, opacity: 0})
.from(image, 1, {x: 100, opacity: 0}, 0.1,)


TL1.play();