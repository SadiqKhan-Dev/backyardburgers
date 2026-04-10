import { Link } from 'react-router-dom';
import { Clock, Phone, Mail, MapPin, Beef, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-xl shadow-lg">
                <Beef className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-brand">Backyard Burgers</h3>
                <p className="text-xs text-gray-400 font-heading tracking-wide">Fresh & Delicious</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Serving the best burgers in town since 2020. Quality ingredients, bold flavors.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white text-xs font-bold"
              >
                FB
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white text-xs font-bold"
              >
                TW
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white text-xs font-bold"
              >
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-gray-200 font-heading">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-white transition-colors">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4 text-gray-200 font-heading">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 10am - 10pm</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Sat-Sun: 9am - 11pm</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Holidays: 11am - 9pm</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-gray-200 font-heading">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Burger Street</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@backyardburgers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center space-x-2">
            <span>© 2026 Backyard Burgers. All rights reserved. Made with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>and</span>
            <Beef className="w-4 h-4 text-accent-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
