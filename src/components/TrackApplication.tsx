import { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Upload,
  RefreshCw,
  Eye,
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Download,
  Edit,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router';

type ApplicationStatus = 'pending' | 'under-review' | 'approved' | 'rejected';

interface Application {
  id: string;
  applicationNumber: string;
  appliedDate: string;
  status: ApplicationStatus;
  lastUpdated: string;
  studentName: string;
  email: string;
  phone: string;
  address: string;
  grade: string;
  rejectionReasons?: string[];
  documents: {
    name: string;
    status: 'approved' | 'rejected' | 'pending';
    rejectionReason?: string;
  }[];
  timeline: {
    status: string;
    date: string;
    description: string;
    completed: boolean;
  }[];
}

// Mock application data
const mockApplication: Application = {
  id: '1',
  applicationNumber: 'APP-2026-12345',
  appliedDate: '2026-02-01',
  status: 'rejected',
  lastUpdated: '2026-02-20',
  studentName: 'Rohan Kumar',
  email: 'rohan.kumar@example.com',
  phone: '+91 98765 43210',
  address: 'Mumbai, Maharashtra',
  grade: 'Grade 10',
  rejectionReasons: [
    'Birth certificate copy is not clear and readable',
    'Previous school marksheet is missing signature from principal',
    'Address proof document is expired (valid until 2025)',
  ],
  documents: [
    { name: 'Birth Certificate', status: 'rejected', rejectionReason: 'Document is not clear and readable' },
    { name: 'Aadhar Card', status: 'approved' },
    { name: 'Previous Marksheet', status: 'rejected', rejectionReason: 'Missing principal signature' },
    { name: 'Address Proof', status: 'rejected', rejectionReason: 'Document is expired' },
    { name: 'Photo', status: 'approved' },
  ],
  timeline: [
    {
      status: 'Application Submitted',
      date: '2026-02-01',
      description: 'Your application has been successfully submitted',
      completed: true,
    },
    {
      status: 'Document Verification',
      date: '2026-02-10',
      description: 'Documents are being verified by our team',
      completed: true,
    },
    {
      status: 'Application Review',
      date: '2026-02-20',
      description: 'Application rejected due to document issues',
      completed: true,
    },
    {
      status: 'Final Decision',
      date: '',
      description: 'Awaiting reapplication',
      completed: false,
    },
  ],
};

export function TrackApplication() {
  const [application, setApplication] = useState<Application>(mockApplication);
  const [showReapplyForm, setShowReapplyForm] = useState(false);
  const [reapplicationData, setReapplicationData] = useState({
    email: application.email,
    phone: application.phone,
    address: application.address,
  });
  const [selectedFiles, setSelectedFiles] = useState<{ [key: string]: File | null }>({});

  const navigate = useNavigate()

  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'under-review':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'rejected':
        return <XCircle className="w-5 h-5" />;
      case 'under-review':
        return <Clock className="w-5 h-5" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getDocumentStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getTimelineColor = (index: number, completed: boolean) => {
    if (!completed) {
      return {
        bg: 'bg-slate-200',
        line: 'bg-slate-200',
      };
    }

    const colors = [
      { bg: 'bg-emerald-600', line: 'bg-emerald-600' },      // Step 1 - Green
      { bg: 'bg-blue-600', line: 'bg-blue-600' },            // Step 2 - Blue
      { bg: 'bg-indigo-600', line: 'bg-indigo-600' },        // Step 3 - Indigo
      { bg: 'bg-purple-600', line: 'bg-purple-600' },        // Step 4 - Purple
    ];

    return colors[index] || colors[0];
  };

  const handleFileSelect = (documentName: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFiles(prev => ({ ...prev, [documentName]: file }));
  };

  const handleReapply = () => {
    // In a real app, this would submit the reapplication
    alert('Reapplication submitted successfully! You will receive a confirmation email shortly.');
    setShowReapplyForm(false);
    // Reset the application status
    setApplication(prev => ({
      ...prev,
      status: 'pending',
      lastUpdated: new Date().toISOString().split('T')[0],
    }));
  };

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Applicant"
      pageTitle="Track Application"
      breadcrumbs={["Home", "Student", "Track Application"]}
    >
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Application Status Header */}
        <Card className="p-6 bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                <FileText className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">
                  Application #{application.applicationNumber}
                </h2>
                <p className="text-slate-600 font-medium">
                  Applied on {new Date(application.appliedDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className={`${getStatusColor(application.status)} px-4 py-2 text-base font-semibold`}>
                {getStatusIcon(application.status)}
                <span className="ml-2 capitalize">{application.status.replace('-', ' ')}</span>
              </Badge>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-5 bg-gradient-to-br from-blue-500 to-blue-600 border-0 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Last Updated</p>
              <h3 className="text-2xl font-bold text-white">
                {new Date(application.lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
              </h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-5 bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Approved Docs</p>
              <h3 className="text-2xl font-bold text-white">
                {application.documents.filter(d => d.status === 'approved').length}/{application.documents.length}
              </h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-5 bg-gradient-to-br from-red-500 to-red-600 border-0 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Rejected Docs</p>
              <h3 className="text-2xl font-bold text-white">
                {application.documents.filter(d => d.status === 'rejected').length}
              </h3>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-5 bg-gradient-to-br from-orange-500 to-orange-600 border-0 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-white/90 font-semibold mb-1">Total Documents</p>
              <h3 className="text-2xl font-bold text-white">{application.documents.length}</h3>
            </Card>
          </motion.div>
        </div>

        {/* Rejection Alert - Only show if status is rejected */}
        {application.status === 'rejected' && application.rejectionReasons && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6 bg-red-50 border-2 border-red-200 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Application Rejected</h3>
                  <p className="text-red-800 font-medium mb-4">
                    Your application has been rejected due to the following reasons. Please correct the issues and reapply.
                  </p>
                  <div className="space-y-2 mb-5">
                    {application.rejectionReasons.map((reason, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-red-800 font-medium">{reason}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => navigate('/student/reapply')}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold"
                  >

                    Reapply Now
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Application Timeline */}
        <Card className="p-6 bg-white border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Application Timeline</h3>
          <div className="space-y-6">
            {application.timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${item.completed
                      ? getTimelineColor(index, item.completed).bg
                      : 'bg-slate-200'
                      }`}
                  >
                    {item.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-5 h-5 text-slate-500" />
                    )}
                  </div>
                  {index < application.timeline.length - 1 && (
                    <div
                      className={`w-0.5 h-16 ${item.completed ? getTimelineColor(index, item.completed).line : 'bg-slate-200'
                        }`}
                    />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-slate-900">{item.status}</h4>
                    {item.date && (
                      <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 text-xs">
                        {new Date(item.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </Badge>
                    )}
                  </div>
                  <p className="text-slate-600 font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Document Status */}
        <Card className="p-6 bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Document Verification Status</h3>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>
          <div className="space-y-3">
            {application.documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl border-2 ${doc.status === 'rejected'
                  ? 'bg-red-50 border-red-200'
                  : doc.status === 'approved'
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-amber-50 border-amber-200'
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${doc.status === 'rejected'
                      ? 'bg-red-100'
                      : doc.status === 'approved'
                        ? 'bg-emerald-100'
                        : 'bg-amber-100'
                      }`}>
                      {doc.status === 'approved' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : doc.status === 'rejected' ? (
                        <XCircle className="w-5 h-5 text-red-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-900">{doc.name}</h4>
                        <Badge variant="outline" className={getDocumentStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                      </div>
                      {doc.rejectionReason && (
                        <p className="text-sm text-red-700 font-medium mt-2">
                          <span className="font-bold">Reason:</span> {doc.rejectionReason}
                        </p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Applicant Information */}
        <Card className="p-6 bg-white border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Applicant Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium mb-1">Full Name</p>
                <p className="font-bold text-slate-900">{application.studentName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium mb-1">Email Address</p>
                <p className="font-bold text-slate-900">{application.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium mb-1">Phone Number</p>
                <p className="font-bold text-slate-900">{application.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium mb-1">Address</p>
                <p className="font-bold text-slate-900">{application.address}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Reapplication Form */}


        {/* Call-to-Action for Reapplication (Bottom) */}
        {application.status === 'rejected' && !showReapplyForm && (
          <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Reapply?</h3>
                <p className="text-blue-100">
                  Fix the issues mentioned above and submit your corrected application
                </p>
              </div>
              <Button
                onClick={() => setShowReapplyForm(true)}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 text-lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Start Reapplication
              </Button>
            </div>
          </Card>
        )}
      </motion.div>
    </PortalLayout>
  );
}