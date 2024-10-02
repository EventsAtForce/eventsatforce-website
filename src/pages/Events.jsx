import React from "react";
import { Link } from "react-router-dom";
import StatisticsComponent from "../components/Statistics";
import CardCarousel from "../components/CardCarousel";

import Aarambha from "../assets/images/Events/Aarambha.png";
import TechnicalQuiz from "../assets/images/Events/TechnicalQuiz.png";
import Navotsava from "../assets/images/Events/Navotsava.png";
import Deepotsava from "../assets/images/Events/Deepotsava.png";
import Freshers from "../assets/images/Events/Freshers.png";
import TechnicalCompetition from "../assets/images/Events/TechnicalCompetition.png";
import Aavishkar from "../assets/images/Events/Aavishkar.png";
import Harmonics from "../assets/images/Events/Harmonics.png";
import Farewell from "../assets/images/Events/Farewell.png";

const eventsList = [
    {
        name: "Aarambha",
        date: "28th October 2024",
        image: Aarambha,
    },
    {
        name: "Technical Quiz",
        date: "TBD",
        image: TechnicalQuiz,
    },
    {
        name: 'Navotsava',
        date: "3rd October 2024",
        image: Navotsava,
        link: 'https://forms.gle/oKd2krpvxpeMibbCA',
    },
    {
        name: "Deepotsava",
        date: "30th October 2024",
        image: Deepotsava,
    },
    {
        name: "Fresher's Day",
        date: "TBD",
        image: Freshers,
    },
    {
        name: "Hackathon",
        date: "TBD",
        image: TechnicalCompetition,
    },
    {
        name: "Aavishkar",
        date: "TBD",
        image: Aavishkar,
    },
    {
        name: "Harmonics",
        date: "TBD",
        image: Harmonics,
    },
    {
        name: "Farewell",
        date: "TBD",
        image: Farewell,
    }
]

const classes = {
    EventsContainer: "flex flex-col items-center justify-center w-full h-full max-w-1440 sm:gap-[16px] gap-[0px] xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
    EventsHeader: "text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD text-shadow-3",
    CardSectionContainer: "flex flex-col items-center justify-center w-full gap-8",
    CardContainer: "transition-all duration-300 ease-in-out",
    Card: "flex flex-col items-center justify-between gap-2 h-full bg-[#D9D9D9] border-2 border-[#AFAFAF] rounded-3xl lg:p-6 md:p-5 p-6 transition-all duration-300 ease-in-out hover:shadow-lg",
    CardHaderContainer: "flex flex-col items-center justify-center",
    CardHeader: "text-center xl:text-3xl lg:text-[26px] text-2xl font-HelveticaNeueMD text-shadow-3",
    CardDate: "text-center text-lg leading-5 font-HelveticaNeueMD text-shadow-2",
    CardImageContainer: "w-full overflow-hidden xl:rounded-3xl rounded-2xl border-2 border-[#AFAFAF] transition-all duration-300 ease-in-out",
    CardImage: "w-full h-auto object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1",
    RegisterButton: "w-full flex items-center justify-center bg-[#D9D9D9] text-black font-HelveticaNeueBD text-lg p-2 md:rounded-2xl rounded-2xl border-2 border-[#AFAFAF] transition-colors duration-300 ease-in-out hover:bg-[#C0C0C0]",
};

const Events = () => {
    return (
        <div className={classes.EventsContainer}>
            <h1 className={classes.EventsHeader}>Upcoming Events</h1>
            <div className={classes.CardSectionContainer}>
                <CardCarousel>
                    {eventsList.map((event, index) => (
                        <div className={classes.CardContainer} key={index}>
                            <div className={classes.Card}>
                                <div className={classes.CardImageContainer}>
                                    <img className={classes.CardImage} src={event.image} alt={event.name} />
                                </div>
                                <div className={classes.CardHaderContainer}>
                                    <h1 className={classes.CardHeader}>{event.name}</h1>
                                    <h2 className={classes.CardDate}>{event.date}</h2>
                                </div>
                                <Link to={event.link} className={classes.RegisterButton}>
                                    <button>REGISTER</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </CardCarousel>
                <StatisticsComponent />
            </div>
        </div>
    );
};

export default Events;