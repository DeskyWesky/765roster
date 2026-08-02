"use client";

import { useEffect, useRef, useState } from "react";

export default function RosterGate({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  const rosterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (revealed && rosterRef.current) {
      rosterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [revealed]);

  if (!revealed) {
    return (
      <div className="gate">
        <button className="gate-cta" onClick={() => setRevealed(true)}>
          Click to see roster
        </button>
      </div>
    );
  }

  return (
    <div ref={rosterRef} className="roster-reveal">
      {children}
    </div>
  );
}
