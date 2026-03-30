import { useState } from 'react';
import { ArrowLeft, Save, BookOpen, Users, Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { PortalLayout } from './PortalLayout';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

// ── Validation config ────────────────────────────────────────────────────────
const REQUIRED_FIELDS = [
  'className', 'section', 'classTeacher', 'roomNumber',
  'capacity', 'academicYear', 'startDate',
];

const INITIAL_FORM: Record<string, string> = {
  className: '', section: '', classTeacher: '', roomNumber: '',
  capacity: '', academicYear: '', startDate: '',
};

function getFieldError(name: string, value: string): string | null {
  if (REQUIRED_FIELDS.includes(name) && !value.trim()) return 'This field is required.';
  if (name === 'capacity' && value && (isNaN(Number(value)) || Number(value) < 1))
    return 'Capacity must be a positive number.';
  return null;
}

function inputCls(error: string | null) {
  return [
    'w-full px-4 py-2.5 bg-white border-2 rounded-lg text-slate-900',
    'placeholder-slate-400 focus:outline-none focus:ring-2 text-sm transition-colors',
    error
      ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
      : 'border-slate-300 focus:ring-blue-500/20 focus:border-blue-500',
  ].join(' ');
}

// ── Component ────────────────────────────────────────────────────────────────
export function AddNewClass() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>(INITIAL_FORM);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Derived per-field errors (only shown when touched)
  const errors: Record<string, string | null> = {};
  for (const key of Object.keys(formData)) {
    errors[key] = touched[key] ? getFieldError(key, formData[key]) : null;
  }

  const hasAnyError = Object.keys(formData).some(
    (k) => getFieldError(k, formData[k]) !== null
  );

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to surface all errors at once
    const allTouched = Object.fromEntries(Object.keys(formData).map((k) => [k, true]));
    setTouched(allTouched);

    if (hasAnyError) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    setIsLoading(true);
    try {
      const apiData = {
        className: formData.className,
        section: formData.section,
        classTeacherId: parseInt(formData.classTeacher),
        roomNumber: formData.roomNumber,
        capacity: parseInt(formData.capacity),
        academicYear: formData.academicYear,
        startDate: new Date(formData.startDate),
      };

      const response = await fetch('https://localhost:5258/api/Class', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        toast.success('Class Added Successfully!', {
          description: `${formData.className} - Section ${formData.section} has been added to the system.`,
        });
        setTimeout(() => navigate('/admin/classes'), 1000);
      } else {
        const error = await response.json();
        toast.error('Failed to add class', {
          description: error.message || 'An error occurred while adding the class.',
        });
      }
    } catch (error) {
      toast.error('Failed to add class', {
        description: 'Network error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ── Field helpers ────────────────────────────────────────────────────────────
  const fieldProps = (name: string) => ({
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    className: inputCls(errors[name]),
  });

  const ErrorMsg = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-500">{errors[name]}</p>
    ) : null;

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Add New Class"
      breadcrumbs={['Home', 'Admin', 'Classes', 'Add New Class']}
    >
      <div className="space-y-6">
        <Button
          variant="default"
          onClick={() => navigate('/admin/classes')}
          className="text-black hover:text-white hover:bg-slate-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Classes
        </Button>

        <Card className="p-8 bg-white border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Add New Class</h2>
              <p className="text-sm text-slate-600">Fill in the details to create a new class</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* ── Basic Information ──────────────────────────────────── */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Class Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Grade 10"
                    {...fieldProps('className')}
                  />
                  <ErrorMsg name="className" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Section <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., A, B, C"
                    {...fieldProps('section')}
                  />
                  <ErrorMsg name="section" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Class Teacher <span className="text-red-500">*</span>
                  </label>
                  <select {...fieldProps('classTeacher')}>
                    <option value="">Select Teacher</option>
                    <option value="1">Prof. Rajesh Kumar</option>
                    <option value="2">Dr. Priya Sharma</option>
                    <option value="3">Mr. Anil Verma</option>
                    <option value="4">Ms. Meera Patel</option>
                    <option value="5">Dr. Suresh Reddy</option>
                  </select>
                  <ErrorMsg name="classTeacher" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Academic Year <span className="text-red-500">*</span>
                  </label>
                  <select {...fieldProps('academicYear')}>
                    <option value="">Select Academic Year</option>
                    <option value="2025-2026">2025-2026</option>
                    <option value="2026-2027">2026-2027</option>
                    <option value="2027-2028">2027-2028</option>
                  </select>
                  <ErrorMsg name="academicYear" />
                </div>
              </div>
            </div>

            {/* ── Class Details ──────────────────────────────────────── */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Class Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Room Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g., 101"
                      {...fieldProps('roomNumber')}
                      className={inputCls(errors['roomNumber']).replace('px-4', 'pl-10 pr-4')}
                    />
                  </div>
                  <ErrorMsg name="roomNumber" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Capacity <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    <input
                      type="number"
                      placeholder="e.g., 40"
                      min="1"
                      {...fieldProps('capacity')}
                      className={inputCls(errors['capacity']).replace('px-4', 'pl-10 pr-4')}
                    />
                  </div>
                  <ErrorMsg name="capacity" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    <input
                      type="date"
                      {...fieldProps('startDate')}
                      className={inputCls(errors['startDate']).replace('px-4', 'pl-10 pr-4')}
                    />
                  </div>
                  <ErrorMsg name="startDate" />
                </div>
              </div>
            </div>

            {/* ── Action Buttons ─────────────────────────────────────── */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-200">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/classes')}
                className="px-6 border-slate-300 text-slate-700 hover:bg-slate-50"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-8 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400"
                disabled={isLoading}
              >
                {isLoading ? (
                  'Saving...'
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Class
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </PortalLayout>
  );
}