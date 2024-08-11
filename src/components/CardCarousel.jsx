import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftButton from '../assets/icons/leftButton.svg'
import rightButton from '../assets/icons/rightButton.svg'

const classes = {
  CardCarouselContainer: "w-[86.111vw] max-w-[1240px] m-auto pb-8",
  CardsContainer: "mt-4",
  LeftButton: "w-8 h-8",
  RightButton: "w-8 h-8",
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, zIndex: "20", width: "48px", height: "48px", right: "-16px" }}
      src={rightButton}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, zIndex: "20", width: "48px", height: "48px", left: "-16px" }}
      src={leftButton}
      onClick={onClick}
    />
  );
}

const CardCarousel = ({ children: cards}) => {

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className={classes.CardCarouselContainer}>
      <div className={classes.CardsContainer}>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          {cards}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
