import { useNavigate, useLocation } from "react-router";
import {
  LayoutDashboard, Users, UserCheck, BookOpen, Library,
  Calculator, Boxes, FileText, Calendar, ClipboardCheck,
  FileCheck, Bus, Building2, Bell, MessageSquare, ChevronRight,
  Menu, X, GraduationCap, Award, CreditCard, Upload,
  CalendarDays, DollarSign, LayoutGrid, IdCard, Image,
  BarChart3, FileSearch,
} from "lucide-react";
import { useSidebar } from "../contexts/SidebarContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import logo from "../assets/logo.png";
interface PortalSidebarProps {
  role: "admin" | "student" | "teacher";
}

export function PortalSidebar({ role }: PortalSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const adminLinks = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/students", label: "Students", icon: GraduationCap },
    { path: "/admin/teachers", label: "Teachers", icon: Users },
    { path: "/admin/admissions", label: "Admission Management", icon: UserCheck },
    { path: "/admin/account", label: "Account", icon: Calculator },
    { path: "/admin/classes", label: "Class", icon: LayoutGrid },
    { path: "/admin/subjects", label: "Subject", icon: BookOpen },
    { path: "/admin/schedule", label: "Class Routine", icon: Calendar },
    { path: "/admin/holiday", label: "Holiday", icon: CalendarDays },
    { path: "/admin/attendance", label: "Attendance", icon: ClipboardCheck },
    { path: "/admin/exams", label: "Exam", icon: FileCheck },
    { path: "/admin/fee", label: "Fee", icon: DollarSign },
    { path: "/admin/reports", label: "Reports", icon: BarChart3 },
    { path: "/admin/certificates", label: "Certificate", icon: Award },
    { path: "/admin/notices", label: "Notice", icon: Bell },
  ];

  const teacherLinks = [
    { path: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/teacher/students", label: "My Students", icon: GraduationCap },
    { path: "/teacher/classes", label: "My Classes", icon: Boxes },
    { path: "/teacher/schedule", label: "Class Routine", icon: Calendar },
    { path: "/teacher/holiday", label: "Holiday", icon: CalendarDays },
    { path: "/teacher/attendance", label: "Attendance", icon: ClipboardCheck },
    { path: "/teacher/exams", label: "Exams", icon: FileCheck },
    { path: "/teacher/notices", label: "Notices", icon: Bell },
  ];

  const studentLinks = [
    { path: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/student/track-application", label: "Track Application", icon: FileSearch },
    { path: "/student/classes", label: "My Classes", icon: Boxes },
    { path: "/student/schedule", label: "Class Routine", icon: Calendar },
    { path: "/student/holiday", label: "Holiday", icon: CalendarDays },
    { path: "/student/attendance", label: "Attendance", icon: ClipboardCheck },
    { path: "/student/exams", label: "Exams", icon: FileCheck },
    { path: "/student/results", label: "Results", icon: Award },
    { path: "/student/fees", label: "Fees", icon: CreditCard },
    { path: "/student/documents", label: "Documents", icon: Upload },
    { path: "/student/certificates", label: "Certificates", icon: Award },
    { path: "/student/id-card", label: "ID Card", icon: IdCard },
    { path: "/student/gallery", label: "Gallery", icon: Image },
    { path: "/student/notices", label: "Notices", icon: Bell },
  ];

  const links =
    role === "admin" ? adminLinks : role === "teacher" ? teacherLinks : studentLinks;

  const SIDEBAR_WIDTH = 240;
  const COLLAPSED_WIDTH = 64;
  const HEADER_HEIGHT = 52;

  return (
    <>
      {/* ── Mobile Menu Button ─────────────────────────────────────────── */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-3 left-3 z-50 p-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg transition-colors"
        aria-label={isCollapsed ? "Open menu" : "Close menu"}
      >
        {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </button>

      {/* ── Collapsed Sidebar — desktop icons only ─────────────────────── */}
      {isCollapsed && (
        <motion.div
          initial={{ x: -COLLAPSED_WIDTH }}
          animate={{ x: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="hidden lg:flex flex-col fixed left-0 top-0 h-screen bg-[#0d2b4e] z-40 shadow-2xl"
          style={{ width: COLLAPSED_WIDTH }}
        >
          {/* Header */}
          <div
            className="bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0"
            style={{ height: HEADER_HEIGHT }}
          >
            <button
              onClick={toggleSidebar}
              className="text-white hover:bg-amber-600/50 p-1.5 rounded transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

          {/* Nav icons */}
          <nav
            className="flex flex-col overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-slate-700"
            style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
          >
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <div
                  key={link.path}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <motion.button
                    onClick={() => navigate(link.path)}
                    whileHover={{ scale: 1.05 }}
                    className={`w-full flex items-center justify-center py-2.5 transition-all border-b border-slate-700/50 border-l-4 ${isActive
                      ? "bg-amber-500/10 border-l-amber-500"
                      : "hover:bg-slate-800/50 border-l-transparent"
                      }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-amber-500"
                        }`}
                    />
                  </motion.button>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredLink === link.path && (
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-800 text-white text-xs font-medium rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none"
                      >
                        {link.label}
                        {/* Arrow */}
                        <span className="absolute right-full top-1/2 -translate-y-1/2 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-slate-800" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </motion.div>
      )}

      {/* ── Expanded Sidebar ───────────────────────────────────────────── */}
      <AnimatePresence>
        {!isCollapsed && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x: -SIDEBAR_WIDTH }}
              animate={{ x: 0 }}
              exit={{ x: -SIDEBAR_WIDTH }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 h-screen bg-[#0d2b4e] z-50 flex flex-col shadow-2xl lg:z-40"
              style={{ width: SIDEBAR_WIDTH }}
            >
              {/* Header */}
              <div
                className="bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-between px-3 flex-shrink-0"
                style={{ height: HEADER_HEIGHT }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10  rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={logo} alt="" />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-white font-bold text-sm leading-tight truncate">
                      JCIC Dumri
                    </h1>
                    <p className="text-[10px] text-amber-100 leading-tight">
                      {role === "admin"
                        ? "Admin Portal"
                        : role === "teacher"
                          ? "Teacher Portal"
                          : "Student Portal"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={toggleSidebar}
                  className="text-white hover:bg-amber-600/50 p-1 rounded transition-colors flex-shrink-0 ml-2"
                  aria-label="Close sidebar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-slate-700">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;

                  return (
                    <motion.button
                      key={link.path}
                      onClick={() => {
                        navigate(link.path);
                        // Close sidebar on mobile after navigation
                        if (window.innerWidth < 1024) toggleSidebar();
                      }}
                      whileHover={{ x: 3 }}
                      className={`w-full flex items-center gap-2.5 px-4 py-3 text-left transition-all border-b border-slate-700/50 border-l-4 flex-shrink-0 ${isActive
                        ? "bg-amber-500/10 border-l-amber-500"
                        : "hover:bg-slate-800/50 border-l-transparent"
                        }`}
                    >
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-amber-400" : "text-amber-500"
                          }`}
                      />
                      <span
                        className={`text-xs font-medium truncate ${isActive ? "text-white" : "text-slate-300"
                          }`}
                      >
                        {link.label}
                      </span>
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}