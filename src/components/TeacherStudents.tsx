import { useState } from 'react';
import {
  Users,
  Search,
  Eye,
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
];

export function TeacherStudents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Badge className="bg-green-100 text-green-700">Excellent</Badge>;
      case 'good':
        return <Badge className="bg-blue-100 text-blue-700">Good</Badge>;
      case 'average':
        return <Badge className="bg-yellow-100 text-yellow-700">Average</Badge>;
      case 'needs-attention':
        return <Badge className="bg-red-100 text-red-700">Needs Attention</Badge>;
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
      breadcrumbs={['Home', 'Teacher', 'Students']}
    >
      <div className="space-y-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 bg-blue-600 text-white">
            <h3 className="text-2xl font-bold">{totalStudents}</h3>
            <p>Total Students</p>
          </Card>
          <Card className="p-5 bg-green-600 text-white">
            <h3 className="text-2xl font-bold">{excellentStudents}</h3>
            <p>Top Performers</p>
          </Card>
          <Card className="p-5 bg-red-600 text-white">
            <h3 className="text-2xl font-bold">{needsAttention}</h3>
            <p>Needs Attention</p>
          </Card>
          <Card className="p-5 bg-purple-600 text-white">
            <h3 className="text-2xl font-bold">{avgAttendance}%</h3>
            <p>Avg Attendance</p>
          </Card>
        </div>

        {/* Search + Filter */}
        <Card className="p-4 bg-white">
          <div className="flex gap-4">
            <div className="relative flex-1 border rounded-2xl border-slate-300 ">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 "
              />
            </div>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border px-3 rounded"
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {/* ✅ TABLE */}
        <Card className="bg-white border">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3">Roll</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Attendance</th>
                  <th className="p-3">Performance</th>
                  <th className="p-3">Assignments</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-t hover:bg-gray-50">
                    <td className="p-3 font-medium">{student.name}</td>
                    <td className="p-3">{student.rollNo}</td>
                    <td className="p-3">{student.class}</td>

                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {student.attendance}%
                        <Progress value={student.attendance} className="w-20 h-2" />
                      </div>
                    </td>

                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {student.performance}%
                        <Progress value={student.performance} className="w-20 h-2" />
                      </div>
                    </td>

                    <td className="p-3">
                      {student.assignments.submitted}/{student.assignments.total}
                    </td>

                    <td className="p-3">
                      {getStatusBadge(student.status)}
                    </td>

                    <td className="p-3">
                      <Button
                        size="sm"
                        onClick={(e) => handleViewDetails(student.id, e)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Empty */}
        {filteredStudents.length === 0 && (
          <Card className="p-6 text-center">
            <Users className="mx-auto mb-2" />
            No students found
          </Card>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedStudentDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Card className="p-6 w-96">
            <h2 className="text-lg font-bold mb-2">
              {selectedStudentDetails.name}
            </h2>
            <p>Email: {selectedStudentDetails.email}</p>
            <p>Phone: {selectedStudentDetails.phone}</p>

            <Button
              className="mt-4"
              onClick={() => setShowModal(false)}
            >
              <X className="w-4 h-4 mr-1" />
              Close
            </Button>
          </Card>
        </div>
      )}
    </PortalLayout>
  );
}