import React from "react";
import { Link } from "react-router-dom";
import mascot from "../assets/mascot.png";

export const AppBar = () => {
  return (
    <div className="bg-[rgba(15,15,15,1)] text-white py-4 px-8 fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-center pt-6 pb-2 space-x-8">
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/Bio"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Bio
          </Link>
          <Link
            to="/Resume"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Resume
          </Link>
          <Link
            to="/Skills"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Skills
          </Link>
        </div>
        <div className="flex items-center px-4">
          <div className="relative">
            <img src={mascot} alt="Mascot" className="h-16 relative z-10" />
            <div className="absolute inset-0 z-0 h-full w-full blur-sm bg-transparent">
              <img
                src={mascot}
                alt="Mascot Glow"
                className="h-16 filter drop-shadow-[0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Link
            to="/Portfolio"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Portfolio
          </Link>

          <Link
            to="/Certificates"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Certifications
          </Link>
          <Link
            to="/Contact"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/Offerings"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-colors"
          >
            Offerings
          </Link>
        </div>
      </nav>
    </div>
  );
};
