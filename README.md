# Personal Website - John Ivan Busulwa

This is a professional website built for GitHub Pages deployment.

## Setup Instructions

### 1. Add Your Content
Edit the `config.js` file to customize all text content for your website. This file contains all the customizable text including:
- Personal information
- Navigation menu items
- Homepage content
- About section details
- Portfolio projects
- Leadership roles
- Contact information
- SEO metadata

### 2. Add Your Images
Place your images in the `images/` directory:
- `headshot.jpg` - Your professional headshot (300x300px recommended)
- `project1.jpg`, `project2.jpg`, `project3.jpg` - Project images
- `og-image.jpg` - Open Graph image for social sharing (1200x630px recommended)

### 3. Add Your Resume
Place your resume PDF in the `documents/` directory as `resume.pdf`

### 4. GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Scroll down to "Pages" section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at `https://yourusername.github.io/repository-name`

### 5. Custom Domain (Optional)
If you have a custom domain:
1. Add a `CNAME` file to the root directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages

## File Structure
```
├── index.html          # Main website file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── config.js           # All customizable content
├── images/             # Image assets
│   ├── headshot.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   └── og-image.jpg
├── documents/          # Document assets
│   └── resume.pdf
└── README.md           # This file
```

## Features
- ✅ Responsive design (mobile-friendly)
- ✅ Professional styling with blues and whites
- ✅ SEO optimized
- ✅ Contact form functionality
- ✅ Smooth scrolling navigation
- ✅ Portfolio showcase
- ✅ Leadership section
- ✅ GitHub Pages ready

## Customization
All text content is centralized in `config.js` for easy editing. Simply update the values in this file to customize your website without touching the HTML, CSS, or JavaScript files.
