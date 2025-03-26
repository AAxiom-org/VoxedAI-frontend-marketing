import { useAuth } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
    const { isSignedIn } = useAuth();
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

    return (
        <section className="flex flex-col items-center text-center relative z-2 pointer-events-none">
            <div 
                ref={titleWordsRef}
                className="flex flex-col items-center mb-8"
            >
                {["Cultivate", "Your", "Intelligence", "Effortlessly"].map((word) => (
                    <div key={word} className="overflow-visible space-y-10">
                        {Array.from(word).map((letter, index) => (
                            <span 
                                key={index} 
                                className={`inline-block text-5xl md:text-7xl font-extrabold bg-clip-text ${
                                    word === "Intelligence" 
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
            
            <h2 className="subtitle text-2xl md:text-3xl font-medium mb-8 opacity-0 animate-fadeIn pt-50" 
                style={{ animationFillMode: "forwards" }}>
                Build an AI-assisted brain
            </h2>
            
            <div className="cta-buttons flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fadeIn pointer-events-auto"
                style={{ animationFillMode: "forwards" }}>
                {!isSignedIn && (
                    <a 
                        href="/sign-up" 
                        className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
                    >
                        Get Started
                    </a>
                )}
                <a 
                    href="/pricing" 
                    className="border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary font-semibold py-3 px-8 rounded-lg transition duration-200"
                >
                    View Pricing
                </a>
            </div>
        </section>
    );
};

export default Hero;