// acces a la modale
let modal = document.getElementById("modal");

function showModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// ferme la modale si clic hors champs
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Ferme la modale avec la touche echap
window.addEventListener("keyup", function(event) {
  if (event.key === "Escape") { 
    closeModal();
  }
});

// détection position du curseur souris
window.addEventListener("mousemove", function(event) {
  // verification si le curseur est dans le coin supérieur droit
  let x = event.clientX; // Position X du curseur
  let y = event.clientY; // Position Y du curseur
  let screenWidth = window.innerWidth; // largeur de la fenêtre

  // Affiche la modale si le curseur est dans le coin superieur droit
  if (x > screenWidth - 100 && y < 100) {
    showModal();
  }
});
