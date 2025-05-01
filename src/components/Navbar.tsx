import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={isOpen ? "w-full py-6 px-8 bg-gray-50" : "w-full py-6 px-8"}>
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
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 top-20 bg-gray-50 shadow-lg z-10 px-8 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('waitlist')} 
            className="text-base text-gray-600 hover:text-gray-900 py-2"
          >
            Join Waitlist
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="text-base text-gray-600 hover:text-gray-900 py-2"
          >
            Request Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 