"use client";

import { useEffect, useRef } from "react";

export default function ElectricGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const CELL = window.innerWidth < 768 ? 80 : 50;
    let time = 0;

    // Particles traveling along grid lines
    const particles: { x: number; y: number; axis: "h" | "v"; speed: number; row: number; progress: number }[] = [];
    const initParticles = () => {
      particles.length = 0;
      const cols = Math.ceil(canvas.width / CELL);
      const rows = Math.ceil(canvas.height / CELL);
      for (let i = 0; i < 8; i++) {
        if (Math.random() > 0.5) {
          particles.push({
            x: 0,
            y: Math.floor(Math.random() * rows) * CELL,
            axis: "h",
            speed: 0.3 + Math.random() * 0.7,
            row: Math.floor(Math.random() * rows),
            progress: Math.random(),
          });
        } else {
          particles.push({
            x: Math.floor(Math.random() * cols) * CELL,
            y: 0,
            axis: "v",
            speed: 0.3 + Math.random() * 0.7,
            row: Math.floor(Math.random() * cols),
            progress: Math.random(),
          });
        }
      }
    };
    initParticles();
    window.addEventListener("resize", initParticles);

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const cols = Math.ceil(canvas.width / CELL);
      const rows = Math.ceil(canvas.height / CELL);

      // Draw grid lines
      for (let col = 0; col <= cols; col++) {
        const x = col * CELL;
        const opacity = 0.08 + 0.07 * Math.sin(time + col * 0.5);
        ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let row = 0; row <= rows; row++) {
        const y = row * CELL;
        const opacity = 0.08 + 0.07 * Math.sin(time + row * 0.5);
        ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Intersection dots
      for (let col = 0; col <= cols; col++) {
        for (let row = 0; row <= rows; row++) {
          const x = col * CELL;
          const y = row * CELL;
          const dist = Math.hypot(mouseRef.current.x - x, mouseRef.current.y - y);
          const glow = Math.max(0, 1 - dist / 200);
          const opacity = 0.15 + glow * 0.6;
          ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, 1 + glow * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Mouse glow
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        200
      );
      gradient.addColorStop(0, "rgba(37, 99, 235, 0.08)");
      gradient.addColorStop(1, "rgba(37, 99, 235, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Traveling particles
      particles.forEach((p) => {
        p.progress += p.speed * 0.003;
        if (p.progress > 1) p.progress = 0;

        let px, py;
        if (p.axis === "h") {
          px = p.progress * canvas.width;
          py = p.row * CELL;
        } else {
          px = p.row * CELL;
          py = p.progress * canvas.height;
        }

        const grad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grad.addColorStop(0, "rgba(96, 165, 250, 0.9)");
        grad.addColorStop(1, "rgba(96, 165, 250, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", initParticles);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
