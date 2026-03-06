import { useState } from 'react';
import {
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  Download,
  Filter,
  Search,
  Clock,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';

const classes = [
  { id: 1, name: 'Mathematics - Grade 10-A', students: 35 },
  { id: 2, name: 'Mathematics - Grade 11-B', students: 38 },
  { id: 3, name: 'Advanced Math - Grade 12-C', students: 30 },
];

const students = [
  { id: 1, name: 'Aarav Sharma', rollNo: '001', status: 'present', lastAttendance: '100%' },
  { id: 2, name: 'Priya Patel', rollNo: '002', status: 'present', lastAttendance: '98%' },
  { id: 3, name: 'Rohan Kumar', rollNo: '003', status: 'absent', lastAttendance: '95%' },
  { id: 4, name: 'Ananya Singh', rollNo: '004', status: 'present', lastAttendance: '100%' },
  { id: 5, name: 'Vivaan Reddy', rollNo: '005', status: 'present', lastAttendance: '97%' },
  { id: 6, name: 'Kavya Joshi', rollNo: '006', status: 'late', lastAttendance: '92%' },
  { id: 7, name: 'Aditya Nair', rollNo: '007', status: 'present', lastAttendance: '100%' },
  { id: 8, name: 'Diya Gupta', rollNo: '008', status: 'present', lastAttendance: '96%' },
  { id: 9, name: 'Ishaan Mehta', rollNo: '009', status: 'present', lastAttendance: '99%' },
  { id: 10, name: 'Saanvi Desai', rollNo: '010', status: 'absent', lastAttendance: '88%' },
];

export function TeacherAttendance() {
  const [selectedClass, setSelectedClass] = useState(classes[0].id);
  const [attendanceData, setAttendanceData] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = student.status;
      return acc;
    }, {} as Record<number, string>)
  );
  const [searchQuery, setSearchQuery] = useState('');

  const handleAttendanceToggle = (studentId: number, status: 'present' | 'absent' | 'late') => {
    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'absent':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'late':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const presentCount = Object.values(attendanceData).filter((s) => s === 'present').length;
  const absentCount = Object.values(attendanceData).filter((s) => s === 'absent').length;
  const lateCount = Object.values(attendanceData).filter((s) => s === 'late').length;

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.includes(searchQuery)
  );

  return (
    <PortalLayout
      role="teacher"
      userName="Dr. Priya Sharma"
      userRole="Mathematics Teacher"
      pageTitle="Attendance"
      breadcrumbs={["Home", "Teacher", "Attendance"]}
    >
      <div className="space-y-6">
        {/* Date and Class Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 border-2 border-amber-200 shadow-lg bg-white">
            <label className="text-sm font-medium mb-2 block">Select Date</label>
            <Input
              type="date"
              defaultValue={new Date().toISOString().split('T')[0]}
              className="h-10 border-amber-300 focus:border-amber-500"
            />
          </Card>
          <Card className="p-4 bg-white border-amber-200 shadow-lg">
            <label className="text-sm font-medium mb-2 block">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(Number(e.target.value))}
              className="w-full h-10 px-3 border border-amber-300 rounded-lg bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name} ({cls.students} Students)
                </option>
              ))}
            </select>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{students.length}</h3>
            <p className="text-white/90 text-sm font-semibold">Total Students</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{presentCount}</h3>
            <p className="text-white/90 text-sm font-semibold">Present</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{absentCount}</h3>
            <p className="text-white/90 text-sm font-semibold">Absent</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{lateCount}</h3>
            <p className="text-white/90 text-sm font-semibold">Late</p>
          </Card>
        </div>

        {/* Attendance List */}
        <Card className="p-6 bg-white border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Mark Attendance</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  type="text"
                  placeholder="Search student..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 border-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors bg-white"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                    {student.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-900">{student.name}</h4>
                    <p className="text-xs text-slate-600">Roll No: {student.rollNo}</p>
                  </div>
                  <div className="text-sm text-slate-600">
                    Last: {student.lastAttendance}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAttendanceToggle(student.id, 'present')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                      attendanceData[student.id] === 'present'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-border bg-white hover:border-green-300'
                    }`}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => handleAttendanceToggle(student.id, 'late')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                      attendanceData[student.id] === 'late'
                        ? 'border-yellow-600 bg-yellow-50 text-yellow-700'
                        : 'border-border bg-white hover:border-yellow-300'
                    }`}
                  >
                    Late
                  </button>
                  <button
                    onClick={() => handleAttendanceToggle(student.id, 'absent')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                      attendanceData[student.id] === 'absent'
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-border bg-white hover:border-red-300'
                    }`}
                  >
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Attendance Rate: <span className="font-semibold text-green-600">
                {Math.round((presentCount / students.length) * 100)}%
              </span>
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Save Attendance
            </Button>
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}