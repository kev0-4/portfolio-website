import React from 'react';

const ExperienceCard = ({ years }) => {
  return (
    <div className="bg-gray-900 w-40 h-40 rounded-xl flex flex-col items-center justify-center text-center p-4 shadow-lg">
      <div className="bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mb-2">
        <span className="text-white text-3xl font-bold">{years}+</span>
      </div>
      <p className="text-gray-400 text-xs uppercase tracking-wide">
        Years
        <br />
        Experience
      </p>
    </div>
  );
};

export default ExperienceCard;