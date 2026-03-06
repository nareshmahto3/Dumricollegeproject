import { useState } from 'react';
import {
  BookOpen,
  Users,
  Clock,
  MapPin,
  TrendingUp,
  Download,
  Eye,
  Edit,
  BarChart3,
  Calendar,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const classes = [
  {
    id: 1,
    name: 'Mathematics - Grade 10',
    section: 'Section A',
    students: 35,
    schedule: 'Mon, Wed, Fri - 08:00 AM',
    room: 'Room 205',
    attendance: 92,
    performance: 85,
    nextClass: 'Tomorrow at 08:00 AM',
  },
  {
    id: 2,
    name: 'Mathematics - Grade 11',
    section: 'Section B',
    students: 38,
    schedule: 'Tue, Thu - 09:15 AM',
    room: 'Room 205',
    attendance: 90,
    performance: 88,
    nextClass: 'Today at 09:15 AM',
  },
  {
    id: 3,
    name: 'Advanced Mathematics - Grade 12',
    section: 'Section C',
    students: 30,
    schedule: 'Mon, Wed - 10:30 AM',
    room: 'Room 205',
    attendance: 95,
    performance: 91,
    nextClass: 'Today at 10:30 AM',
  },
  {
    id: 4,
    name: 'Mathematics - Grade 9',
    section: 'Section A',
    students: 42,
    schedule: 'Tue, Thu, Fri - 12:00 PM',
    room: 'Room 205',
    attendance: 88,
    performance: 82,
    nextClass: 'Tomorrow at 12:00 PM',
  },
  {
    id: 5,
    name: 'Mathematics - Grade 10',
    section: 'Section B',
    students: 36,
    schedule: 'Mon, Wed, Fri - 02:00 PM',
    room: 'Room 205',
    attendance: 93,
    performance: 86,
    nextClass: 'Today at 02:00 PM',
  },
  {
    id: 6,
    name: 'Calculus - Grade 11',
    section: 'Section A',
    students: 32,
    schedule: 'Tue, Thu - 03:15 PM',
    room: 'Room 205',
    attendance: 94,
    performance: 89,
    nextClass: 'Tomorrow at 03:15 PM',
  },
];

export function TeacherClasses() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const getAttendanceColor = (rate: number) => {
    if (rate >= 90) return 'text-green-600';
    if (rate >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAttendanceBgColor = (rate: number) => {
    if (rate >= 90) return 'bg-green-50';
    if (rate >= 75) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  return (
    <PortalLayout
      role="teacher"
      userName="Dr. Priya Sharma"
      userRole="Mathematics Teacher"
      pageTitle="My Classes"
      breadcrumbs={["Home", "Teacher", "Classes"]}
    >
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">Total</Badge>
            </div>
            <p className="text-sm text-white/90 font-semibold mb-1">Total Classes</p>
            <h3 className="text-3xl font-bold text-white">{classes.length}</h3>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">All</Badge>
            </div>
            <p className="text-sm text-white/90 font-semibold mb-1">Total Students</p>
            <h3 className="text-3xl font-bold text-white">{classes.reduce((sum, c) => sum + c.students, 0)}</h3>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">Rate</Badge>
            </div>
            <p className="text-sm text-white/90 font-semibold mb-1">Avg. Attendance</p>
            <h3 className="text-3xl font-bold text-white">
              {Math.round(classes.reduce((sum, c) => sum + c.attendance, 0) / classes.length)}%
            </h3>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 border-0 shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">Score</Badge>
            </div>
            <p className="text-sm text-white/90 font-semibold mb-1">Avg. Performance</p>
            <h3 className="text-3xl font-bold text-white">
              {Math.round(classes.reduce((sum, c) => sum + c.performance, 0) / classes.length)}%
            </h3>
          </Card>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {classes.map((classItem) => (
            <Card
              key={classItem.id}
              className="p-6 bg-white border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group"
              onClick={() => setSelectedClass(classItem.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{classItem.name}</h3>
                  <p className="text-sm text-slate-600">{classItem.section}</p>
                </div>
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Active
                </Badge>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Users className="w-4 h-4 text-slate-500" />
                  <span>{classItem.students} Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>{classItem.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{classItem.room}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-emerald-600 font-medium">{classItem.nextClass}</span>
                </div>
              </div>

              <div className="space-y-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">Attendance Rate</span>
                    <span className={`text-sm font-semibold ${getAttendanceColor(classItem.attendance)}`}>
                      {classItem.attendance}%
                    </span>
                  </div>
                  <Progress value={classItem.attendance} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">Class Performance</span>
                    <span className="text-sm font-semibold text-blue-600">{classItem.performance}%</span>
                  </div>
                  <Progress value={classItem.performance} className="h-2" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="outline" size="sm" className="flex-1 bg-blue-600 text-white hover:bg-blue-700 border-0">
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50">
                  <Edit className="w-4 h-4 mr-1" />
                  Manage
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}