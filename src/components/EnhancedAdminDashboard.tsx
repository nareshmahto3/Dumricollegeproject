import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Users,
  FileText,
  DollarSign,
  Award,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  Eye,
  Download,
  GraduationCap,
  BookOpen,
  UserCheck,
  CalendarDays,
  Bell,
  FileCheck,
  ShieldCheck,
  BadgeAlert,
  FileSignature,
  CreditCard,
  Wallet,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from 'recharts';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const statsCards = [
  { title: 'Total Students', value: '2,847', change: '+12%', icon: GraduationCap, color: 'from-emerald-500 to-teal-600', trend: 'up' },
  { title: 'Total Teachers', value: '156', change: '+3%', icon: Users, color: 'from-blue-500 to-cyan-600', trend: 'up' },
  { title: 'Pending Verification', value: '142', change: '-5%', icon: FileText, color: 'from-orange-500 to-amber-600', trend: 'down' },
  { title: 'Total Revenue', value: '₹1.2Cr', change: '+18%', icon: DollarSign, color: 'from-purple-500 to-pink-600', trend: 'up' },
];

const admissionData = [
  { month: 'Jan', students: 45, revenue: 180 },
  { month: 'Feb', students: 52, revenue: 195 },
  { month: 'Mar', students: 48, revenue: 175 },
  { month: 'Apr', students: 61, revenue: 220 },
  { month: 'May', students: 55, revenue: 205 },
  { month: 'Jun', students: 67, revenue: 235 },
];

const recentAdmissions = [
  { id: 1, name: 'Aarav Sharma', class: 'Grade 10', status: 'Under Review', date: '2026-02-10', priority: 'high' },
  { id: 2, name: 'Priya Patel', class: 'Grade 9', status: 'Selected', date: '2026-02-09', priority: 'medium' },
  { id: 3, name: 'Rohan Kumar', class: 'Grade 11', status: 'Applied', date: '2026-02-08', priority: 'low' },
  { id: 4, name: 'Ananya Singh', class: 'Grade 8', status: 'Under Review', date: '2026-02-07', priority: 'high' },
  { id: 5, name: 'Vivaan Reddy', class: 'Grade 10', status: 'Selected', date: '2026-02-06', priority: 'medium' },
];

const pieData = [
  { name: 'Selected', value: 450, color: '#10b981' },
  { name: 'Under Review', value: 142, color: '#f59e0b' },
  { name: 'Rejected', value: 85, color: '#ef4444' },
  { name: 'Pending', value: 123, color: '#3b82f6' },
];

const recentActivities = [
  { id: 1, type: 'admission', message: 'New admission application received from Aarav Sharma', time: '5 mins ago', icon: FileText, color: 'blue' },
  { id: 2, type: 'fee', message: 'Fee payment of ₹50,000 received from Grade 10-A', time: '15 mins ago', icon: CreditCard, color: 'green' },
  { id: 3, type: 'certificate', message: 'Certificate issued for Priya Patel', time: '1 hour ago', icon: Award, color: 'purple' },
  { id: 4, type: 'attendance', message: 'Attendance marked for Grade 9-B', time: '2 hours ago', icon: CheckCircle2, color: 'emerald' },
];

const quickStats = [
  { label: 'Present Today', value: '2,654', icon: CheckCircle2, color: 'text-green-600', bgColor: 'bg-green-50' },
  { label: 'On Leave', value: '143', icon: Clock, color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { label: 'Absent', value: '50', icon: XCircle, color: 'text-red-600', bgColor: 'bg-red-50' },
  { label: 'Late Arrivals', value: '23', icon: AlertCircle, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
];

export function EnhancedAdminDashboard() {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selected':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Applied':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Admin Dashboard"
      breadcrumbs={["Home", "Admin"]}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 bg-gradient-to-br ${stat.color} text-white border-0 shadow-xl hover:shadow-2xl transition-all`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-white' : 'text-white/80'}`}>
                      <TrendingUp className="w-4 h-4" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-white/90 text-sm">{stat.title}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Admission Trends */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold text-slate-900">Admission & Revenue Trends</h3>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={admissionData}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="students" stroke="#10b981" fillOpacity={1} fill="url(#colorStudents)" />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Status Distribution */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileCheck className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-900">Status Distribution</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Activity & Admissions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-slate-900">Recent Activities</h3>
              </div>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className={`w-10 h-10 rounded-lg bg-${activity.color}-100 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 text-${activity.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-900">{activity.message}</p>
                      <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Recent Admissions */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">Recent Admissions</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => navigate('/admin/admissions')}>View All</Button>
            </div>
            <div className="space-y-3">
              {recentAdmissions.map((admission) => (
                <div key={admission.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{admission.name}</p>
                    <p className="text-sm text-slate-600">{admission.class} • {admission.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getStatusColor(admission.status)}>
                      {admission.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
