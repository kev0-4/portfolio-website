import React from "react";
import { BioCard } from "../components/BioCard";
import { InfoCard } from "../components/InfoCard";
import { PageHeader } from "../components/PageHeader";
import { PhotoFrame } from "../components/PhotoFrame";
import { AppBar } from "../components/AppBar";
import { BottomBar } from "../components/BottomBar";
import kevin_pfp2 from "../assets/kevin_pfp2.png";

export const Bio = () => {
  const experienceData = {
    title: "EXPERIENCE",
    items: [
      {
        date: "2023 June - 2024 June",
        title: "ML Intern",
        subtitle: "SCAAI Symbiosis Center for Applied Artificial Intelligence",
      },
      {
        date: "2024 July - Present",
        title: "Web Developer for",
        subtitle: "BRC PUNE (NGO)",
      },
    ],
  };
  const volunterData = {
    title: "volunteering experience",
    items: [
      {
        date: "2024 March- Present",
        title: "Head of Artificial Intelligence",
        subtitle: "ACM SIT Chapter",
      },
      {
        date: "2023 July- Present",
        title: "Co-Head of Blockchain Development",
        subtitle: "Cyber-Blockchain Club",
      },
      {
        date: "2023 July- Present",
        title: "Technical Executive",
        subtitle: "CodeX",
      },
    ],
  };
  const educationData = {
    title: "Education",
    items: [
      {
        date: "Undergraduate",
        title: "Btech in CS [2022-2026]",
        subtitle: "Symbiosis Institute of Technology, Pune",
      },
      {
        date: "High School",
        title: "CBSE",
        subtitle: "Jaipuriar School, Navi Mumbai",
      },
      {
        date: "Primary School",
        title: "ICSE",
        subtitle: "Ryan International School, Navi Mumbai",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {" "}
      {/* Updated background color */}
      <div className="p-6">
        <AppBar />
      </div>
      <div className="pt-16 px-8">
        {" "}
        {/* Adjusted padding to match the BottomBar */}
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 flex justify-center">
              <PhotoFrame imageUrl={kevin_pfp2} className="w-full max-w-lg" />
            </div>
            <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col items-left">
              <div className="w-full max-w-2xl p-3">
                <PageHeader title="BIO" />
              </div>
              <BioCard
                name={"Kevin Tandon"}
                description={
                  "In the hallowed halls of Symbiosis, where bits and bytes dance, our intrepid student—a seeker of knowledge—takes a chance. With CSE as their compass, they navigate the digital maze, weaving machine learning spells and conjuring full-stack marvels. May their lines of code be elegant, their bugs few, and may the binary stars guide them to vistas anew. 🚀✨"
                }
                className="w-full max-w-2xl"
              />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-2 flex justify-center">
              <InfoCard {...experienceData} className="w-full max-w-lg" />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <InfoCard {...volunterData} className="w-full max-w-full" />
            </div>
            <div className="col-span-1 md:col-span-4 lg:col-span-4">
              <InfoCard {...educationData} className="w-full max-w-2xl" />
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Bio;
