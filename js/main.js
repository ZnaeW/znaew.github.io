// Este archivo JavaScript implementa un desplazamiento suave para los enlaces de navegación interna

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los enlaces que comienzan con #
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Agregar evento de clic a cada enlace
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevenir el comportamiento predeterminado
        e.preventDefault();
        
        // Obtener el destino del enlace
        const targetId = this.getAttribute('href');
        
        // Verificar si el destino existe
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