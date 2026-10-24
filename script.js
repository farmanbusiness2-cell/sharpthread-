// ============================================
// SHARPTHREAD — Small Interactions
// ============================================

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('mainNav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
            });
        });
    }
});
