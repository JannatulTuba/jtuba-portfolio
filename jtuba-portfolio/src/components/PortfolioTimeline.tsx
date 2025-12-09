import React, { useEffect, useRef } from "react";

export const PortfolioTimeline: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // baseline
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, height / 2);
    ctx.lineTo(width - 40, height / 2);
    ctx.stroke();

    const milestones = [
      { label: "Started QA", x: 70 },
      { label: "Joined BU MET", x: 180 },
      { label: "React & TS", x: 320 },
      { label: "Portfolio Project", x: 460 },
    ];

    ctx.fillStyle = "#f97316";
    ctx.font = "12px sans-serif";

    milestones.forEach((m) => {
      ctx.beginPath();
      ctx.arc(m.x, height / 2, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillText(m.label, m.x - 40, height / 2 - 15);
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={520}
      height={150}
      aria-label="Timeline of key learning milestones"
    />
  );
};
