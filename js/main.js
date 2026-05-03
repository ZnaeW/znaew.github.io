// ─── Dynamic year ───
document.getElementById('year').textContent = new Date().getFullYear();

// ─── Smooth scroll ───
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href');
        if (id !== '#') {
            const el = document.querySelector(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── Cursor Spotlight ───
const spotlight = document.getElementById('spotlight');
let isDesktop = window.innerWidth > 768;

if (isDesktop) {
    document.addEventListener('mousemove', e => {
        spotlight.classList.add('active');
        spotlight.style.setProperty('--mouse-x', e.clientX + 'px');
        spotlight.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    document.addEventListener('mouseleave', () => {
        spotlight.classList.remove('active');
    });
}

// ─── Scroll Spy ───
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav__item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navItems.forEach(item => {
                item.classList.toggle('active', item.dataset.section === id);
            });
        }
    });
}, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
});

sections.forEach(section => observer.observe(section));

// Fallback: activate Contact when scrolled to bottom
window.addEventListener('scroll', () => {
    const scrollBottom = window.innerHeight + window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    if (docHeight - scrollBottom < 80) {
        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === 'contact');
        });
    }
});