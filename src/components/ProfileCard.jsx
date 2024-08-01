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
      <div className="bg-gray-800 text-white rounded-lg p-8 flex flex-col justify-between h-full">
        <div className="flex items-start">
          <img
            src={imageUrl}
            alt={name}
            className="w-48 h-48 rounded-lg mr-6 object-cover" // Further increased size
          />
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-3">
                <span className="text-yellow-500 mr-2">🔒</span>
                <h2 className="text-base font-semibold">{title}</h2>
              </div>
              <h1 className="text-3xl font-bold mb-4">{name}</h1>
              <p className="text-gray-400 text-base mb-4">{description}</p>
            </div>
            <div>
              <p className="text-blue-400 text-base mb-3">
                Currently contributing to the development of {company}.
              </p>
              <p className="text-pink-400 text-base flex items-center">
                <span className="mr-2">📍</span> Based in {location}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <h3 className="text-xl font-semibold mb-3">About Me</h3>
          <p className="text-gray-400">
            Passionate about leveraging technology to solve complex problems. 
            Always eager to learn and explore new technologies in the realm of 
            Machine Learning and Full Stack Development.
          </p>
        </div>
      </div>
    </div>
  );
};
