import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SK</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">SK TECHNOLOGY</h3>
                <p className="text-xs text-orange-400">Your tech brother's</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted local service provider for all computer hardware, networking, and CCTV solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Desktop & Laptop Repair</li>
              <li>CCTV Installation</li>
              <li>Printer Repair</li>
              <li>Networking Solutions</li>
              <li>Cartridge Refilling</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Parbatipur, Domjur, Howrah, West Bengal</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={18} />
                <a href="tel:+916291235368" className="hover:text-orange-400">
                  +91 6291235368
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={18} />
                <a href="tel:+916291235368" className="hover:text-orange-400">
                  +916291235368
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={18} />
                <a href="mailto:sktechnology552@gmail.com" className="hover:text-orange-400">
                  sktechnology552@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61583466272309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/_sktechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SK TECHNOLOGY. All rights reserved. Designed by Suman kr. Maity </p>
        </div>
      </div>
    </footer>
  );
}
