import { useState } from 'react';
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  BookOpen,
  GraduationCap,
  Filter,
  ChevronDown,
  FileSpreadsheet,
  FileDown,
  Printer,
  Mail,
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type ReportPeriod = 'monthly' | 'weekly' | 'daily';
type ReportType = 'admission' | 'financial' | 'academic' | 'attendance';
type ExportFormat = 'pdf' | 'csv' | 'excel';

interface ReportData {
  period: string;
  students: number;
  revenue: number;
  admissions: number;
  attendance: number;
}

export function Reports() {
  const [activePeriod, setActivePeriod] = useState<ReportPeriod>('monthly');
  const [selectedReportType, setSelectedReportType] = useState<ReportType>('admission');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');
  const [showFilters, setShowFilters] = useState(false);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const [showPrintDropdown, setShowPrintDropdown] = useState(false);
  const [showEmailDropdown, setShowEmailDropdown] = useState(false);

  // Mock data for different report types
  const monthlyData: ReportData[] = [
    { period: 'Jan', students: 450, revenue: 2250000, admissions: 45, attendance: 92 },
    { period: 'Feb', students: 465, revenue: 2325000, admissions: 38, attendance: 89 },
    { period: 'Mar', students: 480, revenue: 2400000, admissions: 52, attendance: 94 },
    { period: 'Apr', students: 495, revenue: 2475000, admissions: 48, attendance: 91 },
    { period: 'May', students: 510, revenue: 2550000, admissions: 55, attendance: 88 },
    { period: 'Jun', students: 525, revenue: 2625000, admissions: 60, attendance: 90 },
    { period: 'Jul', students: 540, revenue: 2700000, admissions: 65, attendance: 93 },
    { period: 'Aug', students: 555, revenue: 2775000, admissions: 58, attendance: 95 },
    { period: 'Sep', students: 570, revenue: 2850000, admissions: 62, attendance: 92 },
    { period: 'Oct', students: 585, revenue: 2925000, admissions: 68, attendance: 94 },
    { period: 'Nov', students: 600, revenue: 3000000, admissions: 70, attendance: 91 },
    { period: 'Dec', students: 615, revenue: 3075000, admissions: 75, attendance: 89 },
  ];

  const weeklyData: ReportData[] = [
    { period: 'Week 1', students: 615, revenue: 750000, admissions: 18, attendance: 93 },
    { period: 'Week 2', students: 618, revenue: 755000, admissions: 15, attendance: 91 },
    { period: 'Week 3', students: 622, revenue: 762000, admissions: 20, attendance: 94 },
    { period: 'Week 4', students: 625, revenue: 768000, admissions: 22, attendance: 92 },
  ];

  const dailyData: ReportData[] = [
    { period: 'Mon', students: 625, revenue: 125000, admissions: 5, attendance: 94 },
    { period: 'Tue', students: 626, revenue: 126000, admissions: 3, attendance: 92 },
    { period: 'Wed', students: 627, revenue: 127000, admissions: 4, attendance: 95 },
    { period: 'Thu', students: 628, revenue: 128000, admissions: 6, attendance: 93 },
    { period: 'Fri', students: 629, revenue: 129000, admissions: 7, attendance: 91 },
    { period: 'Sat', students: 630, revenue: 130000, admissions: 2, attendance: 88 },
    { period: 'Sun', students: 630, revenue: 0, admissions: 0, attendance: 0 },
  ];

  const getDataByPeriod = () => {
    switch (activePeriod) {
      case 'monthly':
        return monthlyData;
      case 'weekly':
        return weeklyData;
      case 'daily':
        return dailyData;
      default:
        return monthlyData;
    }
  };

  const currentData = getDataByPeriod();

  // Calculate summary stats
  const totalStudents = currentData[currentData.length - 1]?.students || 0;
  const totalRevenue = currentData.reduce((sum, item) => sum + item.revenue, 0);
  const totalAdmissions = currentData.reduce((sum, item) => sum + item.admissions, 0);
  const avgAttendance = Math.round(
    currentData.reduce((sum, item) => sum + item.attendance, 0) / currentData.length
  );

  // Calculate growth percentages
  const studentGrowth = currentData.length > 1
    ? ((currentData[currentData.length - 1].students - currentData[0].students) / currentData[0].students * 100).toFixed(1)
    : '0';
  const revenueGrowth = currentData.length > 1
    ? ((currentData[currentData.length - 1].revenue - currentData[0].revenue) / currentData[0].revenue * 100).toFixed(1)
    : '0';

  // Subject-wise performance data
  const subjectPerformance = [
    { name: 'Mathematics', students: 615, avgScore: 85, passing: 92 },
    { name: 'Science', students: 615, avgScore: 82, passing: 89 },
    { name: 'English', students: 615, avgScore: 88, passing: 95 },
    { name: 'Social Studies', students: 615, avgScore: 80, passing: 87 },
    { name: 'Computer Science', students: 450, avgScore: 86, passing: 91 },
  ];

  // Fee collection data
  const feeCollectionData = [
    { name: 'Collected', value: 85, color: '#10b981' },
    { name: 'Pending', value: 12, color: '#f59e0b' },
    { name: 'Overdue', value: 3, color: '#ef4444' },
  ];

  const stats = [
    {
      title: 'Total Students',
      value: totalStudents.toString(),
      change: `+${studentGrowth}%`,
      isPositive: parseFloat(studentGrowth) >= 0,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100/50',
      borderColor: 'border-blue-200/50',
      iconBgColor: 'bg-blue-500/10',
    },
    {
      title: 'Total Revenue',
      value: `₹${(totalRevenue / 1000000).toFixed(2)}M`,
      change: `+${revenueGrowth}%`,
      isPositive: parseFloat(revenueGrowth) >= 0,
      icon: DollarSign,
      color: 'text-green-500',
      bgColor: 'bg-green-100/50',
      borderColor: 'border-green-200/50',
      iconBgColor: 'bg-green-500/10',
    },
    {
      title: 'New Admissions',
      value: totalAdmissions.toString(),
      change: '+12.5%',
      isPositive: true,
      icon: GraduationCap,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100/50',
      borderColor: 'border-purple-200/50',
      iconBgColor: 'bg-purple-500/10',
    },
    {
      title: 'Avg Attendance',
      value: `${avgAttendance}%`,
      change: '+2.3%',
      isPositive: true,
      icon: BookOpen,
      color: 'text-amber-500',
      bgColor: 'bg-amber-100/50',
      borderColor: 'border-amber-200/50',
      iconBgColor: 'bg-amber-500/10',
    },
  ];

  const handleDownload = (format: 'pdf' | 'csv' | 'excel') => {
    toast.success(`Downloading report as ${format.toUpperCase()}...`, {
      description: `Your ${activePeriod} report will be downloaded shortly.`,
    });
  };

  const tabs = [
    { id: 'monthly' as ReportPeriod, label: 'Monthly Reports', icon: Calendar },
    { id: 'weekly' as ReportPeriod, label: 'Weekly Reports', icon: Calendar },
    { id: 'daily' as ReportPeriod, label: 'Daily Reports', icon: Calendar },
  ];

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Reports & Analytics"
      breadcrumbs={['Home', 'Admin', 'Reports']}
    >
      <div className="space-y-6">
        {/* Header with Actions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">Reports & Analytics</h1>
            <p className="text-slate-600">Generate and download comprehensive reports</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-400 transition-all duration-200"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="relative">
              <Button
                onClick={() => setShowExportDropdown(!showExportDropdown)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-105 text-white transition-all duration-200"
              >
                <FileDown className="w-4 h-4 " />
                Export
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
        </motion.div>

        {/* Filters Section */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Card className="p-6 border-slate-200 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Report Type
                    </label>
                    <select
                      value={selectedReportType}
                      onChange={(e) => setSelectedReportType(e.target.value as ReportType)}
                      className="w-full px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="admission">Admission Reports</option>
                      <option value="financial">Financial Reports</option>
                      <option value="academic">Academic Reports</option>
                      <option value="attendance">Attendance Reports</option>
                    </select>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-2 border-slate-200 shadow-md">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActivePeriod(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      activePeriod === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className={`p-6 ${stat.bgColor} border-none shadow-lg rounded-2xl h-full`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex-shrink-0 mb-1">
                      <Icon className={`w-10 h-10 ${stat.color}`} />
                    </div>
                      <p className="text-sm font-medium text-slate-600 mb-2">{stat.title}</p>
                      <p className="text-3xl font-bold text-slate-900 mb-3">{stat.value}</p>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-600">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue & Admissions Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 border-slate-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Revenue Trend</h3>
                  <p className="text-sm text-slate-600">Revenue over time</p>
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  {activePeriod}
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300} key={`revenue-chart-${activePeriod}`}>
                <LineChart data={currentData} id="revenue-chart-reports">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="period" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Line
                    key="line-revenue-reports"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563eb"
                    strokeWidth={3}
                    name="Revenue (₹)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Admissions Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 border-slate-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Admissions Trend</h3>
                  <p className="text-sm text-slate-600">New student admissions</p>
                </div>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  {activePeriod}
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300} key={`admissions-chart-${activePeriod}`}>
                <BarChart data={currentData} id="admissions-chart-reports">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="period" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar key="bar-admissions-reports" dataKey="admissions" fill="#9333ea" name="New Admissions" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Fee Collection Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6 border-slate-200 shadow-lg">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">Fee Collection Status</h3>
                <p className="text-sm text-slate-600">Current payment distribution</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={feeCollectionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {feeCollectionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Attendance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6 border-slate-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Attendance Rate</h3>
                  <p className="text-sm text-slate-600">Student attendance percentage</p>
                </div>
                <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                  {activePeriod}
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={300} key={`attendance-chart-${activePeriod}`}>
                <LineChart data={currentData} id="attendance-chart-reports">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="period" stroke="#64748b" />
                  <YAxis stroke="#64748b" domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Line
                    key="line-attendance-reports"
                    type="monotone"
                    dataKey="attendance"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    name="Attendance %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Subject Performance Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-slate-200 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">Subject-wise Performance</h3>
              <p className="text-sm text-slate-600 mt-1">Academic performance across subjects</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-100">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Subject
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Total Students
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Average Score
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Passing Rate
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {subjectPerformance.map((subject, index) => (
                    <tr
                      key={subject.name}
                      className={`border-b border-slate-200 hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-slate-900">{subject.name}</td>
                      <td className="px-6 py-4 text-slate-700">{subject.students}</td>
                      <td className="px-6 py-4 text-slate-700">{subject.avgScore}%</td>
                      <td className="px-6 py-4 text-slate-700">{subject.passing}%</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-200 rounded-full h-2 max-w-[200px]">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${subject.passing}%` }}
                            />
                          </div>
                          <Badge
                            className={`${
                              subject.passing >= 90
                                ? 'bg-green-100 text-green-700 border-green-200'
                                : subject.passing >= 80
                                ? 'bg-blue-100 text-blue-700 border-blue-200'
                                : 'bg-amber-100 text-amber-700 border-amber-200'
                            } border`}
                          >
                            {subject.passing >= 90 ? 'Excellent' : subject.passing >= 80 ? 'Good' : 'Average'}
                          </Badge>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Summary Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-6 border-slate-200 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Summary Insights</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>
                    • <strong>Student Growth:</strong> The institution has shown a steady growth of{' '}
                    {studentGrowth}% in student enrollment during this period.
                  </p>
                  <p>
                    • <strong>Revenue Performance:</strong> Total revenue increased by {revenueGrowth}%,
                    indicating healthy financial growth.
                  </p>
                  <p>
                    • <strong>Admission Trends:</strong> Total of {totalAdmissions} new admissions recorded,
                    showing strong market demand.
                  </p>
                  <p>
                    • <strong>Attendance:</strong> Average attendance rate of {avgAttendance}% reflects good
                    student engagement.
                  </p>
                  <p>
                    • <strong>Academic Performance:</strong> English shows the highest passing rate at 95%,
                    while Social Studies could use additional support at 87%.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </PortalLayout>
  );
}