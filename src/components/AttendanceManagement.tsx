import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { motion } from 'motion/react';
import { Search, Filter, Calendar, Download, UserCheck, UserX, Clock, Plus, CheckCircle, AlertCircle, ClipboardCheck, TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';
import { TablePagination } from './ui/table-pagination';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router';
import { FileDown, FileSpreadsheet } from 'lucide-react';
import { toast } from 'sonner';

interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
  checkInTime?: string;
  remarks?: string;
}

const statsCards = [
  { title: 'Total Students', value: '1,245', icon: UserCheck, gradient: 'from-emerald-500 to-teal-600', percentage: '100%' },
  { title: 'Present Today', value: '1,198', icon: CheckCircle, gradient: 'from-blue-500 to-cyan-600', percentage: '96.2%' },
  { title: 'Absent Today', value: '35', icon: UserX, gradient: 'from-orange-500 to-amber-600', percentage: '2.8%' },
  { title: 'On Leave', value: '12', icon: Calendar, gradient: 'from-purple-500 to-pink-600', percentage: '1.0%' },
];

const mockAttendance: AttendanceRecord[] = [
  {
    id: 'ATT001',
    studentId: 'STD001',
    studentName: 'John Doe',
    class: 'Class 10-A',
    date: '2026-02-23',
    status: 'Present',
    checkInTime: '08:15 AM',
  },
  {
    id: 'ATT002',
    studentId: 'STD002',
    studentName: 'Jane Smith',
    class: 'Class 10-A',
    date: '2026-02-23',
    status: 'Present',
    checkInTime: '08:10 AM',
  },
  {
    id: 'ATT003',
    studentId: 'STD003',
    studentName: 'Mike Johnson',
    class: 'Class 10-B',
    date: '2026-02-23',
    status: 'Late',
    checkInTime: '08:45 AM',
    remarks: 'Traffic delay',
  },
  {
    id: 'ATT004',
    studentId: 'STD004',
    studentName: 'Sarah Williams',
    class: 'Class 10-A',
    date: '2026-02-23',
    status: 'Absent',
    remarks: 'Sick',
  },
  {
    id: 'ATT005',
    studentId: 'STD005',
    studentName: 'David Brown',
    class: 'Class 9-A',
    date: '2026-02-23',
    status: 'Excused',
    remarks: 'Medical appointment',
  },
];

const weeklyData = [
  { day: 'Mon', present: 1195, absent: 40, late: 10 },
  { day: 'Tue', present: 1200, absent: 35, late: 10 },
  { day: 'Wed', present: 1190, absent: 45, late: 10 },
  { day: 'Thu', present: 1205, absent: 30, late: 10 },
  { day: 'Fri', present: 1198, absent: 35, late: 12 },
];

const monthlyData = [
  { week: 'Week 1', percentage: 95.5 },
  { week: 'Week 2', percentage: 96.2 },
  { week: 'Week 3', percentage: 94.8 },
  { week: 'Week 4', percentage: 96.2 },
];

export function AttendanceManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('records');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterClass, setFilterClass] = useState('all classes');
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

  const classes = ['All Classes', 'Class 10-A', 'Class 10-B', 'Class 9-A', 'Class 9-B', 'Class 8-A'];

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Present: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      Absent: 'bg-red-500/10 text-red-500 border-red-500/20',
      Late: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      Excused: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    };

    const icons: Record<string, any> = {
      Present: CheckCircle,
      Absent: UserX,
      Late: Clock,
      Excused: AlertCircle,
    };

    const Icon = icons[status];

    return (
      <Badge className={`${statusColors[status]} border flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {status}
      </Badge>
    );
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Attendance Management"
      breadcrumbs={["Home", "Admin", "Attendance"]}
    >
      <div className="min-h-screen p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Attendance Management</h1>
              <p className="text-slate-600">Track and manage student attendance records</p>
            </div>
            <div className="flex gap-3">
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
              <Button
                onClick={() => navigate('/admin/mark-attendance')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Mark Attendance
              </Button>
            </div>
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
                <div className="text-white/90 text-sm font-medium">{stat.percentage}</div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/80 text-sm">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-4 border-b border-amber-200">
            <button
              onClick={() => setActiveTab('records')}
              className={`pb-4 px-4 font-medium transition-all ${activeTab === 'records'
                ? 'text-amber-600 border-b-2 border-amber-500'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <ClipboardCheck className="w-4 h-4 inline mr-2" />
              Attendance Records
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`pb-4 px-4 font-medium transition-all ${activeTab === 'reports'
                ? 'text-amber-600 border-b-2 border-amber-500'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              Attendance Reports
            </button>
          </div>
        </div>

        {/* Attendance Records Tab */}
        {activeTab === 'records' && (
          <>
            {/* Filters */}
            <Card className="bg-white border-amber-200 p-6 mb-6 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border-2 border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="all">All Statuses</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Late">Late</option>
                  <option value="Excused">Excused</option>
                </select>
                <select
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  {classes.map((cls) => (
                    <option key={cls} value={cls.toLowerCase()}>
                      {cls}
                    </option>
                  ))}
                </select>
                <Button variant="outline" className="border-gray-300 bg-white text-slate-700 hover:bg-gray-50 hover:border-gray-400">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </Card>

            {/* Attendance Table */}
            <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
              <div className="overflow-x-auto table-scroll">
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-100">
                      <th
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('studentId')}
                      >
                        <div className="flex items-center gap-2">
                          Student ID
                          {sortField === 'studentId' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('studentName')}
                      >
                        <div className="flex items-center gap-2">
                          Student Name
                          {sortField === 'studentName' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('class')}
                      >
                        <div className="flex items-center gap-2">
                          Class
                          {sortField === 'class' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('date')}
                      >
                        <div className="flex items-center gap-2">
                          Date
                          {sortField === 'date' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('status')}
                      >
                        <div className="flex items-center gap-2">
                          Status
                          {sortField === 'status' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Check-in Time</th>
                      <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Remarks</th>
                      <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {mockAttendance.map((record, index) => (
                      <motion.tr
                        key={record.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`border-b border-slate-200 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                          }`}
                      >
                        <td className="py-4 px-4 xl:px-6 text-slate-900 font-medium whitespace-nowrap">{record.studentId}</td>
                        <td className="py-4 px-4 xl:px-6 text-slate-900 whitespace-nowrap">{record.studentName}</td>
                        <td className="py-4 px-4 xl:px-6 text-slate-600 whitespace-nowrap">{record.class}</td>
                        <td className="py-4 px-4 xl:px-6 text-slate-600 whitespace-nowrap">{record.date}</td>
                        <td className="py-4 px-4 xl:px-6 whitespace-nowrap">{getStatusBadge(record.status)}</td>
                        <td className="py-4 px-4 xl:px-6 text-slate-600 whitespace-nowrap">{record.checkInTime || '-'}</td>
                        <td className="py-4 px-4 xl:px-6 text-slate-600 whitespace-nowrap">{record.remarks || '-'}</td>
                        <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                          <Button size="sm" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                            Edit
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <TablePagination
                currentPage={currentPage}
                totalPages={Math.ceil(mockAttendance.length / rowsPerPage)}
                onPageChange={setCurrentPage}
                totalItems={mockAttendance.length}
                itemsPerPage={rowsPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            </Card>
          </>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            {/* Weekly Attendance Chart */}
            <Card className="bg-white border-amber-200 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Weekly Attendance Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #f59e0b',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar key="bar-present-attendance" dataKey="present" fill="#10b981" name="Present" />
                  <Bar key="bar-absent-attendance" dataKey="absent" fill="#ef4444" name="Absent" />
                  <Bar key="bar-late-attendance" dataKey="late" fill="#f59e0b" name="Late" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Trend */}
              <Card className="bg-white border-amber-200 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Monthly Attendance Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="week" stroke="#64748b" />
                    <YAxis stroke="#64748b" domain={[90, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #f59e0b',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      key="line-percentage-attendance"
                      type="monotone"
                      dataKey="percentage"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={{ fill: '#f59e0b', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Class-wise Summary */}
              <Card className="bg-white border-amber-200 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Class-wise Attendance Summary</h3>
                <div className="space-y-4">
                  {['Class 10-A', 'Class 10-B', 'Class 9-A', 'Class 9-B', 'Class 8-A'].map((cls, idx) => (
                    <div key={cls} className="flex items-center justify-between">
                      <span className="text-slate-700 font-medium">{cls}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-48 h-2 bg-amber-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${95 + idx}%` }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                          />
                        </div>
                        <span className="text-emerald-600 font-semibold w-12 text-right">
                          {95 + idx}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}