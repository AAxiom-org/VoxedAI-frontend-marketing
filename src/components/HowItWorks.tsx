import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">How It Works</h2>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="md:border-r md:border-gray-200 lg:border-r lg:border-gray-200">
              <img src="/diagrams/vox.png" alt="Voxed Logo" className="w-full h-auto" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-lg text-gray-700">
              Our Vox Research Lab follows a hierarchical structure where specialized agents work together to transform your data into valuable insights:
            </p>
            
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">1</div>
                <div>
                  <p className="text-gray-800 font-medium">Chief Scientist Agent</p>
                  <p className="text-gray-600">Serves as the central coordinator, receiving your research questions and orchestrating the entire process.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">2</div>
                <div>
                  <p className="text-gray-800 font-medium">Research Scientists</p>
                  <p className="text-gray-600">Conduct independent lines of inquiry, each exploring different aspects of your question.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">3</div>
                <div>
                  <p className="text-gray-800 font-medium">Specialized Modules</p>
                  <p className="text-gray-600">Within each scientist handle different phases of research:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                    <li><span className="font-medium">Hypothesis Module:</span> Generates, refines, and ranks potential hypotheses</li>
                    <li><span className="font-medium">Research Module:</span> Gathers evidence from your data and external sources</li>
                    <li><span className="font-medium">Simulation Module:</span> Tests hypotheses through code execution and analysis</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">4</div>
                <div>
                  <p className="text-gray-800 font-medium">Research Assistants</p>
                  <p className="text-gray-600">Provide specialized tools and capabilities to support the research process.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 