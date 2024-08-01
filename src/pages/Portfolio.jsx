import React from 'react';
import { AppBar } from '../components/AppBar';
import { PageHeader } from '../components/PageHeader';
import CollaborationCard from '../components/CollaborationCard';
import { BottomBar } from '../components/BottomBar';
import { ProjectCard } from '../components/ProjectCard';
import sintex_banner from "../assets/sintex_banner.png";
import aerosync_banner from "../assets/aerosync_banner.png"
import AML_banner from "../assets/AML_banner.png"
import tataPreSalesAI_banner from "../assets/tataPreSalesAI_banner.png"
import mascot from "../assets/mascot.png"

const projects = [
    {
      imageUrl: sintex_banner,
      subHeading: "ML - NLP - WEB DEV",
      heading: "Syntex - ML and NLP based stock market predictor",
      date: "Oct 28, 2023 (Won 1st prize at IIIT Pune Nexus hackathon)",
      url: "https://github.com/kev0-4/Stock-Market-Predictor-with-Sentiment-Analysis"
    },
    {
      imageUrl: aerosync_banner,
      subHeading: "ML - LLM",
      heading: "Aerosync",
      date: "June 28, 2024",
      url: "https://github.com/kev0-4/Aerosync"
    },
    {
      imageUrl: AML_banner,
      subHeading: "ML",
      heading: "AML system for fraud and illicit transfer detection",
      date: "June, 2024 (Released a Research paper on these findings)",
      url: ""
    },
    {
      imageUrl: tataPreSalesAI_banner,
      subHeading: "ML - LLM - WEB DEV",
      heading: "Tata Pre Sales AI",
      date: "July 2024",
      url: "https://github.com/kev0-4/tataPreSalesAI"
    },
    {
        imageUrl: mascot,
        subHeading: "REACT - WEB DEV",
        heading: "Resume Website",
        date: "August 2024",
        url: "https://github.com/kev0-4/portfolio-website"
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