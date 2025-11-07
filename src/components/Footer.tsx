import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-hero bg-clip-text text-transparent">
              TechPearl MW
            </h3>
            <p className="text-background/80 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
              Empowering girls and women in Malawi through technology education
              and mentorship.
            </p>
            <div className="space-y-2 text-xs md:text-sm text-background/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <a href="mailto:techpearlmw1@gmail.com" className="hover:text-primary break-all">
                  techpearlmw1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <a href="tel:+265881874766" className="hover:text-primary">
                  +265 88 18 74 766
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 mt-1 flex-shrink-0" />
                <span className="break-words">P O Box x95, Crossroads, Lilongwe, Malawi</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-background/80 text-sm md:text-base">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors inline-block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-primary transition-colors inline-block py-1">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors inline-block py-1">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary transition-colors inline-block py-1">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="hover:text-primary transition-colors inline-block py-1">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors inline-block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Programs</h4>
            <ul className="space-y-2 text-background/80 text-sm md:text-base">
              <li className="py-1">Coding Workshops</li>
              <li className="py-1">Tech Mentorship</li>
              <li className="py-1">Leadership Bootcamp</li>
              <li className="py-1">Annual Hackathon</li>
              <li className="py-1">Career Development</li>
              <li className="py-1">Community Events</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Connect With Us</h4>
            <p className="text-background/80 text-xs md:text-sm mb-3 md:mb-4">
              Join our community on social media for updates, inspiration, and opportunities.
            </p>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <a
                href="https://web.facebook.com/techpearlmw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://x.com/techpearlmw?t=Rjjqg49BEbM_pGaHV3y4Lg&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.instagram.com/techpearlmw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/techpearl-malawi-405682201"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.youtube.com/@techpearlmalawi7099"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 md:pt-8 mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/70 text-xs md:text-sm">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} TechPearl MW. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/login" className="hover:text-primary transition-colors inline-block py-1">
                Admin Login
              </Link>
              <a href="#" className="hover:text-primary transition-colors inline-block py-1">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors inline-block py-1">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
