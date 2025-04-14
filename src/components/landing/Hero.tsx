import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
    const titleWordsRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const titleWords = titleWordsRef.current;
        if (!titleWords) return;
        
        // Get all letters across all words
        const words = Array.from(titleWords.children);
        const allLetters: HTMLElement[] = [];
        
        // Collect all letters
        words.forEach(word => {
            const letters = Array.from(word.children);
            letters.forEach(letter => {
                allLetters.push(letter as HTMLElement);
                // Initially hide all letters
                (letter as HTMLElement).style.opacity = "0";
            });
        });
        
        // Animate each letter in sequence with progressively increasing delay
        allLetters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = "1";
                letter.classList.add("animate-letter");
                letter.style.animationDelay = "0s"; // Start animation immediately once opacity is set
            }, 80 * index); // Each letter starts 80ms after the previous one
        });
        
        // Set the subtitle animation delay based on total letters
        const subtitleDelay = (allLetters.length * 80) + 500;
        const subtitle = document.querySelector('.subtitle') as HTMLElement;
        const cta = document.querySelector('.cta-buttons') as HTMLElement;
        
        if (subtitle) {
            subtitle.style.animationDelay = `${subtitleDelay}ms`;
        }
        
        if (cta) {
            cta.style.animationDelay = `${subtitleDelay + 400}ms`;
        }
    }, []);

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
        <section className="flex flex-col items-center text-center relative z-2 pointer-events-none pt-32">
            <div 
                ref={titleWordsRef}
                className="flex flex-col items-center mb-10"
            >
                {["Your", "Second", "Brain", "Powered", "by", "AI"].map((word) => (
                    <div key={word} className="overflow-visible space-y-8">
                        {Array.from(word).map((letter, index) => (
                            <span 
                                key={index} 
                                className={`inline-block text-5xl md:text-7xl font-extrabold bg-clip-text ${
                                    word === "AI" || word === "Brain"
                                    ? "text-transparent bg-gradient-to-r from-primary to-sky-500" 
                                    : "text-gray-700"
                                }`}
                                style={{ 
                                    opacity: 0,
                                    willChange: "transform, opacity"
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
            
            <p className="subtitle text-lg md:text-xl max-w-3xl font-medium mb-10 opacity-0 animate-fadeIn pt-6" 
                style={{ animationFillMode: "forwards" }}>
                Effortlessly research, synthesize complex information, and generate insights through intelligent agents and dynamic visual knowledge graphs, connecting ideas in ways you never imagined.
            </p>
            
            <div className="cta-buttons flex flex-col sm:flex-row gap-5 mt-10 opacity-0 animate-fadeIn pointer-events-auto"
                style={{ animationFillMode: "forwards" }}>
                <button 
                    onClick={() => scrollToSection('waitlist')}
                    className="bg-gradient-to-r from-primary to-sky-500 hover:from-primary-dark hover:to-sky-600 text-white font-semibold py-4 px-10 rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                >
                    Join The Waitlist
                </button>
                <button 
                    onClick={() => scrollToSection('demo')}
                    className="bg-transparent border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary font-semibold py-4 px-10 rounded-md transition duration-300 hover:bg-secondary cursor-pointer"
                >
                    Request a Demo
                </button>
            </div>
        </section>
    );
};

export default Hero;