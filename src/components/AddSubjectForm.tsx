import { useState } from 'react';
import { BookOpen, Save, RotateCcw, Plus, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { useNavigate } from 'react-router';
import { toast } from 'sonner@2.0.3';

export function AddSubjectForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subjectName: '',
    subjectCode: '',
    class: '',
    category: '',
    credits: '',
    passingMarks: '',
    totalMarks: '',
    practicalMarks: '',
    theoryMarks: '',
    teacherAssigned: '',
    description: '',
  });

  const [topics, setTopics] = useState<string[]>(['']);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicChange = (index: number, value: string) => {
    const newTopics = [...topics];
    newTopics[index] = value;
    setTopics(newTopics);
  };

  const addTopic = () => {
    setTopics([...topics, '']);
  };

  const removeTopic = (index: number) => {
    const newTopics = topics.filter((_, i) => i !== index);
    setTopics(newTopics);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subject form submitted:', { ...formData, topics });

    toast.success('Subject Added Successfully!', {
      description: `${formData.subjectName} (${formData.subjectCode}) has been added to the curriculum.`,
    });

    setTimeout(() => {
      navigate('/admin/subjects');
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      subjectName: '',
      subjectCode: '',
      class: '',
      category: '',
      credits: '',
      passingMarks: '',
      totalMarks: '',
      practicalMarks: '',
      theoryMarks: '',
      teacherAssigned: '',
      description: '',
    });
    setTopics(['']);
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Add New Subject"
      breadcrumbs={["Home", "Admin", "Subjects", "Add Subject"]}
    >
      <div className="space-y-6">
        <Card className="bg-white border border-slate-200">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Subject Information</h2>
              <p className="text-sm text-slate-600 mt-1">Fill in the details to add a new subject to the curriculum</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Information Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Basic Information</h3>
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Subject Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subjectName"
                      value={formData.subjectName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Advanced Mathematics"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Subject Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subjectCode"
                      value={formData.subjectCode}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., MATH101"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
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
                      <option value="core">Core Subject</option>
                      <option value="elective">Elective</option>
                      <option value="language">Language</option>
                      <option value="science">Science</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="social-science">Social Science</option>
                      <option value="arts">Arts</option>
                      <option value="physical-education">Physical Education</option>
                      <option value="vocational">Vocational</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Credits
                    </label>
                    <input
                      type="number"
                      name="credits"
                      value={formData.credits}
                      onChange={handleInputChange}
                      min="0"
                      step="0.5"
                      placeholder="e.g., 4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Teacher Assigned
                    </label>
                    <select
                      name="teacherAssigned"
                      value={formData.teacherAssigned}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Select Teacher</option>
                      <option value="teacher1">Dr. John Smith</option>
                      <option value="teacher2">Prof. Sarah Johnson</option>
                      <option value="teacher3">Mr. Michael Brown</option>
                      <option value="teacher4">Ms. Emily Davis</option>
                      <option value="teacher5">Dr. Robert Wilson</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Marks Distribution Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Marks Distribution</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Total Marks <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="totalMarks"
                      value={formData.totalMarks}
                      onChange={handleInputChange}
                      required
                      min="0"
                      placeholder="e.g., 100"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Passing Marks <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="passingMarks"
                      value={formData.passingMarks}
                      onChange={handleInputChange}
                      required
                      min="0"
                      placeholder="e.g., 35"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Theory Marks
                    </label>
                    <input
                      type="number"
                      name="theoryMarks"
                      value={formData.theoryMarks}
                      onChange={handleInputChange}
                      min="0"
                      placeholder="e.g., 70"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Practical Marks
                    </label>
                    <input
                      type="number"
                      name="practicalMarks"
                      value={formData.practicalMarks}
                      onChange={handleInputChange}
                      min="0"
                      placeholder="e.g., 30"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Topics/Syllabus Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">Topics/Syllabus</h3>
                
                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => handleTopicChange(index, e.target.value)}
                        placeholder={`Topic ${index + 1}`}
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                      {topics.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeTopic(index)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={addTopic}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Topic
                  </Button>
                </div>
              </div>

              {/* Description Section */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter subject description and objectives..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 shadow-lg shadow-blue-500/20"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Subject
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
