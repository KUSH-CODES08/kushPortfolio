# Kush Bhavsar - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and experience as a Python Developer.

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Mode** - Toggle between dark and light themes with smooth transitions
- **Smooth Animations** - Subtle animations and transitions throughout the site
- **Interactive UI** - Engaging user interface with hover effects and smooth scrolling
- **Modern Stack** - Built with React, Vite, and Tailwind CSS for optimal performance

## 📋 Sections

1. **Home/Hero** - Welcome section with animated typing effect and gradient background
2. **About** - Personal introduction and professional highlights
3. **Skills** - Interactive skill cards with filtering and progress bars
4. **Projects** - Showcase of 6 major projects with tech stacks and features
5. **Education** - Academic background and achievements
6. **Contact** - Contact form and social media links

## 🛠️ Technologies Used

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** SVG Icons
- **Deployment:** Vercel (recommended)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd kush-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI (optional):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy using Vercel CLI:**
   ```bash
   vercel
   ```

3. **Or deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Vite and configure build settings
   - Click "Deploy"

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/kush-portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
kush-portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── SectionTitle.jsx
│   ├── pages/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── assets/         # Images and other assets
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details:** Edit `src/pages/Contact.jsx`
2. **Social Links:** Update links in `src/components/Navbar.jsx`, `Footer.jsx`, and `Hero.jsx`
3. **Projects:** Modify project data in `src/pages/Projects.jsx`
4. **Skills:** Update skills array in `src/pages/Skills.jsx`
5. **About Section:** Edit bio in `src/pages/About.jsx`
6. **Education:** Update academic info in `src/pages/Education.jsx`

### Change Color Scheme

Edit `tailwind.config.js` to modify the color palette:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ }
    }
  }
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bhavsar Kush Sunilbhai**

- Email: bhavsarkush78@gmail.com
- LinkedIn: [Bhavsar Kush](https://linkedin.com/in/bhavsar-kush-ba73b0271/)
- GitHub: [@KUSH-CODES08](https://github.com/KUSH-CODES08)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)

---

Made with ❤️ by Kush Bhavsar
