"use client";

import { useEffect, useRef, useState } from "react";
import SpotifyLoop, { SpotifyLoopHandle } from "./SpotifyLoop";
import AsciiTitle from "./AsciiTitle";

interface RosterGateProps {
  children: React.ReactNode;
}

export default function RosterGate({ children }: RosterGateProps) {
  const [revealed, setRevealed] = useState(false);
  const rosterRef = useRef<HTMLDivElement>(null);
  const spotifyRef = useRef<SpotifyLoopHandle>(null);

  useEffect(() => {
    if (revealed && rosterRef.current) {
      rosterRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [revealed]);

  const handleClick = () => {
    setRevealed(true);
    spotifyRef.current?.play();
  };

  return (
    <>
      <SpotifyLoop ref={spotifyRef} />

      {!revealed ? (
        <div className="gate">
          <div className="gate-content">
            <AsciiTitle text="765" className="ascii-title" />

            <button
              className="gate-cta"
              onClick={handleClick}
            >
              Click to see roster
            </button>
          </div>
        </div>
      ) : (
        <div
          ref={rosterRef}
          className="roster-reveal"
        >
          {children}
        </div>
      )}
    </>
  );
}
