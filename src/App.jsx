import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Bio } from "./pages/Bio";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Offerings } from "./pages/Offerings";
import SkillsPage from "./pages/Skills";
import { PortfolioPage } from "./pages/Portfolio";
import { CertificatesPage } from "./pages/Certificates";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Bio" element={<Bio />} />
          <Route path="/" element={<Home/>} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Offerings" element={<Offerings />} />
          <Route path="/Skills" element={<SkillsPage />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route path="/Certificates" element={<CertificatesPage />} />
          <Route path="/Contact" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
