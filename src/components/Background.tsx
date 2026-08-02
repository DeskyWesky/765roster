"use client";

import { useEffect, useRef } from "react";

const CHARS = "01765#%*+=-:.·◇◆".split("");

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = new Array(columns).fill(1);

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(5, 8, 16, 0.18)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const isLead = Math.random() > 0.94;
        ctx.fillStyle = isLead
          ? "rgba(140, 210, 255, 0.9)"
          : "rgba(60, 130, 220, 0.35)";
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    let frame: number;
    let last = 0;
    const interval = reduceMotion ? 1000 / 6 : 1000 / 30;

    function loop(time: number) {
      frame = requestAnimationFrame(loop);
      if (time - last < interval) return;
      last = time;
      draw();
    }

    frame = requestAnimationFrame(loop);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(1);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}
