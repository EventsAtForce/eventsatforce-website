import React from 'react';
import { Link } from "react-router-dom";
import PRO_VC from '../../public/assets/images/Faculties/2.webp';
import Director from '../../public/assets/images/Faculties/1.webp';
import Faculty_1 from '../../public/assets/images/Faculties/3.webp';
import Faculty_2 from '../../public/assets/images/Faculties/4.webp';
import Faculty_3 from '../../public/assets/images/Faculties/5.webp';
import Faculty_4 from '../../public/assets/images/Faculties/6.webp';
import Faculty_5 from '../../public/assets/images/Faculties/7.webp';
import placeholder from '../../public/assets/images/Team/PlaceHolder.webp';
import President from '../../public/assets/images/Team/1.webp';
import VicePresident from '../../public/assets/images/Team/2.webp';
import Secretary from '../../public/assets/images/Team/3.webp';
import ViceSecretary from '../../public/assets/images/Team/4.webp';
import Treasurer from '../../public/assets/images/Team/5.webp';
import CoTreasurer from '../../public/assets/images/Team/6.webp';
import OrganizingHead from '../../public/assets/images/Team/7.webp';
import OrganizingCoordinator1 from '../../public/assets/images/Team/8.webp';
import OrganizingCoordinator2 from '../../public/assets/images/Team/9.webp';
import OrganizingCoordinator3 from '../../public/assets/images/Team/22.webp';
import TechnicalHead from '../../public/assets/images/Team/25.webp';
import TechnicalCoordinator1 from '../../public/assets/images/Team/12.webp';
import TechnicalCoordinator2 from '../../public/assets/images/Team/13.webp';
import TechnicalCoordinator3 from '../../public/assets/images/Team/14.webp';
import DisciplinaryHead from '../../public/assets/images/Team/15.webp';
import DisciplinaryCoordinator1 from '../../public/assets/images/Team/16.webp';
import DisciplinaryCoordinator3 from '../../public/assets/images/Team/18.webp';
import DocumentationHead from '../../public/assets/images/Team/19.webp';
import DocumentationCoordinator from '../../public/assets/images/Team/20.webp';
import CulturalHead from '../../public/assets/images/Team/21.webp';
import CulturalCoordinator1 from '../../public/assets/images/Team/23.webp';
import CulturalCoordinator2 from '../../public/assets/images/Team/24.webp';
import instagram from "../../public/assets/icons/instagram.svg"
import linkedin from "../../public/assets/icons/linkedin.svg"
import twitter from "../../public/assets/icons/twitter.svg"
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
    CardSubHeader: "text-center xl:text-[18px] text-[14px] leading-5 font-HelveticaNeue text-shadow-2",
    CardImageContainer: "w-full overflow-hidden xl:rounded-3xl rounded-2xl border-2 border-[#AFAFAF] transition-all duration-300 ease-in-out",
    CardImage: "w-full h-auto object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-translate-y-1",
    OBSocials: "pl-4 w-full flex items-center gap-4",
    OBSocialsLogo: "md:w-[36px] md:h-[36px] w-[28px] h-[28px] duration-200 ease-in-out transform hover:scale-110",
};

const Team = () => {
    const facultyData = [

        { image: Faculty_1, name: 'Dr. T S Jayadeva', designation: 'Professor, School of ECE' },
        { image: Faculty_2, name: 'Prof. Neethu KN', designation: 'Assistant Professor' },
        { image: Faculty_5, name: 'Dr. Bharath KP', designation: 'Assistant Professor' },
        { image: Faculty_3, name: 'Prof. Anitha Kumari', designation: 'Assistant Professor' },
        { image: Faculty_4, name: 'Dr. Sarfaraz Hussain', designation: 'Assistant Professor' },
    ];

    const officeBearersData = [
        {
            image: President,
            name: 'Varshika S B',
            designation: 'President',
            ig: 'https://www.instagram.com/_varshika.03/',
            linkedin: 'https://www.linkedin.com/in/varshika-sb-94082b25b/',
            twitter: 'https://x.com/SbVarshika/',
        },
        {
            image: VicePresident,
            name: 'Jayasheel Vinay J',
            designation: 'Vice President',
            ig: 'https://www.instagram.com/jayasheel.vinay/',
            linkedin: 'https://www.linkedin.com/in/jayasheelvinayj/',
            twitter: 'https://x.com/JayasheelVinay/',
        },
        {
            image: Secretary,
            name: 'Amruth M Acharya',
            designation: 'Secretary',
        },
        {
            image: ViceSecretary,
            name: 'C Sai Pratesh',
            designation: 'Vice Secretary',
        },
        {
            image: Treasurer,
            name: 'Prachi Jain',
            designation: 'Treasurer',
            ig: 'https://www.instagram.com/__prachijain_/',
            linkedin: 'https://www.linkedin.com/in/prachi-k-jain-631417290/',
        },
        {
            image: CoTreasurer,
            name: 'Rishabh G',
            designation: 'Co-Treasurer',
            ig: 'https://www.instagram.com/rishabh_gopakumar/',
            linkedin: 'https://www.linkedin.com/in/rishabh-gopakumar-421752250/',
        },
        {
            image: OrganizingHead,
            name: 'Charan P',
            designation: 'Organizing Head',
            ig: 'https://www.instagram.com/charan_4806/',
            linkedin: 'https://www.linkedin.com/in/charan-puttabasavaraju-1945132b2/',
        },
        {
            image: OrganizingCoordinator1,
            name: 'Bhuvana',
            designation: 'Organizing Coordinator',
            ig: 'https://www.instagram.com/bhuvana_612/',
            linkedin: 'https://www.linkedin.com/in/bhuvana-b-002441237',
        },
        {
            image: OrganizingCoordinator2,
            name: 'Saniha Rai T',
            designation: 'Organizing Coordinator',
            ig: 'https://www.instagram.com/saniha__rai',
            linkedin: 'https://www.linkedin.com/in/saniha-rai-t-235439285',
        },
        {
            image: OrganizingCoordinator3,
            name: 'Abhishree S G',
            designation: 'Organizing Coordinator'
        },
        {
            image: TechnicalHead,
            name: ' Shaik S Siddique',
            designation: 'Technical Head'
        },
        {
            image: TechnicalCoordinator1,
            name: 'Chinmay R',
            designation: 'Technical Coordinator'
        },
        {
            image: TechnicalCoordinator2,
            name: 'Shreyas A',
            designation: 'Technical Coordinator',
            ig: 'https://www.instagram.com/_shreyas99',
            linkedin: 'https://www.linkedin.com/in/shreyas-ananth-373a73250',
        },
        {
            image: TechnicalCoordinator3,
            name: 'Rohith P',
            designation: 'Technical Coordinator',
            ig: 'https://www.instagram.com/rohith26_/',
            linkedin: 'https://www.linkedin.com/in/rohith-p-a5627a296',
            twitter: 'https://x.com/Rohith26_',
        },
        {
            image: DisciplinaryHead,
            name: 'Vivek M A',
            designation: 'Disciplinary Head',
            ig: 'https://www.instagram.com/halfvivek',
            linkedin: 'https://www.linkedin.com/in/vivek-m-a-7594b924b',
        },
        {
            image: DisciplinaryCoordinator1,
            name: 'Darshan R Jadhav',
            designation: 'Disciplinary Coordinator'
        },

        {
            image: DisciplinaryCoordinator3,
            name: 'Pavan Prathyush',
            designation: 'Disciplinary Coordinator'
        },
        {
            image: DocumentationHead,
            name: 'Rhea Sanjay',
            designation: 'Documentation Head',
            ig: 'https://www.instagram.com/rhea_sanjay',
            linkedin: 'http://www.linkedin.com/in/rhea-sanjay',
        },
        {
            image: DocumentationCoordinator,
            name: 'Janice Fenwick',
            designation: 'Documentation Coordinator'
        },
        {
            image: CulturalHead,
            name: 'Sreya K R',
            designation: 'Cultural Head',
            ig: 'https://www.instagram.com/sreyaarav',
            linkedin: 'https://www.linkedin.com/in/sreya-ravindran-961293305',
        },
        {
            image: CulturalCoordinator2,
            name: 'Kushala T S',
            designation: 'Cultural Coordinator'
        },
        {
            image: CulturalCoordinator1,
            name: 'Mahesh',
            designation: 'Cultural Coordinator'
        },
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
