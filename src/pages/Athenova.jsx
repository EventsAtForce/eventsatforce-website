import React, { useRef, useEffect } from 'react'
import Hero from '../components/Hero/Hero';
import AboutAthena from '../components/AboutAthena';
import Navbar from '../components/PillNav/PillNav';
import EventsAthenova from '../components/EventsAthenova';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';
import SeeYouSoon from '../components/SeeYouSoon/SeeYouSoon';
import { useLenis } from '../hooks/useLenis';
import { gsap } from 'gsap';


const Athenova = () => {
  const { lenisRef, pauseScroll, resumeScroll } = useLenis();
  const containerRef = useRef(null);
  const tvImgRef = useRef(null);
  const navRef = useRef(null);
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const typewriterRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    // Fade in on page load
    gsap.fromTo(pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.inOut' }
    );
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!containerRef.current || !tvImgRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      
      // Avoid division by zero or negative scrollable
      if (scrollable <= 0) return;
      
      const scrolled = -top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const scale = 1 + progress * 9;
      tvImgRef.current.style.transform = `scale(${scale})`;
      
      if (navRef.current) {
        const navOpacity = Math.max(0, (progress - 0.1) / 0.4);
        navRef.current.style.opacity = navOpacity;
        navRef.current.style.pointerEvents = navOpacity > 0.1 ? 'auto' : 'none';
      }

      if (heroRef.current) {
        const heroProgress = Math.min(1, progress / 0.7);
        const translateY = -100 + (heroProgress * 100);
        heroRef.current.style.transform = `scale(0.55) translateY(${translateY}vh)`;
      }
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!eventsRef.current) return;

    // Parallax scrolling effect - events section moves slightly faster than scroll
    let ticking = false;

    const handleEventsParallax = () => {
      if (!eventsRef.current) return;
      
      const { top } = eventsRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - top) / window.innerHeight));
      
      // Move 15px for every 10vh of scroll progress (creates parallax effect)
      const translateY = scrollProgress * 150;
      eventsRef.current.style.transform = `translateY(-${translateY}px)`;
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleEventsParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      <Navbar ref={navRef} lenisRef={lenisRef} />

      {/* Tall scroll container — 200vh gives scroll room */}
      <div ref={containerRef} style={{ height: '200vh' }}>

        {/* Sticky inner — stays fixed while parent is in view */}
        <div className="sticky top-0 w-full h-screen bg-black overflow-hidden" id="home" data-section="home">
          <Hero ref={tvImgRef} heroRef={heroRef} typewriterRef={typewriterRef} />
        </div>
      </div>

      <div className='w-full h-full bg-black' id="about" data-section="about">
      <AboutAthena />
      </div>

      <div ref={eventsRef} className='w-full h-full bg-[#fefff0] rounded-tl-[40px] rounded-tr-[40px] mt-[-70px]' id="events" data-section="events">
        <EventsAthenova pauseScroll={pauseScroll} resumeScroll={resumeScroll} />
      </div>

      <div id="contact">
        <Partners/>
      </div>

      <div>
        <SeeYouSoon/>
      </div>

      <div id="footer">
        <Footer />
      </div>

    </div>
  )
}

export default Athenova

