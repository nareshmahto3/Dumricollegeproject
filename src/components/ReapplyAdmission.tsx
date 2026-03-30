import { useState } from 'react';
import { motion } from 'motion/react';
import {
    Upload,
    Edit,
    RefreshCw,
    CheckCircle2,
    AlertCircle,
    FileText,
    ArrowLeft,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router';

interface RejectedDocument {
    name: string;
    rejectionReason: string;
}

const mockRejectedDocuments: RejectedDocument[] = [
    { name: 'Birth Certificate', rejectionReason: 'Document is not clear and readable' },
    { name: 'Previous Marksheet', rejectionReason: 'Missing principal signature' },
    { name: 'Address Proof', rejectionReason: 'Document is expired' },
];

export function ReapplyAdmission() {
    const navigate = useNavigate();
    const [reapplicationData, setReapplicationData] = useState({
        email: 'rohan.kumar@example.com',
        phone: '+91 98765 43210',
        address: 'Mumbai, Maharashtra',
    });
    const [selectedFiles, setSelectedFiles] = useState<{ [key: string]: File | null }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileSelect = (documentName: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFiles(prev => ({ ...prev, [documentName]: file }));
    };

    const handleReapply = () => {
        setIsSubmitting(true);
        // In a real app, this would submit the reapplication
        setTimeout(() => {
            alert('Reapplication submitted successfully! You will receive a confirmation email shortly.');
            setIsSubmitting(false);
            navigate('/student/track-application');
        }, 1500);
    };

    const allDocumentsUploaded = mockRejectedDocuments.every(doc => selectedFiles[doc.name]);

    return (
        <PortalLayout
            role="student"
            userName="Rohan Kumar"
            userRole="Applicant"
            pageTitle="Reapply for Admission"
            breadcrumbs={["Home", "Student", "Track Application", "Reapply"]}
        >
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Back Button */}
                <Button
                    variant="outline"
                    onClick={() => navigate('/student/track-application')}
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Application Status
                </Button>

                {/* Header Card */}
                <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                            <RefreshCw className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-2">Reapply for Admission</h2>
                            <p className="text-blue-100 font-medium">
                                Please correct the rejected documents and update your information if needed. All rejected documents must be re-uploaded.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Information Alert */}
                <Card className="p-5 bg-amber-50 border-2 border-amber-200">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-amber-900 font-semibold mb-1">Important Instructions</p>
                            <ul className="text-sm text-amber-800 space-y-1 ml-4 list-disc">
                                <li>Ensure all documents are clear, legible, and in the correct format (PDF, JPG, or PNG)</li>
                                <li>File size should not exceed 5MB per document</li>
                                <li>All corrections mentioned in rejection reasons must be addressed</li>
                                <li>Your application will be reviewed within 3-5 business days after submission</li>
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Update Contact Information */}
                <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                        <Edit className="w-5 h-5 text-blue-600" />
                        Update Contact Information
                    </h3>
                    <p className="text-slate-600 font-medium mb-6">Optional - Update your contact details if they have changed</p>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={reapplicationData.email}
                                onChange={(e) => setReapplicationData(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors font-medium"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                value={reapplicationData.phone}
                                onChange={(e) => setReapplicationData(prev => ({ ...prev, phone: e.target.value }))}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors font-medium"
                                placeholder="+91 XXXXX XXXXX"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Address
                            </label>
                            <textarea
                                value={reapplicationData.address}
                                onChange={(e) => setReapplicationData(prev => ({ ...prev, address: e.target.value }))}
                                rows={3}
                                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none font-medium"
                                placeholder="Enter your complete address"
                            />
                        </div>
                    </div>
                </Card>

                {/* Upload Corrected Documents */}
                <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                        <Upload className="w-5 h-5 text-blue-600" />
                        Upload Corrected Documents
                    </h3>
                    <p className="text-slate-600 font-medium mb-6">
                        Please upload corrected versions of all rejected documents
                    </p>

                    <div className="space-y-4">
                        {mockRejectedDocuments.map((doc, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-5 bg-red-50 border-2 border-red-200 rounded-xl"
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h4 className="font-bold text-slate-900 text-lg">{doc.name}</h4>
                                            <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300 text-xs">
                                                Rejected
                                            </Badge>
                                            {selectedFiles[doc.name] && (
                                                <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-300 text-xs">
                                                    New file selected
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-start gap-2 mb-3">
                                            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm text-red-700 font-semibold">
                                                Reason: {doc.rejectionReason}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="file"
                                        id={`file-${index}`}
                                        onChange={(e) => handleFileSelect(doc.name, e)}
                                        className="hidden"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                    <label
                                        htmlFor={`file-${index}`}
                                        className="flex-1 cursor-pointer"
                                    >
                                        <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-slate-300 rounded-lg hover:bg-slate-50 hover:border-blue-500 transition-all">
                                            <Upload className="w-5 h-5 text-slate-600" />
                                            <span className="font-semibold text-slate-700">
                                                {selectedFiles[doc.name] ? 'Change File' : 'Choose File'}
                                            </span>
                                        </div>
                                    </label>
                                    {selectedFiles[doc.name] && (
                                        <div className="flex items-center gap-2 px-4 py-3 bg-emerald-50 border-2 border-emerald-200 rounded-lg">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                            <span className="text-sm font-semibold text-emerald-700 truncate max-w-[200px]">
                                                {selectedFiles[doc.name]?.name}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {selectedFiles[doc.name] && (
                                    <p className="text-xs text-slate-600 font-medium mt-2">
                                        File size: {((selectedFiles[doc.name]?.size || 0) / 1024).toFixed(2)} KB
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </Card>

                {/* Submit Button */}
                <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-slate-600 flex-shrink-0" />
                            <div>
                                <p className="font-bold text-slate-900 mb-1">Ready to Submit?</p>
                                <p className="text-sm text-slate-600">
                                    {allDocumentsUploaded
                                        ? 'All required documents are uploaded. You can now submit your reapplication.'
                                        : `Please upload all ${mockRejectedDocuments.length} rejected documents before submitting.`
                                    }
                                </p>
                            </div>
                        </div>
                        <Button
                            onClick={handleReapply}
                            disabled={!allDocumentsUploaded || isSubmitting}
                            className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold px-8 py-3 text-base disabled:bg-slate-300 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    Submit Reapplication
                                </>
                            )}
                        </Button>
                    </div>
                </Card>
            </motion.div>
        </PortalLayout>
    );
}
