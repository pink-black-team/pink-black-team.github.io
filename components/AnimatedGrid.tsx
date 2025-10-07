'use client';

import { useEffect, useRef } from 'react';
import styles from './AnimatedGrid.module.css';

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Grid parameters
    const gridSize = 50;
    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid
      ctx.strokeStyle = 'rgba(255, 0, 110, 0.1)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const wave = Math.sin(time * 0.001 + x * 0.01) * 5;
        ctx.beginPath();
        ctx.moveTo(x + wave, 0);
        ctx.lineTo(x + wave, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const wave = Math.sin(time * 0.001 + y * 0.01) * 5;
        ctx.beginPath();
        ctx.moveTo(0, y + wave);
        ctx.lineTo(canvas.width, y + wave);
        ctx.stroke();
      }

      // Draw glowing points at intersections
      ctx.fillStyle = 'rgba(255, 0, 110, 0.3)';
      for (let x = 0; x < canvas.width; x += gridSize * 2) {
        for (let y = 0; y < canvas.height; y += gridSize * 2) {
          const pulse = Math.sin(time * 0.002 + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          const size = 2 + pulse * 2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 16;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
