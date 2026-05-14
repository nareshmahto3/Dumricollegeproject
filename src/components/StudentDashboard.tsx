import {
  CreditCard,
  FileText,
  Award,
  CheckCircle2,
  Calendar,
  Download,
  Eye,
} from "lucide-react";
import { Card } from "./ui/card";
import { PortalLayout } from "./PortalLayout";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { HolidayCalendar } from "./HolidayCalendar";
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';


const certificates = [
  {
    id: 1,
    name: "Transfer Certificate",
    status: "Available",
    date: "2026-01-10",
  },
  {
    id: 2,
    name: "Character Certificate",
    status: "Available",
    date: "2026-01-10",
  },
  {
    id: 3,
    name: "Bonafide Certificate",
    status: "Processing",
    date: "Expected: 2026-02-15",
  },
];



export function StudentDashboard() {
  const navigate = useNavigate();
  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Student Dashboard"
      breadcrumbs={["Home", "Student"]}
    >
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Quick Stats - Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full p-6 bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">
                  Paid
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">₹45,000</h3>
              <p className="text-sm font-semibold text-white/90 mb-3">Current Term Fees</p>
              <p className="text-xs text-white/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Last paid: Jan 10, 2026</span>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">
                  Active
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Under Review</h3>
              <p className="text-sm font-semibold text-white/90 mb-3">Application Status</p>
              <p className="text-xs text-white/80 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Updated: Jan 14, 2026</span>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 font-semibold backdrop-blur-sm">
                  2 Available
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Certificates</h3>
              <p className="text-sm font-semibold text-white/90 mb-3">Ready to Download</p>
              <p className="text-xs text-white/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>2 certificates ready</span>
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Fee Status - Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="mb-6 font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              Fee Status
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="font-semibold text-slate-700">Total Fee</span>
                  <span className="font-bold text-slate-900">₹45,000</span>
                </div>
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="font-semibold text-slate-700">Paid Amount</span>
                  <span className="text-emerald-600 font-bold">₹45,000</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="font-semibold text-slate-700">Balance</span>
                  <span className="font-bold text-slate-900">₹0</span>
                </div>
                <Progress value={100} className="h-2.5 mb-4" />
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-emerald-700 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Fees Paid for Current Term
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="mb-4 font-bold text-slate-900">Payment History</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Term 1 - 2026</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Paid on Jan 10, 2026</span>
                      </p>
                    </div>
                    <p className="text-sm font-bold text-slate-900">₹45,000</p>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Term 2 - 2025</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Paid on Aug 15, 2025</span>
                      </p>
                    </div>
                    <p className="text-sm font-bold text-slate-900">₹42,000</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Certificates Section - Minimalist Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 sm:gap-0">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Available Certificates
              </h3>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
                size="sm"
                onClick={() => navigate('/student/certificates')}
              >
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="p-5 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge
                      className={
                        cert.status === "Available"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200 font-medium"
                          : "bg-blue-50 text-blue-700 border-blue-200 font-medium"
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <h4 className="mb-2 text-sm font-bold text-slate-900">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-600 mb-4">{cert.date}</p>
                  {cert.status === "Available" && (
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                  {cert.status === "Processing" && (
                    <Button
                      variant="outline"
                      disabled
                      className="w-full border-slate-300 text-slate-500 font-semibold"
                      size="sm"
                    >
                      Processing...
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Holiday Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <HolidayCalendar variant="student" />
        </motion.div>
      </motion.div>
    </PortalLayout>
  );
}