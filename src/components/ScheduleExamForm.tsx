import { useState } from 'react';
import { Calendar, Save, RotateCcw, Clock, FileText, Plus, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import axios from 'axios';

interface ExamSubject {
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
  maxMarks: string;
}

export function ScheduleExamForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    examName: '',
    examType: '',
    class: '',
    academicYear: '',
    startDate: '',
    endDate: '',
    venue: '',
    instructions: '',
  });

  const [examSubjects, setExamSubjects] = useState<ExamSubject[]>([
    { subject: '', date: '', startTime: '', endTime: '', maxMarks: '' }
  ]);

  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'https://localhost:5001/api/Exam'; // Adjust based on your API URL

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (index: number, field: keyof ExamSubject, value: string) => {
    const newSubjects = [...examSubjects];
    newSubjects[index][field] = value;
    setExamSubjects(newSubjects);
  };

  const addSubject = () => {
    setExamSubjects([...examSubjects, { subject: '', date: '', startTime: '', endTime: '', maxMarks: '' }]);
  };

  const removeSubject = (index: number) => {
    const newSubjects = examSubjects.filter((_, i) => i !== index);
    setExamSubjects(newSubjects);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Map frontend data to backend format
      const payload = {
        examName: `${formData.examName} - ${formData.examType} (${formData.class})`,
        examDate: formData.startDate,
        startTime: examSubjects[0]?.startTime || '09:00', // Use first subject's time or default
        endTime: examSubjects[0]?.endTime || '12:00',
        subjects: examSubjects.map(sub => ({
          subjectName: sub.subject,
          subjectCode: sub.subject, // Using subject as code for simplicity
          marks: parseInt(sub.maxMarks) || 100
        }))
      };

      const response = await axios.post(API_BASE_URL, payload);
      
      toast.success('Exam Scheduled Successfully!', {
        description: `${formData.examName} for ${formData.class} has been scheduled.`,
      });

      setTimeout(() => {
        navigate('/admin/exams');
      }, 1000);
    } catch (error) {
      console.error('Error scheduling exam:', error);
      toast.error('Failed to schedule exam. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      examName: '',
      examType: '',
      class: '',
      academicYear: '',
      startDate: '',
      endDate: '',
      venue: '',
      instructions: '',
    });
    setExamSubjects([{ subject: '', date: '', startTime: '', endTime: '', maxMarks: '' }]);
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Schedule New Exam"
      breadcrumbs={["Home", "Admin", "Exams", "Schedule Exam"]}
    >
      <div className="space-y-6">
        <Card className="bg-white border border-slate-200">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Exam Information</h2>
              <p className="text-sm text-slate-600 mt-1">Fill in the details to schedule a new examination</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Information Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Basic Information</h3>
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Exam Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="examName"
                      value={formData.examName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., First Terminal Examination"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Exam Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="examType"
                      value={formData.examType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Select Exam Type *</option>
                      <option value="unit-test">Unit Test</option>
                      <option value="midterm">Mid-Term Exam</option>
                      <option value="terminal">Terminal Exam</option>
                      <option value="final">Final Exam</option>
                      <option value="practical">Practical Exam</option>
                      <option value="internal">Internal Assessment</option>
                      <option value="board">Board Exam</option>
                    </select>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Select Class *</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Academic Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="academicYear"
                      value={formData.academicYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Select Academic Year *</option>
                      <option value="2023-2024">2023-2024</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2025-2026">2025-2026</option>
                      <option value="2026-2027">2026-2027</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Venue <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Main Examination Hall"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Subject Schedule Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Subject Schedule</h3>
                
                <div className="space-y-4">
                  {examSubjects.map((subject, index) => (
                    <Card key={index} className="p-4 bg-slate-50 border border-slate-200">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-sm font-semibold text-slate-700">Subject {index + 1}</h4>
                        {examSubjects.length > 1 && (
                          <Button
                            type="button"
                            onClick={() => removeSubject(index)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-2 py-1 h-auto"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={subject.subject}
                            onChange={(e) => handleSubjectChange(index, 'subject', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                          >
                            <option value="">Select</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="social-science">Social Science</option>
                            <option value="computer">Computer Science</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="biology">Biology</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            value={subject.date}
                            onChange={(e) => handleSubjectChange(index, 'date', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Start Time <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="time"
                            value={subject.startTime}
                            onChange={(e) => handleSubjectChange(index, 'startTime', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            End Time <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="time"
                            value={subject.endTime}
                            onChange={(e) => handleSubjectChange(index, 'endTime', e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Max Marks <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            value={subject.maxMarks}
                            onChange={(e) => handleSubjectChange(index, 'maxMarks', e.target.value)}
                            required
                            min="0"
                            placeholder="100"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Button
                    type="button"
                    onClick={addSubject}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Subject
                  </Button>
                </div>
              </div>

              {/* Instructions Section */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                  Exam Instructions
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter exam instructions and guidelines for students..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 shadow-lg shadow-blue-500/20"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? 'Scheduling...' : 'Schedule Exam'}
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