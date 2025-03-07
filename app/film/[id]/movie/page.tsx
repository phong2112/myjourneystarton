"use client";

import VideoPlayerCmp from "@/app/components/VideoPlayer";
import Image from "next/image";

export default function MovieDetailPage() {
  const videoUrl =
    "https://d2e51043wccsom.cloudfront.net/Squid+Game+-+Season+1+(2021)/S01E04/master_playlist.m3u8";

  return <VideoPlayerCmp src={videoUrl} />;
}
