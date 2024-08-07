import React from "react";
import Carousel from "./Carousel";

const classes = {
  HomeContainer: "flex items-center justify-center w-full h-full max-w-1440 xl:px-12 xl:pt-[100px] xl:pb-8 lg:px-10 lg:pt-[80px] lg:pb-6 sm:px-8 sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
};

const Home = () => {
  return (
    <div className={classes.HomeContainer}>
      <Carousel />
    </div>
  );
};

export default Home;
