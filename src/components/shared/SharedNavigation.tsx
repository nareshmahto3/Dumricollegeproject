import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logoImage from 'figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png';

export function SharedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2563EB] text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                +91 123 456 7890
              </span>
              <span className="hidden md:flex items-center gap-2">
                <Mail className="w-3 h-3" />
                info@dumricollege.edu
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="hover:text-blue-200 transition-colors">
                Login
              </Link>
              <Link to="/apply" className="hover:text-blue-200 transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="Dumri College" className="h-14 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900">Dumri College</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-colors font-medium ${
                  isActive('/') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors font-medium ${
                  isActive('/about') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                }`}
              >
                About
              </Link>
              <Link
                to="/academics"
                className={`transition-colors font-medium ${
                  isActive('/academics') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                }`}
              >
                Academics
              </Link>
              <Link
                to="/gallery"
                className={`transition-colors font-medium ${
                  isActive('/gallery') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`transition-colors font-medium ${
                  isActive('/contact') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden py-4 border-t border-slate-200"
            >
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className={`transition-colors font-medium ${
                    isActive('/') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`transition-colors font-medium ${
                    isActive('/about') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/academics"
                  className={`transition-colors font-medium ${
                    isActive('/academics') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Academics
                </Link>
                <Link
                  to="/gallery"
                  className={`transition-colors font-medium ${
                    isActive('/gallery') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className={`transition-colors font-medium ${
                    isActive('/contact') ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}