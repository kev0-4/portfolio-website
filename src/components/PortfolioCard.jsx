import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const PortfolioCard = ({ title, iconUrl, subtitle, link }) => {
  return (
    <div className="bg-gradient-to-br from-[#1b1a1a] to-[#302d2d] rounded-xl p-4 w-full h-full flex flex-col justify-between shadow-lg transition-shadow duration-300 hover:from-pink-500 hover:to-orange-500">
      <Link to={link} className="flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div className=" p-4 rounded-lg pt-6">
            <img src={iconUrl} alt={`${title} icon`} className="w-16 h-16" /> {/* Use iconUrl */}
          </div>
          <ChevronRight className="text-gray-500" size={32} /> {/* Increased size */}
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-1 p-2">{title}</h3>
          <p className="text-gray-400 text-sm pl-2">{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};
