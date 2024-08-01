import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'; // Ensure lucide-react is installed

const CollaborationCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Resume');
  };

  return (
    <div 
      className="bg-gray-900 rounded-xl p-6 w-full max-w-full h-full cursor-pointer flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500"
      onClick={handleClick}
    >
      <div className="text-left">
        <p className="text-white text-xl font-semibold">
          Let's collaborate <span className="text-blue-400">together</span>
        </p>
        <p className="text-gray-400 text-lg mt-2">
          See my <span className="text-blue-400">CV</span>
        </p>
      </div>
      <ChevronRight className="text-gray-400" size={24} />
    </div>
  );
};

export default CollaborationCard;
