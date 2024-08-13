import React, { useEffect, useRef, useState } from "react";
import IMG_1 from "../assets/images/Zealous.png";
import IMG_2 from "../assets/images/Euphony.png";
import IMG_3 from "../assets/images/Photography.png";
import IMG_4 from "../assets/images/Kalakshetra.png";

const classes = {
  SocietiesMain: "flex flex-col items-center justify-center w-full xl:gap-10 lg:gap-8 md:gap-6 gap-4",
  SocietiesHeader: "font-HelveticaNeueBD xl:text-4xl xl:text-shadow-3 lg:text-3xl text-2xl text-shadow-2",
  SocietiesContainer: "flex flex-col items-center justify-center w-full gap-6",
  SocietyWrapper: "flex flex-col md:flex-row items-start justify-between w-full gap-6",
  Society: "flex flex-col items-center justify-center w-full gap-4",
  SocietyHeader: "font-HelveticaNeueMD xl:text-4xl xl:text-shadow-3 lg:text-3xl text-2xl text-shadow-2",
  SocietyParagraph: "width-full font-HelveticaNeue text-justify xl:text-2xl xl:leading-7 lg:text-xl lg:leading-6 md:text-lg md:leading-[24px] max-[430px]:leading-[1.25rem]",
  SocietyImage: "fit-cover w-full xl:rounded-3xl md:rounded-3xl rounded-xl transition-all duration-700 ease-in-out",
};

const Societies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getImageStyle = (index) => {
    const baseStyle = "transform transition-all duration-1000 ease-out hover:-translate-y-4 hover:shadow-2xl";
    const slideInStyle = isVisible
      ? "translate-x-0 opacity-100"
      : index % 2 === 0
        ? "-translate-x-full opacity-0"
        : "translate-x-full opacity-0";
    return `${baseStyle} ${slideInStyle}`;
  };

  return (
    <div ref={sectionRef} className={classes.SocietiesMain}>
      <h1 className={classes.SocietiesHeader}>SOCIETIES / CLUBS</h1>
      <div className={classes.SocietiesContainer}>
        <div className={classes.SocietyWrapper}>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Zealous Crew</h1>
            <img className={`${classes.SocietyImage} ${getImageStyle(0)}`} src={IMG_1} alt="" />
            <p className={classes.SocietyParagraph}>Fired up and fierce, the Zealous Crew brings passion that can't be beat, their moves as sharp as their rhythmic heartbeat.</p>
          </div>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Euphony</h1>
            <img className={`${classes.SocietyImage} ${getImageStyle(1)}`} src={IMG_2} alt="" />
            <p className={classes.SocietyParagraph}>Euphony's melodies weave magic in the air,  a fusion of talents with a sound beyond compare.</p>
          </div>
        </div>
        <div className={classes.SocietyWrapper}>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Photography Club</h1>
            <img className={`${classes.SocietyImage} ${getImageStyle(2)}`} src={IMG_3} alt="" />
            <p className={classes.SocietyParagraph}>With keen eyes and steady hands, the Photography Club captures fleeting moments, transforming the ordinary into art that transcends.</p>
          </div>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Kalakshetra</h1>
            <img className={`${classes.SocietyImage} ${getImageStyle(3)}`} src={IMG_4} alt="" />
            <p className={classes.SocietyParagraph}>Steeped in tradition, Kalakshetra's art takes flight, a vibrant tapestry woven with movement and light.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Societies;