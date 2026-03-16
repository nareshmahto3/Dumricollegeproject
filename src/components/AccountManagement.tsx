import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Plus,
  Search,
  Filter,
  Download,
  Calendar,
  CreditCard,
  Wallet,
  Receipt,
  FileText,
  Eye,
  Edit,
  ArrowUpRight,
  ArrowDownLeft,
  PieChart,
  BarChart3,
  ChevronUp,
  ChevronDown,
  FileSpreadsheet,
  File,
} from 'lucide-react';
import { PortalLayout } from './PortalLayout';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  type: 'Income' | 'Expense';
  amount: number;
  paymentMethod: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

const statsCards = [
  { title: 'Total Revenue', value: '$2,456,890', icon: DollarSign, color: 'from-green-500 to-green-600', change: '+15.3%' },
  { title: 'Total Expenses', value: '$1,234,567', icon: TrendingDown, color: 'from-red-500 to-red-600', change: '+8.2%' },
  { title: 'Net Profit', value: '$1,222,323', icon: TrendingUp, color: 'from-blue-500 to-blue-600', change: '+22.5%' },
  { title: 'Pending Payments', value: '$45,678', icon: Wallet, color: 'from-orange-500 to-orange-600', change: '-5.1%' },
];

const mockTransactions: Transaction[] = [
  {
    id: 'TXN001',
    date: '2024-02-20',
    description: 'Student Fee Collection - Class 10',
    category: 'Tuition Fee',
    type: 'Income',
    amount: 45000,
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'TXN002',
    date: '2024-02-19',
    description: 'Salary Payment - Teachers',
    category: 'Salary',
    type: 'Expense',
    amount: 125000,
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'TXN003',
    date: '2024-02-18',
    description: 'Library Books Purchase',
    category: 'Books & Supplies',
    type: 'Expense',
    amount: 15000,
    paymentMethod: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'TXN004',
    date: '2024-02-18',
    description: 'Admission Fee - New Students',
    category: 'Admission Fee',
    type: 'Income',
    amount: 35000,
    paymentMethod: 'Online Payment',
    status: 'Pending',
  },
  {
    id: 'TXN005',
    date: '2024-02-17',
    description: 'Electricity Bill Payment',
    category: 'Utilities',
    type: 'Expense',
    amount: 8500,
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
  },
];

const monthlyData = [
  { month: 'Jan', income: 450000, expense: 320000 },
  { month: 'Feb', income: 520000, expense: 380000 },
  { month: 'Mar', income: 480000, expense: 350000 },
  { month: 'Apr', income: 550000, expense: 420000 },
  { month: 'May', income: 600000, expense: 450000 },
  { month: 'Jun', income: 580000, expense: 480000 },
];

const expenseData = [
  { name: 'Salaries', value: 550000, color: '#f59e0b' },
  { name: 'Utilities', value: 85000, color: '#3b82f6' },
  { name: 'Supplies', value: 120000, color: '#10b981' },
  { name: 'Maintenance', value: 95000, color: '#ef4444' },
  { name: 'Others', value: 150000, color: '#8b5cf6' },
];

export function AccountManagement() {
  const [activeTab, setActiveTab] = useState<'transactions' | 'reports'>('transactions');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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

  // Sort transactions
  const sortedTransactions = [...mockTransactions].sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue = a[sortField as keyof typeof a];
    let bValue = b[sortField as keyof typeof b];
    
    if (typeof aValue === 'string') aValue = aValue.toLowerCase();
    if (typeof bValue === 'string') bValue = bValue.toLowerCase();
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedTransactions.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedTransactions = sortedTransactions.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Completed: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      Pending: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      Failed: 'bg-red-500/10 text-red-500 border-red-500/20',
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
      pageTitle="Account Management"
      breadcrumbs={["Home", "Admin", "Account"]}
    >
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-amber-600 text-sm">Financial Overview</p>
            </div>
            <Button className="gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/20">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-4 sm:p-6 bg-gradient-to-br ${stat.color} text-white border-0 shadow-xl hover:shadow-2xl transition-shadow`}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-white/80 text-xs">{stat.change}</span>
                </div>
                <h3 className="text-xl sm:text-2xl text-white">{stat.value}</h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1">{stat.title}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-4 border-b border-amber-200">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`pb-4 px-4 font-medium transition-all ${
                activeTab === 'transactions'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Receipt className="w-4 h-4 inline mr-2" />
              Transactions
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`pb-4 px-4 font-medium transition-all ${
                activeTab === 'reports'
                  ? 'text-amber-600 border-b-2 border-amber-500'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-4 h-4 inline mr-2" />
              Financial Reports
            </button>
          </div>
        </div>

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <>
            {/* Filters */}
            <Card className="bg-white border-amber-200 p-6 mb-6 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border-2 border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="all">All Types</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
                <Button variant="outline" className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </Card>

            {/* Transactions Table */}
            <Card className="bg-white border border-slate-200 overflow-hidden shadow-sm">
              {/* Rows Per Page Selector */}
              <div className="p-4 border-b border-slate-200 flex justify-end items-center">
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
                          Transaction ID
                          {sortField === 'id' ? (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4 opacity-30" />
                          )}
                        </div>
                      </th>
                      <th
                        className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                        onClick={() => handleSort('date')}
                      >
                        <div className="flex items-center gap-2">
                          Date
                          {sortField === 'date' ? (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4 opacity-30" />
                          )}
                        </div>
                      </th>
                      <th
                        className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                        onClick={() => handleSort('description')}
                      >
                        <div className="flex items-center gap-2">
                          Description
                          {sortField === 'description' ? (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4 opacity-30" />
                          )}
                        </div>
                      </th>
                      <th
                        className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                        onClick={() => handleSort('category')}
                      >
                        <div className="flex items-center gap-2">
                          Category
                          {sortField === 'category' ? (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4 opacity-30" />
                          )}
                        </div>
                      </th>
                      <th
                        className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                        onClick={() => handleSort('type')}
                      >
                        <div className="flex items-center gap-2">
                          Type
                          {sortField === 'type' ? (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4 opacity-30" />
                          )}
                        </div>
                      </th>
                      <th
                        className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                        onClick={() => handleSort('amount')}
                      >
                        <div className="flex items-center gap-2">
                          Amount
                          {sortField === 'amount' ? (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4 opacity-30" />
                          )}
                        </div>
                      </th>
                      <th
                        className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                        onClick={() => handleSort('status')}
                      >
                        <div className="flex items-center gap-2">
                          Status
                          {sortField === 'status' ? (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4 opacity-30" />
                          )}
                        </div>
                      </th>
                      <th className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {paginatedTransactions.map((transaction, index) => (
                      <motion.tr
                        key={transaction.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}
                      >
                        <td className="py-3 px-4 xl:px-6 text-slate-900 font-semibold text-sm">{transaction.id}</td>
                        <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{transaction.date}</td>
                        <td className="py-3 px-4 xl:px-6 text-slate-900 text-sm">{transaction.description}</td>
                        <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{transaction.category}</td>
                        <td className="py-3 px-4 xl:px-6">
                          {transaction.type === 'Income' ? (
                            <div className="flex items-center gap-1 text-emerald-600 text-sm">
                              <ArrowUpRight className="w-4 h-4" />
                              Income
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                              <ArrowDownLeft className="w-4 h-4" />
                              Expense
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 xl:px-6">
                          <span className={transaction.type === 'Income' ? 'text-emerald-600 font-semibold text-sm' : 'text-red-600 font-semibold text-sm'}>
                            {transaction.type === 'Income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-3 px-4 xl:px-6">{getStatusBadge(transaction.status)}</td>
                        <td className="py-3 px-4 xl:px-6">
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                              <Edit className="w-4 h-4" />
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
                  Showing <span className="text-slate-900 font-semibold">{paginatedTransactions.length}</span> of{' '}
                  <span className="text-slate-900 font-semibold">{sortedTransactions.length}</span> transactions
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200 text-sm px-3 sm:px-4"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      key={index + 1}
                      className={`${
                        currentPage === index + 1 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200'
                      } font-semibold text-sm px-3 sm:px-4`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200 text-sm px-3 sm:px-4"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            {/* Income vs Expense Chart */}
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-6">Income vs Expense (6 Months)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar key="bar-income-account" dataKey="income" fill="#10b981" name="Income" />
                  <Bar key="bar-expense-account" dataKey="expense" fill="#ef4444" name="Expense" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Expense Breakdown */}
              <Card className="bg-slate-900 border-slate-800 p-6">
                <h3 className="text-lg font-bold text-white mb-6">Expense Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RePieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: $${(entry.value / 1000).toFixed(0)}k`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                      }}
                    />
                  </RePieChart>
                </ResponsiveContainer>
              </Card>

              {/* Revenue Trend */}
              <Card className="bg-slate-900 border-slate-800 p-6">
                <h3 className="text-lg font-bold text-white mb-6">Revenue Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      key="line-income-account"
                      type="monotone"
                      dataKey="income"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={{ fill: '#f59e0b', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}