"use client";

import { useState } from "react";
import type { Member } from "@/data/roster";

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface Particle {
  id: number;
  dx: number;
  dy: number;
}

let particleId = 0;

interface MemberCardProps {
  member: Member;
  accent: string;
}

export default function MemberCard({ member, accent }: MemberCardProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  function explode() {
    const count = 10;
    const next: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const distance = 30 + Math.random() * 20;
      next.push({
        id: particleId++,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
      });
    }
    setParticles(next);
    window.setTimeout(() => setParticles([]), 550);
  }

  return (
    <div
      className="member-card"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <button
        type="button"
        className={`member-avatar-wrap${particles.length ? " is-exploding" : ""}`}
        onClick={explode}
        aria-label={member.name}
      >
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={`${member.name}'s avatar`}
            className="member-avatar"
          />
        ) : (
          <div className="member-avatar member-avatar-initials">
            {getInitials(member.name)}
          </div>
        )}
        {particles.map((p) => (
          <span
            key={p.id}
            className="member-particle"
            style={{ "--dx": `${p.dx}px`, "--dy": `${p.dy}px` } as React.CSSProperties}
          />
        ))}
      </button>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-bio">{member.bio}</p>
      </div>
    </div>
  );
}
