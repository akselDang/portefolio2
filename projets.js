// projets.js

function toggleDetails(projetId) {
    const details = document.getElementById(`details-${projetId}`);
    details.style.display = details.style.display === "block" ? "none" : "block";
}

