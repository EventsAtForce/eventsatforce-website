import React from 'react'
import IMG_1 from '../assets/images/IMG_1.png'
import IMG_2 from '../assets/images/IMG_2.png'

const classes = {
  AboutContainer: 'flex flex-col min-[900px]:flex-row items-start gap-[40px]',
  AboutText: 'flex flex-col items-center xl:gap-5 lg:gap-4 gap-3',
  AboutHeader: 'width-full font-HelveticaNeueBD xl:text-4xl xl:text-shadow-3 md:text-3xl text-2xl text-shadow-2',
  AboutBody: 'width-full font-HelveticaNeue text-justify xl:text-2xl xl:leading-7 lg:text-xl lg:leading-6 md:text-lg md:leading-[24px] max-[430px]:leading-[1.25rem]',
  AboutImage: 'fit-cover xl:w-[600px] min-[1120px]:w-[550px] lg:w-[450px] min-[900px]:w-[400px] xl:rounded-3xl rounded-2xl transform transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl',
  WhatWeDoContainer: 'flex flex-col-reverse min-[900px]:flex-row items-start gap-[40px]',
  WhatWeDoText: 'flex flex-col items-center justify-center xl:gap-5 lg:gap-4 gap-3',
  WhatWeDoHeader: 'width-full font-HelveticaNeueBD xl:text-4xl xl:text-shadow-3 md:text-3xl text-2xl text-shadow-2',
  WhatWeDoBody: 'width-full font-HelveticaNeue text-justify xl:text-2xl xl:leading-7 lg:text-xl lg:leading-6 md:text-lg md:leading-[24px] max-[430px]:leading-[1.25rem]',
  WhatWeDoImage: 'fit-cover hidden min-[900px]:block xl:w-[600px] min-[1120px]:w-[550px] lg:w-[450px] min-[900px]:w-[400px] xl:rounded-3xl rounded-2xlransform transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl',
}

const About = () => {
  return (
    <>
      <div className={classes.AboutContainer}>
        <div className={classes.AboutText}>
          <h1 className={classes.AboutHeader}>ABOUT US</h1>
          <p className={classes.AboutBody}>Welcome to FORCE - Forum of REVA for Communication and Electronics! We are a dynamic student forum established under the School of Electronics and Communication Engineering at REVA University. Our mission is to foster a community of enthusiastic learners, innovators, and leaders.</p>
        </div>
        <img className={classes.AboutImage} src={IMG_1} alt="" />
      </div>
      <div className={classes.WhatWeDoContainer}>
        <img className={classes.WhatWeDoImage} src={IMG_2} alt="" />
        <div className={classes.WhatWeDoText}>
          <h1 className={classes.WhatWeDoHeader}>WHAT WE DO</h1>
          <p className={classes.WhatWeDoBody}>FORCE is a platform for students to showcase their talents, skills, and creativity. We host events like Music Fests and Fresher's Day to celebrate student talents. We also organize technical events to enhance the skills of the students, fostering a dynamic community for students.</p>
        </div>
      </div>
    </>
  )
}

export default About;