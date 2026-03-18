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
  Calendar,
  ChevronLeft,
  ChevronRight,
  Languages,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { useSidebar } from "../contexts/SidebarContext";

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
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleLogout = () => {
    // Handle logout logic
    navigate("/studentlogin");
  };

  // Calendar helper functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarEvents = [
    { date: 15, title: "Sports Day", type: "event" },
    { date: 8, title: "Holi Holiday", type: "holiday" },
    { date: 9, title: "Holi Holiday", type: "holiday" },
    { date: 28, title: "Parent Meeting", type: "important" },
  ];

  const isEventDay = (day: number) => {
    return calendarEvents.find(event => event.date === day);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentMonth.getMonth() === today.getMonth() && 
           currentMonth.getFullYear() === today.getFullYear();
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

          {/* Calendar */}
          <div className="relative">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="relative p-1.5 sm:p-2 hover:bg-blue-50 rounded-lg transition-colors bg-blue-50"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </button>

            {/* Calendar Dropdown */}
            <AnimatePresence>
              {showCalendar && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowCalendar(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 w-[320px] sm:w-[360px] bg-white rounded-lg shadow-xl border border-slate-200 z-20"
                  >
                    {/* Calendar Header */}
                    <div className="p-4 border-b border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-slate-900">
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h3>
                        <div className="flex gap-2">
                          <button
                            onClick={prevMonth}
                            className="p-1 hover:bg-slate-100 rounded transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4 text-slate-600" />
                          </button>
                          <button
                            onClick={nextMonth}
                            className="p-1 hover:bg-slate-100 rounded transition-colors"
                          >
                            <ChevronRight className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </div>

                      {/* Day Names */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {dayNames.map((day) => (
                          <div
                            key={day}
                            className="text-center text-xs font-semibold text-slate-500 py-1"
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1">
                        {(() => {
                          const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
                          const days = [];
                          
                          // Empty cells for days before month starts
                          for (let i = 0; i < startingDayOfWeek; i++) {
                            days.push(
                              <div key={`empty-${i}`} className="aspect-square"></div>
                            );
                          }
                          
                          // Actual days
                          for (let day = 1; day <= daysInMonth; day++) {
                            const event = isEventDay(day);
                            const today = isToday(day);
                            
                            days.push(
                              <div
                                key={day}
                                className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors relative
                                  ${today ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-100'}
                                  ${event && !today ? 'bg-blue-50 text-blue-700 font-semibold' : ''}
                                `}
                                title={event?.title}
                              >
                                {day}
                                {event && !today && (
                                  <span className={`absolute bottom-0.5 w-1 h-1 rounded-full
                                    ${event.type === 'holiday' ? 'bg-emerald-500' : ''}
                                    ${event.type === 'event' ? 'bg-purple-500' : ''}
                                    ${event.type === 'important' ? 'bg-red-500' : ''}
                                  `}></span>
                                )}
                              </div>
                            );
                          }
                          
                          return days;
                        })()}
                      </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="p-4 max-h-48 overflow-y-auto">
                      <h4 className="text-xs font-semibold text-slate-600 mb-3 uppercase">Upcoming Events</h4>
                      <div className="space-y-2">
                        {calendarEvents.map((event, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0
                              ${event.type === 'holiday' ? 'bg-emerald-500' : ''}
                              ${event.type === 'event' ? 'bg-purple-500' : ''}
                              ${event.type === 'important' ? 'bg-red-500' : ''}
                            `}></div>
                            <div>
                              <p className="text-sm font-medium text-slate-900">{event.title}</p>
                              <p className="text-xs text-slate-500">March {event.date}, 2026</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Languages */}
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="relative p-1.5 sm:p-2 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </button>

            {/* Languages Dropdown */}
            <AnimatePresence>
              {showLanguages && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowLanguages(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 sm:top-14 w-48 sm:w-56 bg-white rounded-lg shadow-xl border border-slate-200 z-20"
                  >
                    <div className="p-3 sm:p-4 border-b border-slate-200">
                      <h3 className="font-semibold text-sm sm:text-base text-slate-900">Languages</h3>
                    </div>
                    <div className="py-2 max-h-64 overflow-y-auto">
                      {["English", "Hindi"].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setCurrentLanguage(lang);
                            setShowLanguages(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 sm:px-4 py-2 hover:bg-slate-50 text-slate-700 transition-colors ${
                            currentLanguage === lang ? "bg-blue-50 border-l-4 border-blue-600" : ""
                          }`}
                        >
                          <span className="text-xs sm:text-sm">{lang}</span>
                          {currentLanguage === lang && (
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          )}
                        </button>
                      ))}
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