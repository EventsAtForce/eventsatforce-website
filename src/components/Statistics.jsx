import React, { useState, useEffect } from 'react';
import StatsImage_1 from '../assets/images/Statistics_1.png';
import StatsImage_2 from '../assets/images/Statistics_2.png';

const classes = {
  StatisticsMain: "flex flex-col items-center justify-center xl:gap-12 lg:gap-10 md:gap-8 gap-6",
  StatisticsImage: "w-full fit-cover xl:rounded-3xl lg:runded-2xl md:rounded-xl sm:rounded-xl rounded-lg", 
  StatisticsContainer: "flex flex-col md:flex-row items-start md:items-center justify-center md:justify-around w-full gap-4 md:gap-0",
  Stats: "flex flex-col teism-start md:items-center justify-center xl:gap-5 min-[1180px]:gap-4 lg:gap-3 gap-0",
  StatsHeader: "font-HelveticaNeueBD xl:text-[52px] lg:text-shadow-3 lg:text-[40px] min-[1180px]:text-[44px] min-[900px]:text-[30px] md:text-[28px] text-3xl text-shadow-2",
  StatsParagraph: "font-HelveticaNeueMD xl:text-2xl lg:text-[22px] min-[1180px]:text-[24px] min-[900px]:text-[18px] md:text-[16px] text-lg",
  Divider: "hidden md:block xl:h-36 min-[1180px]:h-32 lg:h-28 h-24 w-1 bg-gray-400 rounded-lg",
};

const Statistics = () => {
  const [imageSrc, setImageSrc] = useState(window.innerWidth < 768 ? StatsImage_2 : StatsImage_1);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth < 768 ? StatsImage_2 : StatsImage_1);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.StatisticsMain}>
      <img className={classes.StatisticsImage} src={imageSrc} alt="" />
      <div className={classes.StatisticsContainer}>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>500+</h1>
          <p className={classes.StatsParagraph}>Attendees</p>
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>30+</h1>
          <p className={classes.StatsParagraph}>Events</p>
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>20+</h1>
          <p className={classes.StatsParagraph}>Brand Partners</p> 
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.Stats}>
          <h1 className={classes.StatsHeader}>30,000+</h1>
          <p className={classes.StatsParagraph}>Digital Impressions</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
