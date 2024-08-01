import React from 'react';

export const ProjectCard = ({ imageUrl, subHeading, heading, date, url }) => (
    <div
        className="bg-[#1b1a1a] rounded-lg overflow-hidden cursor-pointer transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r from-orange-500 to-pink-500"
        onClick={() => window.open(url, '_blank')}
    >
        <img src={imageUrl} alt={heading} className="w-full h-48 object-cover" />
        <div className="p-4">
            <p className="text-sm text-gray-400 uppercase">{subHeading}</p>
            <h3 className="text-xl font-bold text-white mt-1">{heading}</h3>
            <p className="text-sm text-gray-400 mt-2">{date}</p>
        </div>
    </div>
);

export default ProjectCard;
