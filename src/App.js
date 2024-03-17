import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Certificates from "./components/Ceryificates/Certificates";
import Layout from "./Layout";
import Project from "./components/Projects/Project";
import Experience from "./components/Experince/Experience";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/certificate" element={<Certificates />} />
            <Route path="/project" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
