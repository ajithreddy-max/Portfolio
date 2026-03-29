# Portfolio Deployment Guide

## Deploy Your Portfolio to GitHub Pages

### Step 1: Create a GitHub Repository
```bash
cd c:\Users\kumar\Documents\Portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio` (or your username, e.g., `ajithreddy-max.github.io`)
3. Make it Public
4. Click "Create repository"

### Step 3: Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/ajithreddy-max/portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**

### Step 5: Access Your Live Portfolio
After 2-3 minutes, your portfolio will be live at:
```
https://ajithreddy-max.github.io/portfolio/
```

Or if you named it `username.github.io`:
```
https://ajithreddy-max.github.io
```

---

## Deploy Individual Projects to GitHub Pages

### For Each Project:

#### 1. Grocery Store Project
```bash
cd path/to/Grocery-store
git init
git add .
git commit -m "Deploy grocery store"
git branch -M main
git remote add origin https://github.com/ajithreddy-max/Grocery-store.git
git push -u origin main
```

Then enable GitHub Pages in repository settings (same as above).

Live URL will be: `https://ajithreddy-max.github.io/Grocery-store/`

#### 2. Doctor Appointment Application
```bash
cd path/to/Doctor-Appointment-Booking-Application
git init
git add .
git commit -m "Deploy appointment app"
git branch -M main
git remote add origin https://github.com/ajithreddy-max/Doctor-Appointment-Booking-Application.git
git push -u origin main
```

Live URL: `https://ajithreddy-max.github.io/Doctor-Appointment-Booking-Application/`

#### 3. AI Weather Forecast
```bash
cd path/to/AI-Weather-Forecast
git init
git add .
git commit -m "Deploy weather app"
git branch -M main
git remote add origin https://github.com/ajithreddy-max/AI-Weather-Forecast.git
git push -u origin main
```

Live URL: `https://ajithreddy-max.github.io/AI-Weather-Forecast/`

---

## Update Portfolio with Correct Live Demo Links

After deploying, update the live demo URLs in `index.html`:

**Project 1:**
```html
<a href="https://ajithreddy-max.github.io/Grocery-store/" target="_blank" title="Live Demo">
```

**Project 2:**
```html
<a href="https://ajithreddy-max.github.io/Doctor-Appointment-Booking-Application/" target="_blank" title="Live Demo">
```

**Project 3:**
```html
<a href="https://ajithreddy-max.github.io/AI-Weather-Forecast/" target="_blank" title="Live Demo">
```

---

## Alternative: Deploy to Netlify (Easier)

### For Portfolio:
1. Go to https://app.netlify.com/drop
2. Drag and drop your Portfolio folder
3. Get instant live URL: `https://your-portfolio.netlify.app`

### For Projects:
Repeat the same process for each project folder.

---

## Quick Commands Summary

```bash
# Initialize and push portfolio
cd c:\Users\kumar\Documents\Portfolio
git init
git add .
git commit -m "Portfolio ready"
git branch -M main
git remote add origin https://github.com/ajithreddy-max/portfolio.git
git push -u origin main

# Then enable GitHub Pages in Settings > Pages
```
