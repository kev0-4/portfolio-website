import React from 'react';
import { useNavigate } from 'react-router-dom';

const OfferingsCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Offerings');
  };

  const icons = [
    "https://img.icons8.com/?size=60&id=40669&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=13441&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=asWSSTBrDlTW&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=HcQEdKCkXUs3&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=UFF3hmipmJ2V&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=10250&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=wU62u24brJ44&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=60035&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=jH4BpkMnRrU5&format=png&color=000000",
    "https://img.icons8.com/?size=60&id=fUGx53gD9Jof&format=png&color=000000",
  ];

  return (
    <div 
      className="bg-gray-800 rounded-xl p-4 sm:p-6 w-full cursor-pointer transition-colors duration-300 
                 hover:bg-orange-500 hover:text-white hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {icons.map((icon, index) => (
          <img 
            key={index}
            src={icon} 
            alt={`Icon ${index + 1}`} 
            className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col">
          <p className="text-gray-400 text-xs sm:text-sm mb-1">EXPLORE OFFERINGS</p>
          <h3 className="text-white text-lg sm:text-xl font-semibold">Offerings</h3>
        </div>
        <img 
          src="https://img.icons8.com/?size=50&id=BPbxDB5FnqHc&format=png&color=000000" 
          alt="Arrow Icon" 
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
    </div>
  );
};

export default OfferingsCard;
