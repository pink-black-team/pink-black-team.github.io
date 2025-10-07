'use client';

interface AvatarProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Avatar({ name, size = 120, className = '' }: AvatarProps) {
  // Get initials
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate consistent color based on name
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;

  const svgString = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatar-grad-${hash}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:hsl(${hue}, 80%, 50%);stop-opacity:1" />
          <stop offset="50%" style="stop-color:hsl(${(hue + 60) % 360}, 80%, 50%);stop-opacity:1" />
          <stop offset="100%" style="stop-color:hsl(${(hue + 120) % 360}, 80%, 50%);stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="url(#avatar-grad-${hash})" filter="url(#glow)"/>
      <text
        x="50%"
        y="50%"
        font-family="system-ui, sans-serif"
        font-size="${size * 0.4}"
        font-weight="bold"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle"
        style="text-shadow: 0 2px 4px rgba(0,0,0,0.3)"
      >${initials}</text>
    </svg>
  `;

  const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;

  return (
    <img
      src={dataUrl}
      alt={`${name} avatar`}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      decoding="async"
      style={{ borderRadius: '50%' }}
    />
  );
}
