import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Bio } from "./pages/Bio";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Offerings } from "./pages/Offerings";
import SkillsPage from "./pages/Skills";
import { PortfolioPage } from "./pages/Portfolio";
import { CertificatesPage } from "./pages/Certificates";
import ContactPage from "./pages/Contact";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-blue-500">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl mb-6">The page you're looking for doesn't exist.</p>
        <p className="text-lg">
          You will be redirected to the homepage in 
          <span className="text-blue-500 font-bold ml-2">{countdown}</span> 
          {countdown === 1 ? ' second' : ' seconds'}...
        </p>
      </div>
    </div>
  );
};

const RouteDebug = () => {
  const location = useLocation();
  return (
    <div style={{ position: 'fixed', bottom: 10, right: 10, background: 'rgba(0,0,0,0.7)', color: 'white', padding: '10px', borderRadius: '5px' }}>
      <h3>Current Route: {location.pathname}</h3>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Offerings" element={<Offerings />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/Certificates" element={<CertificatesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <RouteDebug />
    </BrowserRouter>
  );
}

export default App;