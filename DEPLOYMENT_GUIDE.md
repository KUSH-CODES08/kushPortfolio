# 🚀 Deployment Guide - Kush Bhavsar Portfolio

This guide will help you deploy your portfolio to various platforms.

## ✅ Quick Start

1. **Extract the project files**
2. **Install dependencies:** `npm install`
3. **Test locally:** `npm run dev`
4. **Build for production:** `npm run build`

## 🌐 Deploy to Vercel (Recommended - Easiest)

Vercel offers the best experience for React/Vite projects with automatic deployments.

### Method 1: Vercel Dashboard (No CLI Required)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Upload your project files (or use Git commands below)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
   - Click "Deploy"

3. **Done!** Your site will be live in ~1 minute with a URL like:
   - `https://kush-portfolio.vercel.app`
   - You can add a custom domain in settings

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
cd kush-portfolio
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? kush-portfolio
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## 🔷 Deploy to Netlify

### Method 1: Netlify Dashboard

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy via Dashboard:**
   - Go to [netlify.com](https://netlify.com) and login
   - Drag and drop the `dist` folder to Netlify
   - Your site is live instantly!

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

### Method 3: Connect GitHub Repository

1. **Push to GitHub**
2. **In Netlify Dashboard:**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

## 📘 Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines to `package.json`:
   ```json
   {
     "homepage": "https://KUSH-CODES08.github.io/kush-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/KUSH-CODES08/kush-portfolio.git
   git push -u origin main
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

6. **Access your site:**
   - `https://KUSH-CODES08.github.io/kush-portfolio`

## 🎯 Deploy to Other Platforms

### Render

1. Go to [render.com](https://render.com)
2. Create a new "Static Site"
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Create Static Site"

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Select options:
# - Public directory: dist
# - Single-page app: Yes
# - GitHub auto-deploy: Optional

# Build and deploy
npm run build
firebase deploy
```

### Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

## 🔧 Environment Variables (If Needed)

If you add any API keys or environment variables:

### For Vercel:
- Go to Project Settings → Environment Variables
- Add your variables (e.g., `VITE_API_KEY=your-key`)

### For Netlify:
- Go to Site Settings → Build & Deploy → Environment
- Add your variables

### For Local Development:
Create a `.env` file:
```
VITE_API_KEY=your-key-here
```

## ✨ Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify dark/light mode toggle works
- [ ] Check responsive design on mobile
- [ ] Test contact form (if connected to backend)
- [ ] Verify all project links work
- [ ] Check social media links
- [ ] Test in different browsers
- [ ] Set up custom domain (optional)
- [ ] Enable HTTPS (usually automatic)
- [ ] Set up Google Analytics (optional)

## 🔗 Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

### GitHub Pages:
1. Go to Settings → Pages
2. Enter custom domain
3. Update DNS with CNAME record

## 🆘 Troubleshooting

### Build Fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (should be 16+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### 404 Errors After Deployment
- Ensure `dist` is the correct output directory
- Check router configuration for SPAs
- Verify all paths are relative (not absolute)

### Styling Issues
- Clear browser cache
- Check Tailwind CSS is properly configured
- Verify build completed successfully

## 📞 Need Help?

If you encounter any issues:
1. Check the platform's documentation
2. Review build logs for errors
3. Test the build locally first: `npm run build && npm run preview`
4. Contact support for the respective platform

## 🎉 Success!

Once deployed, share your portfolio:
- Update GitHub README with live link
- Share on LinkedIn
- Add to resume
- Share with potential employers

---

**Your portfolio is now live! 🚀**

Made with ❤️ by Kush Bhavsar
