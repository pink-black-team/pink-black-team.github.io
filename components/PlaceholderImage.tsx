'use client';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width = 400,
  height = 300,
  text = '',
  className = '',
}: PlaceholderImageProps) {
  // Generate gradient based on text
  const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue1 = hash % 360;
  const hue2 = (hash + 120) % 360;

  const svgString = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad${hash}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:hsl(${hue1}, 70%, 50%);stop-opacity:1" />
          <stop offset="100%" style="stop-color:hsl(${hue2}, 70%, 50%);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad${hash})"/>
      ${text ? `<text x="50%" y="50%" font-family="system-ui" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>` : ''}
    </svg>
  `;

  const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;

  return (
    <img
      src={dataUrl}
      alt={text || 'Placeholder'}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
