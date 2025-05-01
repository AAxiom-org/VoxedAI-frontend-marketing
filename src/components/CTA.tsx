import React from "react";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-medium mb-4">
        {number}
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CTA: React.FC = () => {
  const scrollToDemo = () => {
    setTimeout(() => {
      const demoSection = document.getElementById('demo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const scrollToWaitlist = () => {
    setTimeout(() => {
      const waitlistSection = document.getElementById('waitlist');
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const steps = [
    {
      number: 1,
      title: "Connect Your Data Sources",
      description: "Integrate with your existing knowledge repositories"
    },
    {
      number: 2,
      title: "Define Your Research Questions",
      description: "Specify what you want to investigate"
    },
    {
      number: 3,
      title: "Review and Refine",
      description: "Receive comprehensive reports and iterate as needed"
    }
  ];

  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">Getting Started</h2>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Follow these steps to get started with Voxed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step) => (
            <Step 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg font-medium text-gray-900 mb-6">
            Ready to transform your data into actionable insights?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-black text-white px-8 py-3 rounded-sm text-lg font-medium"
              onClick={scrollToDemo}
            >
              Contact us for a demo
            </button>
            <button 
              className="bg-white text-black px-8 py-3 rounded-sm text-lg font-medium border border-black"
              onClick={scrollToWaitlist}
            >
              Join our waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 