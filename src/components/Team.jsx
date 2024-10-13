import React from 'react';
import { Link } from "react-router-dom";
import PRO_VC from '../assets/images/Faculties/2.png';
import Director from '../assets/images/Faculties/1.png';
import Faculty_1 from '../assets/images/Faculties/3.png';
import Faculty_2 from '../assets/images/Faculties/4.png';
import Faculty_3 from '../assets/images/Faculties/5.png';
import Faculty_4 from '../assets/images/Faculties/6.png';
import Faculty_5 from '../assets/images/Faculties/7.png';
import placeholder from '../assets/images/Team/PlaceHolder.png';
import President from '../assets/images/Team/1.png';
import VicePresident from '../assets/images/Team/2.png';
import Secretary from '../assets/images/Team/3.png';
import ViceSecretary from '../assets/images/Team/4.png';
import Treasurer from '../assets/images/Team/5.png';
import CoTreasurer from '../assets/images/Team/6.png';
import OrganizingHead from '../assets/images/Team/7.png';
import OrganizingCoordinator1 from '../assets/images/Team/8.png';
import OrganizingCoordinator2 from '../assets/images/Team/9.png';
import TechnicalCoordinator1 from '../assets/images/Team/12.png';
import TechnicalCoordinator2 from '../assets/images/Team/13.png';
import TechnicalCoordinator3 from '../assets/images/Team/14.png';
import DisciplinaryHead from '../assets/images/Team/15.png';
import DisciplinaryCoordinator1 from '../assets/images/Team/16.png';
import DisciplinaryCoordinator3 from '../assets/images/Team/18.png';
import DocumentationHead from '../assets/images/Team/19.png';
import DocumentationCoordinator from '../assets/images/Team/20.png';
import CulturalHead from '../assets/images/Team/21.png';
import instagram from "../assets/icons/instagram.svg"
import linkedin from "../assets/icons/linkedin.svg"
import twitter from "../assets/icons/twitter.svg"
import CardCarousel from "../components/CardCarousel";

const classes = {
    Container: 'flex flex-col items-center justify-center w-full xl:gap-10 lg:gap-8 md:gap-6 gap-4',
    MarqueeTitle: 'w-full font-HelveticaNeueMD sm:text-left text-center xl:text-shadow-3 md:text-3xl sm:text-2xl text-xl text-shadow-2',
    EventsHeader: "text-center xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD text-shadow-3",
    CardSectionContainer: "flex flex-col items-center justify-center w-full gap-8",
    CardContainer: "transition-all duration-300 ease-in-out",
    Card: "flex flex-col items-start justify-between sm:gap-4 gap-3 h-full bg-[#D9D9D9] border-2 border-[#AFAFAF] rounded-3xl lg:p-6 md:p-5 p-4 transition-all duration-300 ease-in-out hover:shadow-lg",
    CardHaderContainer: "flex flex-col items-start pl-4",
    CardHeader: "text-center xl:text-[26px] text-[22px] font-HelveticaNeueMD text-shadow-3",
    CardSubHeader: "text-center xl:text-[20px] text-[18px] leading-5 font-HelveticaNeueMD text-shadow-2",
    CardImageContainer: "w-full overflow-hidden xl:rounded-3xl rounded-2xl border-2 border-[#AFAFAF] transition-all duration-300 ease-in-out",
    CardImage: "w-full h-auto object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1",
    OBSocials: "pl-4 w-full flex items-center gap-4",
    OBSocialsLogo: "md:w-[36px] md:h-[36px] w-[28px] h-[28px] duration-200 ease-in-out transform hover:scale-110",
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
        { image: President, name: 'Varshika S B', designation: 'President' },
        { image: VicePresident, name: 'Jayasheel Vinay J', designation: 'Vice President' },
        { image: Secretary, name: 'Amruth M Acharya', designation: 'Secretary' },
        { image: ViceSecretary, name: 'C Sai Pratesh', designation: 'Vice Secretary' },
        { image: Treasurer, name: 'Prachi Jain', designation: 'Treasurer' },
        { image: CoTreasurer, name: 'Rishabh G', designation: 'Co-Treasurer' },
        { image: OrganizingHead, name: 'Charan P', designation: 'Organizing Head' },
        { image: OrganizingCoordinator1, name: 'Bhuvana', designation: 'Organizing Coordinator' },
        { image: OrganizingCoordinator2, name: 'Saniha Rai T', designation: 'Organizing Coordinator' },
        { image: placeholder, name: 'Abhishree S G', designation: 'Organizing Coordinator' },
        { image: placeholder, name: 'Siddique', designation: 'Technical Head' },
        { image: TechnicalCoordinator1, name: 'Chinmay R', designation: 'Technical Coordinator' },
        { image: TechnicalCoordinator2, name: 'Shreyas A', designation: 'Technical Coordinator' },
        { image: TechnicalCoordinator3, name: 'Rohith P', designation: 'Technical Coordinator' },
        { image: DisciplinaryHead, name: 'Vivek M A', designation: 'Disciplinary Head' },
        { image: DisciplinaryCoordinator1, name: 'Darshan R Jadhav', designation: 'Disciplinary Coordinator' },
        { image: placeholder, name: 'Abdul Shukoor M', designation: 'Disciplinary Coordinator' },
        { image: DisciplinaryCoordinator3, name: 'Pavan Prathyush R S', designation: 'Disciplinary Coordinator' },
        { image: DocumentationHead, name: 'Rhea Sanjay', designation: 'Documentation Head' },
        { image: DocumentationCoordinator, name: 'Janice Fenwick', designation: 'Documentation Coordinator' },
        { image: CulturalHead, name: 'Sreya K R', designation: 'Cultural Head' },
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
                                    <div className={classes.OBSocials}>
                                        <Link to={person.ig} className={classes.RegisterButton}>
                                            <button><img src={instagram} className={classes.OBSocialsLogo} alt="" /></button>
                                        </Link>
                                        <Link to={person.linkedin} className={classes.RegisterButton}>
                                            <button><img src={linkedin} className={classes.OBSocialsLogo} alt="" /></button>
                                        </Link>
                                        <Link to={person.twitter} className={classes.RegisterButton}>
                                            <button><img src={twitter} className={classes.OBSocialsLogo} alt="" /></button>
                                        </Link>
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
