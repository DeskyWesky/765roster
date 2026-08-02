"use client";

import { useEffect, useRef, useState } from "react";
import SpotifyLoop, { SpotifyLoopHandle } from "./SpotifyLoop";

export default function RosterGate({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  const rosterRef = useRef<HTMLDivElement | null>(null);
  const spotifyRef = useRef<SpotifyLoopHandle>(null);

  useEffect(() => {
    if (revealed && rosterRef.current) {
      rosterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [revealed]);

  function handleClick() {
    setRevealed(true);
    spotifyRef.current?.play();
  }

  return (
    <>
      <SpotifyLoop ref={spotifyRef} />
      {!revealed ? (
        <div className="gate">
          <AsciiTitle text="765" className="ascii-title" />
          <button className="gate-cta" onClick={handleClick}>
            Click to see roster
          </button>
        </div>
      ) : (
        <div ref={rosterRef} className="roster-reveal">
          {children}
        </div>
      )}
    </>
  );
}
