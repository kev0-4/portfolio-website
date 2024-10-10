import React, { useState } from "react";
import { Link } from "react-router-dom";
import mascot2 from "../assets/mascot2.png";
import { Menu, X } from "lucide-react";

export const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/Bio", label: "Bio" },
    { to: "/Resume", label: "Resume" },
    { to: "/Skills", label: "Skills" },
    { to: "/Portfolio", label: "Portfolio" },
    { to: "/Certificates", label: "Certifications" },
    { to: "/Contact", label: "Contact" },
    { to: "/Offerings", label: "Offerings" },
  ];

  return (
    <div className="bg-[rgba(15,15,15,1)] text-white py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between md:justify-center pt-2 md:pt-6 pb-2">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.slice(0, 4).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center px-4">
          <div className="relative">
            <img src={mascot2} alt="Mascot" className="h-12 md:h-16 relative z-10" />
            <div className="absolute inset-0 z-0 h-full w-full blur-sm bg-transparent">
              <img
                src={mascot2}
                alt="Mascot Glow"
                className="h-1 md:h-1 filter drop-shadow-[0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.slice(4).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};