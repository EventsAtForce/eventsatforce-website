import React from 'react';
import { Link } from "react-router-dom";
import PRO_VC from '../assets/images/Faculties/2.png';
import Director from '../assets/images/Faculties/1.png';
import Faculty_1 from '../assets/images/Faculties/3.png';
import Faculty_2 from '../assets/images/Faculties/4.png';
import Faculty_3 from '../assets/images/Faculties/5.png';
import Faculty_4 from '../assets/images/Faculties/6.png';
import Faculty_5 from '../assets/images/Faculties/7.png';
import placeholder from '../assets/images/team/PlaceHolder.png';
import CardCarousel from "../components/CardCarousel";

const classes = {
    Container: 'flex flex-col items-center justify-center xl:gap-6 lg:gap-4 md:gap-2 gap-1 w-full h-full max-w-1440 xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4',
    MarqueeTitle: 'w-full font-HelveticaNeueMD sm:text-left text-center xl:text-shadow-3 md:text-3xl sm:text-2xl text-xl text-shadow-2',
    EventsHeader: "text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD text-shadow-3",
    CardSectionContainer: "flex flex-col items-center justify-center w-full gap-8",
    CardContainer: "transition-all duration-300 ease-in-out",
    Card: "flex flex-col items-start justify-between sm:gap-4 gap-3 h-full bg-[#D9D9D9] border-2 border-[#AFAFAF] rounded-3xl lg:p-6 md:p-5 p-6 transition-all duration-300 ease-in-out hover:shadow-lg",
    CardHaderContainer: "flex flex-col items-start pl-4",
    CardHeader: "text-center xl:text-[26px] lg:text-[18px] text-xl font-HelveticaNeueMD text-shadow-3",
    CardSubHeader: "text-center text-lg leading-5 font-HelveticaNeueMD text-shadow-2",
    CardImageContainer: "w-full overflow-hidden xl:rounded-3xl rounded-2xl border-2 border-[#AFAFAF] transition-all duration-300 ease-in-out",
    CardImage: "w-full h-auto object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1",
};

const Team = () => {
    const facultyData = [
        { image: PRO_VC, name: 'Dr. RC Biradar', designation: 'Pro VC, REVA University'},
        { image: Director, name: 'Dr. KM Sudharshan', designation: 'Director, School of ECE'},
        { image: Faculty_1, name: 'Dr. T S Jayadeva', designation: 'Professor, School of ECE' },
        { image: Faculty_2, name: 'Prof. Neethu KN', designation: 'Assistant Professor' },
        { image: Faculty_5, name: 'Dr. Bharath KP', designation: 'Assistant Professor' },
        { image: Faculty_3, name: 'Prof. Anitha Kumari', designation: 'Assistant Professor' },
        { image: Faculty_4, name: 'Dr. Sarfaraz Hussain', designation: 'Assistant Professor' },     
    ];

    const officeBearersData = [
        { image: placeholder, name: 'Varshika S B', designation: 'President' },
        { image: placeholder, name: 'Jayasheel Vinay J', designation: 'Vice President' },
        { image: placeholder, name: 'Amruth M Acharya', designation: 'Secretary' },
        { image: placeholder, name: 'C Sai Pratesh', designation: 'Vice Secretary' },
        { image: placeholder, name: 'Prachi Jain', designation: 'Treasurer' },
        { image: placeholder, name: 'Rishabh G', designation: 'Co-Treasurer' },
        { image: placeholder, name: 'Charan P', designation: 'Organizing Head' },
        { image: placeholder, name: 'Bhuvana', designation: 'Organizing Coordinator' },
        { image: placeholder, name: 'Saniha Rai T', designation: 'Organizing Coordinator' },
        { image: placeholder, name: 'Abhishree S G', designation: 'Organizing Coordinator' },
        { image: placeholder, name: 'Shaik Shahid Siddique', designation: 'Technical Head' },
        { image: placeholder, name: 'Chinmay R', designation: 'Technical Coordinator' },
        { image: placeholder, name: 'Shreyas A', designation: 'Technical Coordinator' },
        { image: placeholder, name: 'Rohith P', designation: 'Technical Coordinator' },
        { image: placeholder, name: 'Vivek M A', designation: 'Disciplinary Head' },
        { image: placeholder, name: 'Darshan R Jadhav', designation: 'Disciplinary Coordinator' },
        { image: placeholder, name: 'Abdul Shukoor M', designation: 'Disciplinary Coordinator' },
        { image: placeholder, name: 'Pavan Prathyush R S', designation: 'Disciplinary Coordinator' },
        { image: placeholder, name: 'Rhea Sanjay', designation: 'Documentation Head' },
        { image: placeholder, name: 'Janice Fenwick', designation: 'Documentation Coordinator' },
        { image: placeholder, name: 'Sreya K R', designation: 'Cultural Head' },
        { image: placeholder, name: 'Kushala T S', designation: 'Cultural Coordinator' },
        { image: placeholder, name: 'Mahesh', designation: 'Cultural Coordinator' },
    ];

    return (
        <div className={classes.Container}>
            <div>
                <p className={classes.MarqueeTitle}>FACULTY COORDINATORS</p>
                <div className={classes.CardSectionContainer}>
                    <CardCarousel>
                        {facultyData.map((person, index) => (
                            <div className={classes.CardContainer} key={index}>
                                <div className={classes.Card}>
                                    <div className={classes.CardImageContainer}>
                                        <img className={classes.CardImage} src={person.image} alt={person.name} />
                                    </div>
                                    <div className={classes.CardHaderContainer}>
                                        <h1 className={classes.CardHeader}>{person.name}</h1>
                                        <h2 className={classes.CardSubHeader}>{person.designation}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardCarousel>
                </div>
            </div>
            
            <div>
                <p className={classes.MarqueeTitle}>OFFICE BEARERS</p>
                <div className={classes.CardSectionContainer}>
                    <CardCarousel>
                        {officeBearersData.map((person, index) => (
                            <div className={classes.CardContainer} key={index}>
                                <div className={classes.Card}>
                                    <div className={classes.CardImageContainer}>
                                        <img className={classes.CardImage} src={person.image} alt={person.name} />
                                    </div>
                                    <div className={classes.CardHaderContainer}>
                                        <h1 className={classes.CardHeader}>{person.name}</h1>
                                        <h2 className={classes.CardSubHeader}>{person.designation}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardCarousel>
                </div>
            </div>
        </div>
    );
};

export default Team;
