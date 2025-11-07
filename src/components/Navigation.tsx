import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/LOGO.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={() => setIsOpen(false)}>
              <img 
                src={logo} 
                alt="TechPearl MW Logo" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
              />
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                TechPearl MW
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              to="/programs"
              className={`transition-colors ${
                isActive("/programs")
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Programs
            </Link>
            <Link
              to="/blog"
              className={`transition-colors ${
                isActive("/blog")
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              News & Blog
            </Link>
            <Link
              to="/resources"
              className={`transition-colors ${
                isActive("/resources")
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/join-us"
              className={`transition-colors ${
                isActive("/join-us")
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Get Involved
            </Link>
            <Link to="/contact">
              <Button size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2 border-t border-border mt-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                isActive("/")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-accent"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                isActive("/about")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-accent"
              }`}
            >
              About
            </Link>
            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                isActive("/programs")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-accent"
              }`}
            >
              Programs
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                isActive("/blog")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-accent"
              }`}
            >
              News & Blog
            </Link>
            <Link
              to="/resources"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                isActive("/resources")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-accent"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/join-us"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                isActive("/join-us")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "hover:bg-accent"
              }`}
            >
              Get Involved
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button
                className="w-full mt-2"
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
