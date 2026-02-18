import React, { forwardRef } from "react";

const Navbar = forwardRef((props, ref) => {
  const navItems = [
    "About","Events","Contact"
  ];

  return (
    <div ref={ref} className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 opacity-0 backdrop-blur-sm">
      <nav className="flex items-center gap-8 px-8 py-3 bg-zinc-800 rounded-full shadow-md">
        
        {/* Logo Circle */}
        <img 
          src="/assets/images/Athenova/logo.png" 
          alt="Athenova Logo"
          className="w-8 h-8 object-contain"
        />

        {/* Nav Links */}
        <ul className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-black transition-colors duration-200"
              >
                {item}
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
