import { useAuth } from '@clerk/clerk-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar: React.FC = () => {
    const { isSignedIn } = useAuth();
    const { theme } = useTheme();
    return (
        <nav className="flex justify-between items-center relative z-10">
        <a href="/" className="flex justify-between items-center py-8 relative z-10 w-12 cursor-pointer">
            <img src={theme === "dark" ? "/voxed-icon-dark.png" : "/voxed-icon.png"} alt="Voxed" className="w-full" />
        </a>
        <div className="hidden md:flex gap-10">
            <a
            href="#"
            className="color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
            >
            Home
            </a>
            <a
            href="#"
            className="color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
            >
            Blog
            </a>
            <a
            href="#"
            className="color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
            >
            About
            </a>
            <a
            href="#"
            className="color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
            >
            Pricing
            </a>
        </div>

        <a
            href={isSignedIn ? "https://app.voxed.ai" : "/sign-in"}
            className="bg-gradient-to-br from-sky-400 to-indigo-400 color-primary border-none py-3 px-6 rounded-lg font-semibold cursor-pointer transition duration-200 hover:translate-y-[-2px] hover:shadow-lg shadow-adaptive no-underline"
        >
            Enter App
        </a>
        </nav>
    );
};

export default Navbar;