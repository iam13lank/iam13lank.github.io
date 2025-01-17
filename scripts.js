// Carousel scrolling
const carousel = document.querySelector('.carousel');
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');

function scrollCarousel(direction) {
    const scrollAmount = direction === 'left' ? -carousel.clientWidth : carousel.clientWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateCarouselButtons, 300);
}

leftButton.addEventListener('click', () => scrollCarousel('left'));
rightButton.addEventListener('click', () => scrollCarousel('right'));

function updateCarouselButtons() {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft <= 0) {
        leftButton.classList.add('inactive');
    } else {
        leftButton.classList.remove('inactive');
    }

    if (carousel.scrollLeft >= maxScrollLeft) {
        rightButton.classList.add('inactive');
    } else {
        rightButton.classList.remove('inactive');
    }
}

carousel.addEventListener('scroll', updateCarouselButtons);

// Touch functionality
let startX;
let scrollStart;
let isDragging = false;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollStart = carousel.scrollLeft;
    isDragging = true;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = x - startX;
    carousel.scrollLeft = scrollStart - walk;
    updateCarouselButtons();
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
    const threshold = 50;
    const moveX = carousel.scrollLeft - scrollStart;
    if (Math.abs(moveX) > threshold) {
        const direction = moveX > 0 ? 'right' : 'left';
        const scrollAmount = direction === 'left' ? -carousel.clientWidth : carousel.clientWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(updateCarouselButtons, 300);
    }
});

//Mobile support for card flips

document.querySelectorAll('.project-card .card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('clicked');
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
