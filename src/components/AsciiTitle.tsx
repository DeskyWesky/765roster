"use client";

import { useEffect, useRef } from "react";

const CHARS = ["@", "#", "%", "*", "+", "=", "-", ":", ".", "?", "!", "&", "$", "~", "*", "^"];

interface AsciiTitleProps {
  text: string;
  className?: string;
}

export default function AsciiTitle({ text, className }: AsciiTitleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 1000;
    const height = 360;
    canvas.width = width;
    canvas.height = height;

    const sample = document.createElement("canvas");
    sample.width = width;
    sample.height = height;
    const sctx = sample.getContext("2d");
    if (!sctx) return;
    sctx.fillStyle = "#fff";
    sctx.textAlign = "center";
    sctx.textBaseline = "middle";
    sctx.font = "900 300px Arial, sans-serif";
    sctx.fillText(text, width / 2 - 25, height / 2 + 20);

    const imageData = sctx.getImageData(0, 0, width, height).data;

    const cell = 8;
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${cell}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let y = 0; y < height; y += cell) {
      for (let x = 0; x < width; x += cell) {
        const idx = (y * width + x) * 4;
        const alpha = imageData[idx + 3];
        if (alpha > 120) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const brightness = 0.55 + Math.random() * 0.45;
          ctx.fillStyle = `rgba(120, 200, 255, ${brightness})`;
          ctx.shadowColor = "rgba(76, 195, 255, 0.9)";
          ctx.shadowBlur = 6;
          ctx.fillText(char, x, y);
        }
      }
    }
  }, [text]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label={text}
    />
  );
}
