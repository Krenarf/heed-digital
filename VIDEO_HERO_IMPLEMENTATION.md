# Video Hero Implementation Guide

## Overview

The work portfolio now supports video heroes alongside traditional image heroes. Projects can automatically switch between video and image content based on the files present in their directories.

## How It Works

### 1. **Data Structure Updates**
- Added `heroVideo?: string` field to both `Project` and `WorkProject` interfaces
- Projects can now specify an optional video file path
- The system automatically detects which type of hero content to display

### 2. **Component Updates**
- **WorkOverview**: Grid view now supports video heroes with auto-play (muted, loop)
- **WorkProject**: Detailed project view supports video heroes with controls
- **Work Detail Pages**: Both MDX-based and static work pages support video heroes

### 3. **File Structure**
```
public/work/project-name/
├── hero.jpg          # Poster/thumbnail image (required)
├── hero.mp4          # Video file (optional - if present, used as hero)
├── shot-01.jpg       # Gallery image 1
├── shot-02.jpg       # Gallery image 2
└── ...
```

## Implementation Details

### Video Properties
- **Grid View**: `muted`, `loop`, `playsInline` for smooth auto-play
- **Detail View**: `controls`, `muted`, `loop`, `playsInline` for user interaction
- **Poster**: Always uses `hero.jpg` as the video poster/thumbnail

### Fallback Behavior
- If `hero.mp4` exists: Shows video with `hero.jpg` as poster
- If `hero.mp4` doesn't exist: Shows `hero.jpg` as static image
- No code changes needed - automatic detection

## Usage Examples

### 1. **Add Video Hero to Existing Project**
```typescript
// In content/work.ts
{
  slug: "project-name",
  title: "Project Title",
  hero: "/work/project-name/hero.jpg",
  heroVideo: "/work/project-name/hero.mp4", // Add this line
  // ... other fields
}
```

### 2. **MDX Frontmatter**
```yaml
---
title: "Project Title"
thumbnail: "/work/project-name/hero.jpeg"
heroVideo: "/work/project-name/hero.mp4"  # Add this line
# ... other fields
---
```

### 3. **File Placement**
- Place `hero.mp4` in the project's public directory
- Keep `hero.jpg` as the poster/thumbnail
- The system automatically detects and displays accordingly

## Video Requirements

### Technical Specifications
- **Format**: MP4 with H.264 encoding
- **Size**: Under 10MB for optimal performance
- **Aspect Ratio**: 16:9 (landscape) recommended
- **Duration**: 10-30 seconds works best for hero sections

### Best Practices
- Use high-quality video that represents your best work
- Keep file sizes reasonable for web performance
- Ensure the first few seconds are engaging
- Test on different devices and connection speeds

## Testing

### 1. **Local Development**
- Add a test video file to any project directory
- Rename it to `hero.mp4`
- The video should automatically appear in both grid and detail views

### 2. **Production**
- Upload actual project videos
- Ensure they meet the technical requirements
- Test on various devices and browsers

## Benefits

1. **Dynamic Content**: Projects can now showcase motion and animation
2. **Better Engagement**: Videos often perform better than static images
3. **Flexible**: Easy to switch between video and image content
4. **Automatic**: No code changes needed when adding/removing videos
5. **Performance**: Videos only load when present, images serve as fallbacks

## Future Enhancements

- **Video Optimization**: Automatic compression and format conversion
- **Lazy Loading**: Videos load only when needed
- **Analytics**: Track video engagement and performance
- **Multiple Formats**: Support for WebM, AV1, and other formats
- **Thumbnail Generation**: Automatic poster image creation from video frames

## Support

For questions or issues with video hero implementation:
1. Check that video files are properly named (`hero.mp4`)
2. Verify video format is MP4 with H.264 encoding
3. Ensure file size is under 10MB
4. Check browser console for any errors
5. Test with different video files to isolate issues
