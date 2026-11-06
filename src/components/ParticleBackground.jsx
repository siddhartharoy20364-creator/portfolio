import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect user's reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const size = {
      width: (canvas.width = window.innerWidth),
      height: (canvas.height = window.innerHeight),
    };

    // Low density: 25 to 36 particles tailored to screen (unchanged)
    const count = Math.min(Math.max(Math.floor((size.width * size.height) / 38000), 25), 36);

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * size.width,
      y: Math.random() * size.height,
      // Slow and subtle drift speed (unchanged)
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      // Particle size range (unchanged)
      radius: Math.random() * 1.4 + 1.0,
      // Brighter crimson red shades
      color: Math.random() > 0.5 ? 'rgba(224, 82, 82, ' : 'rgba(205, 50, 60, ',
      // Increased opacity for brighter, clearer visibility
      alpha: Math.random() * 0.28 + 0.6,
    }));

    const handleResize = () => {
      if (!canvas) return;
      size.width = canvas.width = window.innerWidth;
      size.height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, size.width, size.height);

      // Connecting lines between nearby particles using brighter crimson tone
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 95) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(205, 50, 60, ${0.18 * (1 - dist / 95)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with solid center and brighter visibility
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = size.width;
        else if (p.x > size.width) p.x = 0;
        if (p.y < 0) p.y = size.height;
        else if (p.y > size.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 1,
      }}
      aria-hidden="true"
    />
  );
}
