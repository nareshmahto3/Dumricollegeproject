import { getStudentDetail } from '../api/studentApi';
import { getDocumentsByApplicationId, type DocumentItemDto } from '../api/documentApi';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  FileText, 
  ArrowLeft, 
  Calendar, 
  Phone,
  MapPin,
  User,
  BookOpen,
  Award,
  User2,
  X,
  ZoomIn,
  ZoomOut,
  Eye,
  ExternalLink
} from 'lucide-react';
import { PortalLayout } from './PortalLayout';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface StudentData {
  applicationId: number;
  studentName: string;
  fatherName: string;
  motherName: string;
  registrationNo: string;
  mobileNumber: string;
  dateOfBirth: string | null;
  permanentAddress: string;
  localAddress: string;
  religionName: string;
  casteName: string;
  categoryName: string;
  genderName: string;
  bloodGroupName: string;
  maritalStatusName: string;
  facultyName: string;
  compulsorySubjectName: string;
  optionalSubject1Name: string;
  optionalSubject2Name: string;
  optionalSubject3Name: string;
  additionalSubjectName: string;
  facultyCompulsorySubjects: string[];
  examDetails: ExamDetail[];
  certificates: Certificate[];
  studentPhotoPath?: string;
}

interface ExamDetail {
  examName: string;
  schoolCollege: string;
  boardCouncil: string;
  yearOfPassing: number | null;
  divisionOrRank: string;
}

interface Certificate {
  certificateType: string;
  certificateNumber: string;
  issueDate: string | null;
  issuedBy: string;
  filePath: string;
}

const API_BASE_URL = 'https://localhost:44361';

export const StudentView = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'general' | 'subjects' | 'exams' | 'documents'>('general');
  const [pdfViewer, setPdfViewer] = useState<{ open: boolean; path: string; title: string; error?: boolean }>({ open: false, path: '', title: '' });
  const [photoViewer, setPhotoViewer] = useState<{ open: boolean; path: string }>({ open: false, path: '' });
  const [pdfZoom, setPdfZoom] = useState(100);

  const pickString = (source: Record<string, any>, keys: string[], fallback = ''): string => {
    for (const key of keys) {
      const value = source[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }
    return fallback;
  };

  const pickValue = (source: Record<string, any>, keys: string[]): any => {
    for (const key of keys) {
      const value = source[key];
      if (value !== undefined && value !== null && value !== '') {
        return value;
      }
    }
    return undefined;
  };

  const getFileUrlCandidates = (filePath: string): string[] => {
    if (!filePath) return [];

    const normalizedPath = filePath.trim().replace(/\\/g, '/');
    const cleanPath = normalizedPath.replace(/^\//, '');
    const fileName = cleanPath.split('/').pop() || '';

    // Already an absolute URL
    if (normalizedPath.startsWith('http://') || normalizedPath.startsWith('https://')) {
      return [normalizedPath];
    }

    const candidates = [
      `${API_BASE_URL}/${cleanPath}`,
      `${API_BASE_URL}/${normalizedPath.startsWith('/') ? normalizedPath.slice(1) : normalizedPath}`,
      `${API_BASE_URL}/api/files/${cleanPath}`,
      fileName ? `${API_BASE_URL}/api/files/${fileName}` : '',
      `${API_BASE_URL}/uploads/${cleanPath}`,
      fileName ? `${API_BASE_URL}/uploads/${fileName}` : '',
      normalizedPath.startsWith('/') ? `${API_BASE_URL}${normalizedPath}` : '',
    ].filter(Boolean);

    return Array.from(new Set(candidates));
  };

  const findAccessibleFileUrl = async (filePath: string): Promise<string> => {
    const candidates = getFileUrlCandidates(filePath);

    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate, { method: 'HEAD' });
        if (response.ok || response.status === 405) {
          return candidate;
        }
      } catch {
        // try next candidate
      }
    }

    return candidates[0] || '';
  };

  // Helper: Build full URL from file path without duplicating segments like /api/files or /uploads
  const buildFileUrl = (filePath: string): string => {
    const candidates = getFileUrlCandidates(filePath);
    if (!candidates.length) return '';

    const normalizedPath = filePath.trim().replace(/\\/g, '/');

    // Already an absolute URL
    if (normalizedPath.startsWith('http://') || normalizedPath.startsWith('https://')) {
      return normalizedPath;
    }

    return candidates[0];
  };

  // Helper: Get photo URL with fallback
  const getPhotoUrl = (path?: string): string => {
    if (!path) return '';
    return buildFileUrl(path);
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      if (!studentId) {
        setError('Student ID is missing');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = (await getStudentDetail(studentId)) as Record<string, any>;
        const applicationId = Number(
          pickValue(data, ['applicationId', 'ApplicationId']) ?? studentId
        );

        let certificateDocs: DocumentItemDto[] = [];
        if (Number.isFinite(applicationId) && applicationId > 0) {
          try {
            certificateDocs = await getDocumentsByApplicationId(applicationId);
          } catch (docErr) {
            console.warn('Could not load certificates from document API:', docErr);
          }
        }

        const detailCertificates: Certificate[] = (pickValue(data, ['certificates', 'Certificates', 'documents', 'Documents']) || [])
          .map((cert: any) => ({
            certificateType: cert.certificateType || cert.CertificateType || cert.documentType || cert.DocumentType || 'Certificate',
            certificateNumber: cert.certificateNumber || cert.CertificateNumber || cert.documentNumber || cert.DocumentNumber || '',
            issueDate: cert.issueDate || cert.IssueDate || cert.createdDate || cert.CreatedDate || null,
            issuedBy: cert.issuedBy || cert.IssuedBy || cert.authority || cert.Authority || '',
            filePath: cert.filePath || cert.FilePath || ''
          }))
          .filter((cert: Certificate) => !!cert.filePath);

        const docApiCertificates: Certificate[] = certificateDocs.map((doc) => ({
          certificateType: doc.certificateType || 'Certificate',
          certificateNumber: doc.verificationId ? String(doc.verificationId) : '',
          issueDate: doc.verifiedDate || doc.createdDate || null,
          issuedBy: 'Dumri College',
          filePath: doc.filePath,
        }));

        const allCertificates = [...detailCertificates, ...docApiCertificates].filter(
          (cert, index, arr) => cert.filePath && arr.findIndex((c) => c.filePath === cert.filePath) === index
        );

        const photoFromDetails = pickString(data, [
          'studentPhotoPath',
          'StudentPhotoPath',
          'photoPath',
          'PhotoPath',
          'studentImagePath',
          'StudentImagePath',
          'profilePhotoPath',
          'ProfilePhotoPath',
        ]);

        const photoFromDocuments = certificateDocs.find((doc) =>
          /photo|image|passport/i.test(doc.certificateType || '')
        )?.filePath;

        const student: StudentData = {
          applicationId,
          studentName: pickString(data, ['studentName', 'StudentName']),
          fatherName: pickString(data, ['fatherName', 'FatherName']),
          motherName: pickString(data, ['motherName', 'MotherName']),
          registrationNo: pickString(data, ['registrationNo', 'RegistrationNo']),
          mobileNumber: pickString(data, ['mobileNumber', 'MobileNumber']),
          dateOfBirth: pickValue(data, ['dateOfBirth', 'DateOfBirth']) || null,
          permanentAddress: pickString(data, ['permanentAddress', 'PermanentAddress']),
          localAddress: pickString(data, ['localAddress', 'LocalAddress']),
          religionName: pickString(data, ['religionName', 'ReligionName']),
          casteName: pickString(data, ['casteName', 'CasteName']),
          categoryName: pickString(data, ['categoryName', 'CategoryName']),
          genderName: pickString(data, ['genderName', 'GenderName', 'gender', 'Gender']),
          bloodGroupName: pickString(data, ['bloodGroupName', 'BloodGroupName']),
          maritalStatusName: pickString(data, ['maritalStatusName', 'MaritalStatusName']),
          facultyName: pickString(data, ['facultyName', 'FacultyName']),
          compulsorySubjectName: pickString(data, ['compulsorySubjectName', 'CompulsorySubjectName']),
          optionalSubject1Name: pickString(data, ['optionalSubject1Name', 'OptionalSubject1Name']),
          optionalSubject2Name: pickString(data, ['optionalSubject2Name', 'OptionalSubject2Name']),
          optionalSubject3Name: pickString(data, ['optionalSubject3Name', 'OptionalSubject3Name']),
          additionalSubjectName: pickString(data, ['additionalSubjectName', 'AdditionalSubjectName']),
          facultyCompulsorySubjects: pickValue(data, ['facultyCompulsorySubjects', 'FacultyCompulsorySubjects']) || [],
          examDetails: (pickValue(data, ['examDetails', 'ExamDetails']) || []).map((exam: any) => ({
            examName: exam.examName || exam.ExamName || '',
            schoolCollege: exam.schoolCollege || exam.SchoolCollege || '',
            boardCouncil: exam.boardCouncil || exam.BoardCouncil || '',
            yearOfPassing: exam.yearOfPassing || exam.YearOfPassing || null,
            divisionOrRank: exam.divisionOrRank || exam.DivisionOrRank || ''
          })),
          certificates: allCertificates,
          studentPhotoPath: photoFromDetails || photoFromDocuments || undefined
        };
        
        setStudentData(student);
        console.log('Student data loaded:', student); // Debug log
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load student data');
        console.error('Error fetching student:', err);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchStudentData();
    }
  }, [studentId]);

  const handleViewPDF = async (filePath: string) => {
    const resolvedUrl = await findAccessibleFileUrl(filePath);
    if (!resolvedUrl) {
      alert('Unable to open PDF. File URL not found.');
      return;
    }

    // Open PDF in a full browser page/tab instead of modal box.
    const win = window.open(resolvedUrl, '_blank');
    if (!win) {
      window.location.href = resolvedUrl;
    }
  };

  const handleDownloadPDF = async (filePath: string, fileName: string) => {
    try {
      const fullUrl = await findAccessibleFileUrl(filePath);
      console.log('📥 Downloading from:', fullUrl);
      console.log('📥 Original path:', filePath);
      
      const response = await fetch(fullUrl);
      
      if (!response.ok) {
        console.error('❌ Download failed. Status:', response.status);
        console.error('❌ Attempted URL:', fullUrl);
        throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('✅ File downloaded successfully:', fileName);
    } catch (err) {
      console.error('Error downloading file:', err);
      alert(`Failed to download file:\n${err instanceof Error ? err.message : 'Unknown error'}\n\nCheck browser console for details.`);
    }
  };

  if (loading) {
    return (
      <PortalLayout role="admin" pageTitle="Student Details" breadcrumbs={['Students', 'View Details']}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
        </div>
      </PortalLayout>
    );
  }

  if (error || !studentData) {
    return (
      <PortalLayout role="admin" pageTitle="Student Details" breadcrumbs={['Students', 'View Details']}>
        <Card className="mt-8 p-6 bg-red-50 border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Student</h3>
          <p className="text-red-600 mb-4">{error || 'Student data not found'}</p>
          <Button onClick={() => navigate('/admin/students')} className="bg-red-600 hover:bg-red-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Students
          </Button>
        </Card>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout 
      role="admin" 
      pageTitle="Student Details" 
      breadcrumbs={['Students', studentData.studentName]}
    >
      <div className="p-6 space-y-6">
        {/* Header Section with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-6">
              {/* Profile Photo */}
              <div className="flex flex-col items-start gap-3">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden relative"
                >
                  {studentData.studentPhotoPath ? (
                    <img 
                      src={getPhotoUrl(studentData.studentPhotoPath)}
                      alt={studentData.studentName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Photo load error:', e);
                        // Fallback shown below
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-100 to-blue-200">
                      <User2 className="w-16 h-16 text-blue-600" />
                    </div>
                  )}
                </motion.div>
                
                {/* Eye Button */}
                {studentData.studentPhotoPath && (
                  <button
                    onClick={() => setPhotoViewer({ open: true, path: getPhotoUrl(studentData.studentPhotoPath) })}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
                    title="View full image"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{studentData.studentName}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Reg. No: <strong>{studentData.registrationNo || 'N/A'}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{studentData.mobileNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{studentData.dateOfBirth ? new Date(studentData.dateOfBirth).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{studentData.genderName} • {studentData.categoryName}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2" />
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-gray-200">
          {['general', 'subjects', 'exams', 'documents'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 font-semibold transition-all ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* General Information Tab */}
        {activeTab === 'general' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Personal Information */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Personal Information
              </h3>
              <div className="space-y-3">
                <InfoRow label="Father's Name" value={studentData.fatherName} />
                <InfoRow label="Mother's Name" value={studentData.motherName} />
                <InfoRow label="Religion" value={studentData.religionName} />
                <InfoRow label="Caste" value={studentData.casteName} />
                <InfoRow label="Blood Group" value={studentData.bloodGroupName} />
                <InfoRow label="Marital Status" value={studentData.maritalStatusName} />
              </div>
            </Card>

            {/* Address Information */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Address Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Permanent Address</label>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded">{studentData.permanentAddress || 'N/A'}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Local Address</label>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded">{studentData.localAddress || 'N/A'}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Subjects Tab */}
        {activeTab === 'subjects' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Faculty & Subjects */}
            <Card className="p-6 lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Faculty & Subjects Selection
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-gray-600 mb-1">Faculty</p>
                  <p className="text-lg font-bold text-blue-600">{studentData.facultyName || 'N/A'}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">Compulsory Subject</p>
                  <p className="text-lg font-bold text-green-600">{studentData.compulsorySubjectName || 'N/A'}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="text-sm text-gray-600 mb-1">Optional Subject 1</p>
                  <p className="text-lg font-bold text-purple-600">{studentData.optionalSubject1Name || 'N/A'}</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                  <p className="text-sm text-gray-600 mb-1">Optional Subject 2</p>
                  <p className="text-lg font-bold text-orange-600">{studentData.optionalSubject2Name || 'N/A'}</p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-600">
                  <p className="text-sm text-gray-600 mb-1">Optional Subject 3</p>
                  <p className="text-lg font-bold text-pink-600">{studentData.optionalSubject3Name || 'N/A'}</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                  <p className="text-sm text-gray-600 mb-1">Additional Subject</p>
                  <p className="text-lg font-bold text-indigo-600">{studentData.additionalSubjectName || 'N/A'}</p>
                </div>
              </div>

              {studentData.facultyCompulsorySubjects && studentData.facultyCompulsorySubjects.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Faculty Compulsory Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {studentData.facultyCompulsorySubjects.map((subject, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        )}

        {/* Exam Details Tab */}
        {activeTab === 'exams' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Exam Details
              </h3>

              {studentData.examDetails && studentData.examDetails.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Exam Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">School/College</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Board/Council</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Year</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Division/Rank</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {studentData.examDetails.map((exam, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 text-gray-800">{exam.examName}</td>
                          <td className="px-4 py-3 text-gray-600">{exam.schoolCollege}</td>
                          <td className="px-4 py-3 text-gray-600">{exam.boardCouncil}</td>
                          <td className="px-4 py-3 text-gray-600">{exam.yearOfPassing || 'N/A'}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                              {exam.divisionOrRank}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No exam details available</p>
              )}
            </Card>
          </motion.div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Certificates & Documents
              </h3>

              {studentData.certificates && studentData.certificates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {studentData.certificates.map((cert, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-blue-300 transition-all bg-gradient-to-b from-white to-slate-50">
                      <div className="flex items-start justify-between mb-3 gap-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 leading-snug">{cert.certificateType || 'Certificate'}</h4>
                          <p className="text-sm text-gray-600 mt-1">Cert #: {cert.certificateNumber || 'N/A'}</p>
                        </div>
                        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700">
                          Document
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm mb-4">
                        <p className="text-gray-600">
                          <span className="font-semibold">Issued By:</span> {cert.issuedBy || 'N/A'}
                        </p>
                        {cert.issueDate && (
                          <p className="text-gray-600">
                            <span className="font-semibold">Date:</span> {new Date(cert.issueDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>

                      {cert.filePath && (
                        <div className="space-y-2">
                          <button
                            onClick={() => handleViewPDF(cert.filePath)}
                            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            View Full PDF
                          </button>
                          <button
                            onClick={() => handleDownloadPDF(cert.filePath, `${cert.certificateType}-${cert.certificateNumber}`)}
                            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                          <a
                            href={buildFileUrl(cert.filePath)}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open in New Tab
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No certificates uploaded</p>
              )}
            </Card>
          </motion.div>
        )}

        {/* PDF Viewer Modal */}
        <AnimatePresence>
          {pdfViewer.open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              onClick={() => setPdfViewer({ ...pdfViewer, open: false })}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-gradient-to-r from-blue-600 to-blue-800">
                  <h2 className="text-lg font-bold text-white">{pdfViewer.title}</h2>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPdfZoom(Math.max(50, pdfZoom - 10))}
                      className="p-2 hover:bg-blue-700 rounded transition-colors text-white"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-5 h-5" />
                    </button>
                    <span className="text-white font-semibold min-w-[60px] text-center">{pdfZoom}%</span>
                    <button
                      onClick={() => setPdfZoom(Math.min(200, pdfZoom + 10))}
                      className="p-2 hover:bg-blue-700 rounded transition-colors text-white"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setPdfViewer({ ...pdfViewer, open: false })}
                      className="p-2 hover:bg-blue-700 rounded transition-colors text-white"
                      title="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 overflow-auto bg-gray-100 p-2">
                  {pdfViewer.error ? (
                    <div className="text-center text-red-600">
                      <FileText className="w-16 h-16 mx-auto mb-4 text-red-400" />
                      <p className="font-semibold mb-2">Unable to Load PDF</p>
                      <p className="text-sm mb-4">The file may not be available or accessible.</p>
                      <button
                        onClick={() => pdfViewer.path && window.open(pdfViewer.path, '_blank')}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Instead
                      </button>
                    </div>
                  ) : (
                    <iframe
                      src={`${buildFileUrl(pdfViewer.path)}#toolbar=1&navpanes=0&scrollbar=1&zoom=${pdfZoom}`}
                      style={{ width: '100%', height: '100%', minHeight: '72vh' }}
                      className="border-none rounded bg-white"
                      title={pdfViewer.title}
                      onError={() => setPdfViewer({ ...pdfViewer, error: true })}
                    />
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-300 p-4 flex gap-2 justify-end bg-gray-50">
                  <button
                    onClick={() => {
                      const fullUrl = buildFileUrl(pdfViewer.path);
                      window.open(fullUrl, '_blank');
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={() => setPdfViewer({ ...pdfViewer, open: false })}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Photo Viewer Modal */}
        <AnimatePresence>
          {photoViewer.open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setPhotoViewer({ open: false, path: '' })}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-gradient-to-r from-blue-600 to-blue-800">
                  <h2 className="text-lg font-bold text-white">Student Photo</h2>
                  <button
                    onClick={() => setPhotoViewer({ open: false, path: '' })}
                    className="p-2 hover:bg-blue-700 rounded transition-colors text-white"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center bg-gray-100 p-6">
                  <img
                    src={photoViewer.path}
                    alt="Student Photo"
                    className="max-w-full max-h-[600px] object-contain rounded"
                    onError={() => {
                      console.error('Photo viewer error');
                    }}
                  />
                </div>

                {/* Footer */}
                <div className="border-t border-gray-300 p-4 flex gap-2 justify-end bg-gray-50">
                  <a
                    href={photoViewer.path}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                  <button
                    onClick={() => setPhotoViewer({ open: false, path: '' })}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Print Styles */}
        <style>{`
          @media print {
            body {
              background: white;
            }
            .print\\:hidden {
              display: none;
            }
            .print\\:display {
              display: block;
            }
            .page-break {
              page-break-after: always;
            }
          }
        `}</style>
      </div>
    </PortalLayout>
  );
};

// Helper Component
const InfoRow = ({ label, value }: { label: string; value: string | null }) => (
  <div className="flex justify-between">
    <span className="text-gray-600 font-medium">{label}:</span>
    <span className="text-gray-900 font-semibold">{value || 'N/A'}</span>
  </div>
);
