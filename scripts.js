// JavaScript to handle header behavior and carousel scrolling

let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down and past 100px from the top
        header.style.top = '-100px';
    } else {
        // Scrolling up or within 100px from the top
        header.style.top = '0';
    }
    lastScrollY = window.scrollY;
});

// Carousel scrolling
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
});

function scrollCarousel(direction) {
    const scrollAmount = direction === 'left' ? -carousel.clientWidth : carousel.clientWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');

function updateCarouselButtons() {
    if (carousel.scrollLeft === 0) {
        leftButton.classList.add('inactive');
    } else {
        leftButton.classList.remove('inactive');
    }

    if (carousel.scrollWidth - carousel.clientWidth === carousel.scrollLeft) {
        rightButton.classList.add('inactive');
    } else {
        rightButton.classList.remove('inactive');
    }
}

carousel.addEventListener('scroll', updateCarouselButtons);
window.addEventListener('load', updateCarouselButtons);

// Dialogs for email and phone
function showEmailDialog() {
    document.getElementById('email-dialog').style.display = 'block';
}

function closeEmailDialog() {
    document.getElementById('email-dialog').style.display = 'none';
}

function showPhoneDialog() {
    document.getElementById('phone-dialog').style.display = 'block';
}

function closePhoneDialog() {
    document.getElementById('phone-dialog').style.display = 'none';
}

// Show and hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Default section is 'home'
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.id === `nav-${sectionId}`);
    });
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Default section is 'home'
});
