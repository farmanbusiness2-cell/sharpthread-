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
// Back to Top Button Logic
let backToTopBtn = document.createElement("button");
backToTopBtn.id = "backToTopBtn";
backToTopBtn.innerHTML = "↑";
document.body.appendChild(backToTopBtn);

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
