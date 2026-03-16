import { 
  Download, 
  Printer, 
  QrCode, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Hash, 
  CheckCircle2 
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const studentData = {
  id: 'STU2023001',
  name: 'Rohan Kumar',
  class: 'Grade 11 - Section A',
  rollNo: '2023001',
  dob: 'January 15, 2008',
  bloodGroup: 'O+',
  phone: '+91 98765 43210',
  email: 'rohan.kumar@edumanage.edu',
  address: '123 MG Road, Bangalore, Karnataka - 560001',
  admissionDate: 'April 1, 2020',
  validUntil: 'March 31, 2027',
  academicYear: '2026-27',
  photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
  school: 'EduManage Pro School',
  principal: 'Dr. Rajesh Sharma',
  emergencyContact: '+91 98765 43211',
  parentName: 'Mr. Vijay Kumar',
  qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0id2hpdGUiLz48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iYmxhY2siLz48cmVjdCB4PSI2MCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iYmxhY2siLz48cmVjdCB4PSIxMDAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9ImJsYWNrIi8+PHJlY3QgeD0iMTQwIiB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJibGFjayIvPjxyZWN0IHg9IjE4MCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iYmxhY2siLz48L3N2Zz4=',
  signature: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAyMCBRIDIwIDEwIDMwIDIwIFQgNTAgMjAgVCA3MCAyMCBUIzkwIDIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=',
};

export function DigitalIDCard() {
  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    console.log('Downloading ID Card...');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Class 10-A"
      pageTitle="Digital ID Card"
      breadcrumbs={["Home", "Student", "ID Card"]}
    >
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Status Badge Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4 bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">ID Card Status: Active</h3>
                  <p className="text-sm text-slate-600 font-medium">Your official school identification card</p>
                </div>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Valid
              </Badge>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Front of ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-lg border-2 border-blue-500">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold">EduManage Pro School</h3>
                    <p className="text-blue-100 text-xs font-medium">Student Identity Card</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="flex gap-6 mb-6">
                  <div className="w-28 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={studentData.photo} 
                      alt={studentData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-3">{studentData.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 font-medium">Student ID:</span>
                        <span className="font-bold text-slate-900">{studentData.id}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 font-medium">Class:</span>
                        <span className="font-bold text-slate-900">{studentData.class}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 font-medium">Roll No:</span>
                        <span className="font-bold text-slate-900">{studentData.rollNo}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 font-medium">Blood Group:</span>
                        <span className="font-bold text-red-600">{studentData.bloodGroup}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs mb-1 font-medium">Date of Birth</p>
                      <p className="font-semibold text-slate-900">{studentData.dob}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1 font-medium">Academic Year</p>
                      <p className="font-semibold text-slate-900">{studentData.academicYear}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Back of ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="overflow-hidden shadow-lg border-2 border-blue-500">
              <div className="bg-blue-50 p-6">
                <h4 className="font-bold text-slate-900 mb-4">Card Details & Verification</h4>
                
                {/* QR Code */}
                <div className="bg-white p-4 rounded-lg mb-4 border border-slate-200">
                  <div className="flex items-center justify-center">
                    <div className="w-40 h-40 bg-slate-900 rounded-lg flex items-center justify-center">
                      <QrCode className="w-32 h-32 text-white" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-slate-600 font-medium mt-3">
                    Scan to verify student identity
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-500 font-medium mb-1">Card Number</p>
                    <p className="text-sm font-bold text-slate-900">{studentData.id}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-500 font-medium mb-1">Valid Until</p>
                    <p className="text-sm font-bold text-slate-900">{studentData.validUntil}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200">
                <h4 className="mb-3 text-sm font-bold text-slate-900">Emergency Contact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Parent:</span>
                    <span className="font-semibold text-slate-900">{studentData.parentName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Contact:</span>
                    <span className="font-semibold text-slate-900">{studentData.emergencyContact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">School:</span>
                    <span className="font-semibold text-slate-900">+91 11 1234 5678</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-4 pt-4 border-t border-slate-200">
                  This card is the property of {studentData.school}. If found, please return to the school office.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button onClick={handleDownload} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200">
            <Download className="w-4 h-4 mr-2" />
            Download ID Card (PDF)
          </Button>
          <Button onClick={handlePrint} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 font-semibold transition-all duration-200">
            <Printer className="w-4 h-4 mr-2" />
            Print ID Card
          </Button>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 bg-blue-50 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <QrCode className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-2">About Digital ID Card</h4>
                <ul className="text-sm text-slate-700 font-medium space-y-1 list-disc list-inside">
                  <li>Your digital ID card is QR-verified for authenticity</li>
                  <li>Download and save a copy on your mobile device</li>
                  <li>You can also print a physical copy if needed</li>
                  <li>The QR code can be scanned to verify your identity instantly</li>
                  <li>This card is valid for the current academic year only</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}