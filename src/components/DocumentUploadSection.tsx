import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Upload, FileText, Check, AlertCircle, Image as ImageIcon } from 'lucide-react';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'application/pdf'] as const;

type DocumentMap = {
  photo: File | null;
  casteCertificate: File | null;
  schoolLeaving: File | null;
  admitCard: File | null;
  marksheet: File | null;
  aadharCard: File | null;
};

type DocumentKey = keyof DocumentMap;

interface DocumentUploadSectionProps {
  documents: DocumentMap;
  onDocumentChange: (docType: DocumentKey, file: File | null) => void;
}

export function DocumentUploadSection({ documents, onDocumentChange }: DocumentUploadSectionProps) {
  const [errors, setErrors] = useState<Partial<Record<DocumentKey, string>>>({});
  const [imagePreviews, setImagePreviews] = useState<Partial<Record<DocumentKey, string>>>({});

  const formatFileSize = (size: number) => {
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    }
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_MIME_TYPES.includes(file.type as (typeof ALLOWED_MIME_TYPES)[number])) {
      return 'Only PDF, JPG, and PNG files are allowed';
    }

    if (file.size > MAX_FILE_SIZE) {
      return 'File size must be less than 5 MB';
    }

    return null;
  };

  const clearError = (docType: DocumentKey) => {
    setErrors((prev: Partial<Record<DocumentKey, string>>) => {
      if (!prev[docType]) return prev;
      const next = { ...prev };
      delete next[docType];
      return next;
    });
  };

  const handleFileChange = (docType: DocumentKey, e: any) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      onDocumentChange(docType, null);
      clearError(docType);
      return;
    }

    const error = validateFile(file);

    if (error) {
      setErrors((prev: Partial<Record<DocumentKey, string>>) => ({ ...prev, [docType]: error }));
      onDocumentChange(docType, null);
      e.target.value = '';
      return;
    }

    clearError(docType);
    onDocumentChange(docType, file);
  };

  useEffect(() => {
    const nextPreviews: Partial<Record<DocumentKey, string>> = {};

    (Object.keys(documents) as DocumentKey[]).forEach((key) => {
      const file = documents[key];
      if (file && file.type.startsWith('image/')) {
        nextPreviews[key] = URL.createObjectURL(file);
      }
    });

    setImagePreviews(nextPreviews);

    return () => {
      Object.values(nextPreviews).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [documents]);

  const documentList = [
    { id: 'photo' as DocumentKey, label: 'Passport Size Photo', required: true },
    { id: 'casteCertificate' as DocumentKey, label: 'Caste Certificate', required: true },
    { id: 'schoolLeaving' as DocumentKey, label: 'School Leaving Certificate', required: true },
    { id: 'admitCard' as DocumentKey, label: 'Admit Card', required: true },
    { id: 'marksheet' as DocumentKey, label: 'Marksheet', required: true },
    { id: 'aadharCard' as DocumentKey, label: 'Aadhaar Card', required: true },
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
              className={`p-4 rounded-xl bg-white border-2 transition-all ${
                errors[doc.id]
                  ? 'border-red-300 bg-red-50/40'
                  : documents[doc.id]
                    ? 'border-green-300 bg-green-50/40'
                    : 'border-gray-200'
              }`}
            >
              <Label htmlFor={doc.id} className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-600" />
                {doc.label} {doc.required && <span className="text-red-500">*</span>}
              </Label>
              <div className="mt-2">
                <Input
                  id={doc.id}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                  onChange={(e: any) => handleFileChange(doc.id, e)}
                  className={`h-10 border-2 transition-all rounded-lg text-sm ${
                    errors[doc.id]
                      ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                      : documents[doc.id]
                        ? 'border-green-400 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                        : 'border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100'
                  }`}
                />
                {errors[doc.id] && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-600 mt-2 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors[doc.id]}
                  </motion.p>
                )}
                {documents[doc.id] && !errors[doc.id] && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 p-2 rounded-lg border border-green-200 bg-green-50"
                  >
                    <p className="text-xs text-green-700 flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" />
                      {documents[doc.id]?.name}
                    </p>
                    <p className="text-[11px] text-green-600 mt-0.5">
                      Size: {documents[doc.id] ? formatFileSize(documents[doc.id]!.size) : '0 KB'}
                    </p>
                    {imagePreviews[doc.id] && (
                      <div className="mt-2 flex items-center gap-2">
                        <ImageIcon className="w-3.5 h-3.5 text-green-600" />
                        <img
                          src={imagePreviews[doc.id]}
                          alt={`${doc.label} preview`}
                          className="h-14 w-14 rounded-md border border-green-200 object-cover"
                        />
                      </div>
                    )}
                  </motion.div>
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
