document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Affiche une alerte
    alert("Le message a bien été envoyé");
});