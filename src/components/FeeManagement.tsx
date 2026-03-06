import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  AlertCircle,
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  CreditCard,
  Wallet,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Calendar,
  Send,
  FileText,
  X,
  Phone,
  Mail,
  User,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { PortalLayout } from './PortalLayout';

interface PendingFee {
  id: number;
  studentId: string;
  studentName: string;
  class: string;
  feeType: string;
  amount: number;
  dueDate: string;
  daysOverdue: number;
  installment: string;
  contactNumber: string;
  parentName: string;
  month: string;
  paymentMethod?: string;
}

interface StudentPendingFees {
  studentId: string;
  studentName: string;
  class: string;
  parentName: string;
  contactNumber: string;
  totalPendingAmount: number;
  pendingMonths: PendingFee[];
}

interface TeacherSalary {
  id: number;
  teacherId: string;
  teacherName: string;
  department: string;
  designation: string;
  monthlySalary: number;
  paidAmount: number;
  pendingAmount: number;
  lastPaid: string;
  status: 'paid' | 'pending' | 'partial';
}

interface FeeCollection {
  month: string;
  collected: number;
  pending: number;
}

const pendingFees: PendingFee[] = [
  // Aarav Sharma - Multiple months pending
  {
    id: 1,
    studentId: 'STU2023001',
    studentName: 'Aarav Sharma',
    class: 'Grade 12',
    feeType: 'Tuition Fee',
    amount: 25000,
    dueDate: '2026-02-01',
    daysOverdue: 22,
    installment: 'Quarter 4',
    contactNumber: '+91 98765 43210',
    parentName: 'Rajesh Sharma',
    month: 'February 2026',
  },
  {
    id: 2,
    studentId: 'STU2023001',
    studentName: 'Aarav Sharma',
    class: 'Grade 12',
    feeType: 'Tuition Fee',
    amount: 25000,
    dueDate: '2026-01-01',
    daysOverdue: 53,
    installment: 'Quarter 3',
    contactNumber: '+91 98765 43210',
    parentName: 'Rajesh Sharma',
    month: 'January 2026',
  },
  {
    id: 3,
    studentId: 'STU2023001',
    studentName: 'Aarav Sharma',
    class: 'Grade 12',
    feeType: 'Lab Fee',
    amount: 5000,
    dueDate: '2026-01-15',
    daysOverdue: 39,
    installment: 'Semester 2',
    contactNumber: '+91 98765 43210',
    parentName: 'Rajesh Sharma',
    month: 'January 2026',
  },
  // Priya Patel - Multiple months pending
  {
    id: 4,
    studentId: 'STU2023002',
    studentName: 'Priya Patel',
    class: 'Grade 10',
    feeType: 'Tuition Fee',
    amount: 20000,
    dueDate: '2026-02-01',
    daysOverdue: 22,
    installment: 'Quarter 4',
    contactNumber: '+91 98765 43211',
    parentName: 'Amit Patel',
    month: 'February 2026',
  },
  {
    id: 5,
    studentId: 'STU2023002',
    studentName: 'Priya Patel',
    class: 'Grade 10',
    feeType: 'Annual Fee',
    amount: 15000,
    dueDate: '2026-01-15',
    daysOverdue: 39,
    installment: 'Annual',
    contactNumber: '+91 98765 43211',
    parentName: 'Amit Patel',
    month: 'January 2026',
  },
  // Rohan Kumar - Single month
  {
    id: 6,
    studentId: 'STU2023003',
    studentName: 'Rohan Kumar',
    class: 'Grade 11',
    feeType: 'Lab Fee',
    amount: 5000,
    dueDate: '2026-02-10',
    daysOverdue: 13,
    installment: 'Semester 2',
    contactNumber: '+91 98765 43212',
    parentName: 'Suresh Kumar',
    month: 'February 2026',
  },
  // Ananya Singh - Multiple months
  {
    id: 7,
    studentId: 'STU2023004',
    studentName: 'Ananya Singh',
    class: 'Grade 9',
    feeType: 'Tuition Fee',
    amount: 18000,
    dueDate: '2026-02-05',
    daysOverdue: 18,
    installment: 'Quarter 4',
    contactNumber: '+91 98765 43213',
    parentName: 'Vikram Singh',
    month: 'February 2026',
  },
  {
    id: 8,
    studentId: 'STU2023004',
    studentName: 'Ananya Singh',
    class: 'Grade 9',
    feeType: 'Tuition Fee',
    amount: 18000,
    dueDate: '2026-01-05',
    daysOverdue: 49,
    installment: 'Quarter 3',
    contactNumber: '+91 98765 43213',
    parentName: 'Vikram Singh',
    month: 'January 2026',
  },
  {
    id: 9,
    studentId: 'STU2023004',
    studentName: 'Ananya Singh',
    class: 'Grade 9',
    feeType: 'Exam Fee',
    amount: 2500,
    dueDate: '2025-12-20',
    daysOverdue: 65,
    installment: 'Mid-term',
    contactNumber: '+91 98765 43213',
    parentName: 'Vikram Singh',
    month: 'December 2025',
  },
  // Vivaan Reddy - Multiple months
  {
    id: 10,
    studentId: 'STU2023005',
    studentName: 'Vivaan Reddy',
    class: 'Grade 12',
    feeType: 'Tuition Fee',
    amount: 25000,
    dueDate: '2026-02-01',
    daysOverdue: 22,
    installment: 'Quarter 4',
    contactNumber: '+91 98765 43214',
    parentName: 'Ravi Reddy',
    month: 'February 2026',
  },
  {
    id: 11,
    studentId: 'STU2023005',
    studentName: 'Vivaan Reddy',
    class: 'Grade 12',
    feeType: 'Exam Fee',
    amount: 3000,
    dueDate: '2026-01-20',
    daysOverdue: 34,
    installment: 'Final Exam',
    contactNumber: '+91 98765 43214',
    parentName: 'Ravi Reddy',
    month: 'January 2026',
  },
];

const teacherSalaries: TeacherSalary[] = [
  {
    id: 1,
    teacherId: 'TCH2023001',
    teacherName: 'Dr. Anjali Verma',
    department: 'Mathematics',
    designation: 'Senior Professor',
    monthlySalary: 85000,
    paidAmount: 85000,
    pendingAmount: 0,
    lastPaid: '2026-02-01',
    status: 'paid',
  },
  {
    id: 2,
    teacherId: 'TCH2023002',
    teacherName: 'Prof. Rahul Mehta',
    department: 'Physics',
    designation: 'Associate Professor',
    monthlySalary: 75000,
    paidAmount: 75000,
    pendingAmount: 0,
    lastPaid: '2026-02-01',
    status: 'paid',
  },
  {
    id: 3,
    teacherId: 'TCH2023003',
    teacherName: 'Mrs. Sneha Kapoor',
    department: 'English',
    designation: 'Assistant Professor',
    monthlySalary: 65000,
    paidAmount: 40000,
    pendingAmount: 25000,
    lastPaid: '2026-01-15',
    status: 'partial',
  },
  {
    id: 4,
    teacherId: 'TCH2023004',
    teacherName: 'Mr. Arjun Desai',
    department: 'Chemistry',
    designation: 'Lecturer',
    monthlySalary: 55000,
    paidAmount: 0,
    pendingAmount: 55000,
    lastPaid: '2026-01-01',
    status: 'pending',
  },
  {
    id: 5,
    teacherId: 'TCH2023005',
    teacherName: 'Ms. Priya Nair',
    department: 'Computer Science',
    designation: 'Assistant Professor',
    monthlySalary: 70000,
    paidAmount: 70000,
    pendingAmount: 0,
    lastPaid: '2026-02-01',
    status: 'paid',
  },
];

const monthlyCollections: FeeCollection[] = [
  { month: 'Jan', collected: 2850000, pending: 450000 },
  { month: 'Feb', collected: 2950000, pending: 380000 },
  { month: 'Mar', collected: 3100000, pending: 320000 },
  { month: 'Apr', collected: 2900000, pending: 400000 },
  { month: 'May', collected: 3200000, pending: 280000 },
  { month: 'Jun', collected: 3050000, pending: 350000 },
];

export function FeeManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [feeFilter, setFeeFilter] = useState<string>('all');
  const [salaryFilter, setSalaryFilter] = useState<string>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentPendingFees | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'pending' | 'salaries'>('overview');
  const [expandedStudents, setExpandedStudents] = useState<Set<string>>(new Set());
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] = useState(false);
  const [selectedPaymentStudent, setSelectedPaymentStudent] = useState<StudentPendingFees | null>(null);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [salarySortField, setSalarySortField] = useState<string>('');
  const [salarySortDirection, setSalarySortDirection] = useState<'asc' | 'desc'>('asc');
  const [salaryCurrentPage, setSalaryCurrentPage] = useState(1);
  const [salaryRowsPerPage, setSalaryRowsPerPage] = useState(10);
  
  // Payment states
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('upi');

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

  const handleSalarySort = (field: string) => {
    if (salarySortField === field) {
      setSalarySortDirection(salarySortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSalarySortField(field);
      setSalarySortDirection('asc');
    }
  };

  const handleSalaryRowsPerPageChange = (value: number) => {
    setSalaryRowsPerPage(value);
    setSalaryCurrentPage(1);
  };

  // Group pending fees by student
  const groupedPendingFees: StudentPendingFees[] = Object.values(
    pendingFees.reduce((acc, fee) => {
      if (!acc[fee.studentId]) {
        acc[fee.studentId] = {
          studentId: fee.studentId,
          studentName: fee.studentName,
          class: fee.class,
          parentName: fee.parentName,
          contactNumber: fee.contactNumber,
          totalPendingAmount: 0,
          pendingMonths: [],
        };
      }
      acc[fee.studentId].totalPendingAmount += fee.amount;
      acc[fee.studentId].pendingMonths.push(fee);
      return acc;
    }, {} as Record<string, StudentPendingFees>)
  );

  const filteredGroupedFees = groupedPendingFees.filter((student) => {
    const matchesSearch = 
      student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = feeFilter === 'all' || student.pendingMonths.some(fee => fee.feeType === feeFilter);
    return matchesSearch && matchesFilter;
  });

  // Apply sorting for pending fees
  const sortedGroupedFees = [...filteredGroupedFees].sort((a, b) => {
    if (!sortField) return 0;

    let aValue: any = a[sortField as keyof StudentPendingFees];
    let bValue: any = b[sortField as keyof StudentPendingFees];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const toggleExpandStudent = (studentId: string) => {
    setExpandedStudents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(studentId)) {
        newSet.delete(studentId);
      } else {
        newSet.add(studentId);
      }
      return newSet;
    });
  };

  const filteredSalaries = teacherSalaries.filter((salary) => {
    const matchesFilter = salaryFilter === 'all' || salary.status === salaryFilter;
    return matchesFilter;
  });

  // Apply salary sorting
  const sortedSalaries = [...filteredSalaries].sort((a, b) => {
    if (!salarySortField) return 0;

    let aValue: any = a[salarySortField as keyof TeacherSalary];
    let bValue: any = b[salarySortField as keyof TeacherSalary];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) return salarySortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return salarySortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Calculate statistics
  const totalPendingFees = pendingFees.reduce((sum, fee) => sum + fee.amount, 0);
  const totalRevenue = monthlyCollections.reduce((sum, month) => sum + month.collected, 0);
  const totalSalaryExpense = teacherSalaries.reduce((sum, t) => sum + t.monthlySalary, 0);
  const pendingSalaries = teacherSalaries.reduce((sum, t) => sum + t.pendingAmount, 0);

  const getDaysOverdueColor = (days: number) => {
    if (days < 15) return 'text-yellow-600 bg-yellow-100';
    if (days < 30) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getSalaryStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'partial':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'pending':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Fee Management"
      breadcrumbs={["Home", "Admin", "Fees"]}
    >
      <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 border-2 border-green-100 bg-gradient-to-br from-white to-green-50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      +12.5%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <h3 className="text-green-700">₹{(totalRevenue / 100000).toFixed(2)}L</h3>
                  <p className="text-xs text-muted-foreground mt-2">Last 6 months</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 border-2 border-red-100 bg-gradient-to-br from-white to-red-50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-red-100 text-red-700 border-0">
                      {pendingFees.length} Students
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Fees</p>
                  <h3 className="text-red-700">₹{(totalPendingFees / 1000).toFixed(0)}K</h3>
                  <p className="text-xs text-muted-foreground mt-2">Requires attention</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Wallet className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 border-0">
                      Monthly
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Salary Expenses</p>
                  <h3 className="text-orange-700">₹{(totalSalaryExpense / 100000).toFixed(2)}L</h3>
                  <p className="text-xs text-muted-foreground mt-2">{teacherSalaries.length} teachers</p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <PiggyBank className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 border-0">
                      Net
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Net Revenue</p>
                  <h3 className="text-purple-700">₹{((totalRevenue - (totalSalaryExpense * 6)) / 100000).toFixed(2)}L</h3>
                  <p className="text-xs text-muted-foreground mt-2">After expenses</p>
                </Card>
              </motion.div>
            </div>

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Card className="p-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'overview'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <BarChart3 className="w-4 h-4 inline mr-2" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('pending')}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'pending'
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Clock className="w-4 h-4 inline mr-2" />
                    Pending Fees ({pendingFees.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('salaries')}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'salaries'
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Users className="w-4 h-4 inline mr-2" />
                    Salaries
                  </button>
                </div>
              </Card>
            </motion.div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {/* Monthly Collection Chart */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="mb-1">Monthly Fee Collection</h3>
                      <p className="text-sm text-muted-foreground">Last 6 months performance</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {monthlyCollections.map((month, index) => (
                      <motion.div
                        key={month.month}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{month.month} 2026</span>
                          <span className="text-muted-foreground">
                            ₹{(month.collected / 100000).toFixed(2)}L / ₹{((month.collected + month.pending) / 100000).toFixed(2)}L
                          </span>
                        </div>
                        <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(month.collected / (month.collected + month.pending)) * 100}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="absolute h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                            {((month.collected / (month.collected + month.pending)) * 100).toFixed(1)}% Collected
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-xl transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Generate Fee Report</h4>
                      <p className="text-sm text-muted-foreground mb-4">Create detailed fee collection reports</p>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        Generate
                      </Button>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 hover:shadow-xl transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Send Reminders</h4>
                      <p className="text-sm text-muted-foreground mb-4">Send payment reminders to parents</p>
                      <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                        Send All
                      </Button>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 hover:shadow-xl transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Schedule Payments</h4>
                      <p className="text-sm text-muted-foreground mb-4">Set up installment schedules</p>
                      <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        Schedule
                      </Button>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Pending Fees Tab */}
            {activeTab === 'pending' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {/* Filters */}
                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-2 border-slate-300"
                      />
                    </div>

                    <div className="relative">
                      <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        value={feeFilter}
                        onChange={(e) => setFeeFilter(e.target.value)}
                        className="w-full h-10 pl-10 pr-4 border border-border rounded-lg bg-white appearance-none cursor-pointer"
                      >
                        <option value="all">All Fee Types</option>
                        <option value="Tuition Fee">Tuition Fee</option>
                        <option value="Annual Fee">Annual Fee</option>
                        <option value="Lab Fee">Lab Fee</option>
                        <option value="Exam Fee">Exam Fee</option>
                      </select>
                    </div>

                    <Button className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Send className="w-4 h-4" />
                      Send Bulk Reminders
                    </Button>
                  </div>
                </Card>

                {/* Pending Fees Table */}
                <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
                  <div className="overflow-x-auto table-scroll">
                    <table className="w-full min-w-max">
                      <thead>
                        <tr className="border-b-2 border-slate-200 bg-slate-100">
                          <th 
                            className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                            onClick={() => handleSort('studentName')}
                          >
                            <div className="flex items-center gap-2">
                              Student Details
                              {sortField === 'studentName' && (
                                sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Fee Type</th>
                          <th 
                            className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                            onClick={() => handleSort('totalPendingAmount')}
                          >
                            <div className="flex items-center gap-2">
                              Amount
                              {sortField === 'totalPendingAmount' && (
                                sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Due Date</th>
                          <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Overdue</th>
                          <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {sortedGroupedFees.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((student, index) => (
                          <motion.tr
                            key={student.studentId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`border-b border-slate-200 hover:bg-blue-50 transition-colors ${
                              index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                            }`}
                          >
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <div>
                                <p className="font-medium text-slate-900">{student.studentName}</p>
                                <p className="text-sm text-slate-600">{student.studentId} • {student.class}</p>
                              </div>
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-blue-600" />
                                <div>
                                  <p className="text-sm font-medium text-slate-900">Multiple Fees</p>
                                  <p className="text-xs text-slate-600">{student.pendingMonths.length} installments</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <p className="font-semibold text-red-600">₹{student.totalPendingAmount.toLocaleString()}</p>
                            </td>
                            <td className="py-4 px-4 xl:px-6 text-sm text-slate-600 whitespace-nowrap">
                              {new Date(student.pendingMonths[0].dueDate).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <Badge className={`${getDaysOverdueColor(student.pendingMonths[0].daysOverdue)} border-0`}>
                                <Clock className="w-3 h-3 mr-1" />
                                {student.pendingMonths[0].daysOverdue} days
                              </Badge>
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log('=== PAY NOW BUTTON CLICKED ===');
                                    console.log('Student data:', student);
                                    console.log('Navigating to: /admin/admin-fee-payment');
                                    try {
                                      navigate('/admin/admin-fee-payment', { state: { student } });
                                      console.log('Navigation called successfully');
                                    } catch (error) {
                                      console.error('Navigation error:', error);
                                    }
                                  }}
                                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                >
                                  <CreditCard className="w-4 h-4 mr-1" />
                                  Pay Now
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setSelectedStudent(student);
                                  }}
                                  className="text-slate-600 hover:text-slate-700 hover:bg-slate-50"
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  View
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                  }}
                                  className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                                >
                                  <Send className="w-4 h-4 mr-1" />
                                  Remind
                                </Button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="p-4 bg-gray-50 flex items-center justify-between border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-700">Rows per page:</p>
                      <select
                        value={rowsPerPage}
                        onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
                        className="w-20 h-10 px-2 border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-gray-700">
                        Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, sortedGroupedFees.length)} of {sortedGroupedFees.length}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(1)}
                          disabled={currentPage === 1}
                          className="border-blue-300"
                        >
                          First
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="border-blue-300"
                        >
                          Previous
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === Math.ceil(sortedGroupedFees.length / rowsPerPage)}
                          className="border-blue-300"
                        >
                          Next
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(Math.ceil(sortedGroupedFees.length / rowsPerPage))}
                          disabled={currentPage === Math.ceil(sortedGroupedFees.length / rowsPerPage)}
                          className="border-blue-300"
                        >
                          Last
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Salaries Tab */}
            {activeTab === 'salaries' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {/* Salary Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Monthly</p>
                        <h3 className="text-blue-700">₹{(totalSalaryExpense / 100000).toFixed(2)}L</h3>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-green-100 bg-gradient-to-br from-white to-green-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Paid This Month</p>
                        <h3 className="text-green-700">
                          ₹{((totalSalaryExpense - pendingSalaries) / 100000).toFixed(2)}L
                        </h3>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-red-100 bg-gradient-to-br from-white to-red-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Pending Payment</p>
                        <h3 className="text-red-700">₹{(pendingSalaries / 1000).toFixed(0)}K</h3>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Filter */}
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <Filter className="w-5 h-5 text-muted-foreground" />
                    <select
                      value={salaryFilter}
                      onChange={(e) => setSalaryFilter(e.target.value)}
                      className="flex-1 h-10 px-4 border border-border rounded-lg bg-white appearance-none cursor-pointer"
                    >
                      <option value="all">All Status</option>
                      <option value="paid">Paid</option>
                      <option value="partial">Partial</option>
                      <option value="pending">Pending</option>
                    </select>
                    <Button className="gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                      Process Payments
                    </Button>
                  </div>
                </Card>

                {/* Teacher Salary Table */}
                <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
                  <div className="overflow-x-auto table-scroll">
                    <table className="w-full min-w-max">
                      <thead>
                        <tr className="border-b-2 border-slate-200 bg-slate-100">
                          <th 
                            className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                            onClick={() => handleSalarySort('teacherName')}
                          >
                            <div className="flex items-center gap-2">
                              Teacher Details
                              {salarySortField === 'teacherName' && (
                                salarySortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th 
                            className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                            onClick={() => handleSalarySort('department')}
                          >
                            <div className="flex items-center gap-2">
                              Department
                              {salarySortField === 'department' && (
                                salarySortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th 
                            className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                            onClick={() => handleSalarySort('monthlySalary')}
                          >
                            <div className="flex items-center gap-2">
                              Monthly Salary
                              {salarySortField === 'monthlySalary' && (
                                salarySortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Paid</th>
                          <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Pending</th>
                          <th 
                            className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                            onClick={() => handleSalarySort('status')}
                          >
                            <div className="flex items-center gap-2">
                              Status
                              {salarySortField === 'status' && (
                                salarySortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {sortedSalaries.slice((salaryCurrentPage - 1) * salaryRowsPerPage, salaryCurrentPage * salaryRowsPerPage).map((teacher, index) => (
                          <motion.tr
                            key={teacher.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`border-b border-slate-200 hover:bg-blue-50 transition-colors ${
                              index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                            }`}
                          >
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <div>
                                <p className="font-medium text-slate-900">{teacher.teacherName}</p>
                                <p className="text-sm text-slate-600">
                                  {teacher.teacherId} • {teacher.designation}
                                </p>
                              </div>
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {teacher.department}
                              </Badge>
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <p className="font-semibold text-slate-900">₹{teacher.monthlySalary.toLocaleString()}</p>
                            </td>
                            <td className="py-4 px-4 xl:px-6 text-green-600 font-medium whitespace-nowrap">
                              ₹{teacher.paidAmount.toLocaleString()}
                            </td>
                            <td className="py-4 px-4 xl:px-6 text-red-600 font-medium whitespace-nowrap">
                              {teacher.pendingAmount > 0 ? `₹${teacher.pendingAmount.toLocaleString()}` : '-'}
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <Badge variant="outline" className={getSalaryStatusColor(teacher.status)}>
                                {teacher.status === 'paid' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                                {teacher.status === 'partial' && <Clock className="w-3 h-3 mr-1" />}
                                {teacher.status === 'pending' && <AlertCircle className="w-3 h-3 mr-1" />}
                                <span className="capitalize">{teacher.status}</span>
                              </Badge>
                            </td>
                            <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  View
                                </Button>
                                {teacher.status !== 'paid' && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                  >
                                    <CheckCircle2 className="w-4 h-4 mr-1" />
                                    Pay
                                  </Button>
                                )}
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="p-4 bg-gray-50 flex items-center justify-between border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-700">Rows per page:</p>
                      <select
                        value={salaryRowsPerPage}
                        onChange={(e) => handleSalaryRowsPerPageChange(Number(e.target.value))}
                        className="w-20 h-10 px-2 border border-gray-300 rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-gray-700">
                        Showing {(salaryCurrentPage - 1) * salaryRowsPerPage + 1} to {Math.min(salaryCurrentPage * salaryRowsPerPage, sortedSalaries.length)} of {sortedSalaries.length}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSalaryCurrentPage(1)}
                          disabled={salaryCurrentPage === 1}
                          className="border-blue-300"
                        >
                          First
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSalaryCurrentPage(salaryCurrentPage - 1)}
                          disabled={salaryCurrentPage === 1}
                          className="border-blue-300"
                        >
                          Previous
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSalaryCurrentPage(salaryCurrentPage + 1)}
                          disabled={salaryCurrentPage === Math.ceil(sortedSalaries.length / salaryRowsPerPage)}
                          className="border-blue-300"
                        >
                          Next
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSalaryCurrentPage(Math.ceil(sortedSalaries.length / salaryRowsPerPage))}
                          disabled={salaryCurrentPage === Math.ceil(sortedSalaries.length / salaryRowsPerPage)}
                          className="border-blue-300"
                        >
                          Last
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50" onClick={() => setSelectedStudent(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <Card className="w-full p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="mb-1">Payment Details</h3>
                  <p className="text-sm text-muted-foreground">{selectedStudent.studentId} - {selectedStudent.studentName}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedStudent(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Student & Parent Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Student Name</p>
                    <p className="font-medium text-sm">{selectedStudent.studentName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Class</p>
                    <p className="font-medium text-sm">{selectedStudent.class}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Parent Name</p>
                    <p className="font-medium text-sm">{selectedStudent.parentName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Contact</p>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-muted-foreground" />
                      <p className="font-medium text-sm">{selectedStudent.contactNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Total Pending Summary */}
                <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Pending Amount</p>
                      <h2 className="text-red-700">₹{selectedStudent.totalPendingAmount.toLocaleString()}</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Pending Installments</p>
                      <p className="text-2xl font-bold text-red-600">{selectedStudent.pendingMonths.length}</p>
                    </div>
                  </div>
                </div>

                {/* Pending Months Table */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    All Pending Months
                  </h4>
                  <div className="border border-amber-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200">
                          <th className="text-left py-3 px-4 text-xs font-bold text-amber-700 uppercase">Month</th>
                          <th className="text-left py-3 px-4 text-xs font-bold text-amber-700 uppercase">Fee Type</th>
                          <th className="text-left py-3 px-4 text-xs font-bold text-amber-700 uppercase">Installment</th>
                          <th className="text-left py-3 px-4 text-xs font-bold text-amber-700 uppercase">Amount</th>
                          <th className="text-left py-3 px-4 text-xs font-bold text-amber-700 uppercase">Due Date</th>
                          <th className="text-left py-3 px-4 text-xs font-bold text-amber-700 uppercase">Overdue</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedStudent.pendingMonths.map((fee, idx) => (
                          <tr key={fee.id} className="border-b border-amber-100 hover:bg-amber-50/50 transition-colors">
                            <td className="py-3 px-4">
                              <p className="font-medium text-sm">{fee.month}</p>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-amber-600" />
                                <p className="text-sm">{fee.feeType}</p>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-600">{fee.installment}</td>
                            <td className="py-3 px-4">
                              <p className="font-semibold text-red-600">₹{fee.amount.toLocaleString()}</p>
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-600">
                              {new Date(fee.dueDate).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </td>
                            <td className="py-3 px-4">
                              <Badge className={`${getDaysOverdueColor(fee.daysOverdue)} border-0 text-xs`}>
                                <Clock className="w-3 h-3 mr-1" />
                                {fee.daysOverdue} days
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    onClick={() => {
                      // Send reminder logic
                      alert(`Reminder sent to ${selectedStudent.parentName} at ${selectedStudent.contactNumber}`);
                    }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Payment Reminder
                  </Button>
                  <Button variant="outline" className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-50">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Invoice
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </PortalLayout>
  );
}