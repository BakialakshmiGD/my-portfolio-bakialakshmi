import { Divider } from "@mui/material";
import React, { useState } from "react";
import AboutMe from "./about/AboutMe";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  const [setDrawerOpen] = useState(false);

  const openDrawerFunc = () => {
    setDrawerOpen(true);
  };
 

  return (
    <>
      <div id="home" style={{ height: "100vh" }}>
        <HomePage />
      </div>

      <Navbar openDrawerFunc={openDrawerFunc} />

      <div
        id="about"
        style={{ paddingTop: "40px", paddingBottom: "50px", marginTop: "30px" }}
      >
        <AboutMe />
      </div>

      <div id="skills" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Skills />
      </div>

      <div id="projects" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Projects />
      </div>

      <div id="contact" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Contact />
      </div>

      <Divider sx={{ color: "#e07ebb" }} />

      <Footer />



    </>
  );
};

export default App;
