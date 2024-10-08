import React from "react";
import { AppBar } from "../components/AppBar";
import { BottomBar } from "../components/BottomBar";
import { PageHeader } from "../components/PageHeader";
import resume_final_png from "../assets/resume_final_png.png";

export const Resume = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <AppBar />

      <div className="pt-16 px-4 sm:px-8">
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <PageHeader title="HIRE ME" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 p-4 sm:p-6 rounded-lg  mb-6 lg:mb-0">
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">
                  CONTACT
                </h2>
                <div className="flex flex-col items-center">
                  <a
                    href="mailto:kevintandon123@gmail.com"
                    className="flex flex-col items-center text-blue-500 hover:text-blue-300"
                  >
                    <img
                      src="https://img.icons8.com/?size=50&id=LPcVDft9Isqt&format=png&color=0000FF"
                      alt="Email Icon"
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-2"
                    />
                    <p className="text-blue-300 text-xs sm:text-sm">MAIL</p>
                    <p className="text-blue-500 text-sm sm:text-lg">
                      kevintandon123@gmail.com
                    </p>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href="tel:9136592098"
                    className="flex flex-col items-center text-blue-500 hover:text-blue-300"
                  >
                    <img
                      src="https://img.icons8.com/?size=50&id=12921&format=png&color=0000FF"
                      alt="Phone Icon"
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-2"
                    />
                    <p className="text-blue-300 text-xs sm:text-sm">CONTACT</p>
                    <p className="text-blue-500 text-sm sm:text-lg">
                      9136592098
                    </p>
                  </a>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mt-6 sm:mt-8 mb-4">
                  EXTERNAL
                </h2>
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://github.com/kev0-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#1b1a1a] p-3 sm:p-4 rounded-lg"
                  >
                    <img
                      src="https://img.icons8.com/?size=150&id=LoL4bFzqmAa0&format=png&color=000000"
                      alt="GitHub"
                      className="w-10 h-10 sm:w-16 sm:h-16"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevin-tandon-5b7782263/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#1b1a1a] p-3 sm:p-4 rounded-lg"
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000"
                      alt="LinkedIn"
                      className="w-10 h-10 sm:w-16 sm:h-16"
                    />
                  </a>
                </div>

                <div className="flex justify-center w-full">
                  <a
                    href="https://drive.google.com/file/d/1ZtftljdfQ70RzJprCN5HJiHehdoBZFeJ/view?usp=sharing"
                    download
                    className="flex items-center justify-center bg-[#1b1a1a] p-3 sm:p-4 rounded-lg w-full"
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=yM6gy34zR0GV&format=png&color=000000"
                      alt="Download Icon"
                      className="w-10 h-10 sm:w-16 sm:h-16"
                    />
                    <span className="text-blue-500 font-semibold ml-2 text-sm sm:text-base">
                      Download Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Image */}
            <div className="col-span-1 lg:col-span-2 bg-[#1b1a1a] p-4 sm:p-6 rounded-lg">
              <a
                href="https://drive.google.com/file/d/1ZtftljdfQ70RzJprCN5HJiHehdoBZFeJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={resume_final_png}
                  alt="Resume"
                  className="w-full h-auto border-none cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
};
