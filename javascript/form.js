//On va chercher les differents éléments de notre page
const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length //nb de pages à récupere
let pageActive = 1

//on attend le chargement de la page
window.onload = () => {
    //on affiche la première page du formulaire
document.querySelector(".page").style.display = "initial"


// On gère les boutons "suivant"
let boutons = document.querySelectorAll(".next")

for(let bouton of boutons){
    bouton.addEventListener("click", pageSuivante)
}
// On gère les boutons "precedent"
 boutons = document.querySelectorAll(".prev")

for(let bouton of boutons){
    bouton.addEventListener("click", pagePrecedente)
}

}

// cette fonction fait avancer le formulaire d'une page

function pageSuivante(){
    // On incrémente pageActive
pageActive++

// On masque toutes les pages
for(let page of pages){
    page.style.display = "none"
}

// On affiche la page suivante 
this.parentElement.nextElementSibling.style.display = "initial"
}

// cette fonction fait reculer le formulaire d'une page

function pagePrecedente(){
    // On incrémente pageActive
pageActive--

// On masque toutes les pages
for(let page of pages){
    page.style.display = "none"
}

// On affiche la page precedente
this.parentElement.previousElementSibling.style.display = "initial"
}


