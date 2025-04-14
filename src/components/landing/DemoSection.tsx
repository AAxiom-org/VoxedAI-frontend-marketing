const DemoSection: React.FC = () => {
    return (
      <>
        {/* Workspace Demo Section */}
        <section className="py-20 relative z-2">
          <div className="flex flex-col md:flex-row items-center gap-16 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                Dynamic Knowledge Spaces
              </h2>
    
              <p className="color-secondary leading-relaxed mb-8 text-lg">
                Create dedicated spaces for each project or research area. Every space functions 
                as an intelligent knowledge hub where your AI assistant analyzes all your resources—from 
                documents to code—delivering powerful insights and connections.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Smart file organization</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Web link integration</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Intuitive organization</span>
                </div>
              </div>
            </div>
    
            <div className="flex-1 min-w-[300px] bg-secondary rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  src="/videos/workspace.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover" 
                  playsInline
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Agent Section */}
        <section className="py-20 relative z-2">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                AI Research Assistants
              </h2>
    
              <p className="color-secondary leading-relaxed mb-8 text-lg">
                Each space includes an intelligent AI agent that deeply understands your work context.
                Edit content, conduct comprehensive research, extract insights from your resources,
                and receive answers to complex questions—all within your personalized knowledge environment.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Smart content editing</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Autonomous research</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Instant insight extraction</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-w-[300px] bg-secondary rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  src="/videos/digest.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover" 
                  playsInline
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Graph Section */}
        <section className="py-20 relative z-2">
          <div className="flex flex-col md:flex-row items-center gap-16 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                Visual Knowledge Graphs
              </h2>
    
              <p className="color-secondary leading-relaxed mb-8 text-lg">
                Discover connections between ideas you never knew existed. Our interactive knowledge graphs 
                visually map the relationships between concepts, topics, and insights across all your workspaces, 
                revealing patterns and sparking new directions for exploration.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Interactive exploration</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Pattern detection</span>
                </div>
                <div className="bg-secondary border border-adaptive rounded-lg px-4 py-3 flex items-center group hover:border-sky-400 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2 text-sky-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="group-hover:text-sky-400 transition-colors duration-300">Multi-layered visualization</span>
                </div>
              </div>
            </div>
    
            <div className="flex-1 min-w-[300px] bg-secondary rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-video rounded-lg overflow-hidden">
                <video 
                  src="/videos/graph.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full h-full object-cover" 
                  playsInline
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default DemoSection;