# Portifolium

A polished personal portfolio website for Mateus Vieira, built with plain HTML, CSS, and JavaScript. This project is designed to present a stronger, more professional showcase than a standard academic repository like `Locar` by focusing on modern UI, smooth animations, responsive design, and dynamic GitHub integration.

## Overview

`Portifolium` is a static portfolio landing page that highlights:

- a modern hero section with a custom typewriter animation
- an about section with education, core skills, and personal branding
- a GitHub projects section that loads repositories dynamically from the public API
- a downloadable resume PDF for recruiters and hiring managers
- a responsive navigation menu and mobile-first layout
- accessible markup, semantic sections, and polished visuals

## Why this repo is stronger than an academic project

This portfolio was built to showcase real-world frontend craftsmanship rather than just an academic assignment. Key improvements include:

- clean visual design with glassmorphism-inspired surfaces and animated background orbs
- subtle scroll reveal effects and accessible transitions
- production-ready interactions like a mobile menu and GitHub API-powered project cards
- emphasis on personal brand, career goals, and developer narrative
- straightforward structure with no build tools required

## Features

- Dynamic GitHub project loading from `https://api.github.com/users/Matt0820/repos`
- Typewriter effect for the hero name animation
- Responsive desktop and mobile navigation
- Smooth scroll behavior and section anchors
- Resume download button linked from `assets/Mateus H. Oliveira.pdf`
- Accessible semantics using `aria-*` attributes and clean HTML structure

## Built with

- HTML
- CSS
- JavaScript
- GitHub API

## Project structure

- `index.html` — main portfolio page and site structure
- `styles/styles.css` — theme, layout, responsive design, and animations
- `scripts/scripts.js` — page interactions, menu behavior, typewriter effect, and GitHub repository loading
- `assets/` — supporting assets, such as the resume PDF and any future media

## How to run locally

1. Clone the repository.
2. Open `index.html` directly in the browser or run a static server.
3. If you want the GitHub cards to load correctly, make sure you have internet access.

### Recommended local workflow

- Use VS Code Live Server
- Or run a simple Python server:
  ```bash
  python3 -m http.server 8000
  ```
- Navigate to `http://localhost:8000`

## Notes

- This is a fully static site with zero build configuration.
- The GitHub section pulls the latest public repos from the account `Matt0820`.
- The resume PDF is available under `assets/` and can be downloaded with the button on the page.
- Some sections are built as placeholders for easy future expansion.

## Future improvements

- add a contact form or email link
- include project details and portfolio case studies
- add more personal branding copy and testimonials
- support dark/light theme switching

## License

No license specified.
