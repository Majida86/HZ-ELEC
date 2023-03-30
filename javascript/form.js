//On va chercher les differents éléments de notre page
const pages = document.querySelectorAll(".page")
const nbPages = pages.length //nb de pages à récupere

//on attend le chargement de la page
window.onload = () => {
    //on affiche la première page du formulaire
document.querySelector(".page").style.display = "initial"

// On gère les boutons "suivant"
let boutons = document.querySelectorAll("button[type=button]")

for(let bouton of boutons){
    boutons.addEventListener("click", pageSuivante)
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
