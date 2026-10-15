# Project 04: Personal Portfolio (Capstone)

## Description
An authentic, highly responsive, and modern personal portfolio website built completely from scratch using **Pure HTML5, CSS3, and JavaScript (ES6+)**. Designed with a refined **Cyber-Violet / Light-Dark Theme** aesthetic, featuring custom CSS variables, semantic HTML structure, and interactive components without relying on any external frameworks, templates, or UI component libraries.

## Features
- **Responsive Navigation (Navbar):** Sticky header with smooth scrolling and clean flexbox alignment.
- **Dynamic Theme Switcher:** Interactive button to seamlessly toggle between a light aesthetic and a deep dark theme (`body.dark-theme`) using CSS custom properties (`:root`).
- **Interactive Profile Photo Switcher (Bounce 01):** Dynamic DOM manipulation to switch the avatar image source (`.src`) and alternative text (`.alt`) smoothly between professional and casual photos without reloading the page.
- **Bilingual Internationalization & RTL Support (Bounce 02):** Dynamic language toggle between English and Arabic, modifying the document direction (`dir="rtl"`, `lang="ar"`) and text content using a clean JavaScript translation dictionary.
- **CSS Grid & Flexbox Layouts:** Modern, flexible grid systems for skills and project showcases optimized for all screen sizes via CSS Media Queries.

## Technologies Used
- **HTML5:** Semantic markup structure.
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, Media Queries, and smooth CSS transitions.
- **JavaScript (ES6+):** DOM manipulation, Event Listeners, state tracking, and translation dictionaries.
- **Typography:** Google Fonts (`Plus Jakarta Sans` & `IBM Plex Sans Arabic`).

## Project Structure
```text
ex00/ (or bounce01/ / bounce02/)
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile-prof.jpg
    └── profile-casual.jpg
