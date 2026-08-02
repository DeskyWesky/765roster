"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export interface SpotifyLoopHandle {
  play: () => void;
}

const VIDEO_ID = "jViw4WrCHIo";

const SpotifyLoop = forwardRef<SpotifyLoopHandle>((_, ref) => {
  const playerRef = useRef<any>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    function createPlayer() {
      if (cancelled || !mountRef.current || playerRef.current) return;

      playerRef.current = new window.YT.Player(mountRef.current, {
        width: "1",
        height: "1",
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
          rel: 0,
          modestbranding: 1,
        },
      });
    }

    if (window.YT?.Player) {
      createPlayer();
    } else {
      if (!document.getElementById("youtube-iframe-api")) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }

      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play() {
      if (!playerRef.current) return;

      playerRef.current.unMute?.();
      playerRef.current.playVideo?.();
    },
  }));

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        opacity: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  );
});

SpotifyLoop.displayName = "SpotifyLoop";

export default SpotifyLoop;
