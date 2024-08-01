import React from 'react';
import { Link } from 'react-router-dom';

export const SpecialGitLinkedCard = ({ githubLink, linkedinLink, leetcodeLink, githubIconUrl, linkedinIconUrl, leetcodeIconUrl }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 w-full min-h-[300px] max-h-fit flex flex-col items-center justify-between shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-colors duration-300">
      <Link
        to="/Contact"
        className="w-full h-full flex flex-col items-center justify-center text-center"
      >
        <img src={githubIconUrl} alt="GitHub" className="text-gray-400 w-16 h-16 mb-4" />
        <h3 className="text-white text-lg font-semibold">GitHub, LinkedIn & LeetCode</h3>
        <p className="text-gray-400 text-sm">Visit my profiles</p>
      </Link>
      <div className="flex justify-between w-full mt-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 p-3 rounded-lg flex items-center space-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-colors duration-300"
        >
          <img src={githubIconUrl} alt="GitHub" className="w-8 h-8" />
          <span className="text-white text-sm">GitHub</span>
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 p-3 rounded-lg flex items-center space-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-colors duration-300"
        >
          <img src={linkedinIconUrl} alt="LinkedIn" className="w-8 h-8" />
          <span className="text-white text-sm">LinkedIn</span>
        </a>
        <a
          href={leetcodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 p-3 rounded-lg flex items-center space-x-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-colors duration-300"
        >
          <img src={leetcodeIconUrl} alt="LeetCode" className="w-8 h-8" />
          <span className="text-white text-sm">LeetCode</span>
        </a>
      </div>
    </div>
  );
};
