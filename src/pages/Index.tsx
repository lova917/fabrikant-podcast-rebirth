import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import EpisodesGrid from "@/components/EpisodesGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <Hero />
      <Stats />
      <EpisodesGrid />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
