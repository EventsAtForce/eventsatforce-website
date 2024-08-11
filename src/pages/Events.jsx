import React from "react";
import { Link } from "react-router-dom";
import StatisticsComponent from "../components/Statistics";
import CardCarousel from "../components/CardCarousel";

const classes = {
  EventsContainer: "flex flex-col items-center justify-center w-full h-full max-w-1440 xl:gap-[40px] lg:gap-[36px] md:gap-[32px] sm:gap-[28px] gap-[4px] xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  EventsHeader: "text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD text-shadow-3",
  Card: "flex flex-col items-center justify-between gap-2  h-full bg-[#D9D9D9] border border-[#AFAFAF] xl:rounded-3xl md:rounded-2xl rounded-xl lg:p-6 md:p-5 p-6",
  CardHaderContainer: "flex flex-col items-center justify-center",
  CardHeader: "text-center xl:text-3xl lg:text-[26px] text-2xl font-HelveticaNeueMD text-shadow-3",
  CardDate: "text-center text-lg font-HelveticaNeueMD text-shadow-2",
  CardImage: "w-full h-auto object-cover borde2 border-[#AFAFAF] xl:rounded-3xl md:rounded-2xl rounded-xl",
  RegisterButton: "w-full flex items-center justify-center bg-[#D9D9D9] text-black font-HelveticaNeueBD text-lg p-2 md:rounded-2xl rounded-xl border-2 border-[#AFAFAF]",
};

const Events = () => {
  return (
    <div className={classes.EventsContainer}>
      <h1 className={classes.EventsHeader}>Upcoming Events</h1>
      <CardCarousel>
        {eventsList.map((event, index) => (
          <div className={classes.CardContainer} key={index}>
            <div className={classes.Card}>
              <div className={classes.CardHaderContainer}>
                <h1 className={classes.CardHeader}>{event.name}</h1>
                <h2 className={classes.CardDate}>{event.date}</h2>
              </div>
              <img className={classes.CardImage} src={event.image} alt="" />
              <Link to={event.link} className={classes.RegisterButton}>
                  <button>REGISTER</button>
                </Link>
            </div>
          </div>
        ))}
      </CardCarousel>
      <StatisticsComponent />
    </div>
  );
};

export default Events;


const eventsList = [
  {
    name: "Aarambha",
    date: "12th September 2024",
    image: "src/assets/images/Events/Aarambha.png",
  },
  {
    name: "Technical Quiz",
    date: "27th September 2024",
    image: "src/assets/images/Events/TechnicalQuiz.png",
  },
  {
    name: 'Navotsava',
    date: "9th October 2024",
    image: "src/assets/images/Events/Navotsava.png",
  },
  {
    name: "Deepotsava",
    date: "30th October 2024",
    image: "src/assets/images/Events/Deepotsava.png",
  },
  {
    name: "Fresher's Day",
    date: "09th November 2024",
    image: "src/assets/images/Events/Freshers.png",
  },
  {
    name: "Hackathon",
    date: "08th March 2025",
    image: "src/assets/images/Events/TechnicalCompetition.png",
  },
  {
    name: "Aavishkar",
    date: "22nd April 2025",
    image: "src/assets/images/Events/Aavishkar.png",
  },
  {
    name: "Harmonics",
    date: "23rd April 2025",
    image: "src/assets/images/Events/Harmonics.png",
  },
  {
    name: "Farewell",
    date: "06th May 2025",
    image: "src/assets/images/Events/Farewell.png",
  }
]