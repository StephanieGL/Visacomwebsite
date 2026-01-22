import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-wide mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-medium text-foreground">
              Claritas
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Services
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              How It Works
            </a>
            <a href="#portal" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Client Portal
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

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
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#portal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Client Portal
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
