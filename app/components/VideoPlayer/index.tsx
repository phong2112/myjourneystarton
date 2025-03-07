"use client";

import Hls from "hls.js";
import { useEffect, useState, useRef } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";
export default function VideoPlayerCmp({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize Video.js player
    const player = videojs(videoRef.current, {
      autoplay: true, // Optional: autoplay the video
      controls: true, // Show the video controls
      sources: [
        {
          src: src, // HLS stream URL (.m3u8 file)
          type: "application/x-mpegURL", // HLS MIME type
        },
      ],
    });

    // Cleanup on component unmount
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
}
