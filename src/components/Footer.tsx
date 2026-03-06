import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#1a4d6d] text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 border-b border-white/10">
          {/* Column 1 - Logo & Description (4 columns) */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">Dumri College</p>
                <p className="text-xs text-white/60">Excellence in Education</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Dumri College has been a beacon of quality education since 1950, nurturing future leaders and innovators through comprehensive academic programs and state-of-the-art facilities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 mt-1 flex-shrink-0" />
                <p className="text-sm text-white/70">Dumri, Jharkhand, India - 825409</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm text-white/70 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a href="mailto:info@dumricollege.edu" className="text-sm text-white/70 hover:text-white transition-colors">
                  info@dumricollege.edu
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links (2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 pb-2 border-b border-white/20">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="/academics" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Academics
                </a>
              </li>
              <li>
                <a href="/admissions" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Programs (2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 pb-2 border-b border-white/20">
              Programs
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/programs/undergraduate" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Undergraduate
                </a>
              </li>
              <li>
                <a href="/programs/postgraduate" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Postgraduate
                </a>
              </li>
              <li>
                <a href="/programs/doctoral" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Doctoral (PhD)
                </a>
              </li>
              <li>
                <a href="/programs/diploma" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Diploma Courses
                </a>
              </li>
              <li>
                <a href="/programs/certificate" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Certificate Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Campus (2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 pb-2 border-b border-white/20">
              Campus Life
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/campus/library" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Library
                </a>
              </li>
              <li>
                <a href="/campus/facilities" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Facilities
                </a>
              </li>
              <li>
                <a href="/campus/events" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Events
                </a>
              </li>
              <li>
                <a href="/campus/sports" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Sports
                </a>
              </li>
              <li>
                <a href="/campus/hostels" className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Hostels
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Newsletter (2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 pb-2 border-b border-white/20">
              Newsletter
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to get latest updates and news from Dumri College.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#1e40af] text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-white/70 mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex justify-center items-center">
          <p className="text-sm text-white/60 text-center">
            © {new Date().getFullYear()} Dumri College. All rights reserved. | Designed by EduManage Pro
          </p>
        </div>
      </div>

      {/* Fixed Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#2563EB] hover:bg-[#1e40af] rounded-full flex items-center justify-center transition-colors shadow-2xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
