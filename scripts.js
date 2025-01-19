//Experience cards
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('click', () => {
        const activeCard = document.querySelector('.experience-card.active');

        // Close the currently active card
        if (activeCard) {
            activeCard.classList.remove('active');
        }

        // Open the clicked card
        card.classList.add('active');
    });
});


//Mobile support for card flips

document.querySelectorAll('.project-card .card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});

//Mobile Support for skill icons
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const activeCard = document.querySelector('.tech-icon.active');

         // Close the currently active card
        if (activeCard) {
            activeCard.classList.remove('active');
        }
        icon.classList.add('active');
    });
});



// Show and hide sections and activate nav buttons
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
