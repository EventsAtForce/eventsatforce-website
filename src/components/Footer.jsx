import React from "react";
import REVA from "/assets/images/REVA_COLOR.webp";
import FORCE from "/assets/images/FORCE.webp";
import facebook from "/assets/icons/facebook.svg";
import instagram from "/assets/icons/instagram.svg";
import linkedin from "/assets/icons/linkedin.svg";
import twitter from "/assets/icons/twitter.svg";
import youtube from "/assets/icons/youtube.svg";
import github from "/assets/icons/github.svg";

const classes = {
  Footer: "flex flex-col  items-center justify center w-full bg-white mt-auto",
  FooterDivider: "w-full max-w-[1240px] h-0.5 bg-[#AFAFAF] rounded-xl",
  PreFooterContainer: "w-full max-w-1440 flex flex-col min-[900px]:flex-row items-center justify-around bg-white md:px-6 md:py-6 px-4 py-4",
  LogoContainer: "flex items-center justify-center gap-4",
  REVALogo: "xl:w-[220px] lg:w-[196px] md:w-[164px] min-[375px]:w-[190px] w-[160px]",
  FORCELogo: "xl:w-[86px] lg:w-[76px] md:w-[70px] min-[375px]:w-[70px] w-[60px]",
  LogoDivider: "max-h-[100px] lg:h-[88px] md:h-[68px] sm:h-[58px] min-[430px]:h-20 min-[375px]:h-16 min-[320px]:h-14 w-0.5 bg-[#AFAFAF] rounded-xl",
  SocialsContainer: "flex flex-col min-[500px]:flex-row items-center justify-center lg:gap-10 min-[500px]:gap-6 gap-4 lg:px-6 lg:py-8 md:px-4 md:py-4 sm:px-3 sm:py-3 px-[12px] py-[12px]",
  SocialsHeader: "font-HelveticaNeueMD lg:text-[24px] md:text-[20px] text-[16px] text-black",
  SocialsLink: "flex items-center justify-center gap-4",
  SocialsLogo: "lg:w-[36px] lg:h-[36px] md:w-[32px] md:h-[32px] w-[28px] h-[28px]",
  FooterContainer: "w-full max-w-1440 flex items-center justify-center md:px-6 md:py-6 px-4 py-4",
  FooterText: "font-HelveticaNeueMD lg:text-[16px] md:text-[14px] sm:text-sm text-[12px] text-black",
};

const quickLinks_1 = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Events",
    link: "/Events",
  },
  {
    name: "Societies",
    link: "/Societies",
  },
  {
    name: "Team",
    link: "/Team",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100090463154546",
    icon: facebook,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/eventsatforce/",
    icon: instagram,
  },
  {
    name: "Twitter",
    link: "https://x.com/EventsAtFORCE",
    icon: twitter,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@eventsatforce",
    icon: youtube,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/eventsatforce",
    icon: linkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/EventsAtForce/",
    icon: github,
  },
];

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterDivider}></div>
      <div className={classes.PreFooterContainer}>
        <div className={classes.LogoContainer}>
          <img className={classes.REVALogo} src={REVA} alt="" />
          <div className={classes.LogoDivider}></div>
          <img className={classes.FORCELogo} src={FORCE} alt="" />
        </div>
        <div className={classes.SocialsContainer}>
          <h1 className={classes.SocialsHeader}>Connect with us:</h1>
          <div className={classes.SocialsLink}>
            {socialLinks.map((links, index) => (
              <a href={links.link} target="_blank" rel="noreferrer" key={index}>
                <img
                  className={classes.SocialsLogo}
                  src={links.icon}
                  alt={links.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.FooterDivider}></div>
      <div className={classes.FooterContainer}>
        <p className={classes.FooterText}>© 2024 FORCE. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
