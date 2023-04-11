//variables
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const indexHeader = document.querySelector(".headerIndex");
const imagesTable =
    [
        {image : "images/imageprojet.png"},
        {image : "images/slider1.jpg"},
        {image : "images/slider2.jpg"},
        {image : "images/slider3.jpg"},
        {image : "images/slider4.jpg"},
        {image : "images/slider5.jpg"},
        {image : "images/slider6.jpg"},
       
    ]
let slides = 0;

//Fonctions

function nextSlide() {
    indexHeader.style.backgroundImage = "url(" + imagesTable[slides].image + ")";
    if (slides == imagesTable.length - 1) {
        slides = 0
    }

    else {
        slides++
    }
}

// function previousSlide() {
//     myInterval = setInterval(nextSlide, 3000)
// }

function autoPlay() {
    myInterval = setInterval(nextSlide, 4000)
}

//Evenements
 window.onload = autoPlay();

// rightButton.addEventListener("click", () => 
//   {
//     nextSlide();
//     clearInterval(myInterval);
//     autoPlay();
//    }
// )

// leftButton.addEventListener("click", () =>
// {
//     previousSlide();
//     clearInterval(myInterval);
//     autoPlay();
// }
// )