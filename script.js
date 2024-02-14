window.location.href="https://aman5062.github.io/helpdesk2/puja.html";
function toggleMenu() {
    const topnav = document.getElementById("myTopnav");
    const bar = document.getElementById("bar");

    topnav.classList.toggle("responsive");
    bar.classList.toggle("fa-bars");
    bar.classList.toggle("fa-times");
}

function handleScroll() {
    const goToTopButton = document.getElementById('goToTopButton');
    const scrollPositionThreshold = 300;

    if (window.scrollY > scrollPositionThreshold) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
}


function highlightActiveNavLink() {
    const navLinks = document.querySelectorAll('#myNav .nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const isCurrentPage = currentPath.endsWith(linkHref);

        if (isCurrentPage) {
            link.classList.add('active', 'text-white');
            link.classList.remove('text-black');
        } else {
            link.classList.remove('active', 'text-white');
            link.classList.add('text-black');
        }
    });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    highlightActiveNavLink();
});

window.addEventListener('scroll', handleScroll);
