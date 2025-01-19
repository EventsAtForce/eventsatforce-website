import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftButton from '../../public/assets/icons/leftButton.svg'
import rightButton from '../../public/assets/icons/rightButton.svg'

const classes = {
  CardCarouselContainer: "w-[86.111vw] max-w-[1240px] m-auto",
  CardsContainer: "mt-4",
  LeftButton: "w-8 h-8",
  RightButton: "w-8 h-8",
};

const getArrowStylesLeft = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return {
      zIndex: "20",
      width: "48px",
      height: "48px",
      left: "-16px",
    };
  } else {
    return {
      zIndex: "20",
      width: "56px",
      height: "56px",
      left: "-20px",
    };
  }
};

const getArrowStylesRight = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return {
      zIndex: "20",
      width: "48px",
      height: "48px",
      right: "-16px",
    };
  } else {
    return {
      zIndex: "20",
      width: "56px",
      height: "56px",
      right: "-20px",
    };
  }
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  const arrowStyles = getArrowStylesRight();
  return (
    <img
      className={className}
      style={{ ...style, ...arrowStyles}}
      src={rightButton}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const arrowStyles = getArrowStylesLeft();
  return (
    <img
      className={className}
      style={{ ...style, ...arrowStyles}}
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
