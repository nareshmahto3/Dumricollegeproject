import { useState } from 'react';
import { Award, CheckCircle2, XCircle, Clock, Eye, Download, Filter, Search, Upload, Image, X, ChevronUp, ChevronDown } from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';

interface CertificateRequest {
  id: number;
  requestId: string;
  studentId: string;
  studentName: string;
  class: string;
  certificateType: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'issued';
  requestedBy: string;
  purpose: string;
  approvedBy?: string;
  approvedDate?: string;
  remarks?: string;
  certificateImage?: string;
}

const certificateRequests: CertificateRequest[] = [
  {
    id: 1,
    requestId: 'CERT202600145',
    studentId: 'STU2023001',
    studentName: 'Aarav Sharma',
    class: 'Grade 12',
    certificateType: 'Transfer Certificate',
    requestDate: '2026-02-10',
    status: 'pending',
    requestedBy: 'Parent',
    purpose: 'College Admission',
  },
  {
    id: 2,
    requestId: 'CERT202600144',
    studentId: 'STU2023002',
    studentName: 'Priya Patel',
    class: 'Grade 10',
    certificateType: 'Character Certificate',
    requestDate: '2026-02-09',
    status: 'approved',
    requestedBy: 'Student',
    purpose: 'Scholarship Application',
    approvedBy: 'Principal',
    approvedDate: '2026-02-10',
  },
  {
    id: 3,
    requestId: 'CERT202600143',
    studentId: 'STU2023003',
    studentName: 'Rohan Kumar',
    class: 'Grade 11',
    certificateType: 'Bonafide Certificate',
    requestDate: '2026-02-08',
    status: 'issued',
    requestedBy: 'Parent',
    purpose: 'Bank Account Opening',
    approvedBy: 'Vice Principal',
    approvedDate: '2026-02-09',
  },
  {
    id: 4,
    requestId: 'CERT202600142',
    studentId: 'STU2023004',
    studentName: 'Ananya Singh',
    class: 'Grade 9',
    certificateType: 'Academic Transcript',
    requestDate: '2026-02-07',
    status: 'pending',
    requestedBy: 'Student',
    purpose: 'Competition Application',
  },
  {
    id: 5,
    requestId: 'CERT202600141',
    studentId: 'STU2023005',
    studentName: 'Vivaan Reddy',
    class: 'Grade 12',
    certificateType: 'Transfer Certificate',
    requestDate: '2026-02-05',
    status: 'rejected',
    requestedBy: 'Parent',
    purpose: 'Transfer to another school',
    approvedBy: 'Principal',
    approvedDate: '2026-02-06',
    remarks: 'Pending fee clearance',
  },
];

export function CertificateRequestManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<CertificateRequest | null>(null);
  const [requests, setRequests] = useState(certificateRequests);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const filteredRequests = requests.filter((req) => {
    const matchesSearch = req.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         req.requestId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || req.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Apply sorting
  const sortedRequests = [...filteredRequests].sort((a, b) => {
    if (!sortField) return 0;

    let aValue: any = a[sortField as keyof CertificateRequest];
    let bValue: any = b[sortField as keyof CertificateRequest];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Apply pagination
  const paginatedRequests = sortedRequests.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'issued':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleApprove = (request: CertificateRequest) => {
    setRequests(requests.map(req => 
      req.id === request.id 
        ? { ...req, status: 'approved', approvedBy: 'Principal', approvedDate: new Date().toISOString().split('T')[0] }
        : req
    ));
    setSelectedRequest(null);
  };

  const handleReject = (request: CertificateRequest) => {
    const remarks = prompt('Enter reason for rejection:');
    if (remarks) {
      setRequests(requests.map(req => 
        req.id === request.id 
          ? { ...req, status: 'rejected', approvedBy: 'Principal', approvedDate: new Date().toISOString().split('T')[0], remarks }
          : req
      ));
      setSelectedRequest(null);
    }
  };

  const handleIssue = (request: CertificateRequest) => {
    setRequests(requests.map(req => 
      req.id === request.id 
        ? { ...req, status: 'issued', certificateImage: uploadedImage || undefined }
        : req
    ));
    setSelectedRequest(null);
    setUploadedImage(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      
      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setIsUploading(false);
        
        // Update the request with the uploaded image
        if (selectedRequest) {
          setRequests(requests.map(req => 
            req.id === selectedRequest.id 
              ? { ...req, certificateImage: reader.result as string }
              : req
          ));
          setSelectedRequest({ ...selectedRequest, certificateImage: reader.result as string });
        }
      };
      reader.onerror = () => {
        setIsUploading(false);
        alert('Failed to upload image');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    if (selectedRequest) {
      setRequests(requests.map(req => 
        req.id === selectedRequest.id 
          ? { ...req, certificateImage: undefined }
          : req
      ));
      setSelectedRequest({ ...selectedRequest, certificateImage: undefined });
    }
  };

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    approved: requests.filter(r => r.status === 'approved').length,
    issued: requests.filter(r => r.status === 'issued').length,
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Certificate Request Management"
      breadcrumbs={["Home", "Admin", "Certificates"]}
    >
      <div className="space-y-6">

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <p className="text-sm text-muted-foreground mb-1">Total Requests</p>
                <h3>{stats.total}</h3>
              </Card>
              <Card className="p-4 border-2 border-yellow-100 hover:border-yellow-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-yellow-50">
                <p className="text-sm text-muted-foreground mb-1">Pending Review</p>
                <h3 className="text-yellow-600">{stats.pending}</h3>
              </Card>
              <Card className="p-4 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-blue-50">
                <p className="text-sm text-muted-foreground mb-1">Approved</p>
                <h3 className="text-blue-600">{stats.approved}</h3>
              </Card>
              <Card className="p-4 border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-green-50">
                <p className="text-sm text-muted-foreground mb-1">Issued</p>
                <h3 className="text-green-600">{stats.issued}</h3>
              </Card>
            </div>

            {/* Filters */}
            <Card className="p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by name or request ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-2 border-slate-300"
                  />
                </div>

                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 border border-border rounded-lg bg-white appearance-none cursor-pointer"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="issued">Issued</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <Button variant="outline" className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200 gap-2">
                  <Download className="w-4 h-4" />
                  Export Report
                </Button>
              </div>
            </Card>

            {/* Requests Table */}
            <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
              <div className="overflow-x-auto table-scroll">
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-100">
                      <th 
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('requestId')}
                      >
                        <div className="flex items-center gap-2">
                          Request ID
                          {sortField === 'requestId' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
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
                      <th 
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('certificateType')}
                      >
                        <div className="flex items-center gap-2">
                          Certificate Type
                          {sortField === 'certificateType' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Purpose</th>
                      <th 
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('requestDate')}
                      >
                        <div className="flex items-center gap-2">
                          Request Date
                          {sortField === 'requestDate' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap cursor-pointer hover:bg-slate-200"
                        onClick={() => handleSort('status')}
                      >
                        <div className="flex items-center gap-2">
                          Status
                          {sortField === 'status' && (
                            sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </th>
                      <th className="text-left py-4 px-4 xl:px-6 text-xs xl:text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {paginatedRequests.map((request, index) => (
                      <tr 
                        key={request.id} 
                        className={`border-b border-slate-200 hover:bg-blue-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                        }`}
                      >
                        <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                          <p className="text-sm font-semibold text-slate-900">{request.requestId}</p>
                          <p className="text-xs text-slate-600">by {request.requestedBy}</p>
                        </td>
                        <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                          <p className="text-sm font-semibold text-slate-900">{request.studentName}</p>
                          <p className="text-xs text-slate-600">{request.studentId} • {request.class}</p>
                        </td>
                        <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-slate-900">{request.certificateType}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 xl:px-6 text-sm text-slate-600 max-w-xs truncate">
                          {request.purpose}
                        </td>
                        <td className="py-4 px-4 xl:px-6 text-sm text-slate-600 whitespace-nowrap">{request.requestDate}</td>
                        <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                          <Badge variant="outline" className={getStatusColor(request.status)}>
                            {request.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                            {request.status === 'approved' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                            {request.status === 'issued' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                            {request.status === 'rejected' && <XCircle className="w-3 h-3 mr-1" />}
                            <span className="capitalize">{request.status}</span>
                          </Badge>
                        </td>
                        <td className="py-4 px-4 xl:px-6 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedRequest(request)}
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            {request.status === 'approved' && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleIssue(request)}
                                className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                              >
                                Issue
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
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
                    Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, sortedRequests.length)} of {sortedRequests.length}
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
                      disabled={currentPage === Math.ceil(sortedRequests.length / rowsPerPage)}
                      className="border-blue-300"
                    >
                      Next
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.ceil(sortedRequests.length / rowsPerPage))}
                      disabled={currentPage === Math.ceil(sortedRequests.length / rowsPerPage)}
                      className="border-blue-300"
                    >
                      Last
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

      {/* Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <Card className="w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="mb-1">Certificate Request Details</h3>
                <p className="text-sm text-muted-foreground">{selectedRequest.requestId}</p>
              </div>
              <Button variant="ghost" onClick={() => setSelectedRequest(null)}>
                ✕
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Student Name</p>
                  <p>{selectedRequest.studentName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Student ID</p>
                  <p>{selectedRequest.studentId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Class</p>
                  <p>{selectedRequest.class}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Request Date</p>
                  <p>{selectedRequest.requestDate}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Certificate Type</p>
                  <p>{selectedRequest.certificateType}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Purpose</p>
                  <p>{selectedRequest.purpose}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Requested By</p>
                  <p>{selectedRequest.requestedBy}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Status</p>
                  <Badge variant="outline" className={getStatusColor(selectedRequest.status)}>
                    <span className="capitalize">{selectedRequest.status}</span>
                  </Badge>
                </div>
                {selectedRequest.approvedBy && (
                  <>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Approved By</p>
                      <p>{selectedRequest.approvedBy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Approved Date</p>
                      <p>{selectedRequest.approvedDate}</p>
                    </div>
                  </>
                )}
                {selectedRequest.remarks && (
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground mb-1">Remarks</p>
                    <p className="text-red-600">{selectedRequest.remarks}</p>
                  </div>
                )}
              </div>

              {/* Certificate Image Upload Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="pt-6 border-t border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificate Image</h4>
                    <p className="text-sm text-muted-foreground">Upload the generated certificate</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                    <Image className="w-3 h-3 mr-1" />
                    Optional
                  </Badge>
                </div>

                {!selectedRequest.certificateImage && !uploadedImage ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                    <input
                      type="file"
                      id="certificate-upload"
                      accept="image/*,.pdf"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={isUploading}
                    />
                    <label 
                      htmlFor="certificate-upload" 
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4"
                      >
                        <Upload className="w-8 h-8 text-blue-600" />
                      </motion.div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isUploading ? 'Uploading...' : 'Upload Certificate Image'}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Click to browse or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports: JPG, PNG, PDF (Max 5MB)
                      </p>
                    </label>
                  </div>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative border-2 border-green-200 rounded-xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50"
                  >
                    <div className="relative">
                      <img
                        src={selectedRequest.certificateImage || uploadedImage || ''}
                        alt="Certificate"
                        className="w-full h-64 object-contain bg-white p-4"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleRemoveImage}
                        className="absolute top-3 right-3 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    </div>
                    <div className="p-4 bg-white border-t border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Certificate Uploaded</p>
                            <p className="text-xs text-muted-foreground">Ready to issue</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = selectedRequest.certificateImage || uploadedImage || '';
                            link.download = `${selectedRequest.requestId}_certificate.jpg`;
                            link.click();
                          }}
                          className="border-blue-200 text-blue-600 hover:bg-blue-50"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {selectedRequest.status === 'pending' && (
                <div className="flex gap-3 pt-6 border-t border-border">
                  <Button
                    onClick={() => handleApprove(selectedRequest)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Approve Request
                  </Button>
                  <Button
                    onClick={() => handleReject(selectedRequest)}
                    variant="outline"
                    className="flex-1 text-red-600 hover:bg-red-50 border-red-200"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject Request
                  </Button>
                </div>
              )}

              {selectedRequest.status === 'approved' && (
                <div className="pt-6 border-t border-border">
                  <Button
                    onClick={() => handleIssue(selectedRequest)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Generate & Issue Certificate
                  </Button>
                </div>
              )}

              {selectedRequest.status === 'issued' && (
                <div className="pt-6 border-t border-border">
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate Copy
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
      </div>
    </PortalLayout>
  );
}