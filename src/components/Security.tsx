import React from "react";

interface SecurityFeatureProps {
  title: string;
  description: string;
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Security: React.FC = () => {
  const securityFeatures = [
    {
      title: "Strict Access Controls",
      description: "Only the Chief Scientist and Research Scientists have access to your proprietary data"
    },
    {
      title: "Sandboxed Execution",
      description: "External-facing tools and agents operate in isolated environments without access to sensitive information"
    },
    {
      title: "No Data Storage",
      description: "External agents process only the specific information needed for their task, with no retention"
    },
    {
      title: "Audit Trails",
      description: "Comprehensive logging of all access and operations for complete transparency"
    },
    {
      title: "Customizable Permissions",
      description: "Configure exactly what data is accessible to different components of the system"
    }
  ];

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">Enterprise-Grade Security</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your proprietary data never leaves your secure environment. We've architected Voxed with data protection as a core principle:
            </p>
            
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <SecurityFeature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm overflow-hidden flex items-center justify-center">
              <div className="w-3/4 h-3/4 relative">
                <div className="absolute inset-0 bg-white/90 rounded-sm shadow-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-6">🛡️</div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Data Protected</h3>
                    <p className="text-gray-600">Your data remains safe within your environment</p>
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

export default Security; 