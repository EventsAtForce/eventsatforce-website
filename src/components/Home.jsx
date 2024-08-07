import React from "react";
import Carousel from "./Carousel";
import Slide_1 from "../assets/images/Slide_1.png";

const slides = [
  'src/assets/images/Slide_1.png',
  'src/assets/images/Slide_2.png',
  'src/assets/images/Slide_3.png',
  'src/assets/images/Slide_4.png',
  'src/assets/images/Slide_5.png',
]

const classes = {
  HomeContainer: "flex items-center justify-center w-full h-full max-w-1440 xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  CarouselContainer: "max-w-[1240px]",
};

const Home = () => {
  return (
    <div className={classes.HomeContainer}>
      <div className={classes.CarouselContainer}>
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {slides.map((slide,index) => (
            <img src={slide} key={index}/>
          ))} 
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
