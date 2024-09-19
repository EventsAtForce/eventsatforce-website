import React from 'react';
import Pro_vc from '../assets/images/teachers/2.png';
import director from '../assets/images/teachers/1.png';
import Jayadeva from '../assets/images/teachers/3.png';
import Neetu from '../assets/images/teachers/4.png';
import Anitha from '../assets/images/teachers/5.png';
import Sarfraz from '../assets/images/teachers/6.png';
import Bharath from '../assets/images/teachers/7.png';
import team from '../assets/images/team/8.png';


const classes = {
    Container: 'flex flex-col items-center justify-center xl:gap-4 lg:gap-4 md:gap-4 gap-8 w-full h-full max-w-1440 xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4',
    TeamHeader: 'w-full font-HelveticaNeueBD text-center xl:text-4xl xl:text-shadow-3 md:text-3xl sm:text-2xl text-shadow-2 mb-2 xl:max-w-[1200px] pt-2',
    TeachersCardContainer: 'grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 items-center',
    TeacherHeader: 'w-auto font-HelveticaNeueMD text-center xl:text-3xl xl:text-shadow-3 md:text-2xl sm:text-2xl text-shadow-2 mb-4',
    TeachersCard: 'flex flex-col ',
    TeacherImageContainer: 'w-full h-72 relative ',
    TeacherImage: 'w-full h-full object-cover rounded-2xl transition duration-300 ease-in-out delay-100 hover:translate-y-[-10px]',
    TeacherDetailsContainer: 'p-4',
    TeacherName: 'font-bold',
    TeacherDesignation: 'text-gray-500',
    obs: 'flex flex-col max-w-[1200px] pt-4 gap-2',
    obsTitle: 'w-full font-HelveticaNeueMD text-left xl:text-3xl xl:text-shadow-3 md:text-2xl sm:text-2xl text-shadow-2 mb-4',
    obsCardsContainer: 'relative overflow-hidden',
    obsCards: 'flex animate-marquee gap-[12px]',
    obsCard: 'flex flex-col min-w-[170px]',
    obsCardImageContainer: 'w-full h-72 relative',
    obsCardImage: 'w-full h-full object-cover rounded-2xl ',
    obsCardDetailsContainer: 'p-4',
    obsCardName: 'font-bold',
    obsCardDesignation: 'text-gray-500',
};

// CSS for the seamless marquee animation
const styles = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); } /* Moves the entire container's width */
}
.animate-marquee {
  display: flex;
  animation: marquee 20s linear infinite; /* Adjust speed by changing duration */
}
`;

const Team = () => {
    const teacherData = [
        { image: Pro_vc, name: 'Dr RC Biradar', designation: 'Pro VC' },
        { image: director, name: 'Dr KM Sudarshan', designation: 'Director' },
        { image: Jayadeva, name: 'Dr. T S Jayadeva', designation: 'Professor' },
        { image: Neetu, name: 'Neetu KN', designation: 'Assistant Professor' },
        { image: Anitha, name: 'Anitha Kumari RD', designation: 'Assistant Professor' },
        { image: Sarfraz, name: 'Dr Sarfraz Hussain', designation: 'Assistant Professor' },
        { image: Bharath, name: 'Dr Bharath KP', designation: 'Assistant Professor' },
    ];

    const officeBearersData = [
        { image: team, name: 'Member 1', designation: 'President' },
        { image: team, name: 'Member 2', designation: 'Vice President' },
        { image: team, name: 'member 3', designation: 'Secretary' },
        { image: team, name: 'Member 4', designation: 'Treasurer' },
        { image: team, name: 'Member 5', designation: 'Member' },
        { image: team, name: 'Member 6', designation: 'Member' },
        { image: team, name: 'Member 7', designation: 'Member' },
        { image: team, name: 'Member 1', designation: 'President' },
        { image: team, name: 'Member 2', designation: 'Vice President' },
        { image: team, name: 'member 3', designation: 'Secretary' },
        { image: team, name: 'Member 4', designation: 'Treasurer' },
        { image: team, name: 'Member 5', designation: 'Member' },
        { image: team, name: 'Member 6', designation: 'Member' },
        { image: team, name: 'Member 7', designation: 'Member' },

    ];
    const teamMembersData = [
        { image: team, name: 'Member 1', designation: 'President' },
        { image: team, name: 'Member 2', designation: 'Vice President' },
        { image: team, name: 'member 3', designation: 'Secretary' },
        { image: team, name: 'Member 4', designation: 'Treasurer' },
        { image: team, name: 'Member 5', designation: 'Member' },
        { image: team, name: 'Member 6', designation: 'Member' },
        { image: team, name: 'Member 7', designation: 'Member' },
        { image: team, name: 'Member 1', designation: 'President' },
        { image: team, name: 'Member 2', designation: 'Vice President' },
        { image: team, name: 'member 3', designation: 'Secretary' },
        { image: team, name: 'Member 4', designation: 'Treasurer' },
        { image: team, name: 'Member 5', designation: 'Member' },
        { image: team, name: 'Member 6', designation: 'Member' },
        { image: team, name: 'Member 7', designation: 'Member' },
    ];


    return (
        <div className={classes.Container}>
            <style>{styles}</style> {/* Adding the marquee animation */}
            {/* Teacher Coordinators Section */}
            <div className={classes.TeamHeader}>OUR TEAM</div>
            <div className={classes.TeacherHeader}>TEACHER COORDINATORS</div>
            <div className={classes.TeachersCardContainer}>
                {teacherData.map((teacher, index) => (
                    <div key={index} className={classes.TeachersCard}>
                        <div className={classes.TeacherImageContainer}>
                            <img src={teacher.image} alt={teacher.name} className={classes.TeacherImage} />
                        </div>
                        <div className={classes.TeacherDetailsContainer}>
                            <h3 className={classes.TeacherName}>{teacher.name}</h3>
                            <p className={classes.TeacherDesignation}>{teacher.designation}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Office Bearers Section */}
            <div className={classes.obs}>
                <div className={classes.obsTitle}>OFFICE BEARERS</div>
                <div className={classes.obsCardsContainer}>
                    <div className={classes.obsCards}>
                        {/* Duplicating the officeBearersData to create a continuous scrolling effect */}
                        {[...officeBearersData, ...officeBearersData].map((member, index) => (
                            <div key={index} className={classes.obsCard}>
                                <div className={classes.obsCardImageContainer}>
                                    <img src={member.image} alt={member.name} className={classes.obsCardImage} />
                                </div>
                                <div className={classes.obsCardDetailsContainer}>
                                    <h3 className={classes.obsCardName}>{member.name}</h3>
                                    <p className={classes.obsCardDesignation}>{member.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={classes.obs}>
                <div className={classes.obsTitle}>TEAM MEMBERS</div>
                <div className={classes.obsCardsContainer}>
                    <div className={classes.obsCards}>

                        {[...teamMembersData, ...teamMembersData].map((member, index) => (
                            <div key={index} className={classes.obsCard}>
                                <div className={classes.obsCardImageContainer}>
                                    <img src={member.image} alt={member.name} className={classes.obsCardImage} />
                                </div>
                                <div className={classes.obsCardDetailsContainer}>
                                    <h3 className={classes.obsCardName}>{member.name}</h3>
                                    <p className={classes.obsCardDesignation}>{member.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
