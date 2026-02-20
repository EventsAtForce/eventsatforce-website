import React, { forwardRef, useEffect, useRef } from 'react';
import FaultyTerminal from '../Reactbits/FaultyTerminal/FaultyTerminal';

const Hero = forwardRef(({ heroRef, typewriterRef }, tvImgRef) => {
  const typewriterText = 'build. create. compete. conquer.';
  const rafIdRef = useRef(null);

  useEffect(() => {
    // Smooth time-based typewriter effect using requestAnimationFrame
    let startTime = Date.now();
    const typingDuration = 3000;
    const deletingDuration = 1500;
    const pauseDuration = 1500;
    const cycleDuration = typingDuration + pauseDuration + deletingDuration + 500;

    const animate = () => {
      if (!typewriterRef.current) return;

      const elapsed = (Date.now() - startTime) % cycleDuration;
      let displayText = '';

      if (elapsed < typingDuration) {
        const progress = elapsed / typingDuration;
        const charsToShow = Math.floor(progress * typewriterText.length);
        displayText = typewriterText.substring(0, charsToShow) + '<span class="typewriter-cursor">|</span>';
      } else if (elapsed < typingDuration + pauseDuration) {
        displayText = typewriterText + '<span class="typewriter-cursor">|</span>';
      } else if (elapsed < typingDuration + pauseDuration + deletingDuration) {
        const deleteProgress = (elapsed - typingDuration - pauseDuration) / deletingDuration;
        const charsRemaining = Math.floor((1 - deleteProgress) * typewriterText.length);
        displayText = typewriterText.substring(0, charsRemaining) + '<span class="typewriter-cursor">|</span>';
      } else {
        displayText = '<span class="typewriter-cursor">|</span>';
      }

      typewriterRef.current.innerHTML = displayText;
      rafIdRef.current = requestAnimationFrame(animate);
    };

    // Start after 2 seconds
    const timer = setTimeout(() => {
      startTime = Date.now();
      rafIdRef.current = requestAnimationFrame(animate);
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [typewriterText, typewriterRef]);
  return (
    <>
      {/* <FaultyTerminal
    scale={1.5}
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
    curvature={0.1}
    tint="#1a5813"
    mouseReact
    mouseStrength={0.5}
    pageLoadAnimation
    brightness={0.6}
  /> */}

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

      {/* Hero Text SVG — moves from top to current position as you scroll */}
      <img
        ref={heroRef}
        src="/assets/images/Athenova/hero.svg"
        alt="Athenova Hero"
        className="absolute inset-0 flex items-center justify-center mt-[-40px] z-5 pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: 'scale(0.55) translateY(-100vh)',
          willChange: 'transform',
        }}
      />

      {/* Typewriter Text — appears below hero text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div
          ref={typewriterRef}
          className="text-white text-3xl font-bold tracking-wide mt-[400px]"
          style={{
            fontFamily: 'Guntech',
            letterSpacing: '2px',
            minHeight: '40px',
          }}
        />
      </div>
    </>
  );
});

Hero.displayName = 'Hero';
export default Hero;
