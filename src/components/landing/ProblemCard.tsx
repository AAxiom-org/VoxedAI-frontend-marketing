import React, { ReactNode } from "react";

interface ProblemCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}
  
const ProblemCard: React.FC<ProblemCardProps> = ({
    icon,
    title,
    description,
}) => {
    return (
        <div className="bg-secondary backdrop-blur-sm border border-adaptive rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-400/10 group">
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">{icon}</div>

            <h3 className="text-xl font-bold mb-3 color-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-sky-400 transition-all duration-300">{title}</h3>

            <p className="color-secondary leading-relaxed text-sm">{description}</p>
        </div>
    );
};

export default ProblemCard;