import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "wouter";
import IMELogo from "@/components/ime-logo";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <IMELogo className="h-12 w-auto object-contain mr-2" />
            </div>
            <p className="text-black mb-4">International Medical Exchange - Empowerment through Health. Dedicated to improving healthcare access and delivery across Africa and underserved communities in the U.S.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-black"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-black hover:text-black"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-black hover:text-black"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-black hover:text-black"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-black hover:text-black">About Us</a></li>
              <li><a href="#programs" className="text-black hover:text-black">Programs</a></li>
              <li><a href="#board" className="text-black hover:text-black">Leadership</a></li>
              <li><Link href="/partners" className="text-black hover:text-black">Partners</Link></li>
              <li><a href="#webinars" className="text-black hover:text-black">Webinars</a></li>
              <li><a href="#news" className="text-black hover:text-black">News</a></li>
              <li><a href="#contact" className="text-black hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-black">Medical Training</a></li>
              <li><a href="#" className="text-black hover:text-black">Global Outreach</a></li>
              <li><a href="#" className="text-black hover:text-black">Research Initiatives</a></li>
              <li><a href="#" className="text-black hover:text-black">AI Healthcare Solutions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-black">&copy; 2024 International Medical Exchange, Inc. All rights reserved. | Nonprofit Organization Est. 1997</p>
        </div>
      </div>
    </footer>
  );
}
