import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Upload, FileText, Check } from 'lucide-react';

interface DocumentUploadSectionProps {
  documents: {
    photo: File | null;
    birthCertificate: File | null;
    previousMarksheet: File | null;
    transferCertificate: File | null;
    aadharCard: File | null;
  };
  onDocumentChange: (docType: string, file: File | null) => void;
}

export function DocumentUploadSection({ documents, onDocumentChange }: DocumentUploadSectionProps) {
  const documentList = [
    { id: 'photo', label: 'Passport Size Photo', required: true },
    { id: 'birthCertificate', label: 'Birth Certificate', required: true },
    { id: 'previousMarksheet', label: 'Previous Marksheet', required: true },
    { id: 'transferCertificate', label: 'Transfer Certificate', required: false },
    { id: 'aadharCard', label: 'Aadhar Card', required: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="mt-8"
    >
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Upload className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-900">Upload Documents</h4>
            <p className="text-sm text-purple-700">Please upload the required documents before submission</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documentList.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + idx * 0.1 }}
              className="p-4 rounded-xl bg-white border-2 border-gray-200"
            >
              <Label htmlFor={doc.id} className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-600" />
                {doc.label} {doc.required && <span className="text-red-500">*</span>}
              </Label>
              <div className="mt-2">
                <Input
                  id={doc.id}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => onDocumentChange(doc.id, e.target.files?.[0] || null)}
                  className="h-10 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-lg text-sm"
                />
                {documents[doc.id as keyof typeof documents] && (
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    {documents[doc.id as keyof typeof documents]?.name}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-amber-50 border-2 border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800">
            <strong>Note:</strong> Accepted formats: PDF, JPG, PNG (Max 5MB per file)
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
