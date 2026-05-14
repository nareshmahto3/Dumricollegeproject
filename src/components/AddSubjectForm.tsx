import { useState } from 'react';
import { BookOpen, Save, RotateCcw, Plus, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const REQUIRED_FIELDS = [
  'subjectName', 'subjectCode', 'class', 'category', 'totalMarks', 'passingMarks',
];

const INITIAL_FORM: Record<string, string> = {
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
};

function getFieldError(name: string, value: string, allValues: Record<string, string>): string | null {
  if (REQUIRED_FIELDS.includes(name) && !value.trim()) return 'This field is required.';

  const num = parseFloat(value);

  if (name === 'totalMarks' && value && (isNaN(num) || num <= 0))
    return 'Total marks must be greater than 0.';

  if (name === 'passingMarks' && value) {
    if (isNaN(num) || num < 0) return 'Passing marks must be a positive number.';
    const total = parseFloat(allValues.totalMarks);
    if (!isNaN(total) && num > total) return 'Passing marks cannot exceed total marks.';
  }

  if (name === 'theoryMarks' && value) {
    const practical = parseFloat(allValues.practicalMarks) || 0;
    const total = parseFloat(allValues.totalMarks);
    if (!isNaN(total) && num + practical > total)
      return 'Theory + practical marks exceed total marks.';
  }

  if (name === 'practicalMarks' && value) {
    const theory = parseFloat(allValues.theoryMarks) || 0;
    const total = parseFloat(allValues.totalMarks);
    if (!isNaN(total) && num + theory > total)
      return 'Theory + practical marks exceed total marks.';
  }

  if (name === 'credits' && value && (isNaN(num) || num < 0))
    return 'Credits must be a positive number.';

  return null;
}

function inputCls(error: string | null) {
  return [
    'w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border rounded-lg text-slate-900',
    'placeholder-slate-400 focus:outline-none focus:ring-2 text-sm transition-colors',
    error
      ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
      : 'border-slate-300 focus:ring-blue-500/20 focus:border-blue-500',
  ].join(' ');
}

export function AddSubjectForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>(INITIAL_FORM);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [topics, setTopics] = useState<string[]>(['']);

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

  const handleTopicChange = (index: number, value: string) => {
    const updated = [...topics];
    updated[index] = value;
    setTopics(updated);
  };

  const addTopic = () => setTopics([...topics, '']);

  const removeTopic = (index: number) =>
    setTopics(topics.filter((_, i) => i !== index));

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setTouched({});
    setTopics(['']);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched so errors surface at once
    setTouched(Object.fromEntries(Object.keys(formData).map((k) => [k, true])));

    if (hasAnyError) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        topics: topics.filter((t) => t.trim() !== ''),
      };

      const response = await fetch('http://localhost:5258/subjects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add subject');
      }

      toast.success('Subject Added Successfully!', {
        description: `${formData.subjectName} (${formData.subjectCode}) has been added to the curriculum.`,
      });

      setTimeout(() => navigate('/admin/subjects'), 1000);
    } catch (error) {
      toast.error('Failed to add subject', {
        description: error instanceof Error ? error.message : 'Something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Helpers ────────────────────────────────────────────────────────────────
  const fieldProps = (name: string) => ({
    name,
    value: formData[name],
    onChange: handleInputChange,
    onBlur: handleBlur,
    className: inputCls(errors[name]),
  });

  const ErrorMsg = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-500">{errors[name]}</p>
    ) : null;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Add New Subject"
      breadcrumbs={['Home', 'Admin', 'Subjects', 'Add Subject']}
    >
      <div className="space-y-6">
        <Card className="bg-white border border-slate-200">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Subject Information</h2>
              <p className="text-sm text-slate-600 mt-1">
                Fill in the details to add a new subject to the curriculum
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* ── Basic Information ──────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Basic Information
                </h3>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Subject Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Advanced Mathematics"
                      {...fieldProps('subjectName')}
                    />
                    <ErrorMsg name="subjectName" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Subject Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., MATH101"
                      {...fieldProps('subjectCode')}
                    />
                    <ErrorMsg name="subjectCode" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('class')}>
                      <option value="">Select Class *</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1)}>
                          Class {i + 1}
                        </option>
                      ))}
                    </select>
                    <ErrorMsg name="class" />
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
                    <ErrorMsg name="category" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Credits
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="e.g., 4"
                      {...fieldProps('credits')}
                    />
                    <ErrorMsg name="credits" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Teacher Assigned
                    </label>
                    <select {...fieldProps('teacherAssigned')}>
                      <option value="">Select Teacher</option>
                      <option value="teacher1">Dr. John Smith</option>
                      <option value="teacher2">Prof. Sarah Johnson</option>
                      <option value="teacher3">Mr. Michael Brown</option>
                      <option value="teacher4">Ms. Emily Davis</option>
                      <option value="teacher5">Dr. Robert Wilson</option>
                    </select>
                    <ErrorMsg name="teacherAssigned" />
                  </div>
                </div>
              </div>

              {/* ── Marks Distribution ─────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Marks Distribution
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Total Marks <span className="text-red-500">*</span>
                    </label>
                    <input type="number" min="0" placeholder="e.g., 100" {...fieldProps('totalMarks')} />
                    <ErrorMsg name="totalMarks" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Passing Marks <span className="text-red-500">*</span>
                    </label>
                    <input type="number" min="0" placeholder="e.g., 35" {...fieldProps('passingMarks')} />
                    <ErrorMsg name="passingMarks" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Theory Marks
                    </label>
                    <input type="number" min="0" placeholder="e.g., 70" {...fieldProps('theoryMarks')} />
                    <ErrorMsg name="theoryMarks" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Practical Marks
                    </label>
                    <input type="number" min="0" placeholder="e.g., 30" {...fieldProps('practicalMarks')} />
                    <ErrorMsg name="practicalMarks" />
                  </div>
                </div>
              </div>

              {/* ── Topics / Syllabus ──────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Topics / Syllabus
                </h3>

                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => handleTopicChange(index, e.target.value)}
                        placeholder={`Topic ${index + 1}`}
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-colors"
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

              {/* ── Description ───────────────────────────────────────── */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  rows={4}
                  placeholder="Enter subject description and objectives..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500  text-sm transition-colors"
                />
              </div>

              {/* ── Action Buttons ─────────────────────────────────────── */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Saving...' : 'Save Subject'}
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