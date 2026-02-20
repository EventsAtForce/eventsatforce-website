import React, { forwardRef } from "react";

const Navbar = forwardRef(({ lenisRef }, ref) => {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Events", id: "events" },
    { label: "Contact", id: "footer" }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element && lenisRef?.current) {
      lenisRef.current.scrollTo(element, {
        smooth: true,
        offset: 0,
      });
    }
  };

  return (
    <div ref={ref} className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 opacity-0 ">
      <nav className="flex items-center gap-8 px-8 py-3 bg-zinc-800 rounded-full backdrop-blur-sm shadow-md" style={{ fontFamily: 'Guntech' }}>
        
        {/* Logo Circle */}
        {/* <img 
          src="/assets/images/Athenova/logo.png" 
          alt="Athenova Logo"
          className="w-8 h-8 object-contain"
        /> */}

        {/* Nav Links */}
        <ul className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-white hover:underline transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
