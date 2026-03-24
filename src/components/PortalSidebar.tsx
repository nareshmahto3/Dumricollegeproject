import { useNavigate, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  BookOpen,
  Library,
  Calculator,
  Boxes,
  FileText,
  Calendar,
  ClipboardCheck,
  FileCheck,
  Bus,
  Building2,
  Bell,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Award,
  CreditCard,
  Upload,
  CalendarDays,
  DollarSign,
  LayoutGrid,
  IdCard,
  Image,
  BarChart3,
  FileSearch,
} from "lucide-react";
import { useSidebar } from "../contexts/SidebarContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

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
    { path: "/admin/admissions", label: "Parents", icon: UserCheck },
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
    { path: "/teacher/assignments", label: "Assignments", icon: FileText },
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

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-[12px] left-3 z-50 p-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg transition-all"
        aria-label={isCollapsed ? "Open menu" : "Close menu"}
      >
        {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </button>

      {/* ── Collapsed Sidebar (desktop icons-only) ──────────────────────────
          Original width: 70px — kept; only the header height and nav item
          padding are trimmed to suit the shorter 720px viewport.
      ──────────────────────────────────────────────────────────────────────── */}
      {isCollapsed && (
        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="hidden lg:block fixed left-0 top-0 h-screen w-[64px] bg-[#0d2b4e] z-40 shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-[52px] flex items-center justify-center flex-shrink-0">
            <button
              onClick={toggleSidebar}
              className="text-white hover:bg-amber-600/50 p-1.5 rounded transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Icons */}
          <nav className="h-[calc(100vh-52px)] flex flex-col overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-slate-700">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <motion.button
                    onClick={() => navigate(link.path)}
                    whileHover={{ scale: 1.05 }}
                    className={`w-full flex items-center justify-center py-2 transition-all flex-shrink-0 border-b border-slate-700/50 ${
                      isActive
                        ? "bg-amber-500/10 border-l-4 border-amber-500"
                        : "hover:bg-slate-800/50 border-l-4 border-transparent"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-amber-400" : "text-amber-500"
                      }`}
                    />
                  </motion.button>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredLink === link.path && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-800 text-white text-xs font-medium rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none"
                      >
                        {link.label}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-slate-800" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </motion.div>
      )}

      {/* ── Expanded Sidebar ─────────────────────────────────────────────────
          Original width: 280px → 240px.
          Header: p-4 → p-3, avatar 40px → 34px, title text-lg → text-base.
          Nav items: px-6 py-3 → px-4 py-2, icons w-5→w-4, text text-sm→text-xs.
      ──────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isCollapsed && (
          <>
            {/* Mobile overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 h-screen w-[240px] bg-[#0d2b4e] z-50 flex flex-col shadow-2xl lg:z-40"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h1 className="text-white font-bold text-base leading-tight">
                      Dumri College
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
                  className="text-white hover:bg-amber-600/50 p-1 rounded transition-colors flex-shrink-0"
                  aria-label="Close sidebar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-slate-700">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;

                  return (
                    <motion.button
                      key={link.path}
                      onClick={() => navigate(link.path)}
                      whileHover={{ x: 3 }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-left transition-all border-b border-slate-700/50 ${
                        isActive
                          ? "bg-amber-500/10 border-l-4 border-amber-500"
                          : "hover:bg-slate-800/50"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`w-4 h-4 flex-shrink-0 ${
                            isActive ? "text-amber-400" : "text-amber-500"
                          }`}
                        />
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {link.label}
                        </span>
                      </div>
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