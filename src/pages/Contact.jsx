import React from 'react';
import { AppBar } from '../components/AppBar';
import { BottomBar } from '../components/BottomBar';
import { PageHeader } from '../components/PageHeader';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <AppBar />
      
      <div className="pt-16 px-4 sm:px-8">
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <PageHeader title="CONTACT" />

          <div className="bg-[#1b1a1a] p-6 rounded-lg mb-8">
            <div className="contact-section">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">Contact Information</h2>
              <p className="text-gray-400">Feel free to reach out to me at:</p>
              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-center">
                  <img src="https://img.icons8.com/?size=50&id=LPcVDft9Isqt&format=png&color=0000FF" alt="Email" className="w-6 h-6 mr-2" />
                  <a href="mailto:kevintandon123@gmail.com" className="text-blue-400 hover:text-pink-500 transition-colors duration-300">kevintandon123@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <img src="https://img.icons8.com/?size=50&id=12921&format=png&color=0000FF" alt="Phone" className="w-6 h-6 mr-2" />
                  <a href="tel:+919136592098" className="text-blue-400 hover:text-pink-500 transition-colors duration-300">+91 9136592098</a>
                </li>
              </ul>

              <div className="social-media mt-6">
                <h3 className="text-lg font-bold text-white">Connect with me:</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.linkedin.com/in/kevin-tandon-5b7782263/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="https://github.com/kev0-4" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/?size=150&id=LoL4bFzqmAa0&format=png&color=000000" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              <div className="resume mt-8">
                <button 
                  onClick={() => window.open('https://drive.google.com/uc?export=download&id=1_1pAFtDPVl-WBMAzcboS_rUXwHbUpTkp', '_blank')}
                  className="bg-blue-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
};

export default ContactPage;
