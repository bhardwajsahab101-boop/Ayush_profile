import Navbar from "./components/navbar/navbar";
import Main from "./components/Main/Main";
import Cards from "./components/Cards/cards";
import ContactForm from "./components/contact all pages/contact_form/contact_form";
import ContactPage from "./components/contact all pages/Contact page/contact_page";
import Footer from "./components/Footer/footer";
import Aboutpage from "./components/About all pages/About page/About_page";
import AboutSection from "./components/About all pages/About_section/About_section";
import Learning from "./components/Learning journey/learning";
import "../src/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

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
        <Route path="/projects" element={<Cards />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hire" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
