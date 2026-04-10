import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  ShoppingCart,
  Menu,
  X,
  Sun,
  Moon,
  Home,
  BookOpen,
  Users,
  ClipboardList,
  Settings
} from 'lucide-react';

function Navbar({ cartOpen, setCartOpen, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useSelector((state) => state.cart);
  const location = useLocation();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Menu', path: '/menu', icon: BookOpen },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Orders', path: '/orders', icon: ClipboardList },
    { name: 'Admin', path: '/admin', icon: Settings },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Backyard Burgers.png" 
              alt="Backyard Burgers Logo" 
              className="h-14 w-auto object-contain drop-shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-500 font-brand">
                Backyard Burgers
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-heading tracking-wide">Fresh & Delicious</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 font-semibold transition-colors duration-200 px-3 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-gray-300 dark:border-gray-600 shadow-md transition-all duration-200"
              aria-label="Toggle dark mode"
              title="Toggle dark/light mode"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300 fill-gray-700 dark:fill-gray-300" />
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border-2 border-gray-300 dark:border-gray-600 shadow-md transition-all"
              aria-label="Toggle dark mode"
              title="Toggle dark/light mode"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300 fill-gray-700 dark:fill-gray-300" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-down bg-white dark:bg-gray-800">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 font-semibold px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setCartOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-3 px-4 py-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg font-semibold"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({cartItemCount})</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
