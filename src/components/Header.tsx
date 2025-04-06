import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Home, Book, CreditCard, Info, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-2 sm:top-4 z-40">
      <header 
        className={`w-[95%] sm:w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto
                  rounded-xl flex justify-between items-center p-1 sm:p-1.5 bg-white px-3 sm:px-4
                  ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : ''}`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center py-2 relative z-10 w-8 sm:w-10 cursor-pointer">
          <img src={theme === "dark" ? "/voxed-icon-dark.png" : "/voxed-icon.png"} alt="Voxed" className="w-full" />
        </a>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <a
            href="#"
            className="flex items-center gap-2 color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <Home className="size-4" />
            <span className="hidden sm:inline text-m">Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <Book className="size-4" />
            <span className="hidden sm:inline text-m">Blog</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <Info className="size-4" />
            <span className="hidden sm:inline text-m">About</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <CreditCard className="size-4" />
            <span className="hidden sm:inline text-m">Pricing</span>
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="ml-2 md:hidden focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        <div className="flex items-center gap-2">
          {/* Enter App Button */}
          <a
            href={isSignedIn ? "https://app.voxed.ai" : "/sign-in"}
            className="flex items-center gap-1 sm:gap-2 color-secondary no-underline font-medium transition-colors hover-text-adaptive relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            <span className="hidden xs:inline text-sm sm:text-m">Enter App</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Animated Mobile Navigation Dropdown */}
      <div 
        className={`
          absolute left-0 right-0 top-[calc(100%-2px)] md:hidden z-30 mx-auto w-[95%] sm:w-[90%] bg-white dark:bg-gray-900 rounded-xl 
          overflow-hidden shadow-lg transition-all duration-300 ease-in-out mt-1
          ${mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
          transitionProperty: 'max-height, opacity, transform'
        }}
      >
        <nav className="flex flex-col gap-1 p-3">
          <a
            href="#"
            className="flex items-center gap-2 p-2 color-secondary no-underline font-medium rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home className="size-4" />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 p-2 color-secondary no-underline font-medium rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Book className="size-4" />
            <span>Blog</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 p-2 color-secondary no-underline font-medium rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Info className="size-4" />
            <span>About</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 p-2 color-secondary no-underline font-medium rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            <CreditCard className="size-4" />
            <span>Pricing</span>
          </a>
          <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-1"></div>
          <a
            href={isSignedIn ? "https://app.voxed.ai" : "/sign-in"}
            className="flex items-center justify-center gap-2 bg-gradient-to-br from-sky-400 to-indigo-400 text-white p-2 rounded-lg font-medium m-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Enter App</span>
            <ArrowRight className="size-4" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;