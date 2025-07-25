# Deployment Guide for Netlify

This portfolio is now ready for deployment to Netlify as a static website. Follow these steps:

## 🚀 Quick Deployment

### Option 1: Git-based Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Portfolio ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist/public`
     - **Node version**: `20`

3. **Deploy**: Netlify will automatically build and deploy your site

### Option 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/public` folder to deploy

## 📁 Project Structure for Deployment

```
portfolio/
├── client/               # React source code
├── dist/public/         # Built static files (deploy this folder)
├── netlify.toml         # Netlify configuration
├── _redirects           # URL redirects for SPA
└── README.md           # Project documentation
```

## 🔧 Build Configuration

The project is configured with:
- **Build output**: `dist/public/`
- **Node version**: 20
- **Build command**: `npm run build`
- **SPA redirects**: Configured in `netlify.toml`

## 🛡️ Security Headers

Security headers are automatically configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 🎯 Features Included

✅ **SEO Optimized** - Meta tags, structured data
✅ **Performance Optimized** - Optimized assets and caching
✅ **Dark/Light Theme** - Defaults to dark theme
✅ **Responsive Design** - Works on all devices
✅ **Career Timeline** - Complete journey from intern to SDE-3
✅ **Tech Proficiency** - Interactive skill visualization
✅ **Contact Integration** - Direct email functionality

## 🔗 Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your Netlify site dashboard
2. Click "Domain settings"
3. Add your custom domain
4. Configure DNS with your domain provider

## 📊 Analytics (Optional)

Add analytics to track visits:
1. In Netlify dashboard, go to "Integrations"
2. Add Google Analytics or Netlify Analytics
3. Update the tracking code if needed

Your portfolio is now ready for professional deployment! 🚀