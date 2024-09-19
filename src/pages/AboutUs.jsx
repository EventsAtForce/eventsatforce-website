import React from "react";
import About from "../components/About";

const classes = {
    AboutUsContainer: "flex flex-col items-center justify-center w-full h-full max-w-1440 gap-[40px] xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
};

const AboutUs = () => {
    return (
        <div className={classes.AboutUsContainer}>
            <About />
            {/* <div>
        <h1>  </h1>
      </div> */}
        </div>
    );
};

export default AboutUs;
