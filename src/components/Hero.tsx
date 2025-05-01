import React from "react";

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    setTimeout(() => {
      const demoSection = document.getElementById('demo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="w-full pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-gray-900">
              Voxed: Your Data-Powered Research Team
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transform your proprietary information into actionable insights with Vox Research Lab - 
              a fully autonomous, multi-agent system that functions as your dedicated research team.
            </p>
            <div className="pt-4">
              <button 
                className="bg-black text-white px-8 py-3 rounded-sm text-lg font-medium"
                onClick={scrollToDemo}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 rounded-sm overflow-hidden flex items-center justify-center">
              <div className="w-11/12 h-11/12 relative">
                <div className="absolute inset-0 bg-amber-300/20 rounded-sm transform rotate-3"></div>
                <div className="absolute inset-0 bg-amber-300/20 rounded-sm transform -rotate-3"></div>
                <div className="relative z-10 w-full h-full bg-white/90 rounded-sm shadow-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <img src="/diagrams/vox_flow.png" alt="Voxed Logo" className="w-fill mr-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 