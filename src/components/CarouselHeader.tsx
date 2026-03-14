import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { ChevronDown, X, MessageCircle, Menu } from 'lucide-react';
import svgPaths from "../imports/svg-o5h25uox4w";
import imgImageDumriCollege from "figma:asset/233f90283b695bb1a0a35b62804867616ecd9a87.png";
import { LanguageSelector } from './LanguageSelector';

interface CarouselHeaderProps {
  onMenuClick?: () => void;
}

interface MenuItem {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
  highlight?: boolean;
}

const menuItems: MenuItem[] = [
  {
    label: 'About Us',
    submenu: [
      { label: 'About Jharkhand Commerce Inter College', href: '/about' },
      { label: 'Vision and  Mission', href: '/administration' },
      { label: 'Founder', href: '/campus-life' },
      { label: 'Administration', href: '/campus-life' },
       { label: 'Principal Message', href: '/campus-life' },
       { label: 'Our Alumini', href: '/course-catalog' },
    ],
  },
  {
    label: 'Academics',
    submenu: [
      { label: 'Programs', href: '/programs' },
      { label: 'Admissions', href: '/apply' },
      { label: 'Faculty', href: '/academic-calendar' },      
       { label: 'Admission Requirements', href: '/how-to-apply' },
        { label: 'Fee Structure', href: '/course-catalog' },

    ],
  },
  // {
  //   label: 'Research',
  //   href: '/research',
  // },
  // {
  //   label: 'Library',
  //   submenu: [
  //     { label: 'Central Library', href: '/library' },
  //     { label: 'Digital Library Portal', href: '/student/library' },
  //   ],
  // },
  {
    label: 'Students',
    submenu: [      
        { label: 'Student Login', href: '/studentlogin' },
      { label: 'Admissions', href: '/apply' },
     { label: 'Notices', href: '/studentlogin' },      
      { label: 'Scholarships', href: '/scholarships' },      
      { label: 'Holiday List', href: '/how-to-apply' },
        { label: 'How to Apply (Admissions)', href: '/how-to-apply' },
    ],
  },
  {
    label: 'E - Services',
    submenu: [
      { label: 'Student Login', href: '/studentlogin' },
      { label: 'Staff Login', href: '/stafflogin' },    
      { label: 'Fee Payment', href: '/studentlogin' },
    ],
  },
  
  // {
  //   label: 'Campuses',
  //   submenu: [
  //     { label: 'About Dumri College', href: '/about' },
  //     { label: 'Gallery', href: '/gallery' },
  //   ],
  // },
  {
    label: 'Visitors',
    submenu: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

function HamburgerIcon() {
  return (
    <div className="h-[19px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[0_0_1.75%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18.6667">
          <path d={svgPaths.pbe6f180} fill="#030303" />
        </svg>
      </div>
    </div>
  );
}

export function CarouselHeader({ onMenuClick }: CarouselHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick?.();
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
    setExpandedItem(null);
  };

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <>
      {/* Header overlay on carousel - Hidden when scrolled */}
      {!isScrolled && (
        <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
          {/* White diagonal background on left */}
          <div className="absolute h-[108px] left-0 top-0 w-[354px] pointer-events-auto">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 354 108">
              <path d="M0 108V0H354L265.57 108H0Z" fill="white" />
            </svg>
          </div>

          {/* College Logo */}
          <div 
            className="absolute left-0 size-[90px] top-[11px] pointer-events-auto cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              alt="Dumri College Logo" 
              className="absolute inset-0 max-w-none object-cover size-full" 
              src={imgImageDumriCollege} 
            />
          </div>

          {/* College Name */}
          <div 
            className="absolute font-['Alice',serif] h-[84px] leading-[20px] left-[107px] not-italic text-[25px] text-black top-[17px] w-[238px] whitespace-pre-wrap pointer-events-auto cursor-pointer"
            onClick={() => navigate('/')}
          >
            <p className="mb-0 ">Jharkhand Commerce </p>
            <p>
              <br aria-hidden="true" />
              Inter College
            </p>
          </div>

          {/* Menu Button - Top Right */}
          <div className="absolute right-8 top-[22px] pointer-events-auto">
            <motion.button
              onClick={handleMenuClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/95 backdrop-blur-sm h-[42px] rounded-lg w-[130px] flex items-center justify-center gap-3 px-4 border-2 border-[#2563EB] shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span className="font-semibold text-[16px] text-[#2563EB] tracking-wide">MENU</span>
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-0.5 bg-[#2563EB] rounded-full"></div>
                <div className="w-6 h-0.5 bg-[#2563EB] rounded-full"></div>
                <div className="w-6 h-0.5 bg-[#2563EB] rounded-full"></div>
              </div>
            </motion.button>
          </div>
        </div>
      )}

      {/* Fixed Header - Shown when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
          >
            <div className="max-w-[1920px] mx-auto px-8 py-3 flex items-center justify-between">
              {/* Logo */}
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => navigate('/')}
              >
                <img 
                  alt="Dumri College Logo" 
                  className="w-14 h-14 object-cover" 
                  src={imgImageDumriCollege} 
                />
              </div>

              {/* Menu Button */}
              <motion.button
                onClick={handleMenuClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white h-[42px] rounded-lg w-[130px] flex items-center justify-center gap-3 px-4 border-2 border-[#2563EB] shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="font-semibold text-[16px] text-[#2563EB] tracking-wide">MENU</span>
                <div className="flex flex-col gap-1.5">
                  <div className="w-6 h-0.5 bg-[#2563EB] rounded-full"></div>
                  <div className="w-6 h-0.5 bg-[#2563EB] rounded-full"></div>
                  <div className="w-6 h-0.5 bg-[#2563EB] rounded-full"></div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-[438px] bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-8 pt-8 pb-6">
                <h2 className="text-2xl font-normal text-black tracking-wide">MAIN MENU</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-black transition-colors cursor-pointer"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Top Buttons */}
              <div className="px-7 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleNavigation('/studentlogin')}
                    className="bg-[#0E4C8F] hover:bg-[#0d4280] text-white py-4 px-4 rounded-lg font-medium text-sm tracking-wide transition-colors cursor-pointer"
                  >
                    STUDENT LOGIN
                  </button>
                  <button
                    onClick={() => handleNavigation('/stafflogin')}
                    className="bg-[#2B9EF6] hover:bg-[#1e8fe6] text-white py-4 px-4 rounded-lg font-medium text-sm tracking-wide transition-colors cursor-pointer"
                  >
                    STAFF LOGIN
                  </button>
                </div>
                {/* Language Selector */}
                <div className="mt-4">
                  <LanguageSelector variant="simple" />
                </div>
              </div>

              {/* Menu Items */}
              <nav className="px-7">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center justify-between py-1.5">
                      <button
                        onClick={() => {
                          if (item.submenu) {
                            toggleExpand(item.label);
                          } else if (item.href) {
                            handleNavigation(item.href);
                          }
                        }}
                        className="flex-1 text-left text-lg font-normal text-black cursor-pointer"
                      >
                        {item.label}
                      </button>
                      {item.submenu && (
                        <motion.button
                          onClick={() => toggleExpand(item.label)}
                          animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-8 h-8 flex items-center justify-center bg-[#C9962B] rounded-md hover:bg-[#b58525] transition-colors cursor-pointer"
                        >
                          <ChevronDown className="w-4 h-4 text-white" />
                        </motion.button>
                      )}
                    </div>
                    
                    {/* Submenu */}
                    <AnimatePresence>
                      {item.submenu && expandedItem === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pl-4 space-y-0">
                            {item.submenu.map((subitem, subindex) => (
                              <div key={subindex}>
                                <button
                                  onClick={() => handleNavigation(subitem.href)}
                                  className="block w-full text-left py-2 px-3 text-gray-700 hover:text-[#2563EB] hover:bg-gray-50 rounded transition-colors cursor-pointer"
                                >
                                  {subitem.label}
                                </button>
                                {subindex < item.submenu!.length - 1 && (
                                  <div className="mx-3 border-t border-gray-200" />
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Chat Widget */}
              <div className="fixed bottom-8 right-[470px] z-[110]">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2B9EF6] text-white rounded-full p-4 shadow-lg relative"
                >
                  <MessageCircle className="w-8 h-8" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    1
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}