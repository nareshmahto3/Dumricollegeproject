import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  UserPlus,
  Search,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
  BookOpen,
  Award,
  Clock,
  Users,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { TablePagination } from './ui/table-pagination';

interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  qualification: string;
  experience: string;
  joiningDate: string;
  classes: string[];
  status: 'active' | 'inactive' | 'on-leave';
  avatar?: string;
  salary: string;
  employeeId: string;
}

export function TeacherManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@school.com',
      phone: '+91 98765 43210',
      subject: 'Mathematics',
      qualification: 'M.Sc, B.Ed',
      experience: '12 years',
      joiningDate: '2015-06-15',
      classes: ['Class 10A', 'Class 10B', 'Class 12A'],
      status: 'active',
      salary: '₹65,000',
      employeeId: 'TCH001',
    },
    {
      id: '2',
      name: 'Mr. Rahul Verma',
      email: 'rahul.verma@school.com',
      phone: '+91 98765 43211',
      subject: 'Physics',
      qualification: 'M.Sc Physics, B.Ed',
      experience: '8 years',
      joiningDate: '2018-07-20',
      classes: ['Class 11A', 'Class 12A'],
      status: 'active',
      salary: '₹58,000',
      employeeId: 'TCH002',
    },
    {
      id: '3',
      name: 'Ms. Anjali Patel',
      email: 'anjali.patel@school.com',
      phone: '+91 98765 43212',
      subject: 'English',
      qualification: 'M.A English, B.Ed',
      experience: '10 years',
      joiningDate: '2016-08-10',
      classes: ['Class 9A', 'Class 9B', 'Class 10A'],
      status: 'active',
      salary: '₹55,000',
      employeeId: 'TCH003',
    },
    {
      id: '4',
      name: 'Mr. Vikram Singh',
      email: 'vikram.singh@school.com',
      phone: '+91 98765 43213',
      subject: 'Chemistry',
      qualification: 'M.Sc Chemistry',
      experience: '6 years',
      joiningDate: '2020-01-15',
      classes: ['Class 11B', 'Class 12B'],
      status: 'on-leave',
      salary: '₹52,000',
      employeeId: 'TCH004',
    },
    {
      id: '5',
      name: 'Ms. Kavita Reddy',
      email: 'kavita.reddy@school.com',
      phone: '+91 98765 43214',
      subject: 'Biology',
      qualification: 'M.Sc Zoology, B.Ed',
      experience: '15 years',
      joiningDate: '2012-03-22',
      classes: ['Class 11A', 'Class 11B', 'Class 12A'],
      status: 'active',
      salary: '₹68,000',
      employeeId: 'TCH005',
    },
    {
      id: '6',
      name: 'Mr. Arjun Kumar',
      email: 'arjun.kumar@school.com',
      phone: '+91 98765 43215',
      subject: 'History',
      qualification: 'M.A History',
      experience: '5 years',
      joiningDate: '2021-06-01',
      classes: ['Class 8A', 'Class 9A', 'Class 10A'],
      status: 'active',
      salary: '₹48,000',
      employeeId: 'TCH006',
    },
  ]);

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Computer Science', 'Physical Education'];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === 'all' || teacher.subject === filterSubject;
    const matchesStatus = filterStatus === 'all' || teacher.status === filterStatus;
    return matchesSearch && matchesSubject && matchesStatus;
  });

  // Apply sorting
  const sortedTeachers = [...filteredTeachers].sort((a, b) => {
    if (!sortField) return 0;

    let aValue: any = a[sortField as keyof Teacher];
    let bValue: any = b[sortField as keyof Teacher];

    // Handle string comparisons
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Apply pagination
  const paginatedTeachers = sortedTeachers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleDeleteTeacher = (id: string) => {
    if (confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter((t) => t.id !== id));
      toast.success('Teacher deleted successfully!');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'on-leave':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const stats = [
    {
      title: 'Total Teachers',
      value: teachers.length.toString(),
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Active',
      value: teachers.filter((t) => t.status === 'active').length.toString(),
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      title: 'On Leave',
      value: teachers.filter((t) => t.status === 'on-leave').length.toString(),
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      title: 'Subjects',
      value: new Set(teachers.map((t) => t.subject)).size.toString(),
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Teacher Management"
      breadcrumbs={["Home", "Admin", "Teachers"]}
    >
      <div className="space-y-6">
        {/* Action Button */}
        <div className="flex justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/admin/add-teacher')}
              className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg border-2 border-white/20"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add New Teacher
            </Button>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className={`p-6 border-2 ${stat.borderColor} ${stat.bgColor} shadow-lg h-full`}>
                  <div className="flex items-center justify-between h-full">
                    <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 ${stat.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 mb-8 shadow-lg border-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by name, email, or employee ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-2 border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>
              <div>
                <select
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none"
                >
                  <option value="all">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="on-leave">On Leave</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Teachers Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto table-scroll">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-100">
                    <th 
                      className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                      onClick={() => handleSort('employeeId')}
                    >
                      <div className="flex items-center gap-2">
                        Employee ID
                        {sortField === 'employeeId' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center gap-2">
                        Name
                        {sortField === 'name' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                      onClick={() => handleSort('subject')}
                    >
                      <div className="flex items-center gap-2">
                        Subject
                        {sortField === 'subject' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </th>
                    <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Contact</th>
                    <th 
                      className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                      onClick={() => handleSort('experience')}
                    >
                      <div className="flex items-center gap-2">
                        Experience
                        {sortField === 'experience' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </th>
                    <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Classes</th>
                    <th 
                      className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                      onClick={() => handleSort('status')}
                    >
                      <div className="flex items-center gap-2">
                        Status
                        {sortField === 'status' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </th>
                    <th className="px-4 xl:px-6 py-4 text-left text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {paginatedTeachers.map((teacher, index) => (
                    <motion.tr
                      key={teacher.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className={`border-b border-slate-200 hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                      }`}
                    >
                      <td className="px-4 xl:px-6 py-4 whitespace-nowrap">
                        <span className="font-mono text-sm font-semibold text-blue-600">{teacher.employeeId}</span>
                      </td>
                      <td className="px-4 xl:px-6 py-4 whitespace-nowrap">
                        <div>
                          <p className="font-semibold text-slate-900">{teacher.name}</p>
                          <p className="text-sm text-slate-600">{teacher.qualification}</p>
                        </div>
                      </td>
                      <td className="px-4 xl:px-6 py-4 whitespace-nowrap">
                        <Badge className="bg-amber-100 text-amber-700 border border-amber-200">
                          {teacher.subject}
                        </Badge>
                      </td>
                      <td className="px-4 xl:px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Mail className="w-4 h-4" />
                            {teacher.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="w-4 h-4" />
                            {teacher.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 xl:px-6 py-4 text-sm text-slate-700 whitespace-nowrap">{teacher.experience}</td>
                      <td className="px-4 xl:px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {teacher.classes.slice(0, 2).map((cls) => (
                            <Badge key={cls} variant="outline" className="text-xs border-slate-300 text-slate-700">
                              {cls}
                            </Badge>
                          ))}
                          {teacher.classes.length > 2 && (
                            <Badge variant="outline" className="text-xs border-slate-300 text-slate-700">
                              +{teacher.classes.length - 2}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-4 xl:px-6 py-4 whitespace-nowrap">
                        <Badge className={`${getStatusColor(teacher.status)} border capitalize`}>
                          {teacher.status}
                        </Badge>
                      </td>
                      <td className="px-4 xl:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/admin/teacher-details/${teacher.id}`)}
                            className="hover:bg-amber-50 hover:text-amber-700 text-slate-600"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/admin/edit-teacher/${teacher.id}`)}
                            className="hover:bg-amber-50 hover:text-amber-700 text-slate-600"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteTeacher(teacher.id)}
                            className="hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTeachers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No teachers found</p>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Pagination */}
        <TablePagination
          totalItems={filteredTeachers.length}
          itemsPerPage={rowsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </PortalLayout>
  );
}
