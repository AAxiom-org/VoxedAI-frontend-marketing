import BlockNoteDemo from "./BlockNoteDemo";
import SandBoxDemo from "./SandBoxDemo";

const DemoSection: React.FC = () => {
    return (
      <>
        {/* Code Demo Section */}
        <section className="py-20 relative z-2">
          <div className="flex flex-col md:flex-row items-center gap-12 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold mb-6 gradient-primary-to-indigo bg-clip-text text-transparent">
                Supercharge Your Coding Skills
              </h2>
    
              <p className="color-secondary leading-relaxed mb-8">
                Our AI code assistant helps you learn programming faster by
                providing intelligent suggestions, explaining complex concepts, and
                debugging your code in real-time. Whether you're a beginner or
                advanced programmer, Voxed AI accelerates your coding journey.
              </p>
            </div>
    
            <div className="flex-1 min-w-[300px]">
              <SandBoxDemo />
            </div>
          </div>
        </section>

        {/* Block Note Demo Section */}
        <section className="py-20 relative z-2">
          <div className="flex flex-col md:flex-row items-center gap-12 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <BlockNoteDemo />
            </div>
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-4xl font-bold mb-6 gradient-primary-to-indigo bg-clip-text text-transparent">
                Take Notes
              </h2>
    
              <p className="color-secondary leading-relaxed mb-8">
                We offer in house note taking and collaboration tools. Using the
                notion style <a href="https://www.blocknotejs.org/" className="text-sky-400">BlockNote </a>
                editor, you can take notes, collaborate with Voxed, and more. Take a look
                at the demo and type "/" for a list of commands.
              </p>
            </div>
    
          </div>
        </section>
      </>
    );
};

export default DemoSection;