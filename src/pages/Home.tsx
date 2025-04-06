import React from "react";
import Hero from "../components/landing/Hero";
import Problems from "../components/landing/Problems";
import DemoSection from "../components/landing/DemoSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import GraphBackground from "../components/GraphBackground";
import UsedBy from "../components/UsedBy";

const HomePage: React.FC = () => {  
  return (
    <div className="w-full max-w-full min-h-screen bg-transparent color-primary overflow-x-hidden">
      <GraphBackground />
      <div className="w-full max-w-7xl mx-auto px-6 space-y-50 pb-100">
        <Hero />
        <UsedBy />
        <div className="space-y-100">
          <Problems />
          <DemoSection />
          <CTASection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
