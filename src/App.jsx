import Navbar from "./components/navbar/navbar";
import Main from "./components/Main/Main";
import Cards from "./components/Cards/cards";
import ContactForm from "./components/contact all pages/contact_form/contact_form";
import ContactPage from "./components/contact all pages/Contact page/contact_page";
import Footer from "./components/Footer/footer";
import Aboutpage from "./components/About all pages/About page/About_page";
import AboutSection from "./components/About all pages/About_section/About_section";
import Learning from "./components/Learning journey/learning";
import LearningPage from "./components/Learning journey/Learning journey page/Learning_journey_page";
import Project from "./components/projects component/Project Page/project_project";
import "../src/App.css";
import { useState } from "react";
import ScrollToTop from "./components/Scrole_to_top/top";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

        <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <AboutSection />
              <Cards />

              <ContactForm />
              <Learning />
            </>
          }
        />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hire" element={<ContactForm />} />

        <Route path="/learning" element={<LearningPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
