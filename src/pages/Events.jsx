import React from "react";
import StatisticsComponent from "../components/Statistics";
import EventsCarousel from "../components/EventsCarousel";

import Aarambha from "/assets/images/Events/Aarambha1.webp";
import TechnicalQuiz from "/assets/images/Events/TechnicalQuiz.webp";
import Navotsava from "/assets/images/Events/Navothsava.webp";
import Deepotsava from "/assets/images/Events/Deepotsava1.webp";
import Freshers from "/assets/images/Events/Freshers1.webp";

const classes = {
    EventsCard: 'flex flex-col items-center justify-center  w-full h-full max-w-1440 sm:gap-[16px] gap-[0px] xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4',
    UpcomingEvents: 'text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD text-shadow-3 -mb-4',
    UpcomingEventsCard: 'flex flex-row items-center justify-center bg-white w-full h-full max-w-1440 sm:gap-[16px] gap-[0px]',
    EventCard: 'flex flex-col items-center bg-white justify-center  md: mb-4 rounded-lg shadow-lg p-4',
    eventDescription: 'flex flex-row gap-6 mt-2',
    eventName: 'text-lg font-HelveticaNeueBD mt-[4px]',
    datebox: 'flex flex-col items-center justify-center mt-2 ml-4 -mr-2 ',
    month: 'text-lg font-HelveticaNeueBD -mb-2',
    date: 'text-xl font-HelveticaNeueBD w-8 text-center ',
    eventDetails: 'flex flex-col items-start justify-start -ml-2 mt-[4px]',
    eventText: ' text-[13px] font-HelveticaNeue text-left leading-tight',
}

const events = [
    {
        EventName: 'Navotsava',
        EventDate: '03',
        EventMonth: 'Oct',
        EventImg: Navotsava,
        EventDescription: 'Enjoy the festival of Navratri with us!',
        link: 'https://forms.gle/oKd2krpvxpeMibbCA',
    },
    {
        EventName: 'Aarambha',
        EventDate: '04',
        EventMonth: 'Nov',
        EventImg: Aarambha,
        EventDescription: 'Inaugration of Force for the year 2024-25',
    },
    {
        EventName: "Fresher's Day",
        EventDate: '04',
        EventMonth: 'Nov',
        EventImg: Freshers,
        EventDescription: 'Welcoming the new batch of 2024-2028',
    },
    {
        EventName: 'Deepotsava',
        EventDate: '30',
        EventMonth: 'Oct',
        EventImg: Deepotsava,
        EventDescription: 'Celebrating the festival of lights',
    },
    {
        EventName: 'Technical Quiz',
        EventDate: '',
        EventMonth: '',
        EventImg: TechnicalQuiz,
        EventDescription: 'Get ready to test your technical knowledge',
    },
]
const Events = () => {
    return (
        <div className={classes.EventsCard}>
            <EventsCarousel />
            <StatisticsComponent />
        </div>
    )
}

export default Events;