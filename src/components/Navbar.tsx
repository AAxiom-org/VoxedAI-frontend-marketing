import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="w-full py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/voxed-icon.png" alt="Voxed Logo" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-medium text-gray-900">Voxed</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-10">
          <button 
            onClick={() => scrollToSection('waitlist')} 
            className="text-base text-gray-600 hover:text-gray-900"
          >
            Join Waitlist
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="text-base text-gray-600 hover:text-gray-900"
          >
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 