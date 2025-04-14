const CTASection: React.FC = () => {
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
            window.scrollTo({
                top: middle,
                behavior: 'smooth'
            });
        }
    };
    
    return (
      <section className="py-24 relative z-2">
        <div className="max-w-4xl mx-auto rounded-2xl border border-adaptive p-12 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent text-center">
            Transform How You Think and Create
          </h2>
    
          <p className="color-secondary mx-auto mb-10 leading-relaxed text-center text-lg max-w-3xl">
            Whether you're conducting research, organizing knowledge, or developing ideas,
            our AI-powered second brain amplifies your intellectual capabilities and creativity.
            Join forward-thinking professionals enhancing their productivity with our intelligent workspace.
          </p>
    
          <div className="flex justify-center gap-6 flex-wrap mb-12">
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-gradient-to-r from-primary to-sky-500 hover:from-primary-dark hover:to-sky-600 text-white py-4 px-10 rounded-md font-semibold cursor-pointer transition duration-300 hover:shadow-lg hover:-translate-y-1 shadow-adaptive"
            >
              Join The Waitlist
            </button>
      
            <button
              onClick={() => scrollToSection('demo')}
              className="bg-secondary color-primary border border-adaptive py-4 px-10 rounded-md font-semibold cursor-pointer transition-all duration-300 hover:bg-adaptive hover:-translate-y-1"
            >
              Request a Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-secondary backdrop-blur-sm border border-adaptive rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-400/10 group">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-sky-500/10 mb-4">
                <svg className="w-7 h-7 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium color-primary mb-2">Set Up in Minutes</h3>
              <p className="color-secondary text-sm">Intuitive onboarding gets you started instantly with no complex setup</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-secondary backdrop-blur-sm border border-adaptive rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-400/10 group">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-sky-500/10 mb-4">
                <svg className="w-7 h-7 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 8H5C3.93913 8 2.92172 8.42143 2.17157 9.17157C1.42143 9.92172 1 10.9391 1 12C1 13.0609 1.42143 14.0783 2.17157 14.8284C2.92172 15.5786 3.93913 16 5 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium color-primary mb-2">Seamless Integrations</h3>
              <p className="color-secondary text-sm">Connect with your existing tools and documents effortlessly</p>
            </div>
            
            <div className="flex flex-col items-center text-center bg-secondary backdrop-blur-sm border border-adaptive rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-400/10 group">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-sky-500/10 mb-4">
                <svg className="w-7 h-7 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium color-primary mb-2">Advanced AI Technology</h3>
              <p className="color-secondary text-sm">Powered by cutting-edge AI to supercharge your knowledge work</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CTASection;