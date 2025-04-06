/**
 * Script principal para la GitHub Page
 * Controla las funcionalidades de navegación, efectos y componentes interactivos
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks && overlay) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        overlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }

    // Botón para ir arriba
    const topButton = document.getElementById('topButton');
    if (topButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                topButton.classList.add('visible');
            } else {
                topButton.classList.remove('visible');
            }
        });

        topButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Tabs para la sección de experiencia
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabButtons.length > 0 && tabPanels.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');

                // Actualizar clases activas en botones
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Mostrar panel correspondiente
                tabPanels.forEach(panel => {
                    if (panel.getAttribute('id') === targetTab) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });

        // Activar el primer tab por defecto
        tabButtons[0].click();
    }

    // Animación de desplazamiento suave para enlaces de navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Evitar comportamiento predeterminado del enlace
            e.preventDefault();

            // Obtener el destino desde el atributo href
            const targetId = this.getAttribute('href');
            
            // Si es un enlace válido (no solo "#")
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Desplazarse suavemente al elemento
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});