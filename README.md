# Personal Portfolio (React + Tailwind CSS)

A beginner-level, monochrome personal portfolio built for the Frontend Development Training final project.

## Features
- 6 pages: Home, About, Skills, Education, Projects, Contact (React Router)
- Fixed sidebar on desktop, hamburger menu on mobile/tablet
- Project filter (useState), controlled contact form with validation and success message
- All content stored in `src/data/data.js` and rendered with `.map()`

## Technologies
React 18, Vite, Tailwind CSS 4, react-router-dom 6

## Run
```bash
npm install
npm run dev
```
Build: `npm run build`

## Structure
```
src/
  assets/ (images, icons)
  components/ Navbar, Footer, Hero, SectionTitle, SkillCard, EducationItem, ProjectCard, ContactForm
  pages/ Home, About, Skills, Education, Projects, Contact
  data/data.js
  App.jsx  main.jsx  index.css
```

## Customise
Edit `src/data/data.js` (name, skills, education, projects).

## Future improvements
Real photos and screenshots, dark mode, backend for the contact form, download-CV button.
