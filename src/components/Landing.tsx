import React from "react";
import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import Features from "./landing/Features";
import DemoSection from "./landing/DemoSection";
import CTASection from "./landing/CTASection";
import Footer from "./landing/Footer";
import GraphBackground from "./GraphBackground";


const Landing: React.FC = () => {  
  return (
    <div className="w-full max-w-full min-h-screen bg-transparent color-primary overflow-x-hidden relative">
      <GraphBackground />
      <div className="w-full max-w-7xl mx-auto px-6 space-y-50 pb-100">
        <Navbar />
        <Hero />
        <div className="space-y-100 pt-50">
          <Features />
          <DemoSection />
          <CTASection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
