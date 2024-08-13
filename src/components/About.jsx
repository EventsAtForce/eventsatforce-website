import React from 'react';
import IMG_1 from '../assets/images/IMG_1.png';
import IMG_2 from '../assets/images/IMG_2.png';

const classes = {
  AboutContainer: 'flex flex-col min-[900px]:flex-row items-center justify-between gap-[40px]',
  AboutText: 'flex flex-col xl:gap-5 lg:gap-4 gap-3 text-center min-[900px]:text-left',
  AboutHeader: 'font-HelveticaNeueBD xl:text-4xl xl:text-shadow-3 md:text-3xl text-2xl text-shadow-2',
  AboutBody: 'font-HelveticaNeue xl:text-2xl xl:leading-7 lg:text-xl lg:leading-6 md:text-lg md:leading-[24px] max-[430px]:leading-[1.25rem]',
  AboutImage: 'fit-cover xl:w-[600px] min-[1120px]:w-[550px] lg:w-[450px] min-[900px]:w-[400px] xl:rounded-3xl rounded-2xl',
  WhatWeDoContainer: 'flex flex-col min-[900px]:flex-row items-center justify-between gap-[40px]',
  WhatWeDoText: 'flex flex-col xl:gap-5 lg:gap-4 gap-3 text-center min-[900px]:text-left',
  WhatWeDoHeader: 'font-HelveticaNeueBD xl:text-4xl xl:text-shadow-3 md:text-3xl text-2xl text-shadow-2',
  WhatWeDoBody: 'font-HelveticaNeue xl:text-2xl xl:leading-7 lg:text-xl lg:leading-6 md:text-lg md:leading-[24px] max-[430px]:leading-[1.25rem]',
  WhatWeDoImage: 'fit-cover xl:w-[600px] min-[1120px]:w-[550px] lg:w-[450px] min-[900px]:w-[400px] xl:rounded-3xl rounded-2xl',
};

const About = () => {
  return (
    <div>
      <div className={classes.AboutContainer}>
        <img className={classes.AboutImage} src={IMG_1} alt="About Us" />
        <div className={classes.AboutText}>
          <h1 className={classes.AboutHeader}>ABOUT US</h1>
          <p className={classes.AboutBody}>
            Welcome to FORCE - Forum of REVA for Communication and Electronics! We are a dynamic student forum 
            established under the School of Electronics and Communication Engineering at REVA University. 
            Our mission is to foster a community of enthusiastic learners, innovators, and leaders.
          </p>
        </div>
      </div>
      <div className={classes.WhatWeDoContainer}>
        <img className={classes.WhatWeDoImage} src={IMG_2} alt="What We Do" />
        <div className={classes.WhatWeDoText}>
          <h1 className={classes.WhatWeDoHeader}>WHAT WE DO</h1>
          <p className={classes.WhatWeDoBody}>
            FORCE is a platform for students to showcase their talents, skills, and creativity. We host events like Music Fests and Fresher's Day to celebrate student talents. We also organize technical events to enhance the skills of the students, fostering a dynamic community for students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
