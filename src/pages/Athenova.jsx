import React, { useRef, useEffect } from 'react'
import FaultyTerminal from '../components/FaultyTerminal/FaultyTerminal';
import Navbar from '../components/PillNav/PillNav';
import { useLenis } from '../hooks/useLenis';
import { gsap } from 'gsap';

const Athenova = () => {
  useLenis();
  const containerRef = useRef(null);
  const tvImgRef = useRef(null);
  const navRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    // Fade in on page load
    gsap.fromTo(pageRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.inOut' }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !tvImgRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const scrolled = -top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const scale = 1 + progress * 9;
      // Scale the TV
      tvImgRef.current.style.transform = `scale(${scale})`;
      
      // Show nav during scroll (when TV is expanding)
      if (navRef.current) {
        const navOpacity = Math.max(0, (progress - 0.2) / 0.4); // fade in from 5-35% scroll
        navRef.current.style.opacity = navOpacity;
        navRef.current.style.pointerEvents = navOpacity > 0.1 ? 'auto' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <Navbar ref={navRef} />

      {/* Tall scroll container — 200vh gives scroll room */}
      <div ref={containerRef} style={{ height: '200vh' }}>

        {/* Sticky inner — stays fixed while parent is in view */}
        <div className="sticky top-0 w-full h-screen bg-black overflow-hidden" data-section="home">
          <FaultyTerminal
            scale={2.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.3}
            tint="#0036ab"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={true}
            brightness={0.8}
          />

          {/* TV Overlay — scales up as you scroll */}
          <img
            ref={tvImgRef}
            src="/assets/images/Athenova/tv.png"
            alt="TV"
            className="absolute inset-0 w-full h-full object-fill z-20 pointer-events-none"
            style={{
              transform: 'scale(1)',
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          />
        </div>
      </div>

      {/* Content below — appears naturally after scroll container ends */}
      <div className="w-full h-screen bg-black flex items-center justify-center" data-section="about">
        <p className="text-white text-2xl">Content goes here</p>
      </div>
    </div>
  )
}

export default Athenova

