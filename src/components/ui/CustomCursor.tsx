import React, { useEffect } from 'react';

export const CustomCursor: React.FC = () => {
  useEffect(() => {
    // 1. Injeksi Elemen Titik Pusat, Ring Outer, dan Canvas Riak Air ke DOM
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    const labelText = document.createElement('span');
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');

    // Style Canvas Ripple Overlay (Memenuhi seluruh layar)
    Object.assign(canvas.style, {
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: '999999997', // Di bawah ring dan dot
    });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Style Titik Presisi Pusat (Dot)
    Object.assign(dot.style, {
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '6px',
      height: '6px',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.9), 0 0 2px rgba(0, 0, 0, 0.8)',
      pointerEvents: 'none',
      zIndex: '999999999',
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.2s ease, transform 0.2s ease',
      display: 'block',
    });

    // Style Ring Outer (Follower)
    Object.assign(ring.style, {
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '36px',
      height: '36px',
      border: '1px solid rgba(168, 85, 247, 0.4)',
      backgroundColor: 'rgba(168, 85, 247, 0.1)',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '999999998',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, border-radius 0.25s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(2px)',
    });

    // Style Label Text inside Ring
    Object.assign(labelText.style, {
      color: '#ffffff',
      fontSize: '10px',
      fontWeight: '700',
      letterSpacing: '1px',
      fontFamily: 'monospace',
      textTransform: 'uppercase',
      opacity: '0',
      transition: 'opacity 0.2s ease',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    });

    ring.appendChild(labelText);
    document.body.appendChild(canvas);
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    // Manajemen Array Gelombang Riak Air
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }
    const ripples: Ripple[] = [];

    // 2. Trigger Riak Air & Efek Tekan (MouseDown)
    const onMouseDown = (e: MouseEvent) => {
      // Efek mengecilkan ring secara instan saat tombol mouse ditekan
      ring.style.transform = 'translate(-50%, -50%) scale(0.75)';

      // Tambahkan 2 gelombang riak air berlapis dari titik posisi klik
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: 55,
        alpha: 0.8,
        speed: 2.2,
      });

      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: 38,
        alpha: 0.5,
        speed: 1.5,
      });
    };

    const onMouseUp = () => {
      // Kembalikan skala ring ke ukuran normal
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    // 3. Deteksi Objek & Mouse Move
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="view"], .project-card, [data-project]');
      const actionBtn = target.closest('button, .btn, a, [role="button"]');
      const navItem = target.closest('nav a, header a, [data-cursor="link"]');

      if (projectCard) {
        ring.style.width = '72px';
        ring.style.height = '72px';
        ring.style.backgroundColor = 'rgba(146, 51, 234, 0.24)';
        ring.style.borderColor = 'rgba(192, 132, 252, 0.8)';
        labelText.textContent = 'VIEW ↗';
        labelText.style.opacity = '1';
        dot.style.opacity = '0';
      } else if (actionBtn) {
        ring.style.width = '52px';
        ring.style.height = '52px';
        ring.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        ring.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        labelText.style.opacity = '0';
        dot.style.opacity = '1';
      } else if (navItem) {
        ring.style.width = '42px';
        ring.style.height = '42px';
        ring.style.backgroundColor = 'rgba(168, 85, 247, 0.25)';
        ring.style.borderColor = 'rgba(168, 85, 247, 0.5)';
        labelText.style.opacity = '0';
        dot.style.opacity = '1';
      } else {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
        ring.style.borderColor = 'rgba(168, 85, 247, 0.4)';
        labelText.style.opacity = '0';
        dot.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { capture: true, passive: true });
    window.addEventListener('mousedown', onMouseDown, { capture: true, passive: true });
    window.addEventListener('mouseup', onMouseUp, { capture: true, passive: true });

    // 4. Render Loop (Animasi Ring + Animasi Canvas Ripple Air)
    let rafId: number;
    const loop = () => {
      // Update pergerakan Ring Outer
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      // Render Riak Air pada Canvas
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];

          // Gambar lingkaran riak air
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(192, 132, 252, ${r.alpha})`; // Ungu bernafas lembut
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Perbesar radius dan pudar transparansinya
          r.radius += r.speed;
          r.alpha *= 0.94; // Efek memudar (*fade out*)

          // Hapus riak dari memori jika sudah menghilang
          if (r.alpha <= 0.01 || r.radius >= r.maxRadius) {
            ripples.splice(i, 1);
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(rafId);
      if (document.body.contains(dot)) document.body.removeChild(dot);
      if (document.body.contains(ring)) document.body.removeChild(ring);
      if (document.body.contains(canvas)) document.body.removeChild(canvas);
    };
  }, []);

  return null;
};