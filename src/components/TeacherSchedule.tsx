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
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{totalClassesThisWeek}</h3>
            <p className="text-blue-100 text-sm">Classes This Week</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{todayClasses}</h3>
            <p className="text-emerald-100 text-sm">Classes Today</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{upcomingEvents.length}</h3>
            <p className="text-amber-100 text-sm">Upcoming Events</p>
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
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                    selectedDay === day
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
            <Button variant="outline" className="w-full mt-4">
              View All Events
            </Button>
          </Card>
        </div>

        {/* Time Table Summary */}
        <Card className="p-6 mt-6">
          <h3 className="mb-6">Weekly Time Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-sm font-medium">Time</th>
                  {days.map((day) => (
                    <th key={day} className="text-left p-3 text-sm font-medium">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['08:00 - 09:00', '09:15 - 10:15', '10:30 - 11:30', '12:00 - 01:00', '02:00 - 03:00', '03:15 - 04:15'].map((timeSlot) => (
                  <tr key={timeSlot} className="border-b border-border">
                    <td className="p-3 text-sm font-medium text-muted-foreground">{timeSlot}</td>
                    {days.map((day) => {
                      const classItem = weekSchedule[day as keyof typeof weekSchedule]?.find(
                        (c) => c.time === timeSlot
                      );
                      return (
                        <td key={day} className="p-3">
                          {classItem ? (
                            <div className="text-xs">
                              <p className="font-medium mb-1">{classItem.class}</p>
                              <p className="text-muted-foreground">{classItem.room}</p>
                            </div>
                          ) : (
                            <span className="text-muted-foreground text-xs">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}