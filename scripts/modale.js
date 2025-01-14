// acces a la modale
let modal = document.getElementById("modal");
    
// Fonction pour afficher la modale
function showModal() {
  modal.style.display = "block";
}

// ferme la modal si click hors champs
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// détection position du curseur souris
window.addEventListener("mousemove", function(event) {
  // verification si le curseur est dans le coin supérieur droit
  let x = event.clientX; // Position X du curseur
  let y = event.clientY; // Position Y du curseur
  let screenWidth = window.innerWidth; // largeur fenêtre
  let screenHeight = window.innerHeight; // hauteur fenêtre

  // Affiche la modale si le curseur est dans le coin supérieur droit (10px de marge)
  if (x > screenWidth - 100 && y < 100) {
    showModal();
  }
});