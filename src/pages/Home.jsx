import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CardCarousel from "../components/CardCarousel";
import Carousel from '../components/Carousel'; 
import About from '../components/About'; 
import Statistics from '../components/Statistics';
import Societies from '../components/Societies';

// for vw >= 640px
const slides_1 = [
  'src/assets/images/Slides_1/Slide_1.png',
  'src/assets/images/Slides_1/Slide_2.png',
  'src/assets/images/Slides_1/Slide_3.png',
  'src/assets/images/Slides_1/Slide_4.png',
  'src/assets/images/Slides_1/Slide_5.png',
  'src/assets/images/Slides_1/Slide_6.png',
  'src/assets/images/Slides_1/Slide_7.png',
  'src/assets/images/Slides_1/Slide_8.png',
  'src/assets/images/Slides_1/Slide_9.png',
  'src/assets/images/Slides_1/Slide_10.png',
];


// vw < 640px
const slides_2 = [
  "src/assets/images/Slides_2/Slide_1.png",
  "src/assets/images/Slides_2/Slide_2.png",
  "src/assets/images/Slides_2/Slide_3.png",
  "src/assets/images/Slides_2/Slide_4.png",
  "src/assets/images/Slides_2/Slide_5.png",
  "src/assets/images/Slides_2/Slide_6.png",
  "src/assets/images/Slides_2/Slide_7.png",
  "src/assets/images/Slides_2/Slide_8.png",
  "src/assets/images/Slides_2/Slide_9.png",
  "src/assets/images/Slides_2/Slide_10.png",
];

const eventsList = [
  {
    name: "Harmonics '24",
    link: "https://www.instagram.com/reel/C5gGFQxydjJ/",
    image: "src/assets/images/Events/Harmonics.png",
  },
  {
    name: "Campus Cruise '24",
    link: "https://www.instagram.com/reel/C5BUj3gtZnZ/",
    image: "src/assets/images/Events/CampusCruise.png",
  },
  {
    name: "FORCE Recap '23",
    link: "https://www.instagram.com/reel/C1hJpo7yp94/",
    image: "src/assets/images/Events/FORCERecap23.png",
  },
  {
    name: "Children's Day '23",
    link: "https://www.instagram.com/reel/C2zolxyy3IP/",
    image: "src/assets/images/Events/ChildrensDay.png",
  },
  {
    name: "Fresher's '23",
    link: "https://www.instagram.com/reel/C0Y2J0QyV0F/",
    image: "src/assets/images/Events/Freshers.png",
  },
  {
    name: "Aarambha '23",
    link: "https://www.instagram.com/reel/Czx7gRLrty1/",
    image: "src/assets/images/Events/Aarambha.png",
  }
]

const classes = {
  HomeContainer: "flex flex-col items-center justify-center xl:gap-16 lg:gap-14 md:gap-12 gap-8 w-full h-full max-w-1440 xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  CarouselContainer: "max-w-[1240px]",
  ReelsCarouselContainer: "flex flex-col md:gap-4 gap-2",
  EventsContainer: "flex flex-col items-center justify-center w-full h-full max-w-1440 xl:gap-[40px] lg:gap-[36px] md:gap-[32px] sm:gap-[28px] gap-[4px] xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  EventsHeader: "text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD text-shadow-3",
  Card: "flex flex-col items-center justify-between gap-2 h-full bg-[#D9D9D9] border-2 border-[#AFAFAF] xl:rounded-3xl md:rounded-2xl rounded-xl lg:p-6 md:p-5 p-6",
  CardHaderContainer: "flex flex-col items-center justify-center",
  CardHeader: "text-center xl:text-2xl lg:text-[22px] text-2xl font-HelveticaNeueMD",
  CardDate: "text-center text-lg font-HelveticaNeueMD text-shadow-2",
  CardImage: "w-full h-auto object-cover xl:rounded-3xl md:rounded-2xl rounded-xl border-2 border-[#AFAFAF]",
  WatchButton: "w-full flex items-center justify-center bg-[#D9D9D9] text-black font-HelveticaNeueBD text-lg p-2 md:rounded-2xl rounded-xl border-2 border-[#AFAFAF]",
};

const Home = () => {
  const [slides, setSlides] = useState(slides_1);

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
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <h1 className={classes.EventsHeader}>Sneak Peak Into<br /> Our Events</h1>
        <CardCarousel>
          {eventsList.map((event, index) => (
            <div className={classes.CardContainer} key={index}>
              <div className={classes.Card}>
                <img className={classes.CardImage} src={event.image} alt="" />
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
    </div>
  );
};

export default Home;