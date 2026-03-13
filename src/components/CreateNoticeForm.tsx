import { useState } from 'react';
import { Bell, Save, RotateCcw, Upload, X, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { useNavigate } from 'react-router';
import { toast } from 'sonner@2.0.3';

export function CreateNoticeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    priority: '',
    targetAudience: '',
    publishDate: '',
    expiryDate: '',
    content: '',
    noticeNumber: '',
  });

  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentPreviews, setAttachmentPreviews] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setAttachments([...attachments, ...files]);
      const previews = files.map(file => file.name);
      setAttachmentPreviews([...attachmentPreviews, ...previews]);
    }
  };

  const removeAttachment = (index: number) => {
    const newAttachments = attachments.filter((_, i) => i !== index);
    const newPreviews = attachmentPreviews.filter((_, i) => i !== index);
    setAttachments(newAttachments);
    setAttachmentPreviews(newPreviews);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Notice created:', { ...formData, attachments });

    toast.success('Notice Published Successfully!', {
      description: `${formData.title} has been published and sent to ${formData.targetAudience}.`,
    });

    setTimeout(() => {
      navigate('/admin/notices');
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      title: '',
      category: '',
      priority: '',
      targetAudience: '',
      publishDate: '',
      expiryDate: '',
      content: '',
      noticeNumber: '',
    });
    setAttachments([]);
    setAttachmentPreviews([]);
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Create New Notice"
      breadcrumbs={["Home", "Admin", "Notices", "Create Notice"]}
    >
      <div className="space-y-6">
        <Card className="bg-white border border-slate-200">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Notice Information</h2>
              <p className="text-sm text-slate-600 mt-1">Fill in the details to create and publish a new notice</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Information Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Basic Information</h3>
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Notice Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Annual Sports Day Announcement"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Notice Number
                    </label>
                    <input
                      type="text"
                      name="noticeNumber"
                      value={formData.noticeNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., NOT/2026/001"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                    >
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
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Priority <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Select Priority *</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Target Audience <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Select Audience *</option>
                      <option value="all">All (Students, Teachers & Parents)</option>
                      <option value="students">Students Only</option>
                      <option value="teachers">Teachers Only</option>
                      <option value="parents">Parents Only</option>
                      <option value="staff">Staff Members</option>
                      <option value="class-1">Class 1</option>
                      <option value="class-2">Class 2</option>
                      <option value="class-3">Class 3</option>
                      <option value="class-4">Class 4</option>
                      <option value="class-5">Class 5</option>
                      <option value="class-6">Class 6</option>
                      <option value="class-7">Class 7</option>
                      <option value="class-8">Class 8</option>
                      <option value="class-9">Class 9</option>
                      <option value="class-10">Class 10</option>
                      <option value="class-11">Class 11</option>
                      <option value="class-12">Class 12</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Publish Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="publishDate"
                      value={formData.publishDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Notice Content Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Notice Content</h3>
                
                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Notice Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    placeholder="Enter the detailed notice content here..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                  />
                </div>
              </div>

              {/* Attachments Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Attachments</h3>
                
                <div className="space-y-4">
                  {/* File Upload */}
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
                        PDF, DOC, DOCX, JPG, PNG (Max 5MB each)
                      </span>
                    </div>
                  </div>

                  {/* Attachment List */}
                  {attachmentPreviews.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-slate-700">Attached Files:</p>
                      {attachmentPreviews.map((fileName, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-slate-700">{fileName}</span>
                          </div>
                          <Button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-2 py-1 h-auto"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Preview Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Notice Preview</h3>
                
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-slate-900">
                          {formData.title || 'Notice Title Will Appear Here'}
                        </h4>
                        {formData.priority && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              formData.priority === 'urgent'
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
                      {attachmentPreviews.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-200">
                          <p className="text-xs text-slate-600 mb-1">
                            📎 {attachmentPreviews.length} file(s) attached
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 shadow-lg shadow-blue-500/20"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Publish Notice
                </Button>
                <Button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 text-slate-700 py-3 border-2 border-slate-300 transition-all duration-200"
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
