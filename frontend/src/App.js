import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App bg-gray-900">
            <Header />
            <HeroSection />
            <AboutSection />
            <ProjectsCarousel />
            <Footer />
        </div>
    );
}

export default App;
