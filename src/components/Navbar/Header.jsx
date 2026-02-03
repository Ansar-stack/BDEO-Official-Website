import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../UI/Button';
import TopBar from './Topbar';
import Logo from '../../assets/logo.jpg'
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Team', path: '/team' },
    { name: 'Faqs', path: '/faqs' },
    { name: 'Contact', path: '/contact-us' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-gray-900">
      {/* Top Contact Bar - Desktop Only */}
      <TopBar />

      {/* Main Navbar */}
      <nav className="h-14 md:h-17.5 relative w-full px-6 md:px-5 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        {/* Logo Section */}
        <Link to="/" className="text-blue-600 flex items-center">
          <img src={Logo} className='w-14 h-14'/>
          <span className="ml-2 font-bold text-xl">B.D.E.O</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center md:gap-5 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-gray-700 transition font-semibold">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Support Us Button (Desktop) */}
          <Button text={`Support Us`} classes={'primary-btn'} onClick={()=>{
            navigate('/support-us');
          }}/>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu absolute top-14 left-0 w-full bg-white p-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col space-y-2 text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button text={`Support Our Work`} classes={'primary-btn mt-2'} onClick={()=>{
            setIsMobileMenuOpen(false);
            navigate('/support-us');
          }}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;