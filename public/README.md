# Public Assets Directory

This directory contains all the images, videos, and other assets for the Heed Digital website.

## Essential Assets

### Favicon & Icons
- **`/favicon.ico`** - Website favicon (32x32 or 16x16 pixels)
- **`/apple-touch-icon.png`** - Apple device icon (180x180 pixels)
- **`/og-image.jpg`** - Social media preview image (1200x630 pixels)

### Image Replacements

#### Hero Section
- Replace `/hero.jpg` with your hero background image (recommended: 1920x1080 or larger)

#### About Section
- Replace `/about.jpg` with your team photo or company image (recommended: 800x1000 or similar aspect ratio)

#### Portfolio/Work Images
- Replace `/work/work-1.jpg` through `/work/work-8.jpg` with your actual project images
- Recommended size: 800x800 or similar square aspect ratio
- Supported formats: JPG, PNG, WebP

#### Videos
- Replace `/videos/reel-1.mp4` through `/videos/reel-4.mp4` with your actual video content
- Recommended format: MP4 with H.264 encoding
- Keep file sizes reasonable for web (under 50MB each)

## How to Replace

1. **Simple Replacement**: Just drop your new files with the same names into the appropriate folders
2. **Custom Names**: If you want different filenames, update the paths in `/content/assets.json`
3. **No Code Changes**: The website automatically uses whatever files are in these locations

## File Structure

```
public/
├── favicon.ico           # Website favicon
├── apple-touch-icon.png  # Apple device icon
├── og-image.jpg          # Social media preview
├── hero.jpg              # Hero background
├── about.jpg             # About section image
├── work/                 # Portfolio images
│   ├── work-1.jpg
│   ├── work-2.jpg
│   ├── work-3.jpg
│   ├── work-4.jpg
│   ├── work-5.jpg
│   ├── work-6.jpg
│   ├── work-7.jpg
│   └── work-8.jpg
├── videos/               # Video content
│   ├── reel-1.mp4
│   ├── reel-2.mp4
│   ├── reel-3.mp4
│   └── reel-4.mp4
└── icons/                # Service icons (SVG format)
    ├── 3d-animation.svg
    ├── video-editing.svg
    ├── ui-ux.svg
    ├── content-writing.svg
    ├── marketing.svg
    └── coding.svg
```

## Creating Favicons

### Quick Favicon Creation
1. **Online Tools**: Use [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)
2. **Upload Image**: Upload your logo or brand image
3. **Download**: Get favicon.ico and apple-touch-icon.png
4. **Replace**: Drop the files into the `/public` folder

### Recommended Sizes
- **favicon.ico**: 32x32 pixels (or 16x16)
- **apple-touch-icon.png**: 180x180 pixels
- **og-image.jpg**: 1200x630 pixels

## Tips

- **Optimize Images**: Use tools like TinyPNG or ImageOptim to reduce file sizes
- **Video Compression**: Use HandBrake or similar tools to optimize video files
- **WebP Format**: Consider converting images to WebP for better performance
- **Responsive Images**: The website automatically handles different screen sizes

## Current Placeholders

All placeholder images show helpful text indicating what should replace them. The website will work perfectly with these placeholders until you're ready to add your real content.
