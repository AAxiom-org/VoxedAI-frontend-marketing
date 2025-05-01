import React from "react";
import NetworkBackground from "../components/NetworkBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import Security from "../components/Security";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WaitlistPage from "../components/Waitlist";
import DemoPage from "../components/Demo";

const HomePage: React.FC = () => {  
  return (
    <div className="w-full max-w-full min-h-screen text-gray-900 overflow-x-hidden">
      <NetworkBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <Security />
        <CTA />
        <WaitlistPage />
        <DemoPage />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
