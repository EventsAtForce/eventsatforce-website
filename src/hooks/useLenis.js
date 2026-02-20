import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const rafFnRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with performance-focused settings
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
      autoResize: true,
    });

    // RAF loop for smooth animation
    function raf(time) {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafFnRef.current = raf;

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
    };
  }, []);

  const pauseScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    lenisRef.current?.stop();
  }, []);

  const resumeScroll = useCallback(() => {
    lenisRef.current?.start();
    if (!rafRef.current && rafFnRef.current) {
      rafRef.current = requestAnimationFrame(rafFnRef.current);
    }
  }, []);

  return { lenisRef, pauseScroll, resumeScroll };
};
