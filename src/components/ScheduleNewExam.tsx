import { useState } from 'react';
import { ArrowLeft, Save, FileText, Calendar, Clock, BookOpen, Users } from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export function ScheduleNewExam() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    examName: '',
    examType: '',
    class: '',
    subject: '',
    date: '',
    startTime: '',
    endTime: '',
    duration: '',
    totalMarks: '',
    passingMarks: '',
    venue: '',
    instructions: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success('Exam Scheduled Successfully!', {
      description: `${formData.examName} scheduled for ${formData.date} at ${formData.startTime}.`,
    });
    
    // Navigate back to exams page
    setTimeout(() => {
      navigate('/admin/exams');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Schedule New Exam"
      breadcrumbs={["Home", "Admin", "Exams", "Schedule New Exam"]}
    >
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate('/admin/exams')}
          className="border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Exams
        </Button>

        <Card className="p-8 bg-white border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Schedule New Exam</h2>
              <p className="text-sm text-slate-600">Create a new exam schedule</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Exam Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="examName"
                    value={formData.examName}
                    onChange={handleChange}
                    placeholder="e.g., Mid-Term Exam 2026"
                    required
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Exam Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="examType"
                    value={formData.examType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select Exam Type</option>
                    <option value="unit-test">Unit Test</option>
                    <option value="mid-term">Mid-Term</option>
                    <option value="final">Final Exam</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="half-yearly">Half-Yearly</option>
                    <option value="annual">Annual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Class <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select Class</option>
                    <option value="9-a">Grade 9-A</option>
                    <option value="9-b">Grade 9-B</option>
                    <option value="10-a">Grade 10-A</option>
                    <option value="10-b">Grade 10-B</option>
                    <option value="11-a">Grade 11-A</option>
                    <option value="11-b">Grade 11-B</option>
                    <option value="12-a">Grade 12-A</option>
                    <option value="12-b">Grade 12-B</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="">Select Subject</option>
                      <option value="math">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="history">History</option>
                      <option value="geography">Geography</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Date & Time Information */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Date & Time Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Exam Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Duration (minutes) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="e.g., 120"
                      required
                      min="30"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Start Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    End Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Marking Scheme & Venue */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Marking Scheme & Venue
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Total Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={formData.totalMarks}
                    onChange={handleChange}
                    placeholder="e.g., 100"
                    required
                    min="1"
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Passing Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="passingMarks"
                    value={formData.passingMarks}
                    onChange={handleChange}
                    placeholder="e.g., 40"
                    required
                    min="1"
                    className="w-full px-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Venue <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g., Main Hall"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Exam Instructions
              </h3>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Instructions
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  placeholder="Enter exam instructions for students..."
                  rows={6}
                  className="w-full px-4 py-2.5 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/exams')}
                className="px-6 border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-8 bg-blue-600 text-white hover:bg-blue-700"
              >
                <Save className="w-4 h-4 mr-2" />
                Schedule Exam
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </PortalLayout>
  );
}