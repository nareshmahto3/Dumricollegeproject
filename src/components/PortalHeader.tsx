import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Globe,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { useSidebar } from "../contexts/SidebarContext";
import { LanguageSelector } from "./LanguageSelector";

interface PortalHeaderProps {
  userName?: string;
  userRole?: string;
  userAvatar?: string;
}

export function PortalHeader({ 
  userName = "User", 
  userRole = "Role", 
  userAvatar 
}: PortalHeaderProps) {
  const navigate = useNavigate();
  const { isCollapsed } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handleLogout = () => {
    // Handle logout logic
    navigate("/studentlogin");
  };

  const notifications = [
    { id: 1, text: "New student admission pending", time: "5 mins ago", unread: true },
    { id: 2, text: "Fee payment received", time: "1 hour ago", unread: false },
    { id: 3, text: "Exam schedule updated", time: "2 hours ago", unread: false },
  ];

  const messages = [
    { id: 1, from: "John Doe", text: "Regarding admission...", time: "10 mins ago", unread: true },
    { id: 2, from: "Jane Smith", text: "Class schedule query", time: "1 hour ago", unread: true },
  ];

  const unreadNotifications = notifications.filter((n) => n.unread).length;
  const unreadMessages = messages.filter((m) => m.unread).length;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className={`flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 transition-all ${isCollapsed ? 'lg:pl-20' : ''}`}>
        {/* Language Selector - Prominent position */}
        <div className="flex-shrink-0 mr-3 sm:mr-4">
          <LanguageSelector variant="compact" />
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
            <input
              type="text"
              placeholder="Find Something"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-md pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile spacer */}
        <div className="md:hidden flex-1"></div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-1.5 sm:p-2 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowNotifications(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 w-[280px] sm:w-80 bg-white rounded-lg shadow-xl border border-slate-200 z-20"
                  >
                    <div className="p-3 sm:p-4 border-b border-slate-200">
                      <h3 className="font-semibold text-sm sm:text-base text-slate-900">Notifications</h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-3 sm:p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-100 ${
                            notification.unread ? "bg-amber-50" : ""
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <p className="text-xs sm:text-sm text-slate-900">
                              {notification.text}
                            </p>
                            {notification.unread && (
                              <span className="w-2 h-2 bg-amber-500 rounded-full mt-1 ml-2"></span>
                            )}
                          </div>
                          <span className="text-[10px] sm:text-xs text-slate-500">
                            {notification.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 sm:p-3 border-t border-slate-200 text-center">
                      <button className="text-xs sm:text-sm text-amber-600 hover:text-amber-700 font-semibold">
                        View All Notifications
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {/* User name - Hidden on mobile */}
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">{userName}</p>
                <p className="text-xs text-slate-500">{userRole}</p>
              </div>
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt={userName}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-amber-500"
                />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs sm:text-base font-bold ring-2 ring-amber-500">
                  {userName?.charAt(0)?.toUpperCase() || 'U'}
                </div>
              )}
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
            </button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {showProfileMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowProfileMenu(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 sm:top-14 w-48 sm:w-56 bg-white rounded-lg shadow-xl border border-slate-200 z-20"
                  >
                    <div className="p-3 sm:p-4 border-b border-slate-200">
                      <p className="font-semibold text-sm sm:text-base text-slate-900">{userName}</p>
                      <p className="text-xs text-slate-500">{userRole}</p>
                    </div>
                    <div className="py-2">
                      <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-2 hover:bg-slate-50 text-slate-700 transition-colors">
                        <User className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">My Profile</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 sm:px-4 py-2 hover:bg-slate-50 text-slate-700 transition-colors">
                        <Settings className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">Settings</span>
                      </button>
                    </div>
                    <div className="border-t border-slate-200 p-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 sm:px-4 py-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-xs sm:text-sm font-semibold">Logout</span>
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}