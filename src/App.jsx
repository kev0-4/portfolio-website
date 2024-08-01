import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { Bio } from "./pages/Bio";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Offerings } from "./pages/Offerings";
import SkillsPage from "./pages/Skills";
import { PortfolioPage } from "./pages/Portfolio";
import { CertificatesPage } from "./pages/Certificates";
import ContactPage from "./pages/Contact";

// Updated NotFound component with auto-redirect
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-blue-500">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl mb-6">The page you're looking for doesn't exist.</p>
        <p className="text-lg">
          You will be redirected to the homepage in 
          <span className="text-blue-500 font-bold ml-2"></span> 
          
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Offerings" element={<Offerings />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/Certificates" element={<CertificatesPage />} />
        <Route path="/Contact" element={<ContactPage/>} />
        
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;