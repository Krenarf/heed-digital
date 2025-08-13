# Heed Digital - Creative Agency Website

A professional, responsive website for Heed Digital - a multidisciplinary creative agency specializing in 3D animation, video production, UI/UX design, and web development.

## 🚀 Features

- **Modern Design**: Clean, premium aesthetic with bold typography and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Custom magnetic cursor, smooth scroll animations, and hover effects
- **Performance Optimized**: Built with Next.js 14, optimized for speed and SEO
- **Easy Content Management**: Simple image/video replacement system

## 🎨 Design Features

- **Color Palette**: Black/white with bold orange accent (#FF6B35)
- **Typography**: Inter (body) and Poppins (headings) for modern readability
- **Animations**: Framer Motion-powered smooth transitions and micro-interactions
- **Custom Cursor**: Magnetic cursor with hover effects and toggle functionality
- **Glass Effects**: Subtle backdrop blur and transparency for premium feel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
heed-digital/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services grid
│   ├── Portfolio.tsx      # Portfolio showcase
│   ├── WhyWorkWithUs.tsx  # Value propositions
│   ├── Contact.tsx        # Contact form & FAQ
│   ├── Footer.tsx         # Footer with links
│   └── CustomCursor.tsx   # Interactive cursor
├── content/                # Content configuration
│   └── assets.json        # Asset paths mapping
├── public/                 # Static assets
│   ├── work/              # Portfolio images
│   ├── videos/            # Video content
│   └── icons/             # Service icons
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd heed-digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Adding Your Content

### Images & Videos

The website uses a simple file replacement system:

1. **Hero Background**: Replace `/public/hero.jpg`
2. **About Image**: Replace `/public/about.jpg`
3. **Portfolio Images**: Replace `/public/work/work-1.jpg` through `work-8.jpg`
4. **Videos**: Replace `/public/videos/reel-1.mp4` through `reel-4.mp4`

### Custom File Names

If you want different filenames, update the paths in `/content/assets.json`:

```json
{
  "hero": {
    "background": "/your-hero-image.jpg"
  }
}
```

### No Code Changes Required

Simply replace the files in the `/public` directory - the website automatically uses whatever is there!

## 🎯 Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  accent: '#FF6B35',        // Main accent color
  primary: { /* ... */ },   // Primary color palette
  dark: '#0a0a0a',         // Background color
}
```

### Typography

Change fonts in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');
```

### Animations

Modify animation settings in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  // Add your custom animations
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
npm run start
```

## 📊 Performance

- **Lighthouse Score**: Target ≥ 95
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic with Next.js
- **SEO Optimized**: Meta tags, structured data, and sitemap

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Component-based architecture

## 📞 Support

For questions or support:

- **Email**: hello@heeddigital.com
- **Documentation**: Check the inline code comments
- **Issues**: Create a GitHub issue

## 📄 License

This project is proprietary to Heed Digital. All rights reserved.

---

**Built with ❤️ by Heed Digital**
