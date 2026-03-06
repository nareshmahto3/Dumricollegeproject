import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { motion } from 'motion/react';
import { Plus, Search, Edit, Eye, BookOpen, Clock, Download, GraduationCap, FileText, Users } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  code: string;
  type: 'Core' | 'Elective' | 'Lab';
  grade: string;
  teacher: string;
  totalStudents: number;
  classesPerWeek: number;
  duration: string;
  syllabus: string;
  status: 'Active' | 'Inactive';
}

const statsCards = [
  { title: 'Total Subjects', value: '24', icon: BookOpen, gradient: 'from-emerald-500 to-teal-600', change: '+2 this semester' },
  { title: 'Active Teachers', value: '18', icon: Users, gradient: 'from-blue-500 to-cyan-600', change: '+1 from last month' },
  { title: 'Total Students', value: '856', icon: GraduationCap, gradient: 'from-orange-500 to-amber-600', change: '+45 enrolled' },
  { title: 'Avg. Attendance', value: '94%', icon: Clock, gradient: 'from-purple-500 to-pink-600', change: '+2% from last week' },
];

const mockSubjects: Subject[] = [
  {
    id: 'SUB001',
    name: 'Mathematics',
    code: 'MATH-101',
    type: 'Core',
    grade: '10',
    teacher: 'Dr. Sarah Johnson',
    totalStudents: 120,
    classesPerWeek: 6,
    duration: '45 mins',
    syllabus: 'Algebra, Geometry, Trigonometry',
    status: 'Active',
  },
  {
    id: 'SUB002',
    name: 'Physics',
    code: 'PHY-101',
    type: 'Core',
    grade: '10',
    teacher: 'Prof. Michael Chen',
    totalStudents: 115,
    classesPerWeek: 5,
    duration: '45 mins',
    syllabus: 'Mechanics, Optics, Electricity',
    status: 'Active',
  },
  {
    id: 'SUB003',
    name: 'Chemistry',
    code: 'CHEM-101',
    type: 'Core',
    grade: '10',
    teacher: 'Dr. Emily Brown',
    totalStudents: 110,
    classesPerWeek: 5,
    duration: '45 mins',
    syllabus: 'Organic, Inorganic, Physical Chemistry',
    status: 'Active',
  },
  {
    id: 'SUB004',
    name: 'Computer Science',
    code: 'CS-101',
    type: 'Elective',
    grade: '10',
    teacher: 'Mr. David Wilson',
    totalStudents: 85,
    classesPerWeek: 4,
    duration: '45 mins',
    syllabus: 'Programming, Data Structures',
    status: 'Active',
  },
  {
    id: 'SUB005',
    name: 'Physics Lab',
    code: 'PHY-LAB-101',
    type: 'Lab',
    grade: '10',
    teacher: 'Prof. Michael Chen',
    totalStudents: 115,
    classesPerWeek: 2,
    duration: '90 mins',
    syllabus: 'Practical experiments',
    status: 'Active',
  },
];

export function SubjectManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const types = ['All', 'Core', 'Elective', 'Lab'];
  const grades = ['All', '6', '7', '8', '9', '10', '11', '12'];

  const getTypeBadge = (type: string) => {
    const typeColors: Record<string, string> = {
      Core: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      Elective: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      Lab: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    };

    return (
      <Badge className={`${typeColors[type]} border`}>
        {type}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Active: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      Inactive: 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    return (
      <Badge className={`${statusColors[status]} border`}>
        {status}
      </Badge>
    );
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Subject Management"
      breadcrumbs={["Home", "Admin", "Subjects"]}
    >
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-blue-600 text-sm">Manage subjects, syllabus, and teacher assignments</p>
            </div>
            <Button className="gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/20">
              <Plus className="w-4 h-4" />
              Add New Subject
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statsCards.map((stat, index) => (
            <Card key={stat.title} className={`p-5 bg-gradient-to-br ${stat.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all rounded-2xl`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/90 text-sm font-medium">{stat.change}</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/80 text-sm">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="bg-white shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" />
              <input
                type="text"
                placeholder="Search subjects, teachers, codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-blue-50 border-2 border-blue-300 rounded-lg pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              {types.map((type) => (
                <option key={type} value={type.toLowerCase()}>
                  {type === 'All' ? 'All Types' : type}
                </option>
              ))}
            </select>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              {grades.map((grade) => (
                <option key={grade} value={grade.toLowerCase()}>
                  {grade === 'All' ? 'All Grades' : `Grade ${grade}`}
                </option>
              ))}
            </select>
            <Button variant="outline" className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200 shadow-sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </Card>

        {/* Subjects Grid View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {mockSubjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-white shadow-md hover:shadow-lg transition-all">
                <div className="p-6">
                  {/* Subject Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{subject.name}</h3>
                        {getTypeBadge(subject.type)}
                      </div>
                      <p className="text-slate-600 text-sm">Code: {subject.code}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Subject Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{subject.teacher}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Grade {subject.grade}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{subject.classesPerWeek} classes/week • {subject.duration}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-blue-200">
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Total Students</p>
                      <p className="text-slate-900 font-bold">{subject.totalStudents}</p>
                    </div>
                    <div>
                      <p className="text-slate-600 text-xs mb-1">Status</p>
                      {getStatusBadge(subject.status)}
                    </div>
                  </div>

                  {/* Syllabus */}
                  <div className="mb-4">
                    <p className="text-slate-600 text-xs mb-1">Syllabus Overview</p>
                    <p className="text-slate-700 text-sm">{subject.syllabus}</p>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}