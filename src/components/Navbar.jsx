import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/LOGO.svg'

const navItems = [
  {
    name: 'HOME',
    link: '/'
  },
  {
    name: 'ABOUT',
    link: '/About'
  },
  {
    name: 'EVENTS',
    link: '/Events'
  },
  // {
  //   name: 'HARMONICS',
  //   link: '/Harmonics'
  // },
  {
    name: 'SOCIETIES',
    link: '/Societies'
  },
  {
    name: 'TEAM',
    link: '/Team'
  }
]

const classes = {
  NavContainer: 'flex flex-col items-center justify-center w-screen bg-white fixed top-0 z-40',
  NavBar: 'flex items-center justify-between w-full max-w-1440 bg-white z-30 xl:px-12 xl:py-8 lg:px-10 lg:py-6 sm:px-8 sm:py-4 px-6  py-4',
  NavHeaderContainer: 'flex items-center justify-center',
  NavHeader: 'flex items-center justify-center font-HelveticaNeueBD xl:text-2xl xl:text-shadow-3 lg:text-shadow-2 lg:text-xl text-lg text-shadow-1',
  NavHeaderLogo: 'xl:w-9 xl:h-9 lg:w-8 lg:h-8 sm:w-7 sm:h-7 w-6 h-6',
  NavSections: 'hidden md:flex items-center justify-between font-HelveticaNeueMD xl:gap-8 xl:text-xl lg:gap-7 lg:text-lg gap-6 text-md',
  HamMenu: 'md:hidden flex items-center justify-center',
  MenuIcon: "bg-black w-7 h-1 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out before:content-[''] before:absolute before:w-7 before:h-1 before:bg-black before:rounded-full before:-translate-y-1.5 before:transition-all before:duration-300 before:ease-in-out after:content-[''] after:absolute after:w-7 after:h-1 after:bg-black after:rounded-full after:translate-y-1.5 after:transition-all after:duration-300 after:ease-in-out",
  ActiveMenuIcon: "bg-transparent w-7 h-1 rounded-full flex items-center justify-center -translate-x-2 transition-all duration-300 ease-in-out before:content-[''] before:absolute before:w-7 before:h-1 before:bg-black before:rounded-full before:rotate-45 before:translate-x-2  before:transition-all before:duration-300 before:ease-in-out after:content-[''] after:absolute after:w-7 after:h-1 after:bg-black after:rounded-full after:-rotate-45 after:translate-x-2 after:transition-all after:duration-300 after:ease-in-out",
  MenuContainer: 'fixed bg-white top-[-60px] w-screen z-20 -translate-y-full transition-all duration-500 ease-in-out',
  ActiveMenuContainer: 'fixed bg-white top-[60px] w-screen translate-y-0 md:hidden transition-all duration-500 ease-in-out',
  MenuSections: 'flex flex-col items-center font-HelveticaNeueMD xl:py-8 xl:gap-8 xl:text-xl lg:py-7 lg:gap-7 lg:text-lg gap-6 py-6 text-md',
  MenuItems: 'text-black hover:text-[#FFD700] transition-all duration-300 ease-in-out'
}

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const navRef = useRef(null);

  //Reset openMenu state on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu if clicked outside of navbar or nav menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={classes.NavContainer} ref={navRef}>
      <div className={classes.NavBar}>
        <div className={classes.NavHeaderContainer}>
          <Link to="/" className={classes.NavHeader} >
            <img className={classes.NavHeaderLogo} src={logo} alt="" />
            <span>FORCE</span>
          </Link>
        </div>
        <div className={classes.NavSections}>
          {navItems.map((item, index) => (
            <Link to={item.link} key={index}>{item.name}</Link>
          ))}
        </div>
        <button className={classes.HamMenu} onClick={() => setOpenMenu(!openMenu)}>
          <div className={openMenu ? classes.ActiveMenuIcon : classes.MenuIcon}/>
        </button>
      </div>
      <div className={openMenu ? classes.ActiveMenuContainer : classes.MenuContainer}>
        <div className={classes.MenuSections}>
          {navItems.map((item, index) => (
            <Link className={classes.MenuItems} to={item.link} key={index} onClick={() => setOpenMenu(!openMenu)}>{item.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar