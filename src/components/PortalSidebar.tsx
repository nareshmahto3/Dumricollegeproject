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

interface PortalSidebarProps {
  role: "admin" | "student" | "teacher";
}

export function PortalSidebar({ role }: PortalSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCollapsed, toggleSidebar } = useSidebar();

  // Menu items based on role
  const adminLinks = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/students", label: "Students", icon: GraduationCap },
    { path: "/admin/teachers", label: "Teachers", icon: Users },
    { path: "/admin/admissions", label: "Parents", icon: UserCheck },
    { path: "/admin/account", label: "Account", icon: Calculator },
    { path: "/admin/classes", label: "Class", icon: LayoutGrid },
    { path: "/admin/subjects", label: "Subject", icon: BookOpen },
    { path: "/admin/schedule", label: "Class Routine", icon: Calendar },
    { path: "/admin/attendance", label: "Attendance", icon: ClipboardCheck },
    { path: "/admin/exams", label: "Exam", icon: FileCheck },
    { path: "/admin/fee", label: "Fee", icon: DollarSign },
    { path: "/admin/reports", label: "Reports", icon: BarChart3 },
    { path: "/admin/certificates", label: "Certificate", icon: Award },
    { path: "/admin/notices", label: "Notice", icon: Bell },
    // { path: "/admin/messages", label: "Message", icon: MessageSquare },
  ];

  const teacherLinks = [
    { path: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/teacher/students", label: "My Students", icon: GraduationCap },
    { path: "/teacher/classes", label: "My Classes", icon: Boxes },
    { path: "/teacher/schedule", label: "Class Routine", icon: Calendar },
    { path: "/teacher/attendance", label: "Attendance", icon: ClipboardCheck },
    { path: "/teacher/exams", label: "Exams", icon: FileCheck },
    { path: "/teacher/assignments", label: "Assignments", icon: FileText },
    { path: "/teacher/notices", label: "Notices", icon: Bell },
    // { path: "/teacher/messages", label: "Messages", icon: MessageSquare },
  ];

  const studentLinks = [
    { path: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/student/track-application", label: "Track Application", icon: FileSearch },
    { path: "/student/classes", label: "My Classes", icon: Boxes },
    { path: "/student/schedule", label: "Class Routine", icon: Calendar },
    { path: "/student/attendance", label: "Attendance", icon: ClipboardCheck },
    { path: "/student/exams", label: "Exams", icon: FileCheck },
    { path: "/student/results", label: "Results", icon: Award },
    // { path: "/student/assignments", label: "Assignments", icon: FileText },
    { path: "/student/fees", label: "Fees", icon: CreditCard },
    { path: "/student/documents", label: "Documents", icon: Upload },
    { path: "/student/certificates", label: "Certificates", icon: Award },
    { path: "/student/id-card", label: "ID Card", icon: IdCard },
    // { path: "/student/library", label: "Library", icon: Library },
    { path: "/student/gallery", label: "Gallery", icon: Image },
    { path: "/student/notices", label: "Notices", icon: Bell },
    // { path: "/student/messages", label: "Messages", icon: MessageSquare },
  ];

  const links =
    role === "admin"
      ? adminLinks
      : role === "teacher"
      ? teacherLinks
      : studentLinks;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* Mobile Menu Button - Always visible on mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-[14px] left-4 z-50 p-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-lg transition-all"
        aria-label={isCollapsed ? "Open menu" : "Close menu"}
      >
        {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
      </button>

      {/* Collapsed Sidebar - Desktop Only (Icons Only) */}
      {isCollapsed && (
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="hidden lg:block fixed left-0 top-0 h-screen w-[70px] bg-[#0d2b4e] z-40 shadow-2xl"
        >
          {/* Collapsed Header with Toggle */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-[60px] flex items-center justify-center flex-shrink-0">
            <button
              onClick={toggleSidebar}
              className="text-white hover:bg-amber-600/50 p-1.5 rounded transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Icons */}
          <nav className="h-[calc(100vh-60px)] flex flex-col py-2">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;

              return (
                <motion.button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  whileHover={{ scale: 1.05 }}
                  className={`w-full flex items-center justify-center py-2.5 transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-amber-500/10 border-l-4 border-amber-500"
                      : "hover:bg-slate-800/50 border-l-4 border-transparent"
                  }`}
                  title={link.label}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-amber-400" : "text-amber-500"
                    }`}
                  />
                </motion.button>
              );
            })}
          </nav>
        </motion.div>
      )}

      {/* Expanded Sidebar */}
      <AnimatePresence>
        {!isCollapsed && (
          <>
            {/* Overlay for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 h-screen w-[280px] bg-[#0d2b4e] z-50 flex flex-col shadow-2xl lg:z-40"
            >
              {/* Sidebar Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h1 className="text-white font-bold text-lg">Dumri College</h1>
                    <p className="text-xs text-amber-100">
                      {role === "admin"
                        ? "Admin Portal"
                        : role === "teacher"
                        ? "Teacher Portal"
                        : "Student Portal"}
                    </p>
                  </div>
                </div>
                {/* Close button for both desktop and mobile */}
                <button
                  onClick={toggleSidebar}
                  className="text-white hover:bg-amber-600/50 p-1.5 rounded transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-slate-700">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;

                  return (
                    <motion.button
                      key={link.path}
                      onClick={() => handleNavigation(link.path)}
                      whileHover={{ x: 4 }}
                      className={`w-full flex items-center justify-between px-6 py-3 text-left transition-all ${
                        isActive
                          ? "bg-amber-500/10 border-l-4 border-amber-500"
                          : "hover:bg-slate-800/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? "text-amber-400" : "text-amber-500"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
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