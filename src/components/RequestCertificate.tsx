import { useState } from 'react';
import { motion } from 'motion/react';
import {
    FileText,
    Send,
    CheckCircle2,
    AlertCircle,
    User,
    Mail,
    Phone,
    Calendar,
    ArrowLeft,
    FileCheck,
} from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router';

const certificateTypes = [
    {
        id: 'transfer',
        name: 'Transfer Certificate',
        description: 'Required when changing schools or institutions',
        processingDays: '5-7 business days',
    },
    {
        id: 'character',
        name: 'Character Certificate',
        description: 'Certificate of good character and conduct',
        processingDays: '3-5 business days',
    },
    {
        id: 'bonafide',
        name: 'Bonafide Certificate',
        description: 'Certificate of current enrollment',
        processingDays: '2-3 business days',
    },
    {
        id: 'transcript',
        name: 'Academic Transcript',
        description: 'Complete academic record and grades',
        processingDays: '7-10 business days',
    },
    {
        id: 'sports',
        name: 'Sports Certificate',
        description: 'Certificate for sports participation',
        processingDays: '3-5 business days',
    },
    {
        id: 'medical',
        name: 'Medical Certificate',
        description: 'Health and fitness certificate',
        processingDays: '5-7 business days',
    },
    {
        id: 'conduct',
        name: 'Conduct Certificate',
        description: 'Certificate of behavior and discipline',
        processingDays: '3-5 business days',
    },
    {
        id: 'migration',
        name: 'Migration Certificate',
        description: 'Required for university migration',
        processingDays: '7-10 business days',
    },
];

export function RequestCertificate() {
    const navigate = useNavigate();
    const [selectedCertificate, setSelectedCertificate] = useState('');
    const [formData, setFormData] = useState({
        purpose: '',
        additionalNotes: '',
        deliveryMode: 'digital',
        urgentRequest: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // In a real app, this would submit the certificate request
        setTimeout(() => {
            alert('Certificate request submitted successfully! You will receive a confirmation email shortly.');
            setIsSubmitting(false);
            navigate('/student/certificates');
        }, 1500);
    };

    const canSubmit = selectedCertificate && formData.purpose;

    return (
        <PortalLayout
            role="student"
            userName="Rohan Kumar"
            userRole="Class 10-A"
            pageTitle="Request Certificate"
            breadcrumbs={["Home", "Student", "Certificates", "Request"]}
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
                    onClick={() => navigate('/student/certificates')}
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-700"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Certificates
                </Button>

                {/* Header Card */}
                <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-lg">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                            <FileCheck className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-2">Request New Certificate</h2>
                            <p className="text-blue-100 font-medium">
                                Submit a request for any certificate you need. Processing time varies by certificate type.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Information Alert */}
                <Card className="p-5 bg-blue-50 border-2 border-blue-200">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-blue-900 font-semibold mb-1">Important Information</p>
                            <ul className="text-sm text-blue-800 space-y-1 ml-4 list-disc">
                                <li>All certificate requests are subject to administrative approval</li>
                                <li>Processing times may vary depending on workload and urgency</li>
                                <li>You will be notified via email once your certificate is ready</li>
                                <li>Urgent requests may incur additional fees</li>
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Student Information */}
                <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Student Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600 font-medium mb-1">Full Name</p>
                                <p className="font-bold text-slate-900">Rohan Kumar</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600 font-medium mb-1">Student ID</p>
                                <p className="font-bold text-slate-900">STU-2026-12345</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600 font-medium mb-1">Email Address</p>
                                <p className="font-bold text-slate-900">rohan.kumar@example.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600 font-medium mb-1">Phone Number</p>
                                <p className="font-bold text-slate-900">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Request Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Certificate Type Selection */}
                    <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Select Certificate Type</h3>
                        <p className="text-slate-600 font-medium mb-6">Choose the certificate you want to request</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {certificateTypes.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedCertificate === cert.id
                                        ? 'bg-blue-50 border-blue-500 shadow-md'
                                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'
                                        }`}
                                    onClick={() => setSelectedCertificate(cert.id)}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${selectedCertificate === cert.id ? 'bg-blue-100' : 'bg-slate-100'
                                            }`}>
                                            {selectedCertificate === cert.id ? (
                                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                            ) : (
                                                <FileText className="w-5 h-5 text-slate-600" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-900 mb-1">{cert.name}</h4>
                                            <p className="text-sm text-slate-600 mb-2">{cert.description}</p>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-slate-500" />
                                                <span className="text-xs text-slate-600 font-semibold">{cert.processingDays}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    {/* Request Details */}
                    <Card className="p-6 bg-white border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Request Details</h3>
                        <p className="text-slate-600 font-medium mb-6">Provide additional information about your request</p>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Purpose of Certificate <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.purpose}
                                    onChange={(e) => setFormData(prev => ({ ...prev, purpose: e.target.value }))}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors font-medium"
                                    placeholder="e.g., College admission, Job application, etc."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Additional Notes (Optional)
                                </label>
                                <textarea
                                    value={formData.additionalNotes}
                                    onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none font-medium"
                                    placeholder="Any additional information or special requirements..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Delivery Mode
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="digital"
                                            checked={formData.deliveryMode === 'digital'}
                                            onChange={(e) => setFormData(prev => ({ ...prev, deliveryMode: e.target.value }))}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span className="font-medium text-slate-700">Digital Copy (Email)</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="physical"
                                            checked={formData.deliveryMode === 'physical'}
                                            onChange={(e) => setFormData(prev => ({ ...prev, deliveryMode: e.target.value }))}
                                            className="w-4 h-4 text-blue-600"
                                        />
                                        <span className="font-medium text-slate-700">Physical Copy (Collect from office)</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="urgent"
                                    checked={formData.urgentRequest}
                                    onChange={(e) => setFormData(prev => ({ ...prev, urgentRequest: e.target.checked }))}
                                    className="w-5 h-5 text-blue-600 rounded"
                                />
                                <label htmlFor="urgent" className="font-medium text-slate-700 cursor-pointer">
                                    Mark as urgent request (Additional fees may apply)
                                </label>
                            </div>
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
                                        {canSubmit
                                            ? 'All required fields are filled. You can now submit your certificate request.'
                                            : 'Please select a certificate type and provide the purpose before submitting.'
                                        }
                                    </p>
                                </div>
                            </div>
                            <Button
                                type="submit"
                                disabled={!canSubmit || isSubmitting}
                                className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold px-8 py-3 text-base disabled:bg-slate-300 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Submit Request
                                    </>
                                )}
                            </Button>
                        </div>
                    </Card>
                </form>
            </motion.div>
        </PortalLayout>
    );
}
