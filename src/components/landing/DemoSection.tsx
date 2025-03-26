import BlockNoteDemo from "./BlockNoteDemo";
import SandBoxDemo from "./SandBoxDemo";

const DemoSection: React.FC = () => {
    return (
      <>
        {/* Workspace Demo Section */}
        <section className="py-20 relative z-2">
          <div className="flex flex-col md:flex-row items-center gap-12 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold mb-6 gradient-primary-to-indigo bg-clip-text text-transparent">
                Dynamic Spaces for Every Project
              </h2>
    
              <p className="color-secondary leading-relaxed mb-8">
                Create dedicated Spaces for each project, paper, or coding task. Every Space serves 
                as a dynamic knowledge base where your AI assistant can access and analyze all your resources, 
                from code snippets to research papers, delivering seamless productivity.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Organized file system</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Web link integration</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Intuitive organization</span>
                </div>
              </div>
            </div>
    
            <div className="flex-1 min-w-[300px]">
              <SandBoxDemo />
            </div>
          </div>
        </section>

        {/* AI Agent Section */}
        <section className="py-20 relative z-2">
          <div className="flex flex-col md:flex-row items-center gap-12 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <BlockNoteDemo />
            </div>
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold mb-6 gradient-primary-to-indigo bg-clip-text text-transparent">
                Your Personal AI Research Assistant
              </h2>
    
              <p className="color-secondary leading-relaxed mb-8">
                Each Space comes with an integrated AI Agent that understands the context of your work.
                Edit and refine content, conduct comprehensive research, extract insights from saved resources,
                and get instant answers to complex questions—all within a single, intelligent workspace.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Advanced content editing</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>In-depth research</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Instant insight extraction</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default DemoSection;