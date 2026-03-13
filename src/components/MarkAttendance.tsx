import { useState } from 'react';
import { PortalLayout } from './PortalLayout';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertCircle,
  Save,
  RotateCcw,
  Search,
  Filter
} from 'lucide-react';
import { useNavigate } from 'react-router';

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  status: 'present' | 'absent' | 'late' | 'excused' | null;
}

const mockStudents: Student[] = [
  { id: '1', name: 'Aarav Sharma', rollNumber: 'STD001', status: null },
  { id: '2', name: 'Priya Patel', rollNumber: 'STD002', status: null },
  { id: '3', name: 'Rohan Kumar', rollNumber: 'STD003', status: null },
  { id: '4', name: 'Ananya Singh', rollNumber: 'STD004', status: null },
  { id: '5', name: 'Vivaan Reddy', rollNumber: 'STD005', status: null },
  { id: '6', name: 'Diya Gupta', rollNumber: 'STD006', status: null },
  { id: '7', name: 'Arjun Verma', rollNumber: 'STD007', status: null },
  { id: '8', name: 'Ishaan Mehta', rollNumber: 'STD008', status: null },
  { id: '9', name: 'Kavya Joshi', rollNumber: 'STD009', status: null },
  { id: '10', name: 'Aditya Nair', rollNumber: 'STD010', status: null },
  { id: '11', name: 'Sanya Malhotra', rollNumber: 'STD011', status: null },
  { id: '12', name: 'Kabir Shah', rollNumber: 'STD012', status: null },
  { id: '13', name: 'Myra Kapoor', rollNumber: 'STD013', status: null },
  { id: '14', name: 'Reyansh Desai', rollNumber: 'STD014', status: null },
  { id: '15', name: 'Aadhya Iyer', rollNumber: 'STD015', status: null },
];

export function MarkAttendance() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const classes = ['Class 10-A', 'Class 10-B', 'Class 9-A', 'Class 9-B', 'Class 8-A'];

  const handleStatusChange = (studentId: string, status: 'present' | 'absent' | 'late' | 'excused') => {
    setStudents(students.map(student => 
      student.id === studentId ? { ...student, status } : student
    ));
  };

  const handleMarkAll = (status: 'present' | 'absent' | 'late' | 'excused') => {
    setStudents(students.map(student => ({ ...student, status })));
  };

  const handleReset = () => {
    setStudents(students.map(student => ({ ...student, status: null })));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/admin/attendance');
    }, 2000);
  };

  const getStatusCount = () => {
    return {
      present: students.filter(s => s.status === 'present').length,
      absent: students.filter(s => s.status === 'absent').length,
      late: students.filter(s => s.status === 'late').length,
      excused: students.filter(s => s.status === 'excused').length,
      unmarked: students.filter(s => s.status === null).length,
    };
  };

  const statusCount = getStatusCount();
  const totalStudents = students.length;

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Mark Attendance"
      breadcrumbs={["Home", "Admin", "Attendance", "Mark Attendance"]}
    >
      <div className="min-h-screen p-6">
        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Attendance saved successfully!</span>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Mark Attendance</h1>
              <p className="text-slate-600">Record daily attendance for students</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset All
              </Button>
              <Button 
                onClick={handleSave}
                className="bg-[#2563EB] hover:bg-blue-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Attendance
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Date and Class Selection */}
        <Card className="bg-white border-slate-200 p-6 mb-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white border-2 border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Select Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-white border-2 border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20"
              >
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-slate-500 to-slate-600 text-white border-0">
            <div className="text-2xl font-bold mb-1">{totalStudents}</div>
            <div className="text-sm text-white/80">Total Students</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
            <div className="text-2xl font-bold mb-1">{statusCount.present}</div>
            <div className="text-sm text-white/80">Present</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
            <div className="text-2xl font-bold mb-1">{statusCount.absent}</div>
            <div className="text-sm text-white/80">Absent</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0">
            <div className="text-2xl font-bold mb-1">{statusCount.late}</div>
            <div className="text-sm text-white/80">Late</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0">
            <div className="text-2xl font-bold mb-1">{statusCount.excused}</div>
            <div className="text-sm text-white/80">Excused</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0">
            <div className="text-2xl font-bold mb-1">{statusCount.unmarked}</div>
            <div className="text-sm text-white/80">Unmarked</div>
          </Card>
        </div>

        {/* Quick Mark All Buttons */}
        <Card className="bg-white border-slate-200 p-6 mb-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => handleMarkAll('present')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark All Present
            </Button>
            <Button
              onClick={() => handleMarkAll('absent')}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <XCircle className="w-4 h-4 mr-2" />
              Mark All Absent
            </Button>
            <Button
              onClick={() => handleMarkAll('late')}
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              <Clock className="w-4 h-4 mr-2" />
              Mark All Late
            </Button>
            <Button
              onClick={() => handleMarkAll('excused')}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Mark All Excused
            </Button>
          </div>
        </Card>

        {/* Search */}
        <Card className="bg-white border-slate-200 p-4 mb-6 shadow-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or roll number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-slate-300 rounded-lg pl-10 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </Card>

        {/* Student List */}
        <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-100">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700 uppercase tracking-wide">Roll Number</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700 uppercase tracking-wide">Student Name</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700 uppercase tracking-wide">Mark Attendance</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700 uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredStudents.map((student, index) => (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className={`border-b border-slate-200 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="py-4 px-6 text-slate-900 font-medium">{student.rollNumber}</td>
                    <td className="py-4 px-6 text-slate-900">{student.name}</td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStatusChange(student.id, 'present')}
                          className={`p-2 rounded-lg transition-all ${
                            student.status === 'present'
                              ? 'bg-emerald-500 text-white shadow-lg scale-110'
                              : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                          }`}
                          title="Present"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(student.id, 'absent')}
                          className={`p-2 rounded-lg transition-all ${
                            student.status === 'absent'
                              ? 'bg-red-500 text-white shadow-lg scale-110'
                              : 'bg-red-50 text-red-600 hover:bg-red-100'
                          }`}
                          title="Absent"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(student.id, 'late')}
                          className={`p-2 rounded-lg transition-all ${
                            student.status === 'late'
                              ? 'bg-amber-500 text-white shadow-lg scale-110'
                              : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                          }`}
                          title="Late"
                        >
                          <Clock className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(student.id, 'excused')}
                          className={`p-2 rounded-lg transition-all ${
                            student.status === 'excused'
                              ? 'bg-blue-500 text-white shadow-lg scale-110'
                              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                          }`}
                          title="Excused"
                        >
                          <AlertCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {student.status ? (
                        <Badge
                          className={`
                            ${student.status === 'present' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : ''}
                            ${student.status === 'absent' ? 'bg-red-500/10 text-red-500 border-red-500/20' : ''}
                            ${student.status === 'late' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : ''}
                            ${student.status === 'excused' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' : ''}
                            border capitalize
                          `}
                        >
                          {student.status}
                        </Badge>
                      ) : (
                        <span className="text-slate-400 text-sm">Not marked</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Bottom Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <Button 
            variant="outline"
            onClick={() => navigate('/admin/attendance')}
            className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-[#2563EB] hover:bg-blue-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Attendance
          </Button>
        </div>
      </div>
    </PortalLayout>
  );
}
