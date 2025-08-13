# Deployment Guide - Heed Digital Website

This guide will walk you through deploying your Heed Digital website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications with zero configuration.

### Step 1: Prepare Your Repository

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Heed Digital website"
   git branch -M main
   git remote add origin https://github.com/yourusername/heed-digital.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Step 2: Custom Domain (Optional)

1. **Add Domain**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain (e.g., `heeddigital.com`)
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - Your site will be served over HTTPS

## 🌐 Other Deployment Options

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add any required env vars

### AWS Amplify

1. **Connect Repository**
2. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Traditional Hosting

1. **Build Locally**:
   ```bash
   npm run build
   npm run export  # If you need static files
   ```

2. **Upload Files**:
   - Upload the `.next` folder to your hosting provider
   - Configure your server to handle Next.js routing

## 🔧 Environment Configuration

### Environment Variables

Create a `.env.local` file for local development:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@heeddigital.com
```

### Production Environment

Set these in your hosting platform's dashboard:

- `NEXT_PUBLIC_SITE_URL`: Your production domain
- `NEXT_PUBLIC_CONTACT_EMAIL`: Your contact email

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**:
   - Compress all images using tools like TinyPNG
   - Convert to WebP format where possible
   - Keep file sizes under 500KB for images, 50MB for videos

2. **Check Bundle Size**:
   ```bash
   npm run build
   # Check the build output for bundle sizes
   ```

3. **Lighthouse Testing**:
   - Run Lighthouse in Chrome DevTools
   - Target score: ≥ 95

### After Deployment

1. **Monitor Performance**:
   - Use Vercel Analytics (if using Vercel)
   - Monitor Core Web Vitals
   - Check for any 404 errors

2. **SEO Verification**:
   - Test meta tags with social media debuggers
   - Verify structured data with Google's testing tool
   - Submit sitemap to search engines

## 🚨 Common Issues & Solutions

### Build Errors

1. **TypeScript Errors**:
   ```bash
   npm run build
   # Fix any TypeScript compilation errors
   ```

2. **Missing Dependencies**:
   ```bash
   npm install
   # Ensure all dependencies are installed
   ```

### Runtime Errors

1. **Image Loading Issues**:
   - Check file paths in `/content/assets.json`
   - Ensure images exist in `/public` directory
   - Verify image formats are supported

2. **Styling Issues**:
   - Clear browser cache
   - Check Tailwind CSS compilation
   - Verify CSS imports in `globals.css`

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📱 Post-Deployment Checklist

- [ ] Website loads correctly on all devices
- [ ] All images and videos display properly
- [ ] Contact form works (test submission)
- [ ] Custom cursor functions correctly
- [ ] Smooth scrolling works
- [ ] SEO meta tags are correct
- [ ] Performance scores meet targets
- [ ] SSL certificate is active
- [ ] Custom domain is working
- [ ] Analytics are tracking (if applicable)

## 🆘 Support

If you encounter issues:

1. **Check Vercel Logs** (if using Vercel)
2. **Review Build Output** for errors
3. **Test Locally** with `npm run dev`
4. **Check Console** for JavaScript errors
5. **Verify File Paths** in content configuration

---

**Your Heed Digital website is now ready to impress clients and showcase your creative work! 🎉**
