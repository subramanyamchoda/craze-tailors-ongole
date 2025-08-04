import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex justify-between items-center">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="tailor.png" // Replace this path with your actual image path
              alt="Craze Tailors Logo"
              className="w-25 h-19 object-contain rounded-2xl"
            />
            <span className="text-2xl font-bold text-gray-900">
              Craze Tailors
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-black font-medium transition text-lg">Home</Link>
            <Link to="/shirts" className="text-gray-700 hover:text-black font-medium transition text-lg">Shirts</Link>
            <Link to="/pants" className="text-gray-700 hover:text-black font-medium transition text-lg">Pants</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black font-medium transition text-lg">Contact</Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 border-t border-gray-200 shadow"
          >
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 font-medium text-lg">Home</Link>
            <Link to="/shirts" onClick={toggleMenu} className="block text-gray-700 font-medium text-lg">Shirts</Link>
            <Link to="/pants" onClick={toggleMenu} className="block text-gray-700 font-medium text-lg">Pants</Link>
            <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 font-medium text-lg">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
