import React, { useEffect, useRef, useState } from "react";
import IMG_1 from "../../public/assets/images/Zealous.webp";
import IMG_2 from "../../public/assets/images/Euphony.webp";
import IMG_3 from "../../public/assets/images/Photography.webp";
import IMG_4 from "../../public/assets/images/Kalakshetra.webp";

const classes = {
  SocietiesMain: "flex flex-col items-center justify-center w-full xl:gap-10 lg:gap-8 md:gap-6 gap-4",
  SocietiesHeader: "font-HelveticaNeueBD xl:text-4xl xl:text-shadow-3 lg:text-3xl text-2xl text-shadow-2",
  SocietiesContainer: "flex flex-col items-center justify-center w-full gap-6",
  SocietyWrapper: "flex flex-col md:flex-row items-start justify-between w-full gap-6",
  Society: "flex flex-col items-center justify-center w-full gap-4",
  SocietyHeader: "font-HelveticaNeueMD xl:text-4xl xl:text-shadow-3 lg:text-3xl text-2xl text-shadow-2",
  SocietyParagraph: "width-full font-HelveticaNeue text-justify xl:text-2xl xl:leading-7 lg:text-xl lg:leading-6 md:text-lg md:leading-[24px] max-[430px]:leading-[1.25rem]",
  SocietyImage: "fit-cover w-full xl:rounded-3xl md:rounded-3xl rounded-xl transform transition-all duration-300 ease-out md:hover:-translate-y-3 md:hover:shadow-2xl",
};

const Societies = () => {

  return (
    <div className={classes.SocietiesMain}>
      <h1 className={classes.SocietiesHeader}>SOCIETIES / CLUBS</h1>
      <div className={classes.SocietiesContainer}>
        <div className={classes.SocietyWrapper}>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Zealous Crew</h1>
            <img className={classes.SocietyImage} src={IMG_1} alt="" />
            <p className={classes.SocietyParagraph}>Fired up and fierce, the Zealous Crew brings passion that can't be beat, their moves as sharp as their rhythmic heartbeat.</p>
          </div>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Euphony</h1>
            <img className={classes.SocietyImage} src={IMG_2} alt="" />
            <p className={classes.SocietyParagraph}>Euphony's melodies weave magic in the air,  a fusion of talents with a sound beyond compare.</p>
          </div>
        </div>
        <div className={classes.SocietyWrapper}>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Photography Club</h1>
            <img className={classes.SocietyImage} src={IMG_3} alt="" />
            <p className={classes.SocietyParagraph}>With keen eyes and steady hands, the Photography Club captures fleeting moments, transforming the ordinary into art that transcends.</p>
          </div>
          <div className={classes.Society}>
            <h1 className={classes.SocietyHeader}>Kalakshetra</h1>
            <img className={classes.SocietyImage} src={IMG_4} alt="" />
            <p className={classes.SocietyParagraph}>Steeped in tradition, Kalakshetra's art takes flight, a vibrant tapestry woven with movement and light.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Societies;