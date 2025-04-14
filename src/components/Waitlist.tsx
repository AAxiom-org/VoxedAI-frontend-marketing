import { Waitlist } from '@clerk/clerk-react'
import { useTheme } from '../contexts/ThemeContext';

export default function WaitlistPage() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    
    const waitlistProps = {
        appearance: {
          elements: {
            footer: {
              display: "none"
            },
            formButtonPrimary: {
              backgroundImage: "linear-gradient(to right, #38bdf8, #818cf8)",
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #0ea5e9, #6366f1)"
              }
            },
            card: {
              border: "1px solid",
              borderColor: isDarkMode ? "rgba(203, 213, 225, 0.1)" : "rgba(51, 65, 85, 0.1)",
              borderRadius: "0.75rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              color: isDarkMode ? "#f8fafc" : "#0f172a",
            },
            formFieldLabel: {
              color: isDarkMode ? "#cbd5e1" : "#334155",
            },
            formFieldInput: {
              border: "1px solid",
              color: isDarkMode ? "#f8fafc" : "#0f172a",
            }
          }
        }
    };
    
    return (
        <section id="waitlist" className="py-24">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent text-center">
                    Join Our Waitlist
                </h2>
                <p className="color-secondary mx-auto mb-10 leading-relaxed text-center text-lg max-w-3xl">
                    Be among the first to experience our AI-powered second brain. 
                    Sign up now to get early access and help shape the future of knowledge management.
                </p>
                <div className="relative rounded-xl overflow-hidden border border-adaptive bg-secondary backdrop-blur-sm shadow-adaptive w-fit">
                    <Waitlist {...waitlistProps} />
                </div>
            </div>
        </section>
    )
}