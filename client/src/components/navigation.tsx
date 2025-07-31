import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import IMELogo from "@/components/ime-logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" onClick={closeMobileMenu}>
              <IMELogo className="h-10 w-10 mr-3" />
              <span className="text-ime-blue text-[16px] font-semibold">International Medical Exchange</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#ai4african" className="text-ime-gray hover:text-ime-light-blue transition-colors font-medium">AI4African Health</a>
              <a href="#about" className="text-ime-gray hover:text-ime-light-blue transition-colors font-medium">About</a>
              <a href="#programs" className="text-ime-gray hover:text-ime-light-blue transition-colors font-medium">Programs</a>
              <a href="#board" className="text-ime-gray hover:text-ime-light-blue transition-colors font-medium">Leadership</a>
              <Link href="/partners" className="text-ime-gray hover:text-ime-light-blue transition-colors font-medium">Partners</Link>
              <a href="#webinars" className="text-ime-gray hover:text-ime-light-blue transition-colors font-medium">Webinars</a>
              <a href="#contact" className="text-ime-gray hover:text-ime-light-blue transition-colors font-medium">Contact</a>
              <a href="#donate" className="bg-ime-gold hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold transition-colors">Donate</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-ime-gray hover:text-ime-light-blue"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#ai4african" className="block px-3 py-2 text-ime-gray hover:text-ime-light-blue" onClick={closeMobileMenu}>AI4African Health</a>
            <a href="#about" className="block px-3 py-2 text-ime-gray hover:text-ime-light-blue" onClick={closeMobileMenu}>About</a>
            <a href="#programs" className="block px-3 py-2 text-ime-gray hover:text-ime-light-blue" onClick={closeMobileMenu}>Programs</a>
            <a href="#board" className="block px-3 py-2 text-ime-gray hover:text-ime-light-blue" onClick={closeMobileMenu}>Leadership</a>
            <Link href="/partners" className="block px-3 py-2 text-ime-gray hover:text-ime-light-blue" onClick={closeMobileMenu}>Partners</Link>
            <a href="#webinars" className="block px-3 py-2 text-ime-gray hover:text-ime-light-blue" onClick={closeMobileMenu}>Webinars</a>
            <a href="#contact" className="block px-3 py-2 text-ime-gray hover:text-ime-light-blue" onClick={closeMobileMenu}>Contact</a>
            <a href="#donate" className="block px-3 py-2 bg-ime-gold text-white rounded ml-3 mr-3" onClick={closeMobileMenu}>Donate</a>
          </div>
        </div>
      )}
    </nav>
  );
}
