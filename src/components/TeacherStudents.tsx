import { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  Eye,
  Mail,
  Phone,
  TrendingUp,
  Award,
  AlertCircle,
  X,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Progress } from './ui/progress';

const students = [
  {
    id: 1,
    name: 'Aarav Sharma',
    rollNo: '2023001',
    class: 'Grade 10-A',
    email: 'aarav.sharma@school.edu',
    phone: '+91 98765 43210',
    attendance: 98,
    performance: 92,
    assignments: { submitted: 15, total: 15 },
    status: 'excellent',
  },
  {
    id: 2,
    name: 'Priya Patel',
    rollNo: '2023002',
    class: 'Grade 10-A',
    email: 'priya.patel@school.edu',
    phone: '+91 98765 43211',
    attendance: 95,
    performance: 88,
    assignments: { submitted: 14, total: 15 },
    status: 'good',
  },
  {
    id: 3,
    name: 'Rohan Kumar',
    rollNo: '2023003',
    class: 'Grade 11-B',
    email: 'rohan.kumar@school.edu',
    phone: '+91 98765 43212',
    attendance: 92,
    performance: 85,
    assignments: { submitted: 13, total: 15 },
    status: 'good',
  },
  {
    id: 4,
    name: 'Ananya Singh',
    rollNo: '2023004',
    class: 'Grade 10-A',
    email: 'ananya.singh@school.edu',
    phone: '+91 98765 43213',
    attendance: 100,
    performance: 95,
    assignments: { submitted: 15, total: 15 },
    status: 'excellent',
  },
  {
    id: 5,
    name: 'Vivaan Reddy',
    rollNo: '2023005',
    class: 'Grade 12-C',
    email: 'vivaan.reddy@school.edu',
    phone: '+91 98765 43214',
    attendance: 88,
    performance: 78,
    assignments: { submitted: 11, total: 15 },
    status: 'average',
  },
  {
    id: 6,
    name: 'Kavya Joshi',
    rollNo: '2023006',
    class: 'Grade 11-B',
    email: 'kavya.joshi@school.edu',
    phone: '+91 98765 43215',
    attendance: 85,
    performance: 72,
    assignments: { submitted: 10, total: 15 },
    status: 'needs-attention',
  },
  {
    id: 7,
    name: 'Aditya Nair',
    rollNo: '2023007',
    class: 'Grade 9-A',
    email: 'aditya.nair@school.edu',
    phone: '+91 98765 43216',
    attendance: 96,
    performance: 90,
    assignments: { submitted: 14, total: 15 },
    status: 'excellent',
  },
  {
    id: 8,
    name: 'Diya Gupta',
    rollNo: '2023008',
    class: 'Grade 10-B',
    email: 'diya.gupta@school.edu',
    phone: '+91 98765 43217',
    attendance: 93,
    performance: 86,
    assignments: { submitted: 13, total: 15 },
    status: 'good',
  },
];

export function TeacherStudents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Badge className="bg-green-100 text-green-700 border-green-200">Excellent</Badge>;
      case 'good':
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Good</Badge>;
      case 'average':
        return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Average</Badge>;
      case 'needs-attention':
        return <Badge className="bg-red-100 text-red-700 border-red-200">Needs Attention</Badge>;
      default:
        return null;
    }
  };

  const handleViewDetails = (studentId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedStudent(studentId);
    setShowModal(true);
  };

  const selectedStudentDetails = students.find((s) => s.id === selectedStudent);

  const classes = ['all', ...new Set(students.map((s) => s.class))];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.includes(searchQuery);
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const totalStudents = students.length;
  const excellentStudents = students.filter((s) => s.status === 'excellent').length;
  const needsAttention = students.filter((s) => s.status === 'needs-attention').length;
  const avgAttendance = Math.round(
    students.reduce((sum, s) => sum + s.attendance, 0) / students.length
  );

  return (
    <PortalLayout
      role="teacher"
      userName="Dr. Priya Sharma"
      userRole="Mathematics Teacher"
      pageTitle="My Students"
      breadcrumbs={["Home", "Teacher", "Students"]}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-1">{totalStudents}</h3>
                <p className="text-white/90 text-sm font-semibold">Total Students</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-1">{excellentStudents}</h3>
                <p className="text-white/90 text-sm font-semibold">Top Performers</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-1">{needsAttention}</h3>
                <p className="text-white/90 text-sm font-semibold">Needs Attention</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-1">{avgAttendance}%</h3>
                <p className="text-white/90 text-sm font-semibold">Avg. Attendance</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="p-4 mb-6 bg-white border border-slate-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input
                type="text"
                placeholder="Search by name or roll number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="h-10 px-4 border-2 border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls === 'all' ? 'All Classes' : cls}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {/* Students List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="p-6 bg-white border-2 border-blue-200 hover:shadow-lg hover:border-blue-400 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{student.name}</h3>
                    <p className="text-sm text-slate-600">
                      Roll: {student.rollNo} • {student.class}
                    </p>
                  </div>
                </div>
                {getStatusBadge(student.status)}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>{student.phone}</span>
                </div>
              </div>

              <div className="space-y-3 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">Attendance</span>
                    <span className="text-sm font-semibold text-green-600">{student.attendance}%</span>
                  </div>
                  <Progress value={student.attendance} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">Performance</span>
                    <span className="text-sm font-semibold text-blue-600">{student.performance}%</span>
                  </div>
                  <Progress value={student.performance} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-700">Assignments</span>
                    <span className="text-sm font-semibold text-slate-900">
                      {student.assignments.submitted}/{student.assignments.total}
                    </span>
                  </div>
                  <Progress
                    value={(student.assignments.submitted / student.assignments.total) * 100}
                    className="h-2"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Button
                  size="sm"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 border-0"
                  onClick={(e) => handleViewDetails(student.id, e)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <Card className="p-12 text-center bg-white border border-slate-200">
            <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No students found</h3>
            <p className="text-slate-600">
              Try adjusting your search or filter criteria
            </p>
          </Card>
        )}
      </div>

      {/* Modal for Student Details */}
      {showModal && selectedStudentDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-8 bg-white border border-slate-200 w-96">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                  {selectedStudentDetails.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{selectedStudentDetails.name}</h3>
                  <p className="text-sm text-slate-600">
                    Roll: {selectedStudentDetails.rollNo} • {selectedStudentDetails.class}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-red-600 text-white hover:bg-red-700 border-0"
                onClick={() => setShowModal(false)}
              >
                <X className="w-4 h-4 mr-1" />
                Close
              </Button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{selectedStudentDetails.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>{selectedStudentDetails.phone}</span>
              </div>
            </div>

            <div className="space-y-3 pb-4 border-b border-slate-200">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-700">Attendance</span>
                  <span className="text-sm font-semibold text-green-600">{selectedStudentDetails.attendance}%</span>
                </div>
                <Progress value={selectedStudentDetails.attendance} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-700">Performance</span>
                  <span className="text-sm font-semibold text-blue-600">{selectedStudentDetails.performance}%</span>
                </div>
                <Progress value={selectedStudentDetails.performance} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-700">Assignments</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {selectedStudentDetails.assignments.submitted}/{selectedStudentDetails.assignments.total}
                  </span>
                </div>
                <Progress
                  value={(selectedStudentDetails.assignments.submitted / selectedStudentDetails.assignments.total) * 100}
                  className="h-2"
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </PortalLayout>
  );
}