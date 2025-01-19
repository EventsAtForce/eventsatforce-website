import React, { useState, useEffect, useRef } from 'react';
import StatsImage_1 from '../../public/assets/images/Statistics_1.webp';
import StatsImage_2 from '../../public/assets/images/Statistics_2.webp';

const classes = {
  StatisticsMain: "flex flex-col items-center justify-center xl:gap-12 lg:gap-10 md:gap-8 gap-6",
  StatisticsImage: "w-full fit-cover rounded-3xl border-2 border-[#AFAFAF]",  
  StatisticsContainer: "flex flex-col md:flex-row items-start md:items-center justify-center md:justify-around w-full gap-4 md:gap-0",
  Stats: "flex flex-col teism-start md:items-center justify-center xl:gap-5 min-[1180px]:gap-4 lg:gap-3 gap-0",
  StatsHeader: "font-HelveticaNeueBD xl:text-[52px] lg:text-shadow-3 lg:text-[40px] min-[1180px]:text-[44px] min-[900px]:text-[30px] md:text-[28px] text-3xl text-shadow-2",
  StatsParagraph: "font-HelveticaNeueMD xl:text-2xl lg:text-[22px] min-[1180px]:text-[24px] min-[900px]:text-[18px] md:text-[16px] text-lg",
  Divider: "hidden md:block xl:h-36 min-[1180px]:h-32 lg:h-28 h-24 w-1 bg-gray-400 rounded-lg",
};

const CountUp = ({ end, duration, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(end, Math.floor((progress / duration) * end));
      
      setCount(increment);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return <>{count.toLocaleString()}</>;
};

const Statistics = () => {
  const [imageSrc, setImageSrc] = useState(StatsImage_1);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth < 768 ? StatsImage_2 : StatsImage_1);
    };

    handleResize(); // Set initial image
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.8  }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={classes.StatisticsMain}>
      <img className={classes.StatisticsImage} src={imageSrc} alt="" />
      <div className={classes.StatisticsContainer}>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>
            <CountUp end={30} duration={3000} startCounting={startCounting} />+
          </h1>
          <p className={classes.StatsParagraph}>Events</p>
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>
            <CountUp end={5000} duration={3000} startCounting={startCounting} />+
          </h1>
          <p className={classes.StatsParagraph}>Attendees</p>
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>
            <CountUp end={20} duration={3000} startCounting={startCounting} />+
          </h1>
          <p className={classes.StatsParagraph}>Brand Partners</p> 
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>
            <CountUp end={100000} duration={3000} startCounting={startCounting} />+
          </h1>
          <p className={classes.StatsParagraph}>Digital Impressions</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;