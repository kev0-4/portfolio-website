import React from "react";
import { AppBar } from "../components/AppBar";
import { PortfolioCard } from "../components/PortfolioCard";
import { ProfileCard } from "../components/ProfileCard";
import { SpecialGitLinkedCard } from "../components/SpecialGitLinkedCard";
import OfferingsCard from "../components/OfferingsCard";
import CollaborationCard from "../components/CollaborationCard";
import {
  CertificationsEarned,
  SkillShowcase,
} from "../components/CertificationsEarnedCard";
// todo: import image in ProfileCard
export const Home = () => {
  return (
    <div className="bg-[rgba(15,15,15,1)] min-h-screen">
      <div className="pb-6">
        <AppBar />
      </div>
      <div className="p-4 mt-20">
        <div className="w-full mx-auto  max-w-7xl px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 md:col-span-2">
              <ProfileCard
                name="Kevin Tandon"
                title="Machine Learning | Full Stack Developer"
                description="Innovation Engineer, AI Enthusiast"
                location="Pune | Mumbai"
                company="SCAAI"
                imageUrl="../src/assets/kevin_pfp1.jpg"
                className="fade-in h-full"
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="pt-4 pb-3">
                <PortfolioCard
                  title="Qualifications"
                  iconUrl={
                    "https://img.icons8.com/?size=100&id=PsrKUVrOXiqJ&format=png&color=000000"
                  }
                  subtitle="A LITTLE ON KEVIN"
                  link="/Qualifications"
                  className="fade-in h-full"
                />
              </div>
              <div>
                <PortfolioCard
                  title="Portfolio"
                  iconUrl={
                    "https://img.icons8.com/?size=100&id=121324&format=png&color=000000"
                  }
                  subtitle="CV"
                  link="/Resume"
                  className="fade-in h-full"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">
              <div className="pt-4">
                <div className="pb-3">
                  <PortfolioCard
                    title="Skills"
                    iconUrl={
                      "https://img.icons8.com/?size=100&id=jDJU8OWhVUBF&format=png&color=000000"
                    }
                    subtitle="MY EXPERTISE"
                    link="/Skills"
                    className="fade-in h-full"
                  />
                </div>
                <PortfolioCard
                  title="Contact"
                  iconUrl={
                    "https://img.icons8.com/?size=100&id=fOP3Uxgc9J3f&format=png&color=000000"
                  }
                  subtitle="CONTACT ME"
                  link="/Contact"
                  className="fade-in h-full"
                />
              </div>
            </div>
          </div>

          {/* Second row: Offerings, SkillShowcase, and SpecialGitLinked Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <div className="col-span-1 md:col-span-2 fade-in h-full">
              <div className="pb-3">
                <SpecialGitLinkedCard
                  githubLink="https://github.com/kev0-4"
                  linkedinLink="https://www.linkedin.com/in/kevin-tandon-5b7782263/"
                  leetcodeLink={"https://leetcode.com/kevintandon/"}
                  githubIconUrl={
                    "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000"
                  }
                  linkedinIconUrl={
                    "https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000"
                  }
                  leetcodeIconUrl={
                    "https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000"
                  }
                  className="fade-in h-full"
                />
              </div>
              <OfferingsCard />
            </div>
            <div className="col-span-1 md:col-span-2">
              <SkillShowcase />
            </div>
            <div className="grid col-span-1">
              <CollaborationCard className="fade-in" />
              <div className="pt-4">
                <CertificationsEarned />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
