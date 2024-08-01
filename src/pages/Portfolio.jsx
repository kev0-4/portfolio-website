import React from 'react';
import { AppBar } from '../components/AppBar';
import { PageHeader } from '../components/PageHeader';
import CollaborationCard from '../components/CollaborationCard';
import { BottomBar } from '../components/BottomBar';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
    {
      imageUrl: "/src/assets/sintex_banner.jpeg",
      subHeading: "ML - NLP - WEB DEV",
      heading: "Syntex - ML and NLP based stock market predictor",
      date: "Oct 28, 2023 (Won 1st prize at IIIT Pune Nexus hackathon)",
      url: "https://github.com/kev0-4/Stock-Market-Predictor-with-Sentiment-Analysis"
    },
    {
      imageUrl: "/src/assets/aerosync_banner.jpeg",
      subHeading: "ML - LLM",
      heading: "Aerosync",
      date: "June 28, 2024",
      url: "https://github.com/kev0-4/Aerosync"
    },
    {
      imageUrl: "/src/assets/AML_banner.jpeg",
      subHeading: "ML",
      heading: "AML system for fraud and illicit transfer detection",
      date: "June, 2024 (Released a Research paper on these findings)",
      url: ""
    },
    {
      imageUrl: "/src/assets/tataPreSalesAI_banner.jpeg",
      subHeading: "ML - LLM - WEB DEV",
      heading: "Tata Pre Sales AI",
      date: "July 2024",
      url: "https://github.com/kev0-4/tataPreSalesAI"
    },
    {
        imageUrl: "/src/assets/mascot.png",
        subHeading: "REACT - WEB DEV",
        heading: "Resume Website",
        date: "August 2024",
        url: "https://github.com/kev0-4/portfolio"
      }
  ];
  
  export const PortfolioPage = () => {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white">
        <AppBar />
        
        <div className="pt-16 px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
            <PageHeader title="PORTFOLIO" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            
            <CollaborationCard
              title="See my CV"
              buttonText="View CV"
              onClick={() => window.open('https://example.com/your-cv', '_blank')}
            />
          </div>
        </div>
        
        <BottomBar />
      </div>
    );
  };