"use client";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useResize() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;

      const mobile = width <= MOBILE_BREAKPOINT || aspectRatio < 0.75;

      setIsMobile(mobile);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return { isMobile };
}
