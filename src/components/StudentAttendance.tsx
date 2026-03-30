import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import {
  Calendar, CheckCircle, XCircle, Clock, TrendingUp, Download, ChevronDown,
  FileSpreadsheet,
  FileDown,
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { toast } from 'sonner';

interface AttendanceRecord {
  date: string;
  subject: string;
  status: 'Present' | 'Absent' | 'Late';
  time: string;
}

const mockAttendance: AttendanceRecord[] = [
  { date: '2026-02-24', subject: 'Mathematics', status: 'Present', time: '8:00 AM' },
  { date: '2026-02-24', subject: 'Physics', status: 'Present', time: '9:15 AM' },
  { date: '2026-02-24', subject: 'English', status: 'Late', time: '10:30 AM' },
  { date: '2026-02-23', subject: 'Chemistry', status: 'Present', time: '8:00 AM' },
  { date: '2026-02-23', subject: 'Computer Science', status: 'Present', time: '9:15 AM' },
  { date: '2026-02-22', subject: 'Mathematics', status: 'Present', time: '8:00 AM' },
  { date: '2026-02-22', subject: 'English', status: 'Absent', time: '10:30 AM' },
  { date: '2026-02-21', subject: 'Physics', status: 'Present', time: '9:15 AM' },
];

const monthlyData = [
  { month: 'Sep', present: 92, absent: 3, late: 5 },
  { month: 'Oct', present: 95, absent: 2, late: 3 },
  { month: 'Nov', present: 88, absent: 7, late: 5 },
  { month: 'Dec', present: 94, absent: 3, late: 3 },
  { month: 'Jan', present: 96, absent: 2, late: 2 },
  { month: 'Feb', present: 90, absent: 5, late: 5 },
];

const overallStats = [
  { name: 'Present', value: 92, color: '#10b981' },
  { name: 'Absent', value: 4, color: '#ef4444' },
  { name: 'Late', value: 4, color: '#f59e0b' },
];

const getStatusBadge = (status: string) => {
  const styles = {
    Present: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
    Absent: 'bg-red-50 text-red-700 border-red-200 font-medium',
    Late: 'bg-amber-50 text-amber-700 border-amber-200 font-medium',
  };
  const icons = {
    Present: CheckCircle,
    Absent: XCircle,
    Late: Clock,
  };
  const Icon = icons[status as keyof typeof icons];
  return (
    <Badge className={`${styles[status as keyof typeof styles]} border flex items-center gap-1`}>
      <Icon className="w-3 h-3" />
      {status}
    </Badge>
  );
};

export function StudentAttendance() {
  const [selectedMonth, setSelectedMonth] = useState('February');
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const handleDownload = (format: 'pdf' | 'csv' | 'excel') => {
    toast.success(`Downloading report as ${format.toUpperCase()}...`, {
      description: `Your ${activePeriod} report will be downloaded shortly.`,
    });
  };

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Attendance"
      breadcrumbs={["Home", "Student", "Attendance"]}
    >
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">92.5%</h3>
              <p className="text-sm text-white/90 font-semibold">Overall Attendance</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">148</h3>
              <p className="text-sm text-white/90 font-semibold">Days Present</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">12</h3>
              <p className="text-sm text-white/90 font-semibold">Days Absent</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-amber-500 to-amber-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">5</h3>
              <p className="text-sm text-white/90 font-semibold">Days Late</p>
            </Card>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Monthly Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900">Monthly Attendance Trend</h3>
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Legend />
                  <Line key="line-present-student" type="monotone" dataKey="present" stroke="#10b981" strokeWidth={2} name="Present" />
                  <Line key="line-absent-student" type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={2} name="Absent" />
                  <Line key="line-late-student" type="monotone" dataKey="late" stroke="#f59e0b" strokeWidth={2} name="Late" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Overall Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-white border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900">Overall Distribution</h3>
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={overallStats}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {overallStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Recent Attendance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-white border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="font-bold text-slate-900">Recent Attendance Records</h3>
              <div className="flex gap-3">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                </select>
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
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Date</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Subject</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Time</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-slate-700 uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {mockAttendance.map((record, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      className="border-b border-slate-200 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6 text-slate-900 font-semibold">{record.date}</td>
                      <td className="py-4 px-6 text-slate-900 font-medium">{record.subject}</td>
                      <td className="py-4 px-6 text-slate-600 font-medium">{record.time}</td>
                      <td className="py-4 px-6">{getStatusBadge(record.status)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}