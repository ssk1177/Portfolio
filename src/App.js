import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Link to="/contactform" className="contact-button">
          <span className="contact-button-icon">📞</span> Get in Touch
        </Link>
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<MainContent />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contactform" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
