# Project Images

This directory contains images for Our Projects pages.

## Directory Structure

```
projects/
├── ai-content-generator/
│   └── thumbnail.jpg (recommended: 800x600px)
├── smart-analytics/
│   └── thumbnail.jpg (recommended: 800x600px)
└── voice-sdk/
    └── thumbnail.jpg (recommended: 800x600px)
```

## Image Requirements

### Thumbnails
- **Format**: JPG, WEBP, or AVIF
- **Dimensions**: 800x600px (5:3 aspect ratio)
- **Max Size**: 200KB
- **Optimization**: Use WebP or AVIF for better performance

### Additional Images (Optional)
- Screenshots
- Gallery images
- Video posters

## Optimization Tools

### Command Line
```bash
# Convert to WebP
cwebp input.jpg -o output.webp -q 80

# Convert to AVIF
avifenc input.jpg output.avif --speed 4 --quality 75
```

### Online Tools
- [Squoosh](https://squoosh.app/) - Image compression
- [TinyPNG](https://tinypng.com/) - PNG/JPG optimization
- [CloudConvert](https://cloudconvert.com/) - Format conversion

## Next.js Image Component

The project uses Next.js `<Image>` component which automatically:
- Optimizes images on-demand
- Serves modern formats (WebP/AVIF) when supported
- Provides responsive images
- Lazy loads images by default

## Placeholder Images

If real images are not available, the ProductCard component will display a placeholder with the product title.

## Adding New Products

1. Create a directory for the product: `mkdir public/images/projects/[product-slug]`
2. Add thumbnail image: `public/images/projects/[product-slug]/thumbnail.jpg`
3. Update the product data in `lib/products.ts` with the correct image path
4. (Optional) Add additional images to the product directory

## Current Products

1. **ai-content-generator** - AI Content Generator
2. **smart-analytics** - Smart Analytics Platform
3. **voice-sdk** - Voice Assistant SDK

---

**Note**: All paths are relative to `/public/images/projects/[slug]/thumbnail.jpg`
