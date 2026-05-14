import { useState } from "react";
import {
  ChevronDown,
  FileSpreadsheet,
  FileDown, Mail, Phone, MapPin, Calendar, User, GraduationCap, FileText, Eye, Filter, Download, Search, MoreVertical, ChevronUp
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { PortalLayout } from "./PortalLayout";
import { toast } from "sonner";
import { motion } from 'motion/react';

type ExportFormat = 'pdf' | 'csv' | 'excel';

const admissions = [
  { id: 1, name: 'Aarav Sharma', class: 'Grade 10', status: 'Under Review', date: '2026-02-10', phone: '+91 98765 43210' },
  { id: 2, name: 'Priya Patel', class: 'Grade 9', status: 'Selected', date: '2026-02-09', phone: '+91 98765 43211' },
  { id: 3, name: 'Rohan Kumar', class: 'Grade 11', status: 'Applied', date: '2026-02-08', phone: '+91 98765 43212' },
  { id: 4, name: 'Ananya Singh', class: 'Grade 8', status: 'Under Review', date: '2026-02-07', phone: '+91 98765 43213' },
  { id: 5, name: 'Vivaan Reddy', class: 'Grade 10', status: 'Selected', date: '2026-02-06', phone: '+91 98765 43214' },
  { id: 6, name: 'Diya Gupta', class: 'Grade 9', status: 'Rejected', date: '2026-02-05', phone: '+91 98765 43215' },
  { id: 7, name: 'Arjun Malhotra', class: 'Grade 11', status: 'Applied', date: '2026-02-04', phone: '+91 98765 43216' },
  { id: 8, name: 'Ishaan Verma', class: 'Grade 10', status: 'Under Review', date: '2026-02-03', phone: '+91 98765 43217' },
  { id: 9, name: 'Kavya Joshi', class: 'Grade 8', status: 'Selected', date: '2026-02-02', phone: '+91 98765 43218' },
  { id: 10, name: 'Aditya Nair', class: 'Grade 9', status: 'Applied', date: '2026-02-01', phone: '+91 98765 43219' },
];

export function AdmissionManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showExportDropdown, setShowExportDropdown] = useState(false);


  const handleDownload = (format: 'pdf' | 'csv' | 'excel') => {
    toast.success(`Downloading report as ${format.toUpperCase()}...`, {
      description: `Your  report will be downloaded shortly.`,
    });
  };

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

  const filteredAdmissions = admissions.filter((admission) => {
    const matchesSearch = admission.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || admission.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sort filtered admissions
  const sortedAdmissions = [...filteredAdmissions].sort((a, b) => {
    if (!sortField) return 0;

    let aValue = a[sortField as keyof typeof a];
    let bValue = b[sortField as keyof typeof b];

    if (typeof aValue === 'string') aValue = aValue.toLowerCase();
    if (typeof bValue === 'string') bValue = bValue.toLowerCase();

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedAdmissions.length / rowsPerPage);
  const paginatedAdmissions = sortedAdmissions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selected':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Applied':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Rejected':
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
      pageTitle="Admission Management"
      breadcrumbs={["Home", "Admin", "Admissions"]}
    >
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all">
          <p className="text-sm text-purple-700 mb-1 font-medium">Total Applications</p>
          <h3 className="text-purple-900">{admissions.length}</h3>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-blue-100 to-cyan-200 border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all">
          <p className="text-sm text-blue-700 mb-1 font-medium">Applied</p>
          <h3 className="text-blue-900">{admissions.filter(a => a.status === 'Applied').length}</h3>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-yellow-100 to-amber-200 border-2 border-yellow-300 shadow-lg hover:shadow-xl transition-all">
          <p className="text-sm text-yellow-700 mb-1 font-medium">Under Review</p>
          <h3 className="text-yellow-900">{admissions.filter(a => a.status === 'Under Review').length}</h3>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-green-100 to-emerald-200 border-2 border-green-300 shadow-lg hover:shadow-xl transition-all">
          <p className="text-sm text-green-700 mb-1 font-medium">Selected</p>
          <h3 className="text-green-900">{admissions.filter(a => a.status === 'Selected').length}</h3>
        </Card>
      </div>
      <div className="space-y-6">
        {/* Filters */}
        <Card className="bg-white border-slate-200 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-2 border-slate-300 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full h-10 pl-10 pr-4 border border-slate-300 rounded-lg bg-white text-slate-900 appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="Applied">Applied</option>
                <option value="Under Review">Under Review</option>
                <option value="Selected">Selected</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="relative">
              <Button
                onClick={() => setShowExportDropdown(!showExportDropdown)}
                className="bg-gradient-to-r w-[300px] from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-105 text-white transition-all duration-200"
              >
                <FileDown className="w-4 h-4 " />
                Export Data
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              {showExportDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 bg-white border border-slate-200 shadow-lg rounded-lg z-50 min-w-[140px]"
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        handleDownload('pdf');
                        setShowExportDropdown(false);
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <FileDown className="w-4 h-4 mr-2 text-red-600" />
                      PDF
                    </button>
                    <button
                      onClick={() => {
                        handleDownload('csv');
                        setShowExportDropdown(false);
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <FileSpreadsheet className="w-4 h-4 mr-2 text-green-600" />
                      CSV
                    </button>
                    <button
                      onClick={() => {
                        handleDownload('excel');
                        setShowExportDropdown(false);
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2 text-blue-600" />
                      Excel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Card>



        {/* Admissions Table */}
        <Card className="bg-white border-slate-200 overflow-hidden shadow-sm">
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
                      ID
                      {sortField === 'id' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-30" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center gap-2">
                      Student Name
                      {sortField === 'name' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-30" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('class')}
                  >
                    <div className="flex items-center gap-2">
                      Class
                      {sortField === 'class' ? (
                        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-30" />
                      )}
                    </div>
                  </th>
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('phone')}
                  >
                    <div className="flex items-center gap-2">
                      Phone
                      {sortField === 'phone' ? (
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
                  <th
                    className="px-4 xl:px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:text-slate-900"
                    onClick={() => handleSort('date')}
                  >
                    <div className="flex items-center gap-2">
                      Date Applied
                      {sortField === 'date' ? (
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
                {paginatedAdmissions.map((admission, index) => (
                  <tr key={admission.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                    <td className="py-3 px-4 xl:px-6 text-slate-900 font-semibold text-sm">#{admission.id.toString().padStart(3, '0')}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-900 font-semibold text-sm">{admission.name}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{admission.class}</td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{admission.phone}</td>
                    <td className="py-3 px-4 xl:px-6">
                      <Badge variant="outline" className={`${getStatusColor(admission.status)} shadow-sm`}>
                        {admission.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 xl:px-6 text-slate-700 text-sm">{admission.date}</td>
                    <td className="py-3 px-4 xl:px-6">
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-200">
            <div className="text-xs sm:text-sm text-slate-600">
              Showing <span className="text-slate-900 font-semibold">{paginatedAdmissions.length}</span> of{' '}
              <span className="text-slate-900 font-semibold">{sortedAdmissions.length}</span> admissions
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
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  className={`${currentPage === index + 1 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 transition-all duration-200'
                    } text-sm px-3 sm:px-4`}
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
      </div>
    </PortalLayout>
  );
}