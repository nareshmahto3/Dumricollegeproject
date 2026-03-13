import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronUp,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import logoImage from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";

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
      
      // Show success toast
      toast.success('Successfully Subscribed!', {
        description: `Thank you for subscribing to our newsletter with ${email}`,
      });
      
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#0c5776] to-[#0C4F76] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1 - Logo & Description (4 columns) */}
          <div className="lg:col-span-4 ">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
                <img
                  src={logoImage}
                  alt="Dumri College Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold leading-tight">
                  Dumri Commerce Inter College
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Excellence in Education
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Dumri College has been a beacon of quality education since 1950,
              nurturing future leaders and innovators through comprehensive
              academic programs and state-of-the-art facilities.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 mt-1 flex-shrink-0" />
                <p className="text-sm text-white/70">
                  Dumri, Jharkhand, India - 825409
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a
                  href="mailto:info@dumricollege.edu"
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  info@dumricollege.edu
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links (2 columns) */}
          <div className="lg:col-span-2 ">
            <h3 className="text-base font-semibold mb-6 pb-2 border-b border-white/20">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-apply"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Contact
                </Link>
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
                <Link
                  to="/programs"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Undergraduate
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Postgraduate
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Doctoral (PhD)
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Diploma Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Certificate Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Campus Life (2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6 pb-2 border-b border-white/20">
              Campus Life
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/library"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Library
                </Link>
              </li>
              <li>
                <Link
                  to="/campus-life"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/campus-life"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/campus-life"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/campus-life"
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer"
                >
                  Hostels
                </Link>
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
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#1e40af] text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer"
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
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Facebook className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Twitter className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Youtube className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col justify-center items-center space-y-1">
          <p className="text-sm text-white/60 text-center">
            © 2026 Dumri Commerce Inter College. All rights reserved.
          </p>
          <p className="text-sm text-white/60 text-center">
            Designed By <span className="font-bold">Rayzenix</span>
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
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#2563EB] hover:bg-[#1e40af] rounded-full flex items-center justify-center transition-colors shadow-2xl cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}