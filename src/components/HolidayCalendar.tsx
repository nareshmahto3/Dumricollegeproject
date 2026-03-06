import { useState } from 'react';
import { Calendar as CalendarIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';

interface Holiday {
  date: string;
  name: string;
  type: 'Public Holiday' | 'School Holiday';
}

const holidays: Holiday[] = [
  { date: '2026-03-14', name: 'Holi', type: 'Public Holiday' },
  { date: '2026-04-03', name: 'Good Friday', type: 'Public Holiday' },
  { date: '2026-04-21', name: 'Eid ul-Fitr', type: 'Public Holiday' },
  { date: '2026-05-01', name: 'May Day', type: 'Public Holiday' },
  { date: '2026-05-15', name: 'Summer Break Begins', type: 'School Holiday' },
  { date: '2026-06-01', name: 'Summer Break', type: 'School Holiday' },
  { date: '2026-06-15', name: 'Summer Break', type: 'School Holiday' },
  { date: '2026-07-01', name: 'Summer Break Ends', type: 'School Holiday' },
  { date: '2026-08-15', name: 'Independence Day', type: 'Public Holiday' },
  { date: '2026-10-02', name: 'Gandhi Jayanti', type: 'Public Holiday' },
  { date: '2026-10-24', name: 'Diwali', type: 'Public Holiday' },
  { date: '2026-12-25', name: 'Christmas', type: 'Public Holiday' },
];

interface HolidayCalendarProps {
  variant?: 'admin' | 'teacher' | 'student';
}

export function HolidayCalendar({ variant = 'admin' }: HolidayCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // February 2026

  const getVariantStyles = () => {
    switch (variant) {
      case 'admin':
        return {
          button: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
          badge: 'bg-amber-100 text-amber-700 border-amber-200',
          header: 'bg-gradient-to-r from-amber-500 to-amber-600',
        };
      case 'teacher':
        return {
          button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
          badge: 'bg-blue-100 text-blue-700 border-blue-200',
          header: 'bg-gradient-to-r from-blue-500 to-blue-600',
        };
      case 'student':
        return {
          button: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
          badge: 'bg-purple-100 text-purple-700 border-purple-200',
          header: 'bg-gradient-to-r from-purple-500 to-purple-600',
        };
    }
  };

  const styles = getVariantStyles();

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getHolidayForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays.find(h => h.date === dateStr);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square p-2"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const holiday = getHolidayForDate(day);
      const isToday = day === 24 && currentDate.getMonth() === 1; // Feb 24, 2026

      days.push(
        <div
          key={day}
          className={`aspect-square p-1 sm:p-2 border border-gray-200 rounded-lg relative ${
            holiday ? 'bg-amber-50 border-amber-300' : 'bg-white'
          } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
        >
          <div className={`text-xs sm:text-sm font-medium ${isToday ? 'text-blue-600' : 'text-slate-900'}`}>
            {day}
          </div>
          {holiday && (
            <div className="mt-1">
              <div className="text-[8px] sm:text-[10px] font-semibold text-amber-700 leading-tight line-clamp-2">
                {holiday.name}
              </div>
              <Badge 
                variant="outline" 
                className={`mt-1 text-[6px] sm:text-[8px] px-1 py-0 h-auto ${
                  holiday.type === 'Public Holiday' 
                    ? 'bg-green-100 text-green-700 border-green-300'
                    : 'bg-orange-100 text-orange-700 border-orange-300'
                }`}
              >
                {holiday.type === 'Public Holiday' ? 'Public' : 'School'}
              </Badge>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const upcomingHolidays = holidays
    .filter(h => new Date(h.date) >= new Date())
    .slice(0, 5);

  return (
    <>
      {/* Calendar Button/Card */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Card
          onClick={() => setIsOpen(true)}
          className={`p-4 sm:p-6 ${styles.button} text-white border-0 shadow-xl hover:shadow-2xl transition-all cursor-pointer`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">Holiday Calendar</h3>
                <p className="text-xs text-white/80 mt-0.5">View upcoming holidays</p>
              </div>
            </div>
            <Badge className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm">
              {upcomingHolidays.length} Upcoming
            </Badge>
          </div>
        </Card>
      </motion.div>

      {/* Calendar Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[95%] sm:max-w-5xl sm:max-h-[90vh] z-50"
            >
              <Card className="h-full flex flex-col bg-white shadow-2xl">
                {/* Header */}
                <div className={`${styles.header} text-white p-4 sm:p-6 flex items-center justify-between rounded-t-lg`}>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-6 h-6" />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold">Holiday Calendar 2026</h2>
                      <p className="text-sm text-white/80 mt-1">Academic Year 2025-2026</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Calendar View */}
                    <div className="lg:col-span-2">
                      {/* Month Navigation */}
                      <div className="flex items-center justify-between mb-4">
                        <Button
                          onClick={previousMonth}
                          variant="outline"
                          size="sm"
                          className="border-gray-300"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h3>
                        <Button
                          onClick={nextMonth}
                          variant="outline"
                          size="sm"
                          className="border-gray-300"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Day Names */}
                      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
                        {dayNames.map(day => (
                          <div key={day} className="text-center text-xs sm:text-sm font-bold text-slate-600 p-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1 sm:gap-2">
                        {renderCalendar()}
                      </div>

                      {/* Legend */}
                      <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded"></div>
                          <span className="text-slate-600">Public Holiday</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-100 border-2 border-orange-300 rounded"></div>
                          <span className="text-slate-600">School Holiday</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded"></div>
                          <span className="text-slate-600">Today</span>
                        </div>
                      </div>
                    </div>

                    {/* Upcoming Holidays List */}
                    <div className="lg:col-span-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Upcoming Holidays</h3>
                      <div className="space-y-3">
                        {upcomingHolidays.map((holiday, index) => (
                          <motion.div
                            key={holiday.date}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold">
                                  {new Date(holiday.date).getDate()}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-slate-900 text-sm">{holiday.name}</h4>
                                <p className="text-xs text-slate-600 mt-1">
                                  {new Date(holiday.date).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                  })}
                                </p>
                                <Badge 
                                  variant="outline" 
                                  className={`mt-2 text-xs ${
                                    holiday.type === 'Public Holiday'
                                      ? 'bg-green-100 text-green-700 border-green-200'
                                      : 'bg-orange-100 text-orange-700 border-orange-200'
                                  }`}
                                >
                                  {holiday.type}
                                </Badge>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
