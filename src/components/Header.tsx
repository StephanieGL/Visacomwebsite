import { Button } from "@/components/ui/button";
import { Menu, X, Compass } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
        <span className="hidden sm:inline">NOW ACCEPTING</span>
        <span className="sm:hidden">ACCEPTING</span>
        {" · "}NEW{" · "}CLIENTS{" · "}FOR{" · "}MARCH{" · "}&{" · "}BEYOND
      </div>

      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container-wide mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                WORK WITH US
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ABOUT
              </a>
            </nav>

            {/* Center Logo */}
            <a href="/" className="flex flex-col items-center gap-0">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-wide">
                CLARITAS
              </span>
            </a>

            {/* Right Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                RESOURCES
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                CONTACT
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-border animate-fade-in">
              <nav className="flex flex-col gap-4">
                <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  WORK WITH US
                </a>
                <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  ABOUT
                </a>
                <a href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  RESOURCES
                </a>
                <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  CONTACT
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;