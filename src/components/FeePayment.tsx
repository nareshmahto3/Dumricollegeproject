import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CreditCard,
  Download,
  CheckCircle2,
  Calendar,
  IndianRupee,
  XCircle,
  Clock,
  DollarSign,
  Wallet,
  AlertCircle,
  ArrowLeft,
  Receipt,
  FileText,
  History
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

const monthlyFees: MonthlyFee[] = [
  {
    month: 'January',
    monthNumber: 1,
    amount: 5000,
    dueDate: '2026-01-10',
    status: 'paid',
    paidDate: '2026-01-08',
    receiptNumber: 'RCP-2026-001',
    transactionId: 'TXN20260108001',
    paymentMethod: 'UPI',
  },
  {
    month: 'February',
    monthNumber: 2,
    amount: 5000,
    dueDate: '2026-02-10',
    status: 'paid',
    paidDate: '2026-02-09',
    receiptNumber: 'RCP-2026-002',
    transactionId: 'TXN20260209001',
    paymentMethod: 'Credit Card',
  },
  {
    month: 'March',
    monthNumber: 3,
    amount: 5500, // Late fee added
    dueDate: '2026-03-10',
    status: 'overdue',
  },
  {
    month: 'April',
    monthNumber: 4,
    amount: 5000,
    dueDate: '2026-04-10',
    status: 'unpaid',
  },
  {
    month: 'May',
    monthNumber: 5,
    amount: 5000,
    dueDate: '2026-05-10',
    status: 'unpaid',
  },
  {
    month: 'June',
    monthNumber: 6,
    amount: 5000,
    dueDate: '2026-06-10',
    status: 'unpaid',
  },
  {
    month: 'July',
    monthNumber: 7,
    amount: 5000,
    dueDate: '2026-07-10',
    status: 'unpaid',
  },
  {
    month: 'August',
    monthNumber: 8,
    amount: 5000,
    dueDate: '2026-08-10',
    status: 'unpaid',
  },
  {
    month: 'September',
    monthNumber: 9,
    amount: 5000,
    dueDate: '2026-09-10',
    status: 'unpaid',
  },
  {
    month: 'October',
    monthNumber: 10,
    amount: 5000,
    dueDate: '2026-10-10',
    status: 'unpaid',
  },
  {
    month: 'November',
    monthNumber: 11,
    amount: 5000,
    dueDate: '2026-11-10',
    status: 'unpaid',
  },
  {
    month: 'December',
    monthNumber: 12,
    amount: 5000,
    dueDate: '2026-12-10',
    status: 'unpaid',
  },
];

const feeBreakdown = [
  { item: 'Tuition Fee', amount: 3500 },
  { item: 'Library Fee', amount: 500 },
  { item: 'Lab Fee', amount: 600 },
  { item: 'Sports Fee', amount: 300 },
  { item: 'Miscellaneous', amount: 100 },
];

export function FeePayment() {
  const [fees, setFees] = useState<MonthlyFee[]>(monthlyFees);
  const [view, setView] = useState<'unpaid' | 'paid' | 'payment-details'>('unpaid');
  const [selectedFee, setSelectedFee] = useState<MonthlyFee | null>(null);
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cash'>('upi');

  const monthlyTotal = feeBreakdown.reduce((sum, item) => sum + item.amount, 0);

  // Calculate statistics
  const unpaidFees = fees.filter(f => f.status === 'unpaid' || f.status === 'overdue');
  const paidFees = fees.filter(f => f.status === 'paid');
  const totalPaid = paidFees.reduce((sum, f) => sum + f.amount, 0);
  const totalUnpaid = unpaidFees.reduce((sum, f) => sum + f.amount, 0);
  const overdueMonths = fees.filter(f => f.status === 'overdue').length;

  // Calculate selected total
  const selectedTotal = selectedMonths.reduce((sum, monthNum) => {
    const fee = fees.find(f => f.monthNumber === monthNum);
    return sum + (fee?.amount || 0);
  }, 0);

  const selectedFeesData = fees.filter(f => selectedMonths.includes(f.monthNumber));

  const handleMonthToggle = (monthNumber: number) => {
    setSelectedMonths(prev => {
      if (prev.includes(monthNumber)) {
        return prev.filter(m => m !== monthNumber);
      } else {
        return [...prev, monthNumber].sort((a, b) => a - b);
      }
    });
  };

  const handleProceedToPayment = () => {
    if (selectedMonths.length > 0) {
      setView('payment-details');
    }
  };

  const handleFeeClick = (fee: MonthlyFee) => {
    if (fee.status !== 'paid') {
      // If clicking on a card, select only that month
      setSelectedMonths([fee.monthNumber]);
      setView('payment-details');
    }
  };

  const handleMakePayment = () => {
    // Redirect to payment gateway
    // In a real app, this would redirect to Razorpay/Stripe/PayU etc.
    console.log('Redirecting to payment gateway...');
    alert(`Redirecting to payment gateway for ₹${selectedTotal.toLocaleString()}\nPayment Method: ${paymentMethod}`);

    // Simulate payment success (in real app, this would happen after payment gateway callback)
    // For demo purposes only:
    // setTimeout(() => {
    //   if (selectedFee) {
    //     setFees(fees.map(fee => {
    //       if (fee.monthNumber === selectedFee.monthNumber) {
    //         return {
    //           ...fee,
    //           status: 'paid' as const,
    //           paidDate: new Date().toISOString().split('T')[0],
    //           receiptNumber: `RCP-2026-${String(fee.monthNumber).padStart(3, '0')}`,
    //           transactionId: `TXN${Date.now()}`,
    //           paymentMethod: paymentMethod,
    //         };
    //       }
    //       return fee;
    //     }));
    //     setView('unpaid');
    //     setSelectedFee(null);
    //   }
    // }, 2000);
  };

  const handleDownloadReceipt = (fee: MonthlyFee) => {
    // In a real app, this would generate and download a PDF receipt
    console.log('Downloading receipt for', fee.month);
    alert(`Downloading receipt: ${fee.receiptNumber}\nMonth: ${fee.month}\nAmount: ₹${fee.amount}`);
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
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  // Payment Details View
  if (view === 'payment-details' && selectedMonths.length > 0) {
    const isMultipleMonths = selectedMonths.length > 1;

    return (
      <PortalLayout
        role="student"
        userName="Rohan Kumar"
        userRole="Grade 10-A"
        pageTitle="Payment Details"
        breadcrumbs={["Home", "Student", "Fees", "Payment"]}
      >
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            onClick={() => {
              setView('unpaid');
              setSelectedMonths([]);
            }}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 font-semibold transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fees
          </Button>

          {/* Fee Details Card */}
          <Card className="p-6 border border-slate-200 shadow-sm bg-white">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {isMultipleMonths
                    ? `Payment for ${selectedMonths.length} Months`
                    : `${selectedFeesData[0]?.month} 2026 Fee Payment`}
                </h2>
                <p className="text-slate-600 font-medium">Complete your payment to confirm</p>
              </div>
              {!isMultipleMonths && selectedFeesData[0] && (
                <Badge variant="outline" className={getStatusColor(selectedFeesData[0].status)}>
                  {getStatusIcon(selectedFeesData[0].status)}
                  <span className="ml-1 capitalize font-medium">{selectedFeesData[0].status}</span>
                </Badge>
              )}
            </div>

            {/* Selected Months List (for multiple) */}
            {isMultipleMonths && (
              <div className="mb-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-3">Selected Months</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedFeesData.map(fee => (
                    <div key={fee.monthNumber} className="bg-white border border-blue-300 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{fee.month}</p>
                          <p className="text-xs text-slate-600">₹{fee.amount.toLocaleString()}</p>
                        </div>
                        {fee.status === 'overdue' && (
                          <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 text-xs">
                            Overdue
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fee Breakdown */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-4">Fee Breakdown</h3>
              <div className="space-y-3">
                {isMultipleMonths ? (
                  <>
                    {selectedFeesData.map(fee => (
                      <div key={fee.monthNumber}>
                        <div className="font-semibold text-blue-900 mb-2 pb-2 border-b border-blue-300">
                          {fee.month} 2026
                        </div>
                        {feeBreakdown.map((item, index) => (
                          <div
                            key={`${fee.monthNumber}-${index}`}
                            className="flex items-center justify-between py-1 text-sm"
                          >
                            <span className="text-slate-700 pl-3">• {item.item}</span>
                            <span className="font-medium text-slate-900">₹{item.amount.toLocaleString()}</span>
                          </div>
                        ))}
                        {fee.status === 'overdue' && (
                          <div className="flex items-center justify-between py-1 text-sm text-red-600 pl-3">
                            <span className="font-medium">• Late Fee Penalty</span>
                            <span className="font-medium">₹500</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-blue-200 bg-blue-100/50 px-2 py-1 rounded">
                          <span className="font-semibold text-slate-900 text-sm">Subtotal</span>
                          <span className="font-semibold text-blue-600">₹{fee.amount.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {feeBreakdown.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-blue-200 last:border-0"
                      >
                        <span className="text-slate-700">{item.item}</span>
                        <span className="font-medium text-slate-900">₹{item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                    {selectedFeesData[0]?.status === 'overdue' && (
                      <div className="flex items-center justify-between py-2 border-b border-blue-200 text-red-600">
                        <span className="font-medium">Late Fee Penalty</span>
                        <span className="font-medium">₹500</span>
                      </div>
                    )}
                  </>
                )}
                <div className="flex items-center justify-between pt-4 border-t-2 border-blue-300 mt-3">
                  <span className="font-bold text-slate-900 text-lg">Total Amount</span>
                  <span className="font-bold text-2xl text-blue-600">
                    ₹{selectedTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Due Date Info - only for single month */}
            {!isMultipleMonths && selectedFeesData[0] && (
              <Card className="p-4 bg-blue-50 border-blue-200 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Due Date</p>
                    <p className="text-sm text-blue-700">
                      {new Date(selectedFeesData[0].dueDate).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Overdue Warning */}
            {selectedFeesData.some(f => f.status === 'overdue') && (
              <Card className="p-4 bg-red-50 border-red-200 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-900 mb-1">Overdue Payment</p>
                    <p className="text-sm text-red-700">
                      {isMultipleMonths
                        ? `${selectedFeesData.filter(f => f.status === 'overdue').length} month(s) in your selection are overdue. Late fees have been added.`
                        : 'This payment is overdue. A late fee of ₹500 has been added.'}
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Payment Method Selection */}
            <div className="mb-6">
              <h3 className="font-bold text-slate-900 mb-4">Select Payment Method</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                {/* UPI Payment Option */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex-1 p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'upi'
                      ? 'border-amber-500 bg-amber-50 shadow-lg'
                      : 'border-gray-200 hover:border-amber-300'
                    }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${paymentMethod === 'upi' ? 'bg-amber-100' : 'bg-green-100'
                      }`}>
                      <IndianRupee className={`w-5 h-5 ${paymentMethod === 'upi' ? 'text-amber-600' : 'text-green-600'
                        }`} />
                    </div>
                    {paymentMethod === 'upi' && (
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <p className="font-medium text-slate-900">UPI Payment</p>
                  <p className="text-xs text-slate-600">GPay, PhonePe, Paytm</p>
                </motion.div>

                {/* Cash Payment Option */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setPaymentMethod('cash')}
                  className={`flex-1 p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'cash'
                      ? 'border-amber-500 bg-amber-50 shadow-lg'
                      : 'border-gray-200 hover:border-amber-300'
                    }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${paymentMethod === 'cash' ? 'bg-amber-100' : 'bg-gray-100'
                      }`}>
                      <Wallet className={`w-5 h-5 ${paymentMethod === 'cash' ? 'text-amber-600' : 'text-gray-600'
                        }`} />
                    </div>
                    {paymentMethod === 'cash' && (
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <p className="font-medium text-slate-900">Cash Payment</p>
                  <p className="text-xs text-slate-600">Pay at school office</p>
                </motion.div>

                {/* Payment Button in the same row */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    onClick={handleMakePayment}
                    className="w-full h-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-6 text-base flex flex-col items-center justify-center gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      <span>Make Payment</span>
                    </div>
                    <div className="text-sm font-semibold">
                      ₹{selectedTotal.toLocaleString()}
                      {isMultipleMonths && ` (${selectedMonths.length} months)`}
                    </div>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Security Note */}
            <Card className="p-4 bg-emerald-50 border-emerald-200 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-emerald-900 mb-1">Secure Payment</p>
                  <p className="text-xs text-emerald-700">
                    All payments are processed through secure, encrypted payment gateways. Your financial information is never stored on our servers.
                  </p>
                </div>
              </div>
            </Card>
          </Card>
        </div>
      </PortalLayout>
    );
  }

  // Main Fee Payment View
  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Fee Payment"
      breadcrumbs={["Home", "Student", "Fees"]}
    >
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">
                  {paidFees.length} months
                </Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Total Paid</p>
              <h3 className="text-3xl font-bold text-white">₹{totalPaid.toLocaleString()}</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">
                  {unpaidFees.length} months
                </Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Total Unpaid</p>
              <h3 className="text-3xl font-bold text-white">₹{totalUnpaid.toLocaleString()}</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-red-500 to-red-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">
                  Urgent
                </Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Overdue</p>
              <h3 className="text-2xl font-bold text-white">{overdueMonths} month(s)</h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 border-0 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">
                  Per Month
                </Badge>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Monthly Fee</p>
              <h3 className="text-3xl font-bold text-white">₹{monthlyTotal.toLocaleString()}</h3>
            </Card>
          </motion.div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => setView('unpaid')}
            className={`flex-1 py-6 text-lg font-semibold transition-all duration-200 ${view === 'unpaid'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-white border-2 border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500'
              }`}
          >
            <Clock className="w-5 h-5 mr-2" />
            Unpaid Fees ({unpaidFees.length})
          </Button>
          <Button
            onClick={() => setView('paid')}
            className={`flex-1 py-6 text-lg font-semibold transition-all duration-200 ${view === 'paid'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-white border-2 border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500'
              }`}
          >
            <History className="w-5 h-5 mr-2" />
            Payment History ({paidFees.length})
          </Button>
        </div>

        {/* Unpaid Fees View */}
        {view === 'unpaid' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Selection Summary Card - Show when months are selected */}
            {selectedMonths.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6"
              >
                <Card className="p-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {selectedMonths.length} Month(s) Selected
                      </h3>
                      <p className="text-amber-100">
                        Total Amount: ₹{selectedTotal.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setSelectedMonths([])}
                        variant="outline"
                        className="bg-white/20 text-white border-white/40 hover:bg-white/30"
                      >
                        Clear Selection
                      </Button>
                      <Button
                        onClick={handleProceedToPayment}
                        className="bg-white text-amber-600 hover:bg-amber-50 font-bold px-6"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Pay Selected
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            <Card className="p-6 bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Unpaid Fees</h2>
                  <p className="text-sm text-slate-600 font-medium mt-1">
                    Click on cards to select multiple months for payment
                  </p>
                </div>
                <Badge className="bg-red-100 text-red-700 border-red-200 font-medium">
                  {unpaidFees.length} Pending
                </Badge>
              </div>

              {unpaidFees.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">All Fees Paid!</h3>
                  <p className="text-slate-600">You have no pending fee payments.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {unpaidFees.map((fee, index) => {
                    const isSelected = selectedMonths.includes(fee.monthNumber);
                    return (
                      <motion.div
                        key={fee.monthNumber}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        onClick={() => handleMonthToggle(fee.monthNumber)}
                        className={`p-5 border-2 rounded-xl cursor-pointer transition-all shadow-md hover:shadow-xl relative ${isSelected
                            ? 'border-amber-500 bg-amber-50 shadow-lg ring-2 ring-amber-300'
                            : fee.status === 'overdue'
                              ? 'border-red-300 bg-red-50 hover:border-red-400'
                              : 'border-blue-300 bg-blue-50 hover:border-blue-400'
                          }`}
                      >
                        {/* Selection Checkbox */}
                        <div className="absolute top-3 left-3">
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${isSelected
                              ? 'bg-amber-500 border-amber-500'
                              : 'bg-white border-slate-300'
                            }`}>
                            {isSelected && (
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>

                        <div className="flex items-start justify-between mb-3 pl-8">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                              {fee.month} 2026
                            </h3>
                            <p className="text-xs text-slate-600 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Due: {new Date(fee.dueDate).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short'
                              })}
                            </p>
                          </div>
                          <Badge variant="outline" className={getStatusColor(fee.status)}>
                            {getStatusIcon(fee.status)}
                            <span className="ml-1 capitalize text-xs">{fee.status}</span>
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t-2 border-slate-200">
                          <span className="font-bold text-xl text-slate-900">
                            ₹{fee.amount.toLocaleString()}
                          </span>
                        </div>

                        {fee.status === 'overdue' && (
                          <div className="mt-3 pt-3 border-t border-red-300">
                            <p className="text-xs text-red-700 font-medium flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              Late fee of ₹500 included
                            </p>
                          </div>
                        )}

                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </Card>

            {/* Important Note */}
            {unpaidFees.length > 0 && (
              <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-900">Payment Information</h4>
                    <p className="text-sm text-blue-800 mb-2">
                      • Late payment after the due date will incur a fine of ₹500 per month.
                    </p>
                    <p className="text-sm text-blue-800 mb-2">
                      • Click on months to select multiple for payment. You can pay for multiple months at once.
                    </p>
                    <p className="text-sm text-blue-800">
                      • All payments are processed securely through encrypted gateways.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </motion.div>
        )}

        {/* Paid Fees / Payment History View */}
        {view === 'paid' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6 bg-white border-2 border-amber-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Payment History</h2>
                <Badge className="bg-green-100 text-green-700 border-green-200 font-medium">
                  {paidFees.length} Payments
                </Badge>
              </div>

              {paidFees.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No Payment History</h3>
                  <p className="text-slate-600">You haven't made any payments yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {paidFees.map((fee, index) => (
                    <motion.div
                      key={fee.monthNumber}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-5 border-2 border-green-200 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900">{fee.month} 2026</h3>
                              <p className="text-sm text-slate-600">
                                Receipt: {fee.receiptNumber}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                            <div>
                              <p className="text-slate-500 text-xs mb-1">Payment Date</p>
                              <p className="font-medium text-slate-900">
                                {fee.paidDate && new Date(fee.paidDate).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-500 text-xs mb-1">Payment Method</p>
                              <p className="font-medium text-slate-900">{fee.paymentMethod}</p>
                            </div>
                            <div>
                              <p className="text-slate-500 text-xs mb-1">Transaction ID</p>
                              <p className="font-medium text-slate-900 text-xs">{fee.transactionId}</p>
                            </div>
                            <div>
                              <p className="text-slate-500 text-xs mb-1">Amount Paid</p>
                              <p className="font-bold text-green-600 text-lg">₹{fee.amount.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>

                        <Button
                          onClick={() => handleDownloadReceipt(fee)}
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Receipt
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {paidFees.length > 0 && (
                <div className="mt-6 pt-6 border-t-2 border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 mb-1">Total Amount Paid</p>
                      <p className="text-3xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-green-300 text-green-600 hover:bg-green-50 hover:text-green-900"
                    >
                      <Receipt className="w-4 h-4 mr-2" />
                      Download All Receipts
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </motion.div>
    </PortalLayout>
  );
}