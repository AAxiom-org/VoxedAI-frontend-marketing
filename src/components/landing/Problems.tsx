import React from 'react';
import ProblemCard from './ProblemCard';
import { Brain, Database, Layers, FileSearch } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      id: 1,
      icon: (
        <Brain className="w-12 h-12 text-sky-400" />
      ),
      title: "Combat Information Overload",
      description: "Intelligent Workspaces reduce cognitive load by autonomously organizing and synthesizing vast amounts of data into structured, manageable knowledge collections."
    },
    {
      id: 2,
      icon: (
        <Layers className="w-12 h-12 text-sky-400" />
      ),
      title: "End Fragmented Knowledge",
      description: "Personalized AI Agents integrate your disparate notes, files, and external resources into coherent, actionable insights within a unified system."
    },
    {
      id: 3,
      icon: (
        <FileSearch className="w-12 h-12 text-sky-400" />
      ),
      title: "Eliminate Inefficient Research",
      description: "Advanced Research Tools automate repetitive tasks, freeing you to focus on creative thinking while AI performs deep research with remarkable speed."
    },
    {
      id: 4,
      icon: (
        <Database className="w-12 h-12 text-sky-400" />
      ),
      title: "Prevent Lost Context & Information",
      description: "All-in-One Knowledge Base ensures critical insights and past research remain accessible and contextually linked through intelligent knowledge graphs."
    }
  ];

  return (
    <section className="py-20 relative z-2">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent inline-block">
          Problems We Solve
        </h2>
        <p className="color-secondary text-lg max-w-2xl mx-auto">
          Our AI-powered second brain eliminates these common challenges that researchers, 
          professionals, and knowledge workers face daily.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        {problems.map(problem => (
          <ProblemCard 
            key={problem.id}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Problems;