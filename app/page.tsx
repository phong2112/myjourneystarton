"use client"

import Image from "next/image";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const videoUrl = "https://d2e51043wccsom.cloudfront.net/Squid+Game+-+Season+1+(2021)/output.m3u8";

  useEffect(() => {
    const videoEle: any = videoRef.current;

    if (Hls.isSupported() && videoRef && videoEle) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(videoEle);
    } else if (videoEle.canPlayType("application/vnd.apple.mpegurl")) {
      videoEle.src = videoUrl;
      videoEle.addEventListener("canplay", function () {
        videoEle.play();
      });
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <video ref={videoRef} controls width="640" height="360">
          Your browser does not support the video tag.
        </video>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
