import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../UI/Button';
import TopBar from './Topbar';
import Logo from '../../assets/logo.jpg';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Team', path: '/team' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact-us' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      {/* Top Contact Bar - Desktop Only */}
      <div className="hidden lg:block">
        <TopBar />
      </div>

      {/* Main Navbar */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                alt="BDEO Logo" 
                src={Logo} 
                className="w-10 h-10 md:w-12 md:h-12 rounded-md"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  <span className="text-blue-700">B</span>.
                  <span className="text-blue-600">D</span>.
                  <span className="text-blue-500">E</span>.
                  <span className="text-blue-400">O</span>
                </h1>
                <p className="text-[10px] md:text-xs text-gray-500 font-medium hidden sm:block">
                  Bost Development & Educational Organization
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`px-4 nav-link py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                          isActive
                            ? 'text-blue-700 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              
              {/* Divider */}
              <div className="w-px h-6 bg-gray-300 mx-2" />
              
              {/* Support Us Button */}
              <Button
                text={
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 animate-bounce`" />
                    <span>Support Us</span>
                  </div>
                }
                classes="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-colors duration-200 shadow-sm"
                onClick={() => navigate('/support-us')}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              {/* Support Button - Mobile/Tablet */}
              <button
                onClick={() => navigate('/support-us')}
                className="mr-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline">Support</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  alt="BDEO Logo"
                  src={Logo}
                  className="w-12 h-12 rounded-md"
                />
                <div>
                  <h2 className="font-bold text-lg text-gray-900">B.D.E.O</h2>
                  <p className="text-xs text-gray-500">Development & Education</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-4 h-[calc(100vh-88px)] overflow-y-auto">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`block nav-link px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200" />

              {/* Support Button */}
              <div className="mt-8 px-4">
                <Button
                  text={
                    <div className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5 animate-bounce" />
                      <span className="font-semibold">Support Our Mission</span>
                    </div>
                  }
                  classes="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-800 transition-colors duration-200"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => navigate('/support-us'), 300);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;