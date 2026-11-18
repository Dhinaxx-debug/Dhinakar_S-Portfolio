import React, { useEffect, useRef } from 'react';

export default function CyberCanvas({ darkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates & interactions
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
      isHovered: false
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isHovered = false;
    };

    // Expanding ripple waves on click
    let ripples = [];
    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 160,
        opacity: 0.6
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Initialize innovative elastic node network
    const nodeCount = Math.min(Math.floor((width * height) / 14000), 75);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const origX = Math.random() * width;
      const origY = Math.random() * height;
      nodes.push({
        x: origX,
        y: origY,
        origX: origX,
        origY: origY,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.2,
        baseColor: darkMode ? '#ef4444' : '#dc2626',
        accentColor: darkMode ? '#f87171' : '#b91c1c'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw and update expanding click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 3.5;
        r.opacity *= 0.94;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = darkMode
          ? `rgba(239, 68, 68, ${r.opacity})`
          : `rgba(220, 38, 38, ${r.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (r.radius > r.maxRadius || r.opacity < 0.02) {
          ripples.splice(i, 1);
        }
      }

      // 2. Physics & Connection between nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Drift gently
        n.origX += n.vx;
        n.origY += n.vy;

        if (n.origX < 0 || n.origX > width) n.vx *= -1;
        if (n.origY < 0 || n.origY > height) n.vy *= -1;

        // Magnetic Attraction / Spring to Mouse Cursor
        const dxMouse = n.x - mouse.x;
        const dyMouse = n.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius && mouse.isHovered) {
          // Pull toward mouse
          const force = (1 - distMouse / mouse.radius) * 1.8;
          n.x -= (dxMouse / distMouse) * force * 3;
          n.y -= (dyMouse / distMouse) * force * 3;
        } else {
          // Elastic return to original drift coordinates
          n.x += (n.origX - n.x) * 0.05;
          n.y += (n.origY - n.y) * 0.05;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = distMouse < mouse.radius ? n.baseColor : (darkMode ? '#64748b' : '#94a3b8');
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * (darkMode ? 0.22 : 0.14);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = darkMode
              ? `rgba(239, 68, 68, ${alpha})`
              : `rgba(220, 38, 38, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Direct laser tether to mouse cursor
        if (distMouse < mouse.radius && mouse.isHovered) {
          const tetherAlpha = (1 - distMouse / mouse.radius) * 0.8;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = darkMode
            ? `rgba(239, 68, 68, ${tetherAlpha})`
            : `rgba(220, 38, 38, ${tetherAlpha})`;
          ctx.lineWidth = 1.3;
          ctx.stroke();

          // Small pulse bead on cursor connection
          const beadX = n.x + (mouse.x - n.x) * 0.4;
          const beadY = n.y + (mouse.y - n.y) * 0.4;
          ctx.beginPath();
          ctx.arc(beadX, beadY, 2, 0, Math.PI * 2);
          ctx.fillStyle = darkMode ? '#ef4444' : '#dc2626';
          ctx.fill();
        }
      }

      // Draw cursor subtle targeting aura
      if (mouse.isHovered) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = darkMode ? '#ef4444' : '#dc2626';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2);
        ctx.strokeStyle = darkMode ? 'rgba(239, 68, 68, 0.3)' : 'rgba(220, 38, 38, 0.3)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 dark:opacity-90 transition-opacity duration-300"
    />
  );
}
