import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  CalendarDays,
  List,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const weekSchedule = {
  Monday: [
    { time: '08:00 - 09:00', class: 'Grade 10-A', subject: 'Mathematics', room: 'Room 205', students: 35, type: 'lecture' },
    { time: '10:30 - 11:30', class: 'Grade 12-C', subject: 'Advanced Math', room: 'Room 205', students: 30, type: 'lecture' },
    { time: '02:00 - 03:00', class: 'Grade 10-B', subject: 'Mathematics', room: 'Room 205', students: 36, type: 'lecture' },
  ],
  Tuesday: [
    { time: '09:15 - 10:15', class: 'Grade 11-B', subject: 'Mathematics', room: 'Room 205', students: 38, type: 'lecture' },
    { time: '12:00 - 01:00', class: 'Grade 9-A', subject: 'Mathematics', room: 'Room 205', students: 42, type: 'practical' },
    { time: '03:15 - 04:15', class: 'Grade 11-A', subject: 'Calculus', room: 'Room 205', students: 32, type: 'lecture' },
  ],
  Wednesday: [
    { time: '08:00 - 09:00', class: 'Grade 10-A', subject: 'Mathematics', room: 'Room 205', students: 35, type: 'lecture' },
    { time: '10:30 - 11:30', class: 'Grade 12-C', subject: 'Advanced Math', room: 'Room 205', students: 30, type: 'tutorial' },
    { time: '02:00 - 03:00', class: 'Grade 10-B', subject: 'Mathematics', room: 'Room 205', students: 36, type: 'lecture' },
  ],
  Thursday: [
    { time: '09:15 - 10:15', class: 'Grade 11-B', subject: 'Mathematics', room: 'Room 205', students: 38, type: 'lecture' },
    { time: '12:00 - 01:00', class: 'Grade 9-A', subject: 'Mathematics', room: 'Room 205', students: 42, type: 'lecture' },
    { time: '03:15 - 04:15', class: 'Grade 11-A', subject: 'Calculus', room: 'Room 205', students: 32, type: 'tutorial' },
  ],
  Friday: [
    { time: '08:00 - 09:00', class: 'Grade 10-A', subject: 'Mathematics', room: 'Room 205', students: 35, type: 'practical' },
    { time: '12:00 - 01:00', class: 'Grade 9-A', subject: 'Mathematics', room: 'Room 205', students: 42, type: 'lecture' },
    { time: '02:00 - 03:00', class: 'Grade 10-B', subject: 'Mathematics', room: 'Room 205', students: 36, type: 'lecture' },
  ],
};

const upcomingEvents = [
  { id: 1, title: 'Staff Meeting', date: 'Feb 16, 2026', time: '04:00 PM', location: 'Auditorium', type: 'meeting' },
  { id: 2, title: 'Parent-Teacher Meeting', date: 'Feb 20, 2026', time: '10:00 AM', location: 'Conference Hall', type: 'meeting' },
  { id: 3, title: 'Mid-term Exams Begin', date: 'Feb 25, 2026', time: '09:00 AM', location: 'Various Rooms', type: 'exam' },
  { id: 4, title: 'Department Workshop', date: 'Feb 28, 2026', time: '02:00 PM', location: 'Math Lab', type: 'workshop' },
];

export function TeacherSchedule() {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [viewMode, setViewMode] = useState<'list' | 'timetable'>('timetable');
  const days = Object.keys(weekSchedule);

  const getClassTypeColor = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'practical':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'tutorial':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'exam':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'workshop':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Get light background color for timetable cells
  const getCellBackgroundColor = (classItem: any) => {
    if (!classItem) return '';

    switch (classItem.type) {
      case 'lecture':
        return 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200';
      case 'practical':
        return 'bg-gradient-to-br from-green-50 to-green-100/50 border-green-200';
      case 'tutorial':
        return 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200';
      default:
        return 'bg-gradient-to-br from-slate-50 to-slate-100/50 border-slate-200';
    }
  };

  const totalClassesThisWeek = Object.values(weekSchedule).reduce((sum, day) => sum + day.length, 0);
  const todayClasses = weekSchedule[selectedDay]?.length || 0;

  return (
    <PortalLayout
      role="teacher"
      userName="Dr. Priya Sharma"
      userRole="Mathematics Teacher"
      pageTitle="Class Routine"
      breadcrumbs={["Home", "Teacher", "Schedule"]}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-1">{totalClassesThisWeek}</h3>
                <p className="text-blue-100 text-sm font-semibold">Classes This Week</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-1">{todayClasses}</h3>
                <p className="text-emerald-100 text-sm font-semibold">Classes Today</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-1">{upcomingEvents.length}</h3>
                <p className="text-amber-100 text-sm font-semibold">Upcoming Events</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Schedule */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3>Weekly Schedule</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium px-3">Week 7 - Feb 2026</span>
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Day Selector */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${selectedDay === day
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Schedule for Selected Day */}
            <div className="space-y-3">
              {weekSchedule[selectedDay as keyof typeof weekSchedule]?.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-border rounded-lg hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{item.subject}</h4>
                        <p className="text-sm text-muted-foreground">{item.class}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getClassTypeColor(item.type)}>
                      {item.type}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{item.room}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{item.students} Students</span>
                    </div>
                  </div>
                </div>
              )) || (
                  <div className="text-center py-8 text-muted-foreground">
                    No classes scheduled for this day
                  </div>
                )}
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="p-6">
            <h3 className="mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border border-border rounded-lg hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <Badge variant="outline" className={`text-xs ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-500">
              View All Events
            </Button>
          </Card>
        </div>

        {/* Time Table Summary */}
        {viewMode === 'timetable' && (
          <Card className="p-6 mt-6 bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Weekly Time Table</h3>
                <p className="text-sm text-slate-600">Your complete schedule at a glance</p>
              </div>
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    onClick={() => setViewMode('list')}
                    className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200"
                  >
                    <List className="w-4 h-4 mr-2" />
                    List View
                  </Button>
                </motion.div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-white rounded-lg border border-slate-200">
              <span className="text-sm font-semibold text-slate-700">Class Types:</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <span className="text-xs text-slate-600">Lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-green-400 to-green-600"></div>
                <span className="text-xs text-slate-600">Practical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-400 to-purple-600"></div>
                <span className="text-xs text-slate-600">Tutorial</span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-200 shadow-lg">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600">
                    <th className="text-left p-4 text-sm font-bold text-white border-r border-blue-500 min-w-[120px]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Time Slot</span>
                      </div>
                    </th>
                    {days.map((day, index) => (
                      <th key={day} className={`text-center p-4 text-sm font-bold text-white min-w-[140px] ${index < days.length - 1 ? 'border-r border-blue-500' : ''}`}>
                        <div className="flex flex-col items-center">
                          <Calendar className="w-4 h-4 mb-1" />
                          <span>{day}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {['08:00 - 09:00', '09:15 - 10:15', '10:30 - 11:30', '12:00 - 01:00', '02:00 - 03:00', '03:15 - 04:15'].map((timeSlot, timeIndex) => (
                    <tr key={timeSlot} className={`${timeIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-200 hover:bg-blue-50/50 transition-all duration-200`}>
                      <td className="p-4 border-r border-slate-200">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{timeSlot.split(' - ')[0]}</p>
                            <p className="text-xs text-slate-500">{timeSlot.split(' - ')[1]}</p>
                          </div>
                        </div>
                      </td>
                      {days.map((day, dayIndex) => {
                        const classItem = weekSchedule[day as keyof typeof weekSchedule]?.find(
                          (c) => c.time === timeSlot
                        );
                        return (
                          <td key={day} className={`p-3 ${dayIndex < days.length - 1 ? 'border-r border-slate-200' : ''}`}>
                            {classItem ? (
                              <div className={`relative group cursor-pointer rounded-xl p-3 border-2 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${classItem.type === 'lecture'
                                ? 'bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border-blue-300 hover:border-blue-500'
                                : classItem.type === 'practical'
                                  ? 'bg-gradient-to-br from-green-50 via-green-100 to-green-50 border-green-300 hover:border-green-500'
                                  : 'bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 border-purple-300 hover:border-purple-500'
                                }`}>
                                {/* Decorative corner accent */}
                                <div className={`absolute top-0 right-0 w-8 h-8 rounded-bl-xl rounded-tr-lg ${classItem.type === 'lecture'
                                  ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                                  : classItem.type === 'practical'
                                    ? 'bg-gradient-to-br from-green-400 to-green-600'
                                    : 'bg-gradient-to-br from-purple-400 to-purple-600'
                                  }`}></div>

                                <div className="relative z-10">
                                  <div className="flex items-start gap-2 mb-2">
                                    <BookOpen className={`w-4 h-4 mt-0.5 flex-shrink-0 ${classItem.type === 'lecture'
                                      ? 'text-blue-600'
                                      : classItem.type === 'practical'
                                        ? 'text-green-600'
                                        : 'text-purple-600'
                                      }`} />
                                    <div className="flex-1 min-w-0">
                                      <p className={`font-bold text-sm leading-tight mb-1 ${classItem.type === 'lecture'
                                        ? 'text-blue-900'
                                        : classItem.type === 'practical'
                                          ? 'text-green-900'
                                          : 'text-purple-900'
                                        }`}>
                                        {classItem.class}
                                      </p>
                                      <div className="flex items-center gap-1 text-xs text-slate-600 mb-1">
                                        <MapPin className="w-3 h-3" />
                                        <span>{classItem.room}</span>
                                      </div>
                                      <div className="flex items-center gap-1 text-xs text-slate-600">
                                        <Users className="w-3 h-3" />
                                        <span>{classItem.students} students</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Type badge */}
                                  <div className={`text-[10px] font-bold uppercase tracking-wide inline-block px-2 py-0.5 rounded-full ${classItem.type === 'lecture'
                                    ? 'bg-blue-600 text-white'
                                    : classItem.type === 'practical'
                                      ? 'bg-green-600 text-white'
                                      : 'bg-purple-600 text-white'
                                    }`}>
                                    {classItem.type}
                                  </div>
                                </div>

                                {/* Hover tooltip effect */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
                              </div>
                            ) : (
                              <div className="h-full flex items-center justify-center min-h-[100px]">
                                <div className="text-slate-300 text-center">
                                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-1">
                                    <span className="text-slate-400 font-semibold">—</span>
                                  </div>
                                  <span className="text-xs text-slate-400">Free Period</span>
                                </div>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Footer */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">{totalClassesThisWeek}</p>
                    <p className="text-xs text-blue-700 font-semibold">Total Classes/Week</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg p-4 border-2 border-emerald-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-900">{totalClassesThisWeek * 60}</p>
                    <p className="text-xs text-emerald-700 font-semibold">Teaching Hours/Week</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg p-4 border-2 border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-amber-900">6</p>
                    <p className="text-xs text-amber-700 font-semibold">Different Classes</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Weekly Schedule List</h3>
                <p className="text-sm text-slate-600">All classes organized by day</p>
              </div>
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    onClick={() => setViewMode('timetable')}
                    className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200"
                  >
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Timetable View
                  </Button>
                </motion.div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* List View organized by Day */}
            <div className="space-y-6">
              {days.map((day) => (
                <div key={day} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      {day}
                    </h4>
                  </div>
                  <div className="bg-white">
                    {weekSchedule[day as keyof typeof weekSchedule]?.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-slate-100 border-b border-slate-200">
                              <th className="text-left p-3 text-sm font-semibold text-slate-700">Time</th>
                              <th className="text-left p-3 text-sm font-semibold text-slate-700">Class</th>
                              <th className="text-left p-3 text-sm font-semibold text-slate-700">Subject</th>
                              <th className="text-left p-3 text-sm font-semibold text-slate-700">Room</th>
                              <th className="text-left p-3 text-sm font-semibold text-slate-700">Students</th>
                              <th className="text-left p-3 text-sm font-semibold text-slate-700">Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            {weekSchedule[day as keyof typeof weekSchedule]?.map((item, index) => (
                              <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100 hover:bg-blue-50 transition-colors`}
                              >
                                <td className="p-3">
                                  <div className="flex items-center gap-2 text-sm">
                                    <Clock className="w-4 h-4 text-slate-500" />
                                    <span className="font-medium text-slate-900">{item.time}</span>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-slate-900">{item.class}</td>
                                <td className="p-3 text-sm font-medium text-slate-900">{item.subject}</td>
                                <td className="p-3">
                                  <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <MapPin className="w-4 h-4" />
                                    {item.room}
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Users className="w-4 h-4" />
                                    {item.students}
                                  </div>
                                </td>
                                <td className="p-3">
                                  <Badge variant="outline" className={`text-xs ${getClassTypeColor(item.type)}`}>
                                    {item.type}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-slate-500">
                        <p className="text-sm">No classes scheduled for this day</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </PortalLayout>
  );
}