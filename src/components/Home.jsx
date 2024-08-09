import React, { useState, useEffect } from 'react';
import Carousel from './Carousel'; 
import About from './About'; 
import Statistics from './Statistics';

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


const classes = {
  HomeContainer: "flex flex-col items-center justify-center xl:gap-16 lg:gap-14 md:gap-12 gap-8 w-full h-full max-w-1440 xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  CarouselContainer: "max-w-[1240px]",
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
    </div>
  );
};

export default Home;