import { useState } from 'react';
import { Bell, Save, RotateCcw, Upload, X, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

// ── Constants ────────────────────────────────────────────────────────────────
const REQUIRED_FIELDS = [
  'title', 'category', 'priority', 'targetAudience', 'publishDate', 'content',
];

const INITIAL_FORM: Record<string, string> = {
  title: '',
  category: '',
  priority: '',
  targetAudience: '',
  publishDate: '',
  expiryDate: '',
  content: '',
  noticeNumber: '',
};

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = ['application/pdf', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg', 'image/png'];

// ── Validation ───────────────────────────────────────────────────────────────
function getFieldError(name: string, value: string, allValues: Record<string, string>): string | null {
  if (REQUIRED_FIELDS.includes(name) && !value.trim()) return 'This field is required.';

  if (name === 'expiryDate' && value && allValues.publishDate) {
    if (new Date(value) < new Date(allValues.publishDate))
      return 'Expiry date cannot be before publish date.';
  }

  if (name === 'content' && value.trim() && value.trim().length < 10)
    return 'Content must be at least 10 characters.';

  return null;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function inputCls(error: string | null) {
  return [
    'w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border rounded-lg text-slate-900',
    'placeholder-slate-400 focus:outline-none focus:ring-2 text-sm transition-colors',
    error
      ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
      : 'border-slate-300 focus:ring-blue-500/20 focus:border-blue-500',
  ].join(' ');
}

// ── Component ────────────────────────────────────────────────────────────────
export function CreateNoticeForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>(INITIAL_FORM);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [attachments, setAttachments] = useState<File[]>([]);

  // ── Derived errors ─────────────────────────────────────────────────────────
  const errors: Record<string, string | null> = {};
  for (const key of Object.keys(formData)) {
    errors[key] = touched[key] ? getFieldError(key, formData[key], formData) : null;
  }

  const hasAnyError = Object.keys(formData).some(
    (k) => getFieldError(k, formData[k], formData) !== null
  );

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const valid: File[] = [];
    const rejected: string[] = [];

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        rejected.push(`${file.name} — unsupported file type`);
      } else if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        rejected.push(`${file.name} — exceeds ${MAX_FILE_SIZE_MB}MB`);
      } else {
        valid.push(file);
      }
    }

    if (rejected.length > 0) {
      toast.error('Some files were skipped', { description: rejected.join('\n') });
    }

    if (valid.length > 0) {
      setAttachments((prev) => [...prev, ...valid]);
    }

    // Reset input so the same file can be re-selected after removal
    e.target.value = '';
  };

  const removeAttachment = (index: number) =>
    setAttachments((prev) => prev.filter((_, i) => i !== index));

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setTouched({});
    setAttachments([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched so every error surfaces at once
    setTouched(Object.fromEntries(Object.keys(formData).map((k) => [k, true])));

    if (hasAnyError) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      attachments.forEach((file) => payload.append('attachments', file));

      const response = await fetch('http://localhost:5258/notices', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to publish notice');
      }

      toast.success('Notice Published Successfully!', {
        description: `"${formData.title}" has been published to ${formData.targetAudience}.`,
      });

      setTimeout(() => navigate('/admin/notices'), 1000);
    } catch (error) {
      toast.error('Failed to publish notice', {
        description: error instanceof Error ? error.message : 'Something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Sub-components ─────────────────────────────────────────────────────────
  const fieldProps = (name: string) => ({
    name,
    value: formData[name],
    onChange: handleInputChange,
    onBlur: handleBlur,
    className: inputCls(errors[name]),
  });

  const ErrorMsg = ({ name }: { name: string }) =>
    errors[name] ? <p className="mt-1 text-xs text-red-500">{errors[name]}</p> : null;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Create New Notice"
      breadcrumbs={['Home', 'Admin', 'Notices', 'Create Notice']}
    >
      <div className="space-y-6">
        <Card className="bg-white border border-slate-200">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Notice Information</h2>
              <p className="text-sm text-slate-600 mt-1">Fill in the details to create and publish a new notice</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* ── Basic Information ──────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Basic Information
                </h3>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Notice Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Annual Sports Day Announcement"
                      {...fieldProps('title')}
                    />
                    <ErrorMsg name="title" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Notice Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., NOT/2026/001"
                      {...fieldProps('noticeNumber')}
                    />
                    <ErrorMsg name="noticeNumber" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('category')}>
                      <option value="">Select Category *</option>
                      <option value="academic">Academic</option>
                      <option value="administrative">Administrative</option>
                      <option value="event">Event</option>
                      <option value="holiday">Holiday</option>
                      <option value="examination">Examination</option>
                      <option value="fee">Fee Related</option>
                      <option value="admission">Admission</option>
                      <option value="sports">Sports & Culture</option>
                      <option value="general">General</option>
                      <option value="urgent">Urgent</option>
                    </select>
                    <ErrorMsg name="category" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Priority <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('priority')}>
                      <option value="">Select Priority *</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                    <ErrorMsg name="priority" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Target Audience <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('targetAudience')}>
                      <option value="">Select Audience *</option>
                      <option value="all">All (Students, Teachers & Parents)</option>
                      <option value="students">Students Only</option>
                      <option value="teachers">Teachers Only</option>
                      <option value="parents">Parents Only</option>
                      <option value="staff">Staff Members</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={`class-${i + 1}`}>Class {i + 1}</option>
                      ))}
                    </select>
                    <ErrorMsg name="targetAudience" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Publish Date <span className="text-red-500">*</span>
                    </label>
                    <input type="date" {...fieldProps('publishDate')} />
                    <ErrorMsg name="publishDate" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Expiry Date
                    </label>
                    <input type="date" {...fieldProps('expiryDate')} />
                    <ErrorMsg name="expiryDate" />
                  </div>
                </div>
              </div>

              {/* ── Notice Content ─────────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Notice Content
                </h3>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Notice Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    rows={8}
                    placeholder="Enter the detailed notice content here..."
                    className={[
                      'w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border rounded-lg text-slate-900',
                      'placeholder-slate-400 focus:outline-none focus:ring-2  text-sm transition-colors',
                      errors.content
                        ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
                        : 'border-slate-300 focus:ring-blue-500/20 focus:border-blue-500',
                    ].join(' ')}
                  />
                  <ErrorMsg name="content" />
                </div>
              </div>

              {/* ── Attachments ────────────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Attachments
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Upload Documents (Optional)
                    </label>
                    <div className="flex items-center gap-3">
                      <label
                        htmlFor="file-upload"
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-600 hover:bg-blue-100 hover:border-blue-300 transition-colors cursor-pointer text-sm font-medium"
                      >
                        <Upload className="w-4 h-4" />
                        Choose Files
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <span className="text-xs text-slate-500">
                        PDF, DOC, DOCX, JPG, PNG (Max {MAX_FILE_SIZE_MB}MB each)
                      </span>
                    </div>
                  </div>

                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-slate-700">Attached Files:</p>
                      {attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="text-sm text-slate-700 truncate">{file.name}</p>
                              <p className="text-xs text-slate-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-2 py-1 h-auto flex-shrink-0 ml-3"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ── Notice Preview ─────────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Notice Preview
                </h3>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <h4 className="text-lg font-bold text-slate-900">
                          {formData.title || 'Notice Title Will Appear Here'}
                        </h4>
                        {formData.priority && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${formData.priority === 'urgent'
                              ? 'bg-red-100 text-red-700'
                              : formData.priority === 'high'
                                ? 'bg-orange-100 text-orange-700'
                                : formData.priority === 'medium'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-green-100 text-green-700'
                              }`}
                          >
                            {formData.priority.toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {formData.category && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {formData.category}
                          </span>
                        )}
                        {formData.targetAudience && (
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            For: {formData.targetAudience}
                          </span>
                        )}
                        {formData.publishDate && (
                          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                            📅 {formData.publishDate}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-700 whitespace-pre-wrap">
                        {formData.content || 'Notice content will appear here...'}
                      </p>
                      {attachments.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-200">
                          <p className="text-xs text-slate-600">
                            📎 {attachments.length} file(s) attached
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>

              {/* ── Action Buttons ─────────────────────────────────────── */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Publishing...' : 'Publish Notice'}
                </Button>
                <Button
                  type="button"
                  onClick={handleReset}
                  disabled={isSubmitting}
                  className="flex-1 bg-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 text-slate-700 py-3 border-2 border-slate-300 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Form
                </Button>
              </div>

            </form>
          </div>
        </Card>
      </div>
    </PortalLayout>
  );
}