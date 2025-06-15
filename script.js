// Close the mobile menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-toggle').checked = false;
    });
});

// Add keyboard accessibility for the hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('keydown', (e) => {
    // Toggle menu on Enter or Space key
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        document.getElementById('nav-toggle').checked = !document.getElementById('nav-toggle').checked;
    }
});

// Add tabindex to make hamburger menu focusable
hamburgerMenu.setAttribute('tabindex', '0');
hamburgerMenu.setAttribute('role', 'button');
hamburgerMenu.setAttribute('aria-label', 'Toggle navigation menu');