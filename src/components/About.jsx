import React, { useEffect, useRef } from 'react';
import IMG_1 from '../assets/images/IMG_1.png';
import IMG_2 from '../assets/images/IMG_2.png';
import './About.css';

const classes = {
  Container: 'flex flex-col items-center gap-[60px] mt-10 w-full px-10',
  Section: 'flex flex-col min-[900px]:flex-row items-center justify-between gap-[40px] w-full',
  TextContainer: 'flex flex-col items-start gap-5 w-full max-w-[600px]',
  Header: 'font-HelveticaNeueBD text-center min-[900px]:text-left xl:text-4xl md:text-3xl text-2xl',
  Body: 'font-HelveticaNeue text-justify xl:text-2xl md:text-xl text-lg',
  ImageContainer: 'w-full max-w-[500px] image-container',
  Image: 'object-cover w-full rounded-2xl image-slide-in',
};

const About = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (img1Ref.current) observer.observe(img1Ref.current);
    if (img2Ref.current) observer.observe(img2Ref.current);

    return () => {
      if (img1Ref.current) observer.unobserve(img1Ref.current);
      if (img2Ref.current) observer.unobserve(img2Ref.current);
    };
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.Section}>
        <div className={classes.TextContainer}>
          <h1 className={classes.Header}>ABOUT US</h1>
          <p className={classes.Body}>
            FORCE-Forum Of REVA for Communication and Electronics, established in 2012, is a vibrant 
            community exclusively for the students and faculty of School of Electronics and Communication 
            Engineering, REVA University, Bengaluru.
          </p>
        </div>
        <div className={classes.ImageContainer}>
          <img 
            ref={img1Ref}
            className={`${classes.Image} from-right`}
            src={IMG_1} 
            alt="AARAMBHA-2023 Event" 
          />
        </div>
      </div>

      <div className={classes.Section}>
        <div className={classes.ImageContainer}>
          <img 
            ref={img2Ref}
            className={`${classes.Image} from-left`}
            src={IMG_2} 
            alt="Harmonics Music Festival" 
          />
        </div>
        <div className={classes.TextContainer}>
          <h1 className={classes.Header}>WHAT WE DO</h1>
          <p className={classes.Body}>
            We organize vibrant cultural and technical events, fostering a dynamic community for students and faculty of REVA University. 
            Join us to connect with like-minded individuals, and be part of innovative initiatives shaping the future!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;