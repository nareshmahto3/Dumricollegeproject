import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Calendar as CalendarIcon, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface Holiday {
  date: string;
  name: string;
  type: 'Public Holiday' | 'School Holiday';
  description?: string;
}

const holidays: Holiday[] = [
  {
    date: '2026-03-14',
    name: 'Holi',
    type: 'Public Holiday',
    description: 'Festival of colors celebrating the arrival of spring'
  },
  {
    date: '2026-04-03',
    name: 'Good Friday',
    type: 'Public Holiday',
    description: 'Christian holy day commemorating the crucifixion of Jesus'
  },
  {
    date: '2026-04-21',
    name: 'Eid ul-Fitr',
    type: 'Public Holiday',
    description: 'Islamic festival marking the end of Ramadan'
  },
  {
    date: '2026-05-01',
    name: 'May Day',
    type: 'Public Holiday',
    description: 'International Workers\' Day'
  },
  {
    date: '2026-05-15',
    name: 'Summer Break Begins',
    type: 'School Holiday',
    description: 'Start of summer vacation for all students'
  },
  {
    date: '2026-06-01',
    name: 'Summer Break',
    type: 'School Holiday',
    description: 'Ongoing summer vacation'
  },
  {
    date: '2026-06-15',
    name: 'Summer Break',
    type: 'School Holiday',
    description: 'Ongoing summer vacation'
  },
  {
    date: '2026-07-01',
    name: 'Summer Break Ends',
    type: 'School Holiday',
    description: 'End of summer vacation, classes resume'
  },
  {
    date: '2026-08-15',
    name: 'Independence Day',
    type: 'Public Holiday',
    description: 'Celebrating India\'s independence from British rule'
  },
  {
    date: '2026-10-02',
    name: 'Gandhi Jayanti',
    type: 'Public Holiday',
    description: 'Birth anniversary of Mahatma Gandhi'
  },
  {
    date: '2026-10-24',
    name: 'Diwali',
    type: 'Public Holiday',
    description: 'Festival of lights celebrating the victory of light over darkness'
  },
  {
    date: '2026-12-25',
    name: 'Christmas',
    type: 'Public Holiday',
    description: 'Christian festival celebrating the birth of Jesus Christ'
  },
];

export function HolidayPage() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026
  const [selectedMonth, setSelectedMonth] = useState<number>(2); // March

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

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
      const isToday = day === 15 && currentDate.getMonth() === 2; // March 15, 2026

      days.push(
        <div
          key={day}
          className={`aspect-square p-2 border border-gray-200 rounded-lg relative transition-all ${holiday ? 'bg-amber-50 border-amber-300 hover:bg-amber-100' : 'bg-white hover:bg-gray-50'
            } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
        >
          <div className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-slate-900'}`}>
            {day}
          </div>
          {holiday && (
            <div className="mt-1">
              <div className="text-[10px] font-semibold text-amber-700 leading-tight line-clamp-2">
                {holiday.name}
              </div>
              <Badge
                variant="outline"
                className={`mt-1 text-[8px] px-1 py-0 h-auto ${holiday.type === 'Public Holiday'
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
    .slice(0, 6);

  const holidaysByMonth = holidays.filter(h =>
    new Date(h.date).getMonth() === selectedMonth
  );

  const publicHolidaysCount = holidays.filter(h => h.type === 'Public Holiday').length;
  const schoolHolidaysCount = holidays.filter(h => h.type === 'School Holiday').length;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section className="relative h-[320px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80"
            alt="Calendar"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001a2e]/90 via-[#00324d]/85 to-[#004d73]/80"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-30 pb-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate('/')}
              className="text-white text-sm hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Holiday Calendar</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 font-serif">
            Holiday Calendar 2026
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-3xl">
            Plan ahead with our comprehensive holiday calendar for the academic year 2026-2027.
            <br className="hidden sm:block" />
            View all public holidays and school breaks throughout the year.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <CalendarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90 mb-1">Total Holidays</p>
                    <h3 className="text-3xl font-bold text-white">{holidays.length}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <CalendarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90 mb-1">Public Holidays</p>
                    <h3 className="text-3xl font-bold text-white">{publicHolidaysCount}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <CalendarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90 mb-1">School Holidays</p>
                    <h3 className="text-3xl font-bold text-white">{schoolHolidaysCount}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar View */}
            <div className="lg:col-span-2">
              <Card className="p-6 shadow-lg">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6 ">
                  <Button
                    onClick={previousMonth}
                    variant="outline"
                    size="sm"
                    className="text-black"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-900" />
                  </Button>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <Button
                    onClick={nextMonth}
                    variant="outline"
                    size="sm"
                    className="border-gray-300"
                  >
                    <ChevronRightIcon className="w-4 h-4 text-slate-900" />
                  </Button>
                </div>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {dayNames.map(day => (
                    <div key={day} className="text-center text-sm font-bold text-slate-600 p-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {renderCalendar()}
                </div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
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
              </Card>
            </div>

            {/* Upcoming Holidays List */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Holidays</h3>
              <div className="space-y-4">
                {upcomingHolidays.map((holiday, index) => (
                  <motion.div
                    key={holiday.date}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-5 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-amber-500 text-white flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">
                            {new Date(holiday.date).toLocaleDateString('en-US', { month: 'short' })}
                          </span>
                          <span className="text-lg font-bold">
                            {new Date(holiday.date).getDate()}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-1">{holiday.name}</h4>
                          {holiday.description && (
                            <p className="text-xs text-slate-600 mb-2">{holiday.description}</p>
                          )}
                          <Badge
                            variant="outline"
                            className={`text-xs ${holiday.type === 'Public Holiday'
                              ? 'bg-green-100 text-green-700 border-green-200'
                              : 'bg-orange-100 text-orange-700 border-orange-200'
                              }`}
                          >
                            {holiday.type}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Holidays List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Complete Holiday List 2026</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays.map((holiday, index) => (
              <motion.div
                key={holiday.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-5 bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-white flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium">
                        {new Date(holiday.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-xl font-bold">
                        {new Date(holiday.date).getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1 text-lg">{holiday.name}</h4>
                      <p className="text-xs text-slate-500 mb-2">
                        {new Date(holiday.date).toLocaleDateString('en-IN', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      {holiday.description && (
                        <p className="text-sm text-slate-600 mb-3">{holiday.description}</p>
                      )}
                      <Badge
                        variant="outline"
                        className={`text-xs ${holiday.type === 'Public Holiday'
                          ? 'bg-green-100 text-green-700 border-green-200'
                          : 'bg-orange-100 text-orange-700 border-orange-200'
                          }`}
                      >
                        {holiday.type}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
