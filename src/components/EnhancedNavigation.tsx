import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight, ArrowRight, X, Phone, Mail, MapPin, BookOpen, Users, DollarSign } from "lucide-react";
import { Link, useNavigate } from "react-router";
import svgPaths from "../imports/svg-huz7s4pefh";
import topBarSvgPaths from "../imports/svg-degwf4psdx";
import logoImg from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";
import graduateImg from "figma:asset/9192be86390b13cb1cada857d52db1898eab25b9.png";

interface DropdownItem {
  label: string;
  href?: string;
  submenu?: DropdownItem[];
  highlighted?: boolean;
}

interface NavItem {
  label: string;
  href?: string;
  isActive?: boolean;
  dropdown?: DropdownItem[];
}

// Search Icon SVG Component
function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={svgPaths.pb781390} fill="currentColor" />
    </svg>
  );
}

// Menu Icon SVG Component
function MenuIcon() {
  return (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={svgPaths.pbe6f180} fill="currentColor" />
    </svg>
  );
}

// Graduation Cap Icon for Top Bar
function GraduationCapIcon() {
  return (
    <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
      <svg className="absolute inset-[43.96%_21.56%_32.56%_21.73%]" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6107 5.63393">
        <path d={topBarSvgPaths.p3a4d7c00} fill="white" />
      </svg>
      <svg className="absolute inset-[16.67%_0%_20.59%_0%]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 15.0578">
        <path d={topBarSvgPaths.p19432500} fill="white" />
      </svg>
    </div>
  );
}

// Top Bar Component
function TopBar() {
  const navigate = useNavigate();
  
  return (
    <div className="w-full bg-[#2563EB] py-2 px-5">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Left Side - Welcome Message */}
        <div className="flex items-center gap-2.5">
          <GraduationCapIcon />
          <p className="text-white text-sm font-medium leading-7">Welcome to Dumri College</p>
        </div>

        {/* Right Side - Quick Links & Login */}
        <div className="flex items-center">
          <Link
            to="/tuition"
            className="text-white text-sm px-3 hover:text-white/80 transition-colors leading-[10px]"
          >
            Tuition & Fee
          </Link>
          <div className="h-[10px] border-l border-white/20 mx-3" />
          <Link
            to="/apply"
            className="text-white text-sm px-3 hover:text-white/80 transition-colors leading-[10px]"
          >
            How to Apply
          </Link>
          <div className="h-[10px] border-l border-white/20 mx-3" />
          <Link
            to="/requirements"
            className="text-white text-sm px-3 hover:text-white/80 transition-colors leading-[10px]"
          >
            Requirements
          </Link>
          <div className="h-[10px] border-l border-white/20 mx-3" />
          <Link
            to="/contact"
            className="text-white text-sm px-3 hover:text-white/80 transition-colors leading-[10px]"
          >
            Contact
          </Link>
          <div className="h-[10px] border-l border-white/20 mx-3" />
          <button
            onClick={() => navigate("/login")}
            className="text-white text-sm px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded transition-colors font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export function EnhancedNavigation() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyNDkxNTExfDA&ixlib=rb-4.1.0&q=80&w=400",
    "https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc3MjQwMjY4NXww&ixlib=rb-4.1.0&q=80&w=400",
    "https://images.unsplash.com/photo-1646724340319-4bbf6322402a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNDU2OTc4fDA&ixlib=rb-4.1.0&q=80&w=400",
    "https://images.unsplash.com/photo-1595315342809-fa10945ed07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NzI0OTA2MDF8MA&ixlib=rb-4.1.0&q=80&w=400",
    "https://images.unsplash.com/photo-1715419048742-cb9cfe6aa54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3BvcnRzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyNDk1MDkxfDA&ixlib=rb-4.1.0&q=80&w=400",
    "https://images.unsplash.com/photo-1757192420362-3629ce30d2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyNDA3NzE2fDA&ixlib=rb-4.1.0&q=80&w=400",
  ];

  // Search suggestions based on query
  const searchSuggestions = [
    { title: "Programs", href: "/programs", category: "Academics" },
    { title: "Admissions", href: "/admissions", category: "Apply" },
    { title: "Campus Life", href: "/campus-life", category: "Student Life" },
    { title: "Research", href: "/research", category: "Academics" },
    { title: "About Us", href: "/about", category: "Information" },
    { title: "Contact", href: "/contact", category: "Support" },
    { title: "Professors", href: "/professors", category: "Faculty" },
    { title: "Events", href: "/events", category: "Campus" },
    { title: "Libraries", href: "/libraries", category: "Resources" },
    { title: "Scholarships", href: "/scholarships", category: "Financial" },
  ];

  const filteredSuggestions = searchQuery
    ? searchSuggestions.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchSuggestions;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      isActive: true,
    },
    {
      label: "About Us",
      dropdown: [
        { label: "About us", href: "/about" },
        { label: "History", href: "/history" },
        { label: "Administration", href: "/administration" },
        { label: "Campus Map", href: "/campus-map" },
        { label: "Mission & Value", href: "/mission" },
        { label: "Vice-Chancellor", href: "/vice-chancellor" },
      ],
    },
    {
      label: "Pages",
      dropdown: [
        { label: "Campus Life", href: "/campus-life" },
        {
          label: "Research",
          submenu: [
            { label: "Research", href: "/research" },
            { label: "Research Details", href: "/research-details" },
          ],
        },
        { label: "Scholarships", href: "/scholarships" },
        {
          label: "All Events",
          submenu: [
            { label: "All Events", href: "/events" },
            { label: "Events Details", href: "/events-details" },
          ],
        },
        { label: "Libraries", href: "/libraries" },
        {
          label: "Alumni",
          submenu: [
            { label: "Alumni", href: "/alumni" },
            { label: "Alumni Association", href: "/alumni-association" },
          ],
        },
        { label: "Student Life", href: "/student-life" },
        { label: "Professors", href: "/professors" },
      ],
    },
    {
      label: "Academics",
      dropdown: [
        { label: "Programs", href: "/programs" },
        { label: "Graduate", href: "/programs?type=graduate" },
        { label: "Undergraduate", href: "/programs?type=undergraduate" },
        { label: "Online Programs", href: "/programs?type=online" },
      ],
    },
    {
      label: "Blog",
      dropdown: [
        { label: "Admissions", href: "/admissions" },
        { label: "How to Apply", href: "/apply" },
        { label: "Tuition & Aid", href: "/tuition" },
        { label: "Visit Campus", href: "/visit" },
      ],
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <TopBar />

      <header className="w-full bg-white py-3 px-5 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logoImg}
                alt="Dumri College"
                className="h-12 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubmenu(null);
                  }}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`px-3 py-6 text-sm transition-colors ${
                        item.isActive
                          ? "text-[#2563EB] font-medium"
                          : "text-[#030303] hover:text-[#2563EB]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="px-3 py-6 text-sm text-[#030303] hover:text-[#2563EB] transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <>
                        {/* Academics Mega Menu */}
                        {item.label === "Academics" ? (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="fixed left-1/2 -translate-x-1/2 top-[120px] w-[900px] bg-white shadow-[0px_2px_35px_0px_rgba(0,0,0,0.04)] rounded-lg overflow-hidden z-[60]"
                          >
                            <div className="flex">
                              {/* Faculty Column */}
                              <div className="flex-1 p-6 border-r border-gray-100">
                                <div className="flex items-center gap-2 mb-4">
                                  <Users className="w-4 h-4 text-gray-600" />
                                  <h3 className="text-sm font-bold text-gray-800">Faculty & Departments</h3>
                                </div>
                                <div className="space-y-2">
                                  <Link to="/faculty-areas" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    All Departments
                                  </Link>
                                  <Link to="/faculty/engineering" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Faculty of Engineering
                                  </Link>
                                  <Link to="/faculty/sciences" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Faculty of Sciences
                                  </Link>
                                  <Link to="/faculty/arts" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Faculty of Arts
                                  </Link>
                                  <Link to="/faculty/commerce" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Faculty of Commerce
                                  </Link>
                                  <Link to="/faculty/education" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Faculty of Education
                                  </Link>
                                  <Link to="/faculty-members-one" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Faculty Members
                                  </Link>
                                  <Link to="/member-details" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Faculty Profile
                                  </Link>
                                </div>
                              </div>

                              {/* Programs Column */}
                              <div className="flex-1 p-6 border-r border-gray-100">
                                <div className="flex items-center gap-2 mb-4">
                                  <BookOpen className="w-4 h-4 text-gray-600" />
                                  <h3 className="text-sm font-bold text-gray-800">Programs & Courses</h3>
                                </div>
                                <div className="space-y-2">
                                  <Link to="/programs" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    All Programs
                                  </Link>
                                  <Link to="/programs?type=undergraduate" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Undergraduate Programs
                                  </Link>
                                  <Link to="/programs?type=postgraduate" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Postgraduate Programs
                                  </Link>
                                  <Link to="/programs?type=diploma" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Diploma Courses
                                  </Link>
                                  <Link to="/programs?type=certificate" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Certificate Programs
                                  </Link>
                                  <Link to="/programs?type=online" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Online Programs
                                  </Link>
                                  <Link to="/academic-calendar" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Academic Calendar
                                  </Link>
                                  <Link to="/course-catalog" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Course Catalog
                                  </Link>
                                </div>
                              </div>

                              {/* Others Column */}
                              <div className="flex-1 p-6 border-r border-gray-100">
                                <div className="flex items-center gap-2 mb-4">
                                  <DollarSign className="w-4 h-4 text-gray-600" />
                                  <h3 className="text-sm font-bold text-gray-800">Admissions & Resources</h3>
                                </div>
                                <div className="space-y-2">
                                  <Link to="/tuition" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Tuition & Fees
                                  </Link>
                                  <Link to="/apply" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    How to Apply
                                  </Link>
                                  <Link to="/requirements" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Admission Requirements
                                  </Link>
                                  <Link to="/scholarships" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Scholarships
                                  </Link>
                                  <Link to="/financial-aid" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Financial Aid
                                  </Link>
                                  <Link to="/research" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Research Programs
                                  </Link>
                                  <Link to="/international-students" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    International Students
                                  </Link>
                                  <Link to="/apply-now" className="block text-sm text-gray-600 hover:text-[#2563EB] transition-colors py-1">
                                    Apply Now
                                  </Link>
                                </div>
                              </div>

                              {/* Promotional Section */}
                              <div className="w-[280px] bg-gradient-to-br from-[#16a34a] to-[#15803d] p-6 flex flex-col justify-between relative overflow-hidden">
                                <div>
                                  <h3 className="text-white text-4xl font-bold mb-1">2K+</h3>
                                  <p className="text-white text-base font-medium leading-snug">
                                    Regular Univet<br />Students
                                  </p>
                                  <motion.button
                                    onClick={() => navigate("/apply")}
                                    whileHover={{ scale: 1.05 }}
                                    className="mt-4 bg-white text-[#16a34a] px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors"
                                  >
                                    Join Univet Now
                                    <ArrowRight className="w-4 h-4" />
                                  </motion.button>
                                </div>
                                <div className="absolute bottom-0 right-0 w-40 h-40">
                                  <img
                                    src={graduateImg}
                                    alt="Graduate Student"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          /* Regular Dropdown */
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-0 w-64 bg-white shadow-[0px_2px_35px_0px_rgba(0,0,0,0.04)] rounded-bl-lg rounded-br-lg overflow-hidden"
                          >
                            {item.dropdown.map((dropItem, idx) => (
                              <div
                                key={dropItem.label}
                                className="relative"
                                onMouseEnter={() =>
                                  dropItem.submenu && setActiveSubmenu(dropItem.label)
                                }
                                onMouseLeave={() =>
                                  dropItem.submenu && setActiveSubmenu(null)
                                }
                              >
                                {dropItem.href ? (
                                  <Link
                                    to={dropItem.href}
                                    className={`block px-5 py-3 text-sm font-medium text-[#030303] hover:bg-gray-50 transition-colors ${
                                      idx < item.dropdown!.length - 1
                                        ? "border-b border-[rgba(228,228,228,0.75)]"
                                        : ""
                                    }`}
                                  >
                                    {dropItem.label}
                                  </Link>
                                ) : (
                                  <button
                                    className={`w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-[#030303] hover:bg-gray-50 transition-colors ${
                                      idx < item.dropdown!.length - 1
                                        ? "border-b border-[rgba(228,228,228,0.75)]"
                                        : ""
                                    }`}
                                  >
                                    {dropItem.label}
                                    {dropItem.submenu && (
                                      <ChevronRight className="w-4 h-4" />
                                    )}
                                  </button>
                                )}

                                {/* Submenu */}
                                <AnimatePresence>
                                  {dropItem.submenu &&
                                    activeSubmenu === dropItem.label && (
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-full top-0 w-64 bg-white shadow-[0px_2px_35px_0px_rgba(0,0,0,0.04)] rounded-bl-lg rounded-br-lg overflow-hidden"
                                      >
                                        {dropItem.submenu.map((subItem, subIdx) => (
                                          <Link
                                            key={subItem.label}
                                            to={subItem.href || "#"}
                                            className={`block px-5 py-3 text-sm font-medium text-[#030303] hover:bg-gray-50 transition-colors ${
                                              subIdx < dropItem.submenu!.length - 1
                                                ? "border-b border-[rgba(228,228,228,0.75)]"
                                                : ""
                                            }`}
                                          >
                                            {subItem.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Section: Search, Menu, and Apply Now */}
            <div className="flex items-center gap-4">
              {/* Search Icon */}
              <button
                className="p-2 text-[#030303] hover:text-[#2563EB] transition-colors border border-gray-300 rounded-lg hover:border-[#2563EB]"
                aria-label="Search"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <SearchIcon />
              </button>

              {/* Divider */}
              <div className="h-6 w-px bg-gray-300" />

              {/* Menu Icon */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-[#030303] hover:text-[#2563EB] transition-colors"
                aria-label="Menu"
              >
                <MenuIcon />
              </button>

              {/* Apply Now Button */}
              <motion.button
                onClick={() => navigate("/apply")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-[400px] bg-[#2563EB] z-[70] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-[#2563EB]" />
              </button>

              <div className="p-8">
                {/* Logo and Title */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={logoImg}
                      alt="Dumri College"
                      className="h-14 w-auto bg-white rounded-lg p-2"
                    />
                    <div>
                      <p className="text-white text-xs uppercase tracking-wider">University of</p>
                      <h2 className="text-white text-2xl font-bold">DUMRI</h2>
                    </div>
                  </div>

                  {/* Welcome Text */}
                  <p className="text-white/90 text-sm leading-relaxed">
                    Welcome to Dumri College. It was founded in 1966, and Dumri College has grown into one of the leading institutions of higher education.
                  </p>
                </div>

                {/* Gallery Section */}
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-2">
                    {galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="border-t border-white/20 pt-6">
                  <h3 className="text-white text-lg font-semibold mb-4">Quick Contact:</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <a href="tel:+8112522552" className="text-white/90 hover:text-white transition-colors">
                        +8112522552
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <a href="mailto:info@dumri.com" className="text-white/90 hover:text-white transition-colors">
                        info@dumri.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white/90">
                        Ta-134/A, NY 11110, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />

            {/* Search Modal */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 h-full w-full bg-white z-[70] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="p-8">
                {/* Search Form */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <SearchIcon />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for programs, departments, or information..."
                      autoFocus
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                </form>

                {/* Search Suggestions */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                    {searchQuery ? "Search Results" : "Popular Searches"}
                  </h3>
                  <div className="space-y-1">
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((suggestion) => (
                        <Link
                          key={suggestion.href}
                          to={suggestion.href}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="font-medium text-gray-900 group-hover:text-[#2563EB]">
                            {suggestion.title}
                          </span>
                          <span className="text-sm text-gray-500">{suggestion.category}</span>
                        </Link>
                      ))
                    ) : (
                      <p className="px-4 py-3 text-gray-500">No results found</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}