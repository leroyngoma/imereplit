import { Heart, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-ime-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="text-ime-light-blue w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">IME</span>
            </div>
            <p className="text-gray-300 mb-4">International Medical Exchange - Empowerment through Health. Dedicated to improving healthcare access and delivery across Africa and underserved communities in the U.S.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white">Programs</a></li>
              <li><a href="#board" className="text-gray-300 hover:text-white">Leadership</a></li>
              <li><Link href="/partners" className="text-gray-300 hover:text-white">Partners</Link></li>
              <li><a href="#webinars" className="text-gray-300 hover:text-white">Webinars</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white">News</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Medical Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Global Outreach</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Research Initiatives</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">AI Healthcare Solutions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 International Medical Exchange, Inc. All rights reserved. | Nonprofit Organization Est. 1997</p>
        </div>
      </div>
    </footer>
  );
}
