import { useNavigate, useLocation } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Upload,
  CreditCard,
  Award,
  GraduationCap,
  IdCard,
  Menu,
  X,
  Image,
  BookOpen,
  ClipboardCheck,
  Users,
  Calendar,
  CalendarDays,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useSidebar } from "../contexts/SidebarContext";
import { motion, AnimatePresence } from "motion/react";

interface SidebarProps {
  role: "admin" | "student" | "teacher";
}

export function Sidebar({ role }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCollapsed, toggleSidebar } = useSidebar();

  const adminLinks = [
    {
      path: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/admin/admissions",
      label: "Admissions",
      icon: FileText,
    },
    {
      path: "/admin/students",
      label: "Students",
      icon: GraduationCap,
    },
    {
      path: "/admin/teachers",
      label: "Teachers",
      icon: Users,
    },
    {
      path: "/admin/schedule",
      label: "Schedule",
      icon: CalendarDays,
    },
    {
      path: "/admin/certificates",
      label: "Certificates",
      icon: Award,
    },
    {
      path: "/admin/fee",
      label: "Fee Management",
      icon: DollarSign,
    },
  ];

  const studentLinks = [
    {
      path: "/student/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/student/documents",
      label: "Documents",
      icon: Upload,
    },
    {
      path: "/student/fees",
      label: "Fee Payment",
      icon: CreditCard,
    },
    {
      path: "/student/certificates",
      label: "Certificates",
      icon: Award,
    },
    {
      path: "/student/id-card",
      label: "Digital ID Card",
      icon: IdCard,
    },
  ];

  const teacherLinks = [
    {
      path: "/teacher/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/teacher/attendance",
      label: "Attendance",
      icon: ClipboardCheck,
    },
    {
      path: "/teacher/students",
      label: "Students",
      icon: Users,
    },
    {
      path: "/teacher/schedule",
      label: "Schedule",
      icon: CalendarDays,
    },
  ];

  const links =
    role === "admin"
      ? adminLinks
      : role === "teacher"
        ? teacherLinks
        : studentLinks;

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg flex items-center justify-center shadow-xl shadow-slate-900/30"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        animate={{
          width: isCollapsed ? 80 : 256,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed inset-y-0 left-0 z-40 bg-white border-r border-slate-200 flex flex-col transform transition-transform duration-300 ease-in-out shadow-lg ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 relative">
          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm text-white font-bold">
                      EduManage Pro
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-300 capitalize font-medium">
                      {role} Portal
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Collapsed Logo */}
            {isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30 mx-auto"
              >
                <GraduationCap className="w-6 h-6 text-slate-900" />
              </motion.div>
            )}
          </div>

          {/* Desktop Toggle Button - Only for admin */}
          {role === "admin" && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg border-2 border-white hover:bg-slate-800 transition-colors z-50"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-3 h-3" />
              ) : (
                <ChevronLeft className="w-3 h-3" />
              )}
            </motion.button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 sm:p-4 overflow-y-auto">
          <ul className="space-y-1.5 sm:space-y-2">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(link.path)}
                    className={`w-full flex items-center ${
                      isCollapsed ? "justify-center px-2" : "gap-2 sm:gap-3 px-3 sm:px-4"
                    } py-2.5 sm:py-3 rounded-lg transition-all font-semibold text-sm sm:text-base relative group ${
                      isActive
                        ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/30"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                    title={isCollapsed ? link.label : undefined}
                  >
                    <link.icon className={`flex-shrink-0 ${isCollapsed ? "w-5 h-5" : "w-4 h-4 sm:w-5 sm:h-5"}`} />
                    
                    <AnimatePresence mode="wait">
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="truncate"
                        >
                          {link.label}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-3 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl z-50">
                        {link.label}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" />
                      </div>
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50">
          {!isCollapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-3 py-2"
            >
              <p className="text-xs text-slate-500 font-medium">Version 2.0.1</p>
              <p className="text-xs text-slate-400">© 2026 EduManage</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-600">v2</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}