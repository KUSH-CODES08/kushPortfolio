# 🚀 Quick Start Guide - Kush Portfolio

## 📦 What You Have

A complete, production-ready React portfolio website with:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Smooth animations
- ✅ 6 pre-configured sections
- ✅ Ready to deploy to Vercel, Netlify, or GitHub Pages

## ⚡ 3-Minute Setup

### Step 1: Extract & Install (2 minutes)

```bash
# Extract the project (if downloaded as .tar.gz)
tar -xzf kush-portfolio.tar.gz
cd kush-portfolio

# OR if you have the folder already
cd kush-portfolio

# Install dependencies
npm install
```

### Step 2: Preview Locally (30 seconds)

```bash
# Start development server
npm run dev
```

Open your browser to: `http://localhost:5173`

### Step 3: Deploy to Vercel (30 seconds)

**Option A: Via Dashboard (No Command Line)**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload the `kush-portfolio` folder
4. Click "Deploy"
5. Done! You'll get a live URL

**Option B: Via Git (Recommended)**
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub (create a repo first on github.com)
git remote add origin https://github.com/KUSH-CODES08/kush-portfolio.git
git push -u origin main

# Then import to Vercel from GitHub
```

## 📝 Customize Your Portfolio

### Update Personal Information

**1. Contact Details** - `src/pages/Contact.jsx`
- Line 54: Update email
- Line 62: Update LinkedIn URL
- Line 70: Update GitHub URL

**2. Social Links** - Multiple files:
- `src/components/Navbar.jsx` (header links)
- `src/components/Footer.jsx` (footer links)
- `src/pages/Hero.jsx` (hero section links)

**3. Projects** - `src/pages/Projects.jsx`
- Line 6-93: Update project details, tech stacks, and links

**4. Skills** - `src/pages/Skills.jsx`
- Line 8-43: Modify skill categories and proficiency levels

**5. About Section** - `src/pages/About.jsx`
- Line 42-78: Update bio and personal information

**6. Education** - `src/pages/Education.jsx`
- Line 6-13: Update academic information

## 🎨 Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',  // Darker blue
  },
}
```

## 🖼️ Add Your Photo

Replace the "KB" initials in `src/pages/Hero.jsx` (line 63-70) with an actual image:

```jsx
<img 
  src="/path-to-your-photo.jpg" 
  alt="Kush Bhavsar"
  className="w-40 h-40 rounded-full"
/>
```

Place your photo in the `public/` folder.

## 📁 File Structure

```
kush-portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Navigation bar with theme toggle
│   │   ├── Footer.jsx   # Footer with links
│   │   ├── Button.jsx   # Button component
│   │   └── Card.jsx     # Card component
│   ├── pages/          # Main page sections
│   │   ├── Hero.jsx    # Landing page
│   │   ├── About.jsx   # About section
│   │   ├── Skills.jsx  # Skills showcase
│   │   ├── Projects.jsx # Projects portfolio
│   │   ├── Education.jsx # Education background
│   │   └── Contact.jsx  # Contact form
│   ├── App.jsx         # Main app component
│   └── index.css       # Global styles
├── public/             # Static files
├── package.json        # Dependencies
├── README.md          # Full documentation
└── DEPLOYMENT_GUIDE.md # Deployment instructions
```

## 🛠️ Development Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚀 Deployment Options

### 1. Vercel (Easiest - Recommended)
- Automatic deployments
- Free SSL certificate
- Free hosting
- Custom domain support

### 2. Netlify
- Drag & drop deployment
- Free hosting
- Form handling
- Serverless functions

### 3. GitHub Pages
- Free hosting
- Easy setup
- Git-based deployment

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## ✅ Pre-Deployment Checklist

Before deploying, make sure you've:
- [ ] Updated all personal information
- [ ] Changed contact email and social links
- [ ] Updated project details and links
- [ ] Tested on mobile devices
- [ ] Verified dark mode works
- [ ] Tested all navigation links
- [ ] Run `npm run build` successfully

## 🎯 Next Steps

1. **Customize** - Update all personal information
2. **Test** - Run `npm run dev` and check everything works
3. **Build** - Run `npm run build` to create production files
4. **Deploy** - Use Vercel/Netlify/GitHub Pages
5. **Share** - Add the live URL to your resume and LinkedIn

## 💡 Tips

- **Update Regularly**: Keep your projects section current
- **Add Analytics**: Consider adding Google Analytics
- **Custom Domain**: Purchase a domain for a professional look
- **SEO**: Update meta tags in `index.html`
- **Performance**: The site is already optimized, but you can check with Lighthouse

## 🆘 Common Issues

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm install
npm run build
```

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. Review `DEPLOYMENT_GUIDE.md` for deployment help
3. Search for the error message online
4. Check Vite documentation: [vitejs.dev](https://vitejs.dev)

## 🎉 You're All Set!

Your portfolio is ready to impress potential employers. Good luck with your job search!

---

Made with ❤️ using React + Tailwind CSS
