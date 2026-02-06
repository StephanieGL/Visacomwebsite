import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
        Now accepting new clients...!
      </div>

      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container-wide mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Left - Empty for balance */}
            <div className="w-10" />

            {/* Center Logo */}
            <a href="/" className="flex flex-col items-center gap-0">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-wide">
                VISAS.COM
              </span>
            </a>

            {/* Right - Hamburger Menu */}
            <div className="relative" ref={menuRef}>
              <button
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50 animate-fade-in">
                  <nav className="py-2">
                    <a
                      href="#account"
                      className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      My Account
                    </a>
                    <a
                      href="#about"
                      className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      About Us
                    </a>
                    <a
                      href="#contact"
                      className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      Contact Us
                    </a>
                    <a
                      href="#testimonials"
                      className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      Reviews
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;