import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Seamless Integration",
      description: "Connects with Notion, Drive, GitHub, Slack, and more",
      icon: "🔄",
    },
    {
      title: "Autonomous Research",
      description: "Generates hypotheses, gathers evidence, and runs simulations without manual intervention",
      icon: "🔬",
    },
    {
      title: "Multi-Agent Architecture",
      description: "Leverages specialized AI agents working in concert",
      icon: "🤖",
    },
    {
      title: "Comprehensive Reports",
      description: "Delivers polished, well-structured findings ready for review",
      icon: "📊",
    },
    {
      title: "Enterprise-Grade Security",
      description: "Protects your proprietary data with strict access controls",
      icon: "🛡️",
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">Key Features</h2>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 