import React from "react";

interface UseCaseProps {
  title: string;
  description: string;
  icon: string;
}

const UseCase: React.FC<UseCaseProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: "Product Development",
      description: "Analyze customer feedback and market data to identify improvement opportunities",
      icon: "📱",
    },
    {
      title: "Scientific Research",
      description: "Process large datasets to uncover patterns and generate testable hypotheses",
      icon: "🧬",
    },
    {
      title: "Competitive Intelligence",
      description: "Monitor industry trends and anticipate market shifts",
      icon: "📈",
    },
    {
      title: "Medical Research",
      description: "Analyze patient data to identify potential treatment pathways",
      icon: "🩺",
    },
    {
      title: "Academic Research",
      description: "Process literature and experimental data to generate novel insights",
      icon: "🎓",
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">Use Cases</h2>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCase
              key={index}
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases; 