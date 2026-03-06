import { useState } from 'react';
import { Download, Printer, CheckCircle, ArrowLeft, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';

export function StudentFeeReceipt() {
  const navigate = useNavigate();
  const [isPrinting, setIsPrinting] = useState(false);

  // Mock receipt data - in real app, this would come from payment processing
  const receiptData = {
    receiptNumber: 'RCP-2026-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    transactionId: 'TXN' + Date.now().toString().substr(-10),
    paymentDate: new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    paymentTime: new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    student: {
      name: 'Aarav Sharma',
      id: 'STU2026001',
      class: 'Grade 10-A',
      section: 'Science',
      rollNumber: '2026001',
      email: 'aarav.sharma@school.edu',
      phone: '+91 98765 43210',
    },
    payment: {
      amount: 25000,
      method: 'Credit Card',
      cardLast4: '4242',
      feeType: 'Semester Fee',
      academicYear: '2025-2026',
      semester: 'Spring 2026',
    },
    institute: {
      name: 'EduManage Pro University',
      address: '123 Education Lane, Academic City, State 110001',
      phone: '+91 11 1234 5678',
      email: 'info@edumanagepro.edu',
      website: 'www.edumanagepro.edu',
    },
  };

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    alert('Receipt download will be available in production version');
  };

  const handlePrint = () => {
    setIsPrinting(true);
    window.print();
    setTimeout(() => setIsPrinting(false), 1000);
  };

  return (
    <PortalLayout
      role="student"
      userName={receiptData.student.name}
      userRole="Student"
      pageTitle="Payment Receipt"
      breadcrumbs={["Home", "Student", "Fee Payment", "Receipt"]}
    >
      <div className="space-y-6">
        {/* Success Message */}
        <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Payment Successful!</h2>
              <p className="text-white/90">Your payment has been processed successfully</p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 print:hidden">
          <Button
            variant="outline"
            onClick={() => navigate('/student/fees')}
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fees
          </Button>
          <div className="flex-1" />
          <Button
            onClick={handlePrint}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print Receipt
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Receipt Card */}
        <Card className="p-0 bg-white border-2 border-slate-200 shadow-lg overflow-hidden">
          {/* Institute Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">{receiptData.institute.name}</h1>
            <p className="text-blue-100 text-sm mb-1">{receiptData.institute.address}</p>
            <p className="text-blue-100 text-sm">
              {receiptData.institute.phone} | {receiptData.institute.email}
            </p>
          </div>

          {/* Receipt Badge */}
          <div className="bg-slate-50 border-b-2 border-slate-200 py-4 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full">
              <FileText className="w-5 h-5" />
              <span className="font-bold text-lg">PAYMENT RECEIPT</span>
            </div>
          </div>

          {/* Receipt Content */}
          <div className="p-8 space-y-6">
            {/* Receipt Info */}
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-200">
              <div>
                <p className="text-sm text-slate-600 mb-1">Receipt Number</p>
                <p className="text-lg font-bold text-slate-900">{receiptData.receiptNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600 mb-1">Date & Time</p>
                <p className="text-lg font-bold text-slate-900">
                  {receiptData.paymentDate}
                </p>
                <p className="text-sm text-slate-600">{receiptData.paymentTime}</p>
              </div>
            </div>

            {/* Student Information */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Student Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600">Student Name</p>
                  <p className="font-semibold text-slate-900">{receiptData.student.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Student ID</p>
                  <p className="font-semibold text-slate-900">{receiptData.student.id}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Class</p>
                  <p className="font-semibold text-slate-900">{receiptData.student.class}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Roll Number</p>
                  <p className="font-semibold text-slate-900">{receiptData.student.rollNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="font-semibold text-slate-900">{receiptData.student.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Phone</p>
                  <p className="font-semibold text-slate-900">{receiptData.student.phone}</p>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Payment Details
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Fee Type</span>
                  <span className="font-semibold text-slate-900">{receiptData.payment.feeType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Academic Year</span>
                  <span className="font-semibold text-slate-900">{receiptData.payment.academicYear}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Semester</span>
                  <span className="font-semibold text-slate-900">{receiptData.payment.semester}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Payment Method</span>
                  <span className="font-semibold text-slate-900">
                    {receiptData.payment.method} •••• {receiptData.payment.cardLast4}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Transaction ID</span>
                  <span className="font-semibold text-slate-900 font-mono text-sm">
                    {receiptData.transactionId}
                  </span>
                </div>
                <div className="border-t-2 border-slate-300 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">Total Amount Paid</span>
                    <span className="text-2xl font-bold text-emerald-600">
                      ₹{receiptData.payment.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 text-center">
                <strong>Note:</strong> This is a computer-generated receipt and does not require a signature.
                Please keep this receipt for your records. For any queries, contact the accounts department.
              </p>
            </div>
          </div>

          {/* Receipt Footer */}
          <div className="bg-slate-100 border-t-2 border-slate-200 p-6 text-center">
            <p className="text-sm text-slate-600 mb-1">Thank you for your payment!</p>
            <p className="text-xs text-slate-500">
              Generated on {receiptData.paymentDate} at {receiptData.paymentTime}
            </p>
          </div>
        </Card>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:hidden {
            display: none !important;
          }
          /* Show only the receipt card content */
          [class*="border-2"][class*="border-slate-200"],
          [class*="border-2"][class*="border-slate-200"] * {
            visibility: visible;
          }
          [class*="border-2"][class*="border-slate-200"] {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
            border: none;
          }
        }
      `}</style>
    </PortalLayout>
  );
}
