"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const TRACK_URI = "spotify:track:73oGaQ8vzJMHDOReoMITNd";

interface SpotifyController {
  play: () => void;
  addListener: (event: string, cb: (e: any) => void) => void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: any) => void;
  }
}

export interface SpotifyLoopHandle {
  play: () => void;
}

const SpotifyLoop = forwardRef<SpotifyLoopHandle>((_props, ref) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<SpotifyController | null>(null);

  useEffect(() => {
    let cancelled = false;

    function setup(IFrameAPI: any) {
      if (cancelled || !mountRef.current) return;
      IFrameAPI.createController(
        mountRef.current,
        { uri: TRACK_URI, width: "1", height: "1" },
        (controller: SpotifyController) => {
          controllerRef.current = controller;
          controller.addListener("playback_update", (e: any) => {
            const { position, duration, isPaused } = e.data || {};
            if (isPaused && duration > 0 && position >= duration - 0.3) {
              controller.play();
            }
          });
        }
      );
    }

    if (!document.getElementById("spotify-iframe-api")) {
      const script = document.createElement("script");
      script.id = "spotify-iframe-api";
      script.src = "https://open.spotify.com/embed/iframe-api/v1";
      script.async = true;
      document.body.appendChild(script);
    }

    window.onSpotifyIframeApiReady = (IFrameAPI: any) => setup(IFrameAPI);

    return () => {
      cancelled = true;
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => controllerRef.current?.play(),
  }));

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0 }}
    />
  );
});

SpotifyLoop.displayName = "SpotifyLoop";

export default SpotifyLoop;
