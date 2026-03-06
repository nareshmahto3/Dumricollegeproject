import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  GraduationCap,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

export function SharedNavbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Also Sticky */}
      <div
        className={`sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-amber-100 py-2 transition-all duration-300 ${
          isScrolled ? "shadow-xl shadow-amber-500/20" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3 md:gap-6">
              <a
                href="tel:+911112345678"
                className="flex items-center gap-1 md:gap-2 hover:text-amber-400 text-xs md:text-sm transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">
                  +91 11 1234 5678
                </span>
                <span className="sm:hidden">Call</span>
              </a>
              <a
                href="mailto:info@excellenceacademy.edu"
                className="hidden sm:flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3 h-3" />
                info@excellenceacademy.edu
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Button
                onClick={() => navigate("/login")}
                variant="ghost"
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 h-7 md:h-8 px-3 md:px-4 text-xs md:text-sm border-0 shadow-lg shadow-amber-500/30 font-bold"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Sticky below top bar */}
      <header
        className={`sticky top-[42px] md:top-[44px] z-40 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 transition-all duration-300 ${
          isScrolled
            ? "shadow-2xl shadow-amber-500/10"
            : "shadow-lg shadow-slate-900/50"
        }`}
      >
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Extreme Left */}
            <div
              className="flex items-center gap-2 md:gap-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 rounded-xl flex items-center justify-center shadow-xl shadow-amber-500/40">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-slate-900" />
              </div>
              <div>
                <h2 className="leading-none text-base md:text-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold">
                  Excellence Academy
                </h2>
                <p className="text-[10px] md:text-xs text-emerald-400/80 hidden sm:block font-medium">
                  A Premier Educational Institution
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Extreme Right */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button
                onClick={() => navigate("/about")}
                className="text-sm text-amber-200 hover:text-amber-400 transition-colors font-semibold"
              >
                About
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="text-sm text-amber-200 hover:text-amber-400 transition-colors font-semibold"
              >
                Gallery
              </button>
              <button
                onClick={() => navigate("/#admissions")}
                className="text-sm text-amber-200 hover:text-amber-400 transition-colors font-semibold"
              >
                Admissions
              </button>
              <button
                onClick={() => navigate("/#campus")}
                className="text-sm text-amber-200 hover:text-amber-400 transition-colors font-semibold"
              >
                Campus Life
              </button>
              <button
                onClick={() => navigate("/#news")}
                className="text-sm text-amber-200 hover:text-amber-400 transition-colors font-semibold"
              >
                News
              </button>
              <Button
                onClick={() => navigate("/apply")}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 border-0 shadow-lg shadow-amber-500/40 font-bold"
              >
                Apply Now
              </Button>
            </nav>

            {/* Mobile Menu Button - Right */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              ) : (
                <Menu className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-amber-500/20 bg-slate-900/95 backdrop-blur-md py-4">
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    navigate("/about");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-4 hover:bg-slate-800 rounded-lg text-left text-amber-200 font-semibold transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    navigate("/gallery");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-4 hover:bg-slate-800 rounded-lg text-left text-amber-200 font-semibold transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => {
                    navigate("/#admissions");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-4 hover:bg-slate-800 rounded-lg text-left text-amber-200 font-semibold transition-colors"
                >
                  Admissions
                </button>
                <button
                  onClick={() => {
                    navigate("/#campus");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-4 hover:bg-slate-800 rounded-lg text-left text-amber-200 font-semibold transition-colors"
                >
                  Campus Life
                </button>
                <button
                  onClick={() => {
                    navigate("/#news");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-4 hover:bg-slate-800 rounded-lg text-left text-amber-200 font-semibold transition-colors"
                >
                  News
                </button>
                <div className="flex flex-col gap-2 mt-2">
                  <Button
                    onClick={() => navigate("/apply")}
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 border-0 shadow-lg shadow-amber-500/40 font-bold"
                  >
                    Apply Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}