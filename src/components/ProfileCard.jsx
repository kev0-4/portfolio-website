import React from "react";

export const ProfileCard = ({
  name,
  title,
  description,
  location,
  company,
  imageUrl,
}) => {
  return (
    <div className="pt-4 w-full h-full">
      <div className="bg-gray-800 text-white rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <img
            src={imageUrl}
            alt={name}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg mb-4 sm:mb-0 sm:mr-4 md:mr-6 object-cover"
          />
          <div className="flex flex-col justify-between h-full w-full sm:w-auto">
            <div>
              <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-3">
                <span className="text-yellow-500 mr-2">🔒</span>
                <h2 className="text-sm sm:text-base font-semibold">{title}</h2>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-center sm:text-left">{name}</h1>
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 text-center sm:text-left">{description}</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-blue-400 text-sm sm:text-base mb-2 sm:mb-3 text-center sm:text-left">
                Currently contributing to the development of {company}.
              </p>
              <p className="text-pink-400 text-sm sm:text-base flex items-center justify-center sm:justify-start">
                <span className="mr-2">📍</span> Based in {location}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-4 sm:pt-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">About Me</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Passionate about leveraging technology to solve complex problems. 
            Always eager to learn and explore new technologies in the realm of 
            Machine Learning and Full Stack Development.
          </p>
        </div>
      </div>
    </div>
  );
};