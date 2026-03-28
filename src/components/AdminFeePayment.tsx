import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CreditCard,
  CheckCircle2,
  Calendar,
  Clock,
  DollarSign,
  Wallet,
  ArrowLeft,
  User,
  Phone,
  Receipt,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface MonthlyFee {
  month: string;
  monthNumber: number;
  amount: number;
  dueDate: string;
  status: 'paid' | 'unpaid' | 'overdue';
  paidDate?: string;
  receiptNumber?: string;
  transactionId?: string;
  paymentMethod?: string;
}

const feeBreakdown = [
  { item: 'Tuition Fee', amount: 3500 },
  { item: 'Library Fee', amount: 500 },
  { item: 'Lab Fee', amount: 600 },
  { item: 'Sports Fee', amount: 300 },
  { item: 'Miscellaneous', amount: 100 },
];

export function AdminFeePayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const stateStudent = location.state?.student;
  const queryStudentId = Number(new URLSearchParams(location.search).get('studentId'));

  const [currentStudentData, setCurrentStudentData] = useState<any>(stateStudent ?? null);
  const [loading, setLoading] = useState<boolean>(!stateStudent && !!queryStudentId);
  const [error, setError] = useState<string | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('upi');

  const studentId = stateStudent?.studentId ?? (queryStudentId || undefined);

  useEffect(() => {
    if (!studentId) {
      navigate('/admin/fee');
      return;
    }

    if (!stateStudent && studentId) {
      const fetchStudentFees = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/student/fees/${studentId}`);
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data?.message || 'Failed to load student fees');
          }
          setCurrentStudentData(data?.data ?? null);
        } catch (err: any) {
          setError(err.message || 'Unable to load fee data');
        } finally {
          setLoading(false);
        }
      };

      fetchStudentFees();
    }
  }, [studentId, stateStudent, navigate]);

  const allMonthsFees: MonthlyFee[] = currentStudentData
    ? [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ].map((month, index) => {
      const monthNumber = index + 1;
      const pendingMonth = currentStudentData.pendingMonths?.find((pm: any) =>
        pm.month.includes(month),
      );

      if (pendingMonth) {
        return {
          month,
          monthNumber,
          amount: pendingMonth.amount,
          dueDate: pendingMonth.dueDate,
          status: pendingMonth.daysOverdue > 0 ? 'overdue' : 'unpaid',
          paidDate: undefined,
          receiptNumber: undefined,
          transactionId: undefined,
          paymentMethod: undefined,
        };
      }

      if (monthNumber <= 2) {
        return {
          month,
          monthNumber,
          amount: 5000,
          dueDate: `2026-${String(monthNumber).padStart(2, '0')}-10`,
          status: 'paid',
          paidDate: `2026-${String(monthNumber).padStart(2, '0')}-09`,
          receiptNumber: `RCP-2026-${String(monthNumber).padStart(3, '0')}`,
          transactionId: `TXN2026${String(monthNumber).padStart(2, '0')}09001`,
          paymentMethod: 'UPI',
        };
      }

      return {
        month,
        monthNumber,
        amount: 5000,
        dueDate: `2026-${String(monthNumber).padStart(2, '0')}-10`,
        status: 'unpaid',
      };
    })
    : [];

  useEffect(() => {
    if (!currentStudentData && !loading && !studentId) {
      navigate('/admin/fee');
    }
  }, [currentStudentData, loading, studentId, navigate]);

  if (loading) {
    return (
      <PortalLayout role="admin" userName="Stevie Zone" userRole="Admin" pageTitle="Fee Payment" breadcrumbs={['Home', 'Admin', 'Fees', 'Payment']}>
        <div className="text-center py-20">Loading student fee details…</div>
      </PortalLayout>
    );
  }

  if (error || !currentStudentData) {
    return (
      <PortalLayout role="admin" userName="Stevie Zone" userRole="Admin" pageTitle="Fee Payment" breadcrumbs={['Home', 'Admin', 'Fees', 'Payment']}>
        <div className="max-w-3xl mx-auto p-8 bg-red-50 rounded-xl">
          <p className="text-red-700 font-semibold mb-4">Unable to load fee data.</p>
          <p className="text-sm text-slate-600">{error || 'Student fee summary not found.'}</p>
          <Button onClick={() => navigate('/admin/fee')} className="mt-6">Back to Fee Management</Button>
        </div>
      </PortalLayout>
    );
  }

  const monthlyTotal = feeBreakdown.reduce((sum, item) => sum + item.amount, 0);
  const selectedTotal = selectedMonths.reduce((sum, monthNum) => {
    const fee = allMonthsFees.find((f) => f.monthNumber === monthNum);
    return sum + (fee?.amount || 0);
  }, 0);
  const selectedFeesData = allMonthsFees.filter((f) => selectedMonths.includes(f.monthNumber));

  const handleMonthToggle = (monthNumber: number) => {
    const fee = allMonthsFees.find((f) => f.monthNumber === monthNumber);
    if (!fee || fee.status === 'paid') return;

    setSelectedMonths((prev) =>
      prev.includes(monthNumber) ? prev.filter((m) => m !== monthNumber) : [...prev, monthNumber].sort((a, b) => a - b),
    );
  };

  const handleMakePayment = async () => {
    if (!selectedMonths.length) return;

    const payload = {
      studentId: currentStudentData.studentId,
      selectedMonths,
      paymentMethod,
    };

    try {
      const response = await fetch('/student/fees/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || 'Payment failed.');

      alert(`Payment successful!\n\nAmount: ₹${selectedTotal.toLocaleString()}\nMethod: ${paymentMethod.toUpperCase()}`);
      navigate('/admin/fee');
    } catch (err: any) {
      alert(err.message || 'Unable to process payment.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'unpaid':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'overdue':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'unpaid':
        return <Clock className="w-4 h-4" />;
      case 'overdue':
        return <Clock className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Fee Payment"
      breadcrumbs={['Home', 'Admin', 'Fees', 'Payment']}
    >
      <div className="space-y-6 max-w-7xl mx-auto">
        <Button onClick={() => navigate('/admin/fee')} variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Fee Management
        </Button>

        <Card className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200">
          <h3 className="font-bold text-lg mb-4 text-slate-900">Student Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Student ID</p>
                <p className="font-bold text-slate-900">{currentStudentData.studentId}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Student Name</p>
                <p className="font-bold text-slate-900">{currentStudentData.studentName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Class</p>
                <p className="font-bold text-slate-900">{currentStudentData.class}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Parent / Contact</p>
                <p className="font-bold text-slate-900">{currentStudentData.parentName}</p>
                <p className="text-xs text-slate-600">{currentStudentData.contactNumber}</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
            <p className="text-sm text-slate-600 mb-2">Total Pending Amount</p>
            <h2 className="text-3xl font-bold text-red-600">₹{currentStudentData.totalPendingAmount.toLocaleString()}</h2>
            <p className="text-xs text-slate-600 mt-2">{currentStudentData.pendingMonths.length} pending months</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <p className="text-sm text-slate-600 mb-2">Paid This Year</p>
            <h2 className="text-3xl font-bold text-green-600">
              ₹{allMonthsFees.filter((f) => f.status === 'paid').reduce((sum, f) => sum + f.amount, 0).toLocaleString()}
            </h2>
            <p className="text-xs text-slate-600 mt-2">{allMonthsFees.filter((f) => f.status === 'paid').length} months paid</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
            <p className="text-sm text-slate-600 mb-2">Monthly Fee Amount</p>
            <h2 className="text-3xl font-bold text-blue-600">₹{monthlyTotal.toLocaleString()}</h2>
            <p className="text-xs text-slate-600 mt-2">Per month</p>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Select Months to Pay
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {allMonthsFees.map((fee) => {
              const isSelected = selectedMonths.includes(fee.monthNumber);
              const isPaid = fee.status === 'paid';
              const isOverdue = fee.status === 'overdue';

              return (
                <motion.div
                  key={fee.monthNumber}
                  whileHover={!isPaid ? { scale: 1.05, y: -5 } : {}}
                  whileTap={!isPaid ? { scale: 0.95 } : {}}
                  onClick={() => handleMonthToggle(fee.monthNumber)}
                  className={`p-4 border-2 rounded-xl transition-all ${isPaid
                    ? 'border-green-200 bg-green-50 cursor-not-allowed opacity-60'
                    : isSelected
                      ? 'border-blue-500 bg-blue-50 shadow-lg cursor-pointer'
                      : isOverdue
                        ? 'border-red-300 bg-red-50 hover:border-red-500 hover:shadow-md cursor-pointer'
                        : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md cursor-pointer'
                    }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className={`font-bold text-sm ${isPaid ? 'text-green-700' : 'text-slate-900'}`}>{fee.month}</p>
                    {!isPaid && (
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300'
                          }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    )}
                    {isPaid && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  </div>
                  <p className={`font-bold text-lg mb-1 ${isPaid ? 'text-green-600' : isSelected ? 'text-blue-600' : 'text-slate-700'}`}>
                    ₹{fee.amount.toLocaleString()}
                  </p>
                  <Badge variant="outline" className={`${getStatusColor(fee.status)} text-xs`}>
                    {getStatusIcon(fee.status)}
                    <span className="ml-1 capitalize">{fee.status}</span>
                  </Badge>
                  {isOverdue && <p className="text-xs text-red-600 mt-1 font-medium">Overdue</p>}
                </motion.div>
              );
            })}
          </div>
        </Card>

        {selectedMonths.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <Card className="p-6 bg-amber-50 border-2 border-amber-200">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Receipt className="w-6 h-6 text-amber-600" />
                Full Payment Details
              </h3>

              <div className="space-y-4">
                {selectedFeesData.map((fee) => (
                  <div key={fee.monthNumber} className="pb-4 border-b border-amber-200 last:border-0">
                    <div className="font-semibold text-lg text-amber-900 mb-3 pb-2 border-b border-amber-300">
                      {fee.month} 2026
                    </div>
                    {feeBreakdown.map((item, index) => (
                      <div key={`${fee.monthNumber}-${index}`} className="flex items-center justify-between py-2 px-3 hover:bg-amber-100 rounded">
                        <span className="text-slate-700">• {item.item}</span>
                        <span className="font-medium text-slate-900">₹{item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                    {fee.status === 'overdue' && (
                      <div className="flex items-center justify-between py-2 px-3 text-red-600 bg-red-50 rounded mt-2">
                        <span className="font-medium">• Late Fee Penalty</span>
                        <span className="font-medium">₹500</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-amber-300 bg-amber-100 px-3 py-2 rounded">
                      <span className="font-semibold text-slate-900">Subtotal</span>
                      <span className="font-bold text-amber-600">₹{fee.amount.toLocaleString()}</span>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between pt-6 border-t-2 border-amber-400 mt-4 bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-4 rounded-lg">
                  <span className="font-bold text-xl text-slate-900">Total Amount to Pay</span>
                  <span className="font-bold text-3xl text-amber-600">₹{selectedTotal.toLocaleString()}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-xl mb-6">Select Payment Method</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                >
                  <Wallet className="w-10 h-10 text-blue-600 mb-3" />
                  <p className="font-bold text-slate-900 mb-1">UPI Payment</p>
                  <p className="text-xs text-slate-600">Google Pay, PhonePe, Paytm</p>
                </div>
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                >
                  <CreditCard className="w-10 h-10 text-blue-600 mb-3" />
                  <p className="font-bold text-slate-900 mb-1">Card Payment</p>
                  <p className="text-xs text-slate-600">Credit / Debit Card</p>
                </div>
                <div
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'netbanking' ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                >
                  <DollarSign className="w-10 h-10 text-blue-600 mb-3" />
                  <p className="font-bold text-slate-900 mb-1">Net Banking</p>
                  <p className="text-xs text-slate-600">All major banks</p>
                </div>
              </div>
            </Card>

            <div className="sticky bottom-4 bg-white p-4 rounded-xl shadow-2xl border-2 border-slate-200">
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 h-14 text-lg border-2" onClick={() => navigate('/admin/fee')}>
                  Cancel
                </Button>
                <Button className="flex-1 h-14 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" onClick={handleMakePayment}>
                  <CreditCard className="w-6 h-6 mr-3" />
                  Process Payment - ₹{selectedTotal.toLocaleString()}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </PortalLayout>
  );
}