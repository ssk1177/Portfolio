// App.js
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<MainContent />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactform" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
