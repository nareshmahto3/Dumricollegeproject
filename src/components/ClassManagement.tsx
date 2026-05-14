import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { motion } from 'motion/react';
import { FileDown, FileSpreadsheet } from 'lucide-react';
import { toast } from 'sonner';
import { Plus, Search, Filter, Edit, Trash2, Eye, Users, BookOpen, User as UserIcon, Calendar, MoreVertical, LayoutGrid, GraduationCap, User, Download, MapPin, Clock, ChevronUp, ChevronDown } from 'lucide-react';

interface Class {
  id: string;
  name: string;
  grade: string;
  section: string;
  classTeacher: string;
  totalStudents: number;
  subjects: number;
  room: string;
  schedule: string;
  capacity: number;
}

const statsCards = [
  { title: 'Total Classes', value: '48', icon: LayoutGrid, gradient: 'from-emerald-500 to-teal-600', change: '+3' },
  { title: 'Total Students', value: '1,245', icon: Users, gradient: 'from-blue-500 to-cyan-600', change: '+45' },
  { title: 'Total Teachers', value: '87', icon: GraduationCap, gradient: 'from-orange-500 to-amber-600', change: '+5' },
  { title: 'Avg Students/Class', value: '26', icon: User, gradient: 'from-purple-500 to-pink-600', change: '+2' },
];

const mockClasses: Class[] = [
  {
    id: 'CLS001',
    name: 'Class 10-A',
    grade: '10',
    section: 'A',
    classTeacher: 'Dr. Sarah Johnson',
    totalStudents: 35,
    subjects: 8,
    room: 'Room 201',
    schedule: 'Mon-Fri, 8:00 AM - 2:00 PM',
    capacity: 40,
  },
  {
    id: 'CLS002',
    name: 'Class 10-B',
    grade: '10',
    section: 'B',
    classTeacher: 'Prof. Michael Chen',
    totalStudents: 32,
    subjects: 8,
    room: 'Room 202',
    schedule: 'Mon-Fri, 8:00 AM - 2:00 PM',
    capacity: 40,
  },
  {
    id: 'CLS003',
    name: 'Class 9-A',
    grade: '9',
    section: 'A',
    classTeacher: 'Ms. Emily Brown',
    totalStudents: 28,
    subjects: 7,
    room: 'Room 301',
    schedule: 'Mon-Fri, 8:00 AM - 2:00 PM',
    capacity: 35,
  },
  {
    id: 'CLS004',
    name: 'Class 9-B',
    grade: '9',
    section: 'B',
    classTeacher: 'Mr. David Wilson',
    totalStudents: 30,
    subjects: 7,
    room: 'Room 302',
    schedule: 'Mon-Fri, 8:00 AM - 2:00 PM',
    capacity: 35,
  },
  {
    id: 'CLS005',
    name: 'Class 8-A',
    grade: '8',
    section: 'A',
    classTeacher: 'Dr. Lisa Anderson',
    totalStudents: 25,
    subjects: 7,
    room: 'Room 401',
    schedule: 'Mon-Fri, 8:00 AM - 2:00 PM',
    capacity: 35,
  },
];

export function ClassManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showExportDropdown, setShowExportDropdown] = useState(false);


  const handleDownload = (format: 'pdf' | 'csv' | 'excel') => {
    toast.success(`Downloading report as ${format.toUpperCase()}...`, {
      description: `Your  report will be downloaded shortly.`,
    });
  };

  const grades = ['All', '6', '7', '8', '9', '10', '11', '12'];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const getCapacityBadge = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    let color = 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';

    if (percentage >= 90) {
      color = 'bg-red-500/10 text-red-500 border-red-500/20';
    } else if (percentage >= 75) {
      color = 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    }

    return (
      <Badge className={`${color} border`}>
        {current}/{capacity}
      </Badge>
    );
  };

  const filteredClasses = mockClasses.filter((cls) => {
    const gradeMatch = filterGrade === 'all' || cls.grade === filterGrade;
    const searchMatch = cls.name.toLowerCase().includes(searchTerm.toLowerCase());
    return gradeMatch && searchMatch;
  });

  // Sort filtered classes
  const sortedClasses = [...filteredClasses].sort((a, b) => {
    if (!sortField) return 0;

    let aValue = a[sortField as keyof Class];
    let bValue = b[sortField as keyof Class];

    if (typeof aValue === 'string') aValue = aValue.toLowerCase();
    if (typeof bValue === 'string') bValue = bValue.toLowerCase();

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedClasses.length / rowsPerPage);
  const paginatedClasses = sortedClasses.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Class Management"
      breadcrumbs={["Home", "Admin", "Classes"]}
    >
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Class Management</h1>
              <p className="text-slate-600">Manage classes, sections, and student assignments</p>
            </div>
            <Button
              onClick={() => navigate('/admin/add-class')}
              className="gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/20"
            >
              <Plus className="w-4 h-4" />
              Add New Class
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {statsCards.map((stat, index) => (
            <Card key={stat.title} className={`p-5 bg-gradient-to-br ${stat.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all rounded-2xl`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/90 text-sm font-medium">+{stat.change}</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/80 text-sm">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="bg-white border-slate-200 p-6 mb-6 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                className="bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              >
                {grades.map(grade => (
                  <option key={grade} value={grade.toLowerCase()}>{grade === 'All' ? 'All Grades' : `Grade ${grade}`}</option>
                ))}
              </select>
              <div className="relative">
                <Button
                  onClick={() => setShowExportDropdown(!showExportDropdown)}
                  className="bg-gradient-to-r  from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-105 text-white transition-all duration-200"
                >
                  <FileDown className="w-4 h-4 " />
                  Export Data
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                {showExportDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 bg-white border border-slate-200 shadow-lg rounded-lg z-50 min-w-[140px]"
                  >
                    <div className="py-1">
                      <button
                        onClick={() => {
                          handleDownload('pdf');
                          setShowExportDropdown(false);
                        }}
                        className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <FileDown className="w-4 h-4 mr-2 text-red-600" />
                        PDF
                      </button>
                      <button
                        onClick={() => {
                          handleDownload('csv');
                          setShowExportDropdown(false);
                        }}
                        className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <FileSpreadsheet className="w-4 h-4 mr-2 text-green-600" />
                        CSV
                      </button>
                      <button
                        onClick={() => {
                          handleDownload('excel');
                          setShowExportDropdown(false);
                        }}
                        className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2 text-blue-600" />
                        Excel
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Classes Grid View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {paginatedClasses.slice(0, 6).map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-white border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
                <div className="p-6">
                  {/* Class Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{classItem.name}</h3>
                      <p className="text-slate-600 text-sm">ID: {classItem.id}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-slate-600 hover:text-slate-700 hover:bg-slate-50">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Class Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{classItem.classTeacher}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{classItem.room}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{classItem.schedule}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <p className="text-slate-600 text-xs mb-1">Students</p>
                      <p className="text-slate-900 font-bold">{classItem.totalStudents}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-600 text-xs mb-1">Subjects</p>
                      <p className="text-slate-900 font-bold">{classItem.subjects}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-600 text-xs mb-1">Capacity</p>
                      <div className="flex justify-center">
                        {getCapacityBadge(classItem.totalStudents, classItem.capacity)}
                      </div>
                    </div>
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

        {/* Classes Table View */}
        <Card className="bg-white border-slate-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-900">Detailed Class List</h3>
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-700 font-medium">Rows:</label>
              <select
                value={rowsPerPage}
                onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
                className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>

          <div className="table-scroll">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('id')}
                  >
                    <div className="flex items-center gap-2">
                      Class ID
                      {sortField === 'id' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center gap-2">
                      Class Name
                      {sortField === 'name' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('grade')}
                  >
                    <div className="flex items-center gap-2">
                      Grade
                      {sortField === 'grade' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('section')}
                  >
                    <div className="flex items-center gap-2">
                      Section
                      {sortField === 'section' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('classTeacher')}
                  >
                    <div className="flex items-center gap-2">
                      Class Teacher
                      {sortField === 'classTeacher' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('room')}
                  >
                    <div className="flex items-center gap-2">
                      Room
                      {sortField === 'room' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('totalStudents')}
                  >
                    <div className="flex items-center gap-2">
                      Students
                      {sortField === 'totalStudents' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('subjects')}
                  >
                    <div className="flex items-center gap-2">
                      Subjects
                      {sortField === 'subjects' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-0" />
                      )}
                    </div>
                  </th>
                  <th className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {paginatedClasses.map((classItem, index) => (
                  <motion.tr
                    key={classItem.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}
                  >
                    <td className="py-3 px-4 xl:px-6 text-slate-900 font-semibold text-sm">{classItem.id}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-900 font-semibold text-sm">{classItem.name}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{classItem.grade}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{classItem.section}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{classItem.classTeacher}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{classItem.room}</td>
                    <td className="py-3 px-4 xl:px-6">{getCapacityBadge(classItem.totalStudents, classItem.capacity)}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{classItem.subjects}</td>
                    <td className="py-3 px-4 xl:px-6">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-600 hover:text-slate-700 hover:bg-slate-50">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-200">
            <div className="text-xs sm:text-sm text-slate-600">
              Showing <span className="text-slate-900 font-semibold">{paginatedClasses.length}</span> of{' '}
              <span className="text-slate-900 font-semibold">{sortedClasses.length}</span> classes
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 text-sm px-3 sm:px-4"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  className={`${currentPage === index + 1 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                    } text-sm px-3 sm:px-4`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 text-sm px-3 sm:px-4"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}