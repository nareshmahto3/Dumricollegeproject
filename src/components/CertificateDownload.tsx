import { Award, Download, Clock, CheckCircle2, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const certificates = [
  {
    id: 1,
    name: 'Transfer Certificate',
    description: 'Official transfer certificate for school change',
    status: 'Available',
    issueDate: '2026-01-10',
    validUntil: '2027-01-10',
    downloadCount: 3,
  },
  {
    id: 2,
    name: 'Character Certificate',
    description: 'Certificate of good character and conduct',
    status: 'Available',
    issueDate: '2026-01-10',
    validUntil: 'Lifetime',
    downloadCount: 1,
  },
  {
    id: 3,
    name: 'Bonafide Certificate',
    description: 'Certificate of current enrollment',
    status: 'Processing',
    issueDate: 'Expected: 2026-02-15',
    validUntil: 'N/A',
    downloadCount: 0,
  },
  {
    id: 4,
    name: 'Academic Transcript',
    description: 'Complete academic record and grades',
    status: 'Available',
    issueDate: '2025-12-20',
    validUntil: 'Lifetime',
    downloadCount: 5,
  },
  {
    id: 5,
    name: 'Sports Certificate',
    description: 'Certificate for sports participation',
    status: 'Available',
    issueDate: '2025-11-15',
    validUntil: 'Lifetime',
    downloadCount: 2,
  },
  {
    id: 6,
    name: 'Medical Certificate',
    description: 'Health and fitness certificate',
    status: 'Processing',
    issueDate: 'Expected: 2026-02-20',
    validUntil: 'N/A',
    downloadCount: 0,
  },
];

export function CertificateDownload() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Expired':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Class 10-A"
      pageTitle="Certificates"
      breadcrumbs={["Home", "Student", "Certificates"]}
    >
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30">Ready</Badge>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              {certificates.filter(c => c.status === 'Available').length}
            </h3>
            <p className="text-sm text-emerald-100">Available Certificates</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30">Pending</Badge>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              {certificates.filter(c => c.status === 'Processing').length}
            </h3>
            <p className="text-sm text-amber-100">In Processing</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30">Total</Badge>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              {certificates.reduce((sum, c) => sum + c.downloadCount, 0)}
            </h3>
            <p className="text-sm text-blue-100">Total Downloads</p>
          </Card>
        </div>

        {/* Request New Certificate */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg hover:shadow-xl transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Need a New Certificate?</h3>
              <p className="text-slate-600">
                Request additional certificates or duplicates from the admin office
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
              Request Certificate
            </Button>
          </div>
        </Card>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.id} className="p-6 bg-white shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <Badge variant="outline" className={getStatusColor(cert.status)}>
                  {cert.status === 'Available' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                  {cert.status === 'Processing' && <Clock className="w-3 h-3 mr-1" />}
                  {cert.status}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{cert.description}</p>

              <div className="space-y-2 mb-4 pb-4 border-b border-amber-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Issue Date:</span>
                  <span className="font-medium text-slate-900">{cert.issueDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Valid Until:</span>
                  <span className="font-medium text-slate-900">{cert.validUntil}</span>
                </div>
                {cert.status === 'Available' && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Downloads:</span>
                    <span className="font-medium text-slate-900">{cert.downloadCount}</span>
                  </div>
                )}
              </div>

              {cert.status === 'Available' ? (
                <Button className="w-full gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
              ) : (
                <Button variant="outline" className="w-full border-amber-300 text-amber-600" disabled>
                  Processing...
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}