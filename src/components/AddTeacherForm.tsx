import { useState } from 'react';
import { Upload, User, Save, RotateCcw } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PortalLayout } from './PortalLayout';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const REQUIRED_FIELDS = [
  'firstName', 'lastName', 'gender', 'dateOfBirth', 'employeeId',
  'designation', 'department', 'qualification', 'bloodGroup', 'religion',
  'email', 'phone', 'joiningDate', 'address', 'emergencyContact',
  'state', 'city', 'zipCode',
];

const INITIAL_FORM: Record<string, string> = {
  firstName: '', lastName: '', gender: '', dateOfBirth: '', employeeId: '',
  designation: '', department: '', qualification: '', experience: '',
  joiningDate: '', bloodGroup: '', religion: '', email: '', phone: '',
  address: '', city: '', state: '', zipCode: '', emergencyContact: '',
  salary: '', subjects: '', shortBio: '',
};

function getFieldError(name: string, value: string): string | null {
  if (REQUIRED_FIELDS.includes(name) && !value.trim()) return 'This field is required.';
  if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return 'Enter a valid email address.';
  if ((name === 'phone' || name === 'emergencyContact') && value && !/^\+?[0-9]{7,15}$/.test(value))
    return 'Enter a valid phone number (7–15 digits).';
  if (name === 'zipCode' && value && !/^[0-9]{4,10}$/.test(value))
    return 'Zip code must be 4–10 digits.';
  return null;
}

// Reusable input class builder
function inputCls(error: string | null) {
  return [
    'w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border rounded-lg text-slate-900',
    'placeholder-slate-400 focus:outline-none focus:ring-2 text-sm transition-colors',
    error
      ? 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
      : 'border-slate-300 focus:ring-blue-500/20 focus:border-blue-500',
  ].join(' ');
}

export function AddTeacherForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>(INITIAL_FORM);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // ── Derived per-field errors (only shown when touched) ──────────────────────
  const errors: Record<string, string | null> = {};
  for (const key of Object.keys(formData)) {
    errors[key] = touched[key] ? getFieldError(key, formData[key]) : null;
  }

  const hasAnyError = Object.keys(formData).some(
    (k) => getFieldError(k, formData[k]) !== null
  );

  // ── Handlers ────────────────────────────────────────────────────────────────
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

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setTouched({});
    setPhotoPreview(null);
    setPhotoFile(null);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Mark every field as touched so all errors surface at once
  //   const allTouched = Object.fromEntries(Object.keys(formData).map((k) => [k, true]));
  //   setTouched(allTouched);

  //   if (hasAnyError) {
  //     toast.error('Please fix the errors before submitting.');
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   try {
  //     const payload = new FormData();
  //     Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
  //     if (photoFile) payload.append('photo', photoFile);

  //     const response = await fetch('http://localhost:5258/api/teacher', {
  //       method: 'POST',
  //       body: payload,  
  //     });

  //     if (!response.ok) {
  //       const error = await response.json();
  //       throw new Error(error.message || 'Failed to add teacher');
  //     }

  //     toast.success('Teacher Added Successfully!', {
  //       description: `${formData.firstName} ${formData.lastName} has been added to the faculty.`,
  //     });
  //     setTimeout(() => navigate('/admin/teachers'), 1000);
  //   } catch (error) {
  //     toast.error('Failed to add teacher', {
  //       description: error instanceof Error ? error.message : 'Something went wrong.',
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = Object.fromEntries(Object.keys(formData).map((k) => [k, true]));
    setTouched(allTouched);

    if (hasAnyError) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      if (photoFile) payload.append('photo', photoFile);

      const response = await fetch('http://localhost:5258/api/teacher/AddWithPhoto', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add teacher');
      }

      toast.success('Teacher Added Successfully!', {
        description: `${formData.firstName} ${formData.lastName} has been added to the faculty.`,
      });
      setTimeout(() => navigate('/admin/teachers'), 1000);
    } catch (error) {
      toast.error('Failed to add teacher', {
        description: error instanceof Error ? error.message : 'Something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Field helpers ────────────────────────────────────────────────────────────
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

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Add New Teacher"
      breadcrumbs={['Home', 'Admin', 'Teachers', 'Add Teacher']}
    >
      <div className="space-y-6">
        <Card className="bg-white border border-slate-200">
          <div className="p-4 sm:p-6 lg:p-8">


            <form onSubmit={handleSubmit} noValidate>

              {/* ── Personal Information ───────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Personal Information
                </h3>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...fieldProps('firstName')} />
                    <ErrorMsg name="firstName" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...fieldProps('lastName')} />
                    <ErrorMsg name="lastName" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('gender')}>
                      <option value="">Select Gender *</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ErrorMsg name="gender" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input type="date" {...fieldProps('dateOfBirth')} />
                    <ErrorMsg name="dateOfBirth" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Blood Group <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('bloodGroup')}>
                      <option value="">Select Blood Group *</option>
                      {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
                        <option key={bg} value={bg}>{bg}</option>
                      ))}
                    </select>
                    <ErrorMsg name="bloodGroup" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Religion <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('religion')}>
                      <option value="">Select Religion *</option>
                      <option value="hinduism">Hinduism</option>
                      <option value="islam">Islam</option>
                      <option value="christianity">Christianity</option>
                      <option value="sikhism">Sikhism</option>
                      <option value="buddhism">Buddhism</option>
                      <option value="jainism">Jainism</option>
                      <option value="other">Other</option>
                    </select>
                    <ErrorMsg name="religion" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" {...fieldProps('email')} />
                    <ErrorMsg name="email" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" {...fieldProps('phone')} />
                    <ErrorMsg name="phone" />
                  </div>
                </div>
              </div>

              {/* ── Professional Information ───────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Professional Information
                </h3>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Employee ID <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...fieldProps('employeeId')} />
                    <ErrorMsg name="employeeId" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('designation')}>
                      <option value="">Select Designation *</option>
                      <option value="assistant">Assistant Teacher</option>
                      <option value="teacher">Teacher</option>
                      <option value="senior">Senior Teacher</option>
                      <option value="head">Head of Department</option>
                      <option value="principal">Principal</option>
                    </select>
                    <ErrorMsg name="designation" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('department')}>
                      <option value="">Select Department *</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="english">English</option>
                      <option value="social">Social Studies</option>
                      <option value="computer">Computer Science</option>
                      <option value="arts">Arts</option>
                      <option value="physical">Physical Education</option>
                    </select>
                    <ErrorMsg name="department" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Qualification <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('qualification')}>
                      <option value="">Select Qualification *</option>
                      <option value="phd">Ph.D.</option>
                      <option value="m.ed">M.Ed.</option>
                      <option value="b.ed">B.Ed.</option>
                      <option value="ma">M.A.</option>
                      <option value="msc">M.Sc.</option>
                      <option value="mba">MBA</option>
                      <option value="ba">B.A.</option>
                      <option value="bsc">B.Sc.</option>
                      <option value="btech">B.Tech.</option>
                      <option value="mtech">M.Tech.</option>
                      <option value="diploma">Diploma</option>
                      <option value="other">Other</option>
                    </select>
                    <ErrorMsg name="qualification" />
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Experience (Years)
                    </label>
                    <input type="number" min="0" {...fieldProps('experience')} />
                    <ErrorMsg name="experience" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Joining Date <span className="text-red-500">*</span>
                    </label>
                    <input type="date" {...fieldProps('joiningDate')} />
                    <ErrorMsg name="joiningDate" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Salary
                    </label>
                    <input type="number" min="0" {...fieldProps('salary')} />
                    <ErrorMsg name="salary" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Subjects Teaching
                    </label>
                    <select {...fieldProps('subjects')}>
                      <option value="">Select Subject</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="history">History</option>
                      <option value="geography">Geography</option>
                      <option value="economics">Economics</option>
                      <option value="political-science">Political Science</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="physical-education">Physical Education</option>
                      <option value="art">Art & Craft</option>
                      <option value="music">Music</option>
                      <option value="commerce">Commerce</option>
                      <option value="accountancy">Accountancy</option>
                      <option value="business-studies">Business Studies</option>
                      <option value="other">Other</option>
                    </select>
                    <ErrorMsg name="subjects" />
                  </div>
                </div>
              </div>

              {/* ── Address Information ────────────────────────────────── */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Address Information
                </h3>

                {/* Row 5 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...fieldProps('address')} />
                    <ErrorMsg name="address" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Emergency Contact <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" {...fieldProps('emergencyContact')} />
                    <ErrorMsg name="emergencyContact" />
                  </div>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select {...fieldProps('state')}>
                      <option value="">Select State *</option>
                      <option value="andhra-pradesh">Andhra Pradesh</option>
                      <option value="arunachal-pradesh">Arunachal Pradesh</option>
                      <option value="assam">Assam</option>
                      <option value="bihar">Bihar</option>
                      <option value="chhattisgarh">Chhattisgarh</option>
                      <option value="goa">Goa</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="himachal-pradesh">Himachal Pradesh</option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="kerala">Kerala</option>
                      <option value="madhya-pradesh">Madhya Pradesh</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="manipur">Manipur</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="odisha">Odisha</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="tripura">Tripura</option>
                      <option value="uttar-pradesh">Uttar Pradesh</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="west-bengal">West Bengal</option>
                      <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
                      <option value="chandigarh">Chandigarh</option>
                      <option value="dadra-nagar-haveli-daman-diu">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="delhi">Delhi</option>
                      <option value="jammu-kashmir">Jammu and Kashmir</option>
                      <option value="ladakh">Ladakh</option>
                      <option value="lakshadweep">Lakshadweep</option>
                      <option value="puducherry">Puducherry</option>
                    </select>
                    <ErrorMsg name="state" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...fieldProps('city')} />
                    <ErrorMsg name="city" />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input type="text" {...fieldProps('zipCode')} />
                    <ErrorMsg name="zipCode" />
                  </div>
                </div>
              </div>

              {/* ── Bio & Photo ────────────────────────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Short Bio
                  </label>
                  <textarea
                    name="shortBio"
                    value={formData.shortBio}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Upload Teacher Photo (150px × 150px)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Teacher preview"
                          className="w-32 h-32 object-cover rounded-lg border-2 border-slate-200 shadow-sm"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
                          <User className="w-12 h-12 text-slate-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center sm:items-start">
                      <label
                        htmlFor="photo-upload"
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-600 hover:bg-blue-100 hover:border-blue-300 transition-colors cursor-pointer text-sm font-medium"
                      >
                        <Upload className="w-4 h-4" />
                        Choose File
                      </label>
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <p className="text-xs text-slate-500 mt-2 text-center sm:text-left">
                        Recommended size: 150px × 150px
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Action Buttons ────────────────────────────────────── */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-slate-200">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Saving...' : 'Save Teacher'}
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