"use client"

import Hls from "hls.js";
import { useEffect, useRef } from "react";

export default function VideoPlayerCmp() {
    const videoRef = useRef(null);
    const videoUrl = "https://d2e51043wccsom.cloudfront.net/Squid+Game+-+Season+1+(2021)/S01E01/output.m3u8";
    
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
        <video ref={videoRef} controls width="640" height="360">
            Your browser does not support the video tag.
        </video>
    );
}
