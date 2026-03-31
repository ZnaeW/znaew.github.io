# Freddy Asenjo — Portfolio

Sitio portfolio personal que muestra mi trabajo en la intersección de biotecnología, bioinformática y desarrollo de software. Alojado en GitHub Pages.

## Diseño

**"Editorial Científico"** — Una paleta de índigo con capas y tipografía inspirada en publicaciones académicas. Diseñado para comunicar credibilidad tanto a audiencias técnicas como científicas.

- **Display**: Cormorant Garamond
- **Body**: DM Sans
- **Code**: JetBrains Mono
- **Paleta**: Índigo profundo (`#0f0a1a`) con acento lavanda (`#a78bfa`)

### Influencias

El diseño toma inspiración de varios portfolios y direcciones visuales:

- **Brittany Chiang (v4)** — La estructura base de dos columnas con navegación por líneas y scroll spy. El punto de partida que se fue diferenciando deliberadamente.
- **Portfolios editoriales / académicos** — La numeración de secciones (`01 — Background`), el formato de citación en publicaciones y la jerarquía tipográfica serif + sans-serif vienen de esta línea.
- **Dirección propia** — La paleta índigo/lavanda, el efecto de cursor spotlight, la sección de Research como pieza central, y los callouts de decisiones técnicas en las cards de proyectos son decisiones originales para reflejar el perfil biotech + dev.

## Estructura

```
├── index.html          # Portfolio single-page
├── css/
│   └── styles.css      # Todos los estilos (variables, layout, componentes, responsive)
├── js/
│   └── main.js         # Smooth scroll, cursor spotlight, scroll spy
├── img/
│   └── profile.jpg     # Foto de perfil
├── .gitignore
└── README.md
```

## Secciones

1. **Background** — Narrativa profesional que conecta biotecnología y software
2. **Research** — Publicaciones con revisión de pares en formato de citación académica
3. **Projects** — Cards de proyectos con callouts de decisiones técnicas
4. **Stack** — Tecnologías separadas en Core y Also Work With
5. **Contact** — Link directo a email

## Tecnologías

- HTML5, CSS3 (custom properties), JavaScript vanilla
- Google Fonts, Font Awesome 6
- GitHub Pages (hosting estático)
- Sin build step, sin frameworks, sin dependencias

## Desarrollo local

Abrir `index.html` directamente en el navegador, o usar Live Server en VS Code para recarga automática.

## Documentación y revisión

La documentación de este proyecto y la revisión del código fueron realizadas con asistencia de [Claude](https://claude.ai) (Anthropic), incluyendo la refactorización de la estructura de archivos, extracción de estilos inline y organización del código.

## Licencia

MIT

---

Construido por [Freddy Asenjo](https://github.com/ZnaeW) 🤙🏻