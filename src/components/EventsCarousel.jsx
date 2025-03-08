import React from "react";
import { Link } from 'react-router-dom';
import CardCarousel from "../components/CardCarousel";
import AnimeQuiz from "/assets/images/Events/AnimeQuiz.webp";
import EscapeRoom from "/assets/images/Events/EscapeRoom.webp";
import TugOfWar from "/assets/images/Events/TugOfWar.webp";
import Cooking from "/assets/images/Events/Cooking.webp";
import TresureHunt from "/assets/images/Events/Tresure.webp";
import FashionShow from "/assets/images/Events/FashionShow.webp";
import DanceOff from "/assets/images/Events/DanceOff.webp";
import Singing from "/assets/images/Events/Singing.webp";
import BattleOfBands from "/assets/images/Events/BattleOfBands.webp";

const classes = {
    EventsCard: 'flex flex-col items-center justify-center w-full h-full',
    UpcomingEvents: 'text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueMD text-shadow-3',
    UpcomingEventsCard: 'flex flex-row items-center justify-center w-full h-full max-w-1440 sm:gap-[16px] gap-[0px]',
    EventCard: 'flex flex-col items-center justify-center h-full bg-[#D9D9D9] border-2 border-[#AFAFAF] rounded-3xl md:mb-4 shadow-lg p-4',
    eventDescription: 'flex flex-row gap-6 mt-2',
    eventName: 'text-lg font-HelveticaNeueBD mt-[4px] leading-tight',
    datebox: 'flex flex-col items-center justify-center mt-2 ml-4 -mr-2 ',
    month: 'text-lg font-HelveticaNeueBD -mb-2',
    date: 'text-xl font-HelveticaNeueBD w-8 text-center ',
    eventDetails: 'flex flex-col items-start justify-start -ml-2 mt-[4px]',
    eventText: ' text-[13px] font-HelveticaNeue text-left leading-tight',
}

const events = [
    {
        EventName: 'Anime Quiz',
        EventDate: '02',
        EventMonth: 'Apr',
        EventImg: AnimeQuiz,
        EventDescription: 'Test your anime knowledge in this fun and competitive quiz! ',
        link: 'https://forms.gle/sHPuDKJSMcyCGZoG6',
    },
    {
        EventName: 'Escape Room',
        EventDate: '02',
        EventMonth: 'Apr',
        EventImg: EscapeRoom,
        EventDescription: 'Solve puzzles, crack codes, and race against time! ',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',
    },
    {
        EventName: "Tug Of War",
        EventDate: '02',
        EventMonth: 'Apr',
        EventImg: TugOfWar,
        EventDescription: 'Strength, teamwork, and determination are key! ',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',
    },
    {
        EventName: 'Cooking W/o Fire',
        EventDate: '02',
        EventMonth: 'Apr',
        EventImg: Cooking,
        EventDescription: 'Whip up delicious treats without using flames! ',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',
    },
    {
        EventName: 'Tresure Hunt',
        EventDate: '02',
        EventMonth: 'Apr',
        EventImg: TresureHunt,
        EventDescription: 'Follow the clues, solve the riddles, and race to the finish!',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',

    },
    {
        EventName: 'Fashion Show',
        EventDate: '03',
        EventMonth: 'Apr',
        EventImg: FashionShow,
        EventDescription: 'Walk the runway in style! ',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',

    },
    {
        EventName: 'Dance off',
        EventDate: '03',
        EventMonth: 'Apr',
        EventImg: DanceOff,
        EventDescription: ' Bring your best moves to the floor!',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',

    },
    {
        EventName: 'Singing & Instrumental',  
        EventDate: '04',
        EventMonth: 'Apr',
        EventImg: Singing,
        EventDescription: 'Let your voice or instrument do the talking!',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',

    },
    {
        EventName: 'Battle Of Bands',
        EventDate: '04',
        EventMonth: 'Apr',
        EventImg: BattleOfBands,
        EventDescription: 'Let the stage ignite with electrifying performances! ',
        link:'https://forms.gle/sHPuDKJSMcyCGZoG6',

    },
]

const EventsCarousel = () => {
    return (
        <div className={classes.EventsCard}>
            <div className={classes.UpcomingEvents}>Registrations Open for Harmonics '25!</div>
            <div className={classes.UpcomingEventsCard}>
                <CardCarousel>
                    {events.map((event, index) => (
                        <div key={index} className={classes.EventCard}>
                            <Link to={event.link} target="_blank">
                                <img src={event.EventImg} alt={event.EventName} className='h-40 w-full object-cover rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-xl hover:-translate-y-1' />
                            </Link>
                            <div className={classes.eventDescription}>
                                <div className={classes.datebox}>
                                    <p className={classes.month}>{event.EventMonth}</p>
                                    <p className={classes.date}>{event.EventDate}</p>
                                </div>
                                <div className='line h-16 w-[4px] rounded-2xl bg-black mt-3'></div>
                                <div className={classes.eventDetails}>
                                    <p className={classes.eventName}>{event.EventName}</p>
                                    <p className={classes.eventText}>{event.EventDescription}</p>
                                </div>
                            </div>
                            <button className="font-HelveticaNeueMD w-full h-12 mt-2 bg-[#D9D9D9] border-2 border-[#AFAFAF] rounded-2xl transition-all duration-300 ease-in-out transform  hover:bg-[#C0C0C0]"><a href={event.link} className="w-full h-full" target="_blank">Register Now!</a></button>
                        </div>
                    ))}
                </CardCarousel>
            </div>
        </div>
    )
}

export default EventsCarousel;