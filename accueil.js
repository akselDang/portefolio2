document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.container').style.animation = 'fadeInUp 1s ease';
});

// Effet de survol sur les liens de la barre de navigation
const navLinks = document.querySelectorAll('header a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#555';
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});