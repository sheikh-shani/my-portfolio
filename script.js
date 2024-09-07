// Toggle Icon Navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll Sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Scroll event handler
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollTop >= offset && scrollTop < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });

            // Active Sections For Animation On Scroll
            sec.classList.add('show-animate');
        }
         else {
            // Remove animation if not in view
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollTop > 100);

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation scrollbar on footer
    const footer = document.querySelector('footer');
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    footer.classList.toggle('show-animate', viewportHeight + scrollY >= scrollHeight);
});



// ABOUT CONTENT JS
document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-more-btn');
    const readLessBtn = document.getElementById('read-less-btn');
    const aboutContent = document.querySelector('.about-content');

    readMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        aboutContent.classList.add('expanded');
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline';
    });

    readLessBtn.addEventListener('click', function (e) {
        e.preventDefault();
        aboutContent.classList.remove('expanded');
        readMoreBtn.style.display = 'inline';
        readLessBtn.style.display = 'none';
    });
});
