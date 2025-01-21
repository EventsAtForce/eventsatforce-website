import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CardCarousel from "../components/CardCarousel";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Statistics from "../components/Statistics";
import Societies from "../components/Societies";
import Team from "../components/Team";
import upwardIcon from "/assets/buttons/upward-arrow.webp";

// for vw >= 640px
import Slide_1_1 from "/assets/images/Slides_1/Slide_1.webp";
import Slide_1_2 from "/assets/images/Slides_1/Slide_2.webp";
import Slide_1_3 from "/assets/images/Slides_1/Slide_3.webp";
import Slide_1_4 from "/assets/images/Slides_1/Slide_4.webp";
import Slide_1_5 from "/assets/images/Slides_1/Slide_5.webp";
import Slide_1_6 from "/assets/images/Slides_1/Slide_6.webp";
import Slide_1_7 from "/assets/images/Slides_1/Slide_7.webp";
import Slide_1_8 from "/assets/images/Slides_1/Slide_8.webp";
import Slide_1_9 from "/assets/images/Slides_1/Slide_9.webp";
import Slide_1_10 from "/assets/images/Slides_1/Slide_10.webp";
import Slide_1_11 from "/assets/images/Slides_1/Slide_11.webp";
import Slide_1_12 from "/assets/images/Slides_1/Slide_12.webp";

const slides_1 = [
  Slide_1_1,
  Slide_1_2,
  Slide_1_3,
  Slide_1_4,
  Slide_1_5,
  Slide_1_6,
  Slide_1_7,
  Slide_1_8,
  Slide_1_9,
  Slide_1_10,
  Slide_1_11,
  Slide_1_12,
];

// vw < 640px
import Slide_2_1 from "/assets/images/Slides_2/Slide_1.webp";
import Slide_2_2 from "/assets/images/Slides_2/Slide_2.webp";
import Slide_2_3 from "/assets/images/Slides_2/Slide_3.webp";
import Slide_2_4 from "/assets/images/Slides_2/Slide_4.webp";
import Slide_2_5 from "/assets/images/Slides_2/Slide_5.webp";
import Slide_2_6 from "/assets/images/Slides_2/Slide_6.webp";
import Slide_2_7 from "/assets/images/Slides_2/Slide_7.webp";
import Slide_2_8 from "/assets/images/Slides_2/Slide_8.webp";
import Slide_2_9 from "/assets/images/Slides_2/Slide_9.webp";
import Slide_2_10 from "/assets/images/Slides_2/Slide_10.webp";
import Slide_2_11 from "/assets/images/Slides_2/Slide_11.webp";
import Slide_2_12 from "/assets/images/Slides_2/Slide_12.webp";

const slides_2 = [
  Slide_2_1,
  Slide_2_2,
  Slide_2_3,
  Slide_2_4,
  Slide_2_5,
  Slide_2_6,
  Slide_2_7,
  Slide_2_8,
  Slide_2_9,
  Slide_2_10,
  Slide_2_11,
  Slide_2_12,
];

import Harmonics from "/assets/images/Events/Harmonics.webp";
import CampusCruise from "/assets/images/Events/CampusCruise.webp";
import FORCE_Recap_23 from "/assets/images/Events/FORCERecap23.webp";
import ChildrensDay from "/assets/images/Events/ChildrensDay.webp";
import Freshers from "/assets/images/Events/Freshers.webp";
import Aarambha from "/assets/images/Events/Aarambha.webp";

const eventsList = [
  {
    name: "Harmonics '24",
    link: "https://www.instagram.com/reel/C5gGFQxydjJ/",
    image: Harmonics,
  },
  {
    name: "Campus Cruise",
    link: "https://www.instagram.com/reel/C5BUj3gtZnZ/",
    image: CampusCruise,
  },
  {
    name: "FORCE Recap '23",
    link: "https://www.instagram.com/reel/C1hJpo7yp94/",
    image: FORCE_Recap_23,
  },
  {
    name: "Children's Day '23",
    link: "https://www.instagram.com/reel/C2zolxyy3IP/",
    image: ChildrensDay,
  },
  {
    name: "Fresher's '23",
    link: "https://www.instagram.com/reel/C0Y2J0QyV0F/",
    image: Freshers,
  },
  {
    name: "Aarambha '23",
    link: "https://www.instagram.com/reel/Czx7gRLrty1/",
    image: Aarambha,
  },
];

const classes = {
  HomeContainer: "flex flex-col relative items-center justify-center xl:gap-16 lg:gap-14 md:gap-12 gap-8 w-full h-full max-w-1440 xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  CarouselContainer: "max-w-[1240px]",
  ReelsCarouselContainer: "flex flex-col md:gap-4 gap-2",
  EventsContainer: "flex flex-col items-center justify-center w-full h-full max-w-1440 xl:gap-[40px] lg:gap-[36px] md:gap-[32px] sm:gap-[28px] gap-[4px] xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  EventsHeader: "text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD text-shadow-3",
  Card: "flex flex-col items-center justify-between gap-2 h-full bg-[#D9D9D9] border-2 border-[#AFAFAF] rounded-3xl lg:p-6 md:p-5 p-4",
  CardHaderContainer: "flex flex-col items-center justify-center",
  CardHeader: "text-center xl:text-2xl text-[20px] font-HelveticaNeueMD",
  CardDate: "text-center text-lg font-HelveticaNeueMD text-shadow-2",
  CardImageContainer: "w-full overflow-hidden xl:rounded-3xl rounded-2xl border-2 border-[#AFAFAF] transition-all duration-300 ease-in-out",
  CardImage: "w-full h-auto object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1",
  WatchButton: "w-full flex items-center justify-center bg-[#D9D9D9] text-black font-HelveticaNeueBD text-lg p-2 md:rounded-2xl rounded-2xl border-2 border-[#AFAFAF] transition-colors duration-300 ease-in-out hover:bg-[#C0C0C0]",
  UpwardIconWrapper: "sm:w-12 sm:h-12 w-10 h-10 z-30 bg-stone-100 flex items-center animate-moveInLeft justify-center fixed shadow-custom rounded-full bottom-[20px] right-[20px] cursor-pointer",
  UpwardIcon: "w-10 h-10 filter brightness-0 saturate-[0]",
};

const Home = () => {
  const [slides, setSlides] = useState(slides_1);
  const [showButton, setShowButton] = useState(false);

  // Change slides if vw < 640px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setSlides(slides_1);
      } else {
        setSlides(slides_2);
      }
    };

    // Set the initial slides based on the current window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setShowButton(scrollPosition > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.HomeContainer}>
      <div className={classes.CarouselContainer}>
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {slides.map((slide, index) => (
            <img src={slide} key={index} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>
      </div>
      <About />
      <Statistics />
      <div className={classes.ReelsCarouselContainer}>
        <h1 className={classes.EventsHeader}>
          Sneak Peak Into
          <br /> Our Events
        </h1>
        <CardCarousel>
          {eventsList.map((event, index) => (
            <div className={classes.CardContainer} key={index}>
              <div className={classes.Card}>
                <div className={classes.CardImageContainer}>
                  <img className={classes.CardImage} src={event.image} alt="" />
                </div>
                <h1 className={classes.CardHeader}>{event.name}</h1>
                <Link to={event.link} className={classes.WatchButton}>
                  <button>WATCH</button>
                </Link>
              </div>
            </div>
          ))}
        </CardCarousel>
      </div>
      <Societies />
      <Team />
      {showButton && (
        <div className={classes.UpwardIconWrapper}>
          <img
            src={upwardIcon}
            alt="upward-arrow"
            className={classes.UpwardIcon}
            onClick={scrollToTop}
          />
        </div>
      )}
    </div>
  );
};

export default Home;