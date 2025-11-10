
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.9)';
    }
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(function(card) {
    card.addEventListener('click', function() {
        alert('Project card clicked! You can add more details here.');
    });
});