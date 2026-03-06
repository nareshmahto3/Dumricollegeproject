import { Users, FileText, DollarSign, Award, BarChart3, TrendingUp, Calendar as CalendarIcon } from 'lucide-react';
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
} from 'recharts';
import { Badge } from './ui/badge';
import { HolidayCalendar } from './HolidayCalendar';

const statsCards = [
  { title: 'Total Students', value: '2,847', icon: Users, gradient: 'from-emerald-500 to-teal-600', change: '+12%', trend: 'up' },
  { title: 'Total Teachers', value: '156', icon: Users, gradient: 'from-blue-500 to-cyan-600', change: '+3%', trend: 'up' },
  { title: 'Pending Verification', value: '142', icon: FileText, gradient: 'from-orange-500 to-amber-600', change: '-5%', trend: 'down' },
  { title: 'Total Revenue', value: '₹1.2Cr', icon: TrendingUp, gradient: 'from-purple-500 to-pink-600', change: '+18%', trend: 'up' },
];

const admissionData = [
  { month: 'Jan', students: 45 },
  { month: 'Feb', students: 52 },
  { month: 'Mar', students: 48 },
  { month: 'Apr', students: 61 },
  { month: 'May', students: 55 },
  { month: 'Jun', students: 67 },
];

const feeCollectionData = [
  { month: 'Jan', amount: 180 },
  { month: 'Feb', amount: 195 },
  { month: 'Mar', amount: 175 },
  { month: 'Apr', amount: 220 },
  { month: 'May', amount: 205 },
  { month: 'Jun', amount: 235 },
];

const recentAdmissions = [
  { id: 1, name: 'Aarav Sharma', class: 'Grade 10', status: 'Under Review', date: '2026-02-10' },
  { id: 2, name: 'Priya Patel', class: 'Grade 9', status: 'Selected', date: '2026-02-09' },
  { id: 3, name: 'Rohan Kumar', class: 'Grade 11', status: 'Applied', date: '2026-02-08' },
  { id: 4, name: 'Ananya Singh', class: 'Grade 8', status: 'Under Review', date: '2026-02-07' },
  { id: 5, name: 'Vivaan Reddy', class: 'Grade 10', status: 'Selected', date: '2026-02-06' },
];

export function AdminDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selected':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Under Review':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Applied':
        return 'bg-slate-50 text-slate-700 border-slate-200';
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
        {/* Stats Cards - Colorful Gradient Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statsCards.map((stat, index) => (
            <Card key={index} className={`p-5 bg-gradient-to-br ${stat.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all rounded-2xl`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-white/90">
                  <TrendingUp className={`w-4 h-4 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/80 text-sm">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Charts - Clean Professional Look */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-6 bg-white border border-slate-200">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-5 h-5 text-slate-700 mr-2" />
              <h3 className="text-lg font-semibold text-slate-900">Monthly Admissions</h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={admissionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '13px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '13px' }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '13px'
                  }}
                />
                <Bar dataKey="students" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-white border border-slate-200">
            <div className="flex items-center mb-6">
              <DollarSign className="w-5 h-5 text-slate-700 mr-2" />
              <h3 className="text-lg font-semibold text-slate-900">Fee Collection (₹ in thousands)</h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={feeCollectionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '13px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '13px' }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '13px'
                  }}
                />
                <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={2.5} dot={{ fill: '#10b981', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Admissions Table and Holiday Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white border border-slate-200">
              <h3 className="mb-6 text-lg font-semibold text-slate-900">Recent Admission Applications</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Student Name</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Class</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700 hidden sm:table-cell">Date Applied</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAdmissions.map((admission) => (
                      <tr key={admission.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4 text-sm font-medium text-slate-900">{admission.name}</td>
                        <td className="py-4 px-4 text-sm text-slate-600">{admission.class}</td>
                        <td className="py-4 px-4">
                          <Badge variant="outline" className={`${getStatusColor(admission.status)} text-xs font-medium`}>
                            {admission.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-sm text-slate-600 hidden sm:table-cell">{admission.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Holiday Calendar Button */}
          <div className="lg:col-span-1">
            <HolidayCalendar variant="admin" />
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}