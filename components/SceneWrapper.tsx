"use client";

import dynamic from "next/dynamic";

const Cinematic3DScene = dynamic(() => import("@/components/Cinematic3DScene"), {
  ssr: false,
});

export default function SceneWrapper() {
  return <Cinematic3DScene />;
}
