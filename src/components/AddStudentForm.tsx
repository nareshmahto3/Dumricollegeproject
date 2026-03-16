import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  GraduationCap, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  MapPin, 
  BookOpen, 
  Users, 
  ClipboardCheck,
  Check,
  Sparkles,
  Upload,
  FileText,
  IdCard,
  ArrowRight
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { PortalLayout } from './PortalLayout';

export function AddStudentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    nationality: '',
    religion: '',
    category: '',
    aadharNumber: '',
    
    // Contact Details
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Academic Details
    previousSchool: '',
    previousClass: '',
    previousPercentage: '',
    admittingToClass: '',
    section: '',
    rollNumber: '',
    admissionId: '',
    
    // Parent Details
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    motherEmail: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    annualIncome: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [studentId, setStudentId] = useState('');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const steps = [
    { 
      id: 1, 
      title: 'Personal Details', 
      icon: User,
      description: 'Basic information',
      color: 'blue'
    },
    { 
      id: 2, 
      title: 'Contact Information', 
      icon: MapPin,
      description: 'Address & contact',
      color: 'yellow'
    },
    { 
      id: 3, 
      title: 'Academic Details', 
      icon: BookOpen,
      description: 'Class & academic info',
      color: 'orange'
    },
    { 
      id: 4, 
      title: 'Parent Information', 
      icon: Users,
      description: 'Guardian details',
      color: 'purple'
    },
    { 
      id: 5, 
      title: 'Documents', 
      icon: Upload,
      description: 'Upload documents',
      color: 'indigo'
    },
    { 
      id: 6, 
      title: 'Review & Submit', 
      icon: ClipboardCheck,
      description: 'Verify all info',
      color: 'green'
    },
  ];

  const handleSubmit = () => {
    const generatedId = `STD${new Date().getFullYear()}${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    setStudentId(generatedId);
    
    toast.success('Student added successfully!', {
      description: `Student ID: ${generatedId}`,
      duration: 5000,
    });

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/admin/students');
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextStep = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentStepData = steps[currentStep - 1];

  const getStepColor = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        ring: 'ring-blue-100'
      },
      yellow: {
        bg: 'bg-yellow-500',
        light: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-600',
        gradient: 'from-yellow-500 to-yellow-600',
        ring: 'ring-yellow-100'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        gradient: 'from-orange-500 to-orange-600',
        ring: 'ring-orange-100'
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        gradient: 'from-purple-500 to-purple-600',
        ring: 'ring-purple-100'
      },
      indigo: {
        bg: 'bg-indigo-500',
        light: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        gradient: 'from-indigo-500 to-indigo-600',
        ring: 'ring-indigo-100'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        gradient: 'from-green-500 to-green-600',
        ring: 'ring-green-100'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <PortalLayout
      role="admin"
      userName="Stevie Zone"
      userRole="Admin"
      pageTitle="Add New Student"
      breadcrumbs={["Home", "Admin", "Students", "Add New Student"]}
    >
      <div className="space-y-6">
        {/* Back Button */}
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            onClick={() => navigate('/admin/students')}
            className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Students
          </Button>
        </div>

        {/* Modern Progress Stepper */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-sm"
        >
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 rounded-full hidden md:block" 
              style={{ marginLeft: '2.5rem', marginRight: '2.5rem' }}
            />
            <motion.div 
              className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hidden md:block"
              initial={{ width: 0 }}
              animate={{ 
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              style={{ marginLeft: '2.5rem', right: '2.5rem' }}
            />
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const isActive = currentStep === step.id;
                const isCompleted = completedSteps.includes(step.id) || currentStep > step.id;
                const StepIcon = step.icon;
                const colors = getStepColor(step.color);
                
                return (
                  <motion.div
                    key={step.id}
                    className="flex flex-col items-center flex-1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md ${
                        isCompleted 
                          ? `bg-gradient-to-br ${colors.gradient} text-white` 
                          : isActive 
                            ? `bg-white border-3 ${colors.border} ${colors.text}` 
                            : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                      }`}
                      animate={isActive ? {
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {isCompleted ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <StepIcon className="w-5 h-5" />
                      )}
                      
                      {isActive && (
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-20`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    <div className="mt-2 text-center hidden md:block">
                      <p className={`text-xs font-medium ${
                        isActive ? colors.text : isCompleted ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{step.description}</p>
                    </div>
                    
                    {/* Mobile: Show only active step title */}
                    {isActive && (
                      <div className="mt-1 text-center md:hidden">
                        <p className={`text-[10px] font-medium ${colors.text}`}>{step.title}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Form Content Container */}
        <div className="space-y-6">
          {/* Success Message */}
          <AnimatePresence>
            {studentId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="p-8 mb-8 bg-gradient-to-br from-green-500 to-green-600 border-0 shadow-2xl overflow-hidden relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32" />
                  </div>
                  
                  <div className="relative flex items-start gap-6">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 0.6, ease: "easeInOut" },
                        scale: { duration: 1, repeat: Infinity, repeatDelay: 2 }
                      }}
                      className="flex-shrink-0"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Student Added Successfully! 🎉
                      </h3>
                      <p className="text-green-100 mb-6">
                        The student has been successfully added to the system. Please save the Student ID for future reference.
                      </p>
                      
                      <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border-2 border-white/40">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-green-100 mb-1">Student ID</p>
                            <motion.p 
                              className="text-3xl font-bold text-white tracking-wider"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {studentId}
                            </motion.p>
                          </div>
                          <Sparkles className="w-8 h-8 text-white/80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Card className="overflow-hidden shadow-xl border-0 bg-white">
                {/* Card Header with Color Accent */}
                <div className={`h-2 bg-gradient-to-r ${getStepColor(currentStepData.color).gradient}`} />
                
                <div className="p-8">
                  {/* Step Title */}
                  <motion.div 
                    className="mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getStepColor(currentStepData.color).gradient} flex items-center justify-center shadow-lg`}>
                        <currentStepData.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
                        <p className="text-sm text-gray-600">{currentStepData.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 1: Personal Details */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { id: 'firstName', label: 'First Name', required: true, placeholder: 'Enter first name' },
                          { id: 'middleName', label: 'Middle Name', required: false, placeholder: 'Enter middle name' },
                          { id: 'lastName', label: 'Last Name', required: true, placeholder: 'Enter last name' },
                        ].map((field, idx) => (
                          <motion.div
                            key={field.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                          >
                            <Label htmlFor={field.id} className="text-sm font-medium text-gray-700 mb-2 block">
                              {field.label} {field.required && <span className="text-red-500">*</span>}
                            </Label>
                            <Input
                              id={field.id}
                              value={formData[field.id as keyof typeof formData]}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                              placeholder={field.placeholder}
                              className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                              required={field.required}
                            />
                          </motion.div>
                        ))}
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700 mb-2 block">
                            Date of Birth <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                            className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                            required
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-2 block">
                            Gender <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="gender"
                            value={formData.gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700"
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <Label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700 mb-2 block">
                            Blood Group
                          </Label>
                          <select
                            id="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700"
                          >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                          </select>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        >
                          <Label htmlFor="nationality" className="text-sm font-medium text-gray-700 mb-2 block">
                            Nationality <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="nationality"
                            value={formData.nationality}
                            onChange={(e) => handleInputChange('nationality', e.target.value)}
                            placeholder="e.g., Indian"
                            className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                            required
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 }}
                        >
                          <Label htmlFor="religion" className="text-sm font-medium text-gray-700 mb-2 block">
                            Religion
                          </Label>
                          <Input
                            id="religion"
                            value={formData.religion}
                            onChange={(e) => handleInputChange('religion', e.target.value)}
                            placeholder="Enter religion"
                            className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          <Label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2 block">
                            Category <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="category"
                            value={formData.category}
                            onChange={(e) => handleInputChange('category', e.target.value)}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700"
                            required
                          >
                            <option value="">Select Category</option>
                            <option value="general">General</option>
                            <option value="obc">OBC</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                            <option value="ews">EWS</option>
                          </select>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.3 }}
                        >
                          <Label htmlFor="aadharNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                            Aadhar Number
                          </Label>
                          <Input
                            id="aadharNumber"
                            value={formData.aadharNumber}
                            onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
                            placeholder="XXXX XXXX XXXX"
                            maxLength={12}
                            className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Contact Information */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="student@example.com"
                            className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl"
                            required
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="md:col-span-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                            Complete Address <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="House No., Street, Locality"
                            className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl"
                            required
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2 block">
                            City <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="Enter city"
                            className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl"
                            required
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Label htmlFor="state" className="text-sm font-medium text-gray-700 mb-2 block">
                            State <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            placeholder="Enter state"
                            className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl"
                            required
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          className="md:col-span-2"
                        >
                          <Label htmlFor="pincode" className="text-sm font-medium text-gray-700 mb-2 block">
                            Pincode <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="pincode"
                            value={formData.pincode}
                            onChange={(e) => handleInputChange('pincode', e.target.value)}
                            placeholder="123456"
                            maxLength={6}
                            className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl"
                            required
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Academic Details */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Label htmlFor="previousSchool" className="text-sm font-medium text-gray-700 mb-2 block">
                            Previous School
                          </Label>
                          <Input
                            id="previousSchool"
                            value={formData.previousSchool}
                            onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                            placeholder="Enter previous school name"
                            className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Label htmlFor="previousClass" className="text-sm font-medium text-gray-700 mb-2 block">
                            Previous Class
                          </Label>
                          <Input
                            id="previousClass"
                            value={formData.previousClass}
                            onChange={(e) => handleInputChange('previousClass', e.target.value)}
                            placeholder="e.g., Class 9"
                            className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Label htmlFor="previousPercentage" className="text-sm font-medium text-gray-700 mb-2 block">
                            Previous Percentage
                          </Label>
                          <Input
                            id="previousPercentage"
                            type="number"
                            value={formData.previousPercentage}
                            onChange={(e) => handleInputChange('previousPercentage', e.target.value)}
                            placeholder="85.5"
                            min="0"
                            max="100"
                            step="0.01"
                            className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <Label htmlFor="admittingToClass" className="text-sm font-medium text-gray-700 mb-2 block">
                            Admitting to Class <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="admittingToClass"
                            value={formData.admittingToClass}
                            onChange={(e) => handleInputChange('admittingToClass', e.target.value)}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-700"
                            required
                          >
                            <option value="">Select Class</option>
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
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Label htmlFor="section" className="text-sm font-medium text-gray-700 mb-2 block">
                            Section <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="section"
                            value={formData.section}
                            onChange={(e) => handleInputChange('section', e.target.value)}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-700"
                            required
                          >
                            <option value="">Select Section</option>
                            <option value="A">Section A</option>
                            <option value="B">Section B</option>
                            <option value="C">Section C</option>
                            <option value="D">Section D</option>
                          </select>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <Label htmlFor="rollNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                            Roll Number
                          </Label>
                          <Input
                            id="rollNumber"
                            value={formData.rollNumber}
                            onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                            placeholder="Enter roll number"
                            className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl"
                          />
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        >
                          <Label htmlFor="admissionId" className="text-sm font-medium text-gray-700 mb-2 block">
                            Admission ID
                          </Label>
                          <Input
                            id="admissionId"
                            value={formData.admissionId}
                            onChange={(e) => handleInputChange('admissionId', e.target.value)}
                            placeholder="Auto-generated"
                            className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl"
                            disabled
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Parent Information */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="space-y-8">
                        {/* Father's Details */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-purple-200">
                            Father's Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <Label htmlFor="fatherName" className="text-sm font-medium text-gray-700 mb-2 block">
                                Father's Name <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="fatherName"
                                value={formData.fatherName}
                                onChange={(e) => handleInputChange('fatherName', e.target.value)}
                                placeholder="Enter father's name"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                                required
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              <Label htmlFor="fatherOccupation" className="text-sm font-medium text-gray-700 mb-2 block">
                                Occupation
                              </Label>
                              <Input
                                id="fatherOccupation"
                                value={formData.fatherOccupation}
                                onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                                placeholder="Enter occupation"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <Label htmlFor="fatherPhone" className="text-sm font-medium text-gray-700 mb-2 block">
                                Phone Number <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="fatherPhone"
                                type="tel"
                                value={formData.fatherPhone}
                                onChange={(e) => handleInputChange('fatherPhone', e.target.value)}
                                placeholder="+91 98765 43210"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                                required
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                            >
                              <Label htmlFor="fatherEmail" className="text-sm font-medium text-gray-700 mb-2 block">
                                Email Address
                              </Label>
                              <Input
                                id="fatherEmail"
                                type="email"
                                value={formData.fatherEmail}
                                onChange={(e) => handleInputChange('fatherEmail', e.target.value)}
                                placeholder="father@example.com"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Mother's Details */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-purple-200">
                            Mother's Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 }}
                            >
                              <Label htmlFor="motherName" className="text-sm font-medium text-gray-700 mb-2 block">
                                Mother's Name <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="motherName"
                                value={formData.motherName}
                                onChange={(e) => handleInputChange('motherName', e.target.value)}
                                placeholder="Enter mother's name"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                                required
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.9 }}
                            >
                              <Label htmlFor="motherOccupation" className="text-sm font-medium text-gray-700 mb-2 block">
                                Occupation
                              </Label>
                              <Input
                                id="motherOccupation"
                                value={formData.motherOccupation}
                                onChange={(e) => handleInputChange('motherOccupation', e.target.value)}
                                placeholder="Enter occupation"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.0 }}
                            >
                              <Label htmlFor="motherPhone" className="text-sm font-medium text-gray-700 mb-2 block">
                                Phone Number <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="motherPhone"
                                type="tel"
                                value={formData.motherPhone}
                                onChange={(e) => handleInputChange('motherPhone', e.target.value)}
                                placeholder="+91 98765 43210"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                                required
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.1 }}
                            >
                              <Label htmlFor="motherEmail" className="text-sm font-medium text-gray-700 mb-2 block">
                                Email Address
                              </Label>
                              <Input
                                id="motherEmail"
                                type="email"
                                value={formData.motherEmail}
                                onChange={(e) => handleInputChange('motherEmail', e.target.value)}
                                placeholder="mother@example.com"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Guardian Details & Income */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-purple-200">
                            Guardian & Income Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.2 }}
                            >
                              <Label htmlFor="guardianName" className="text-sm font-medium text-gray-700 mb-2 block">
                                Guardian Name (if different)
                              </Label>
                              <Input
                                id="guardianName"
                                value={formData.guardianName}
                                onChange={(e) => handleInputChange('guardianName', e.target.value)}
                                placeholder="Enter guardian name"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.3 }}
                            >
                              <Label htmlFor="guardianRelation" className="text-sm font-medium text-gray-700 mb-2 block">
                                Relation with Guardian
                              </Label>
                              <Input
                                id="guardianRelation"
                                value={formData.guardianRelation}
                                onChange={(e) => handleInputChange('guardianRelation', e.target.value)}
                                placeholder="e.g., Uncle, Grandfather"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.4 }}
                            >
                              <Label htmlFor="guardianPhone" className="text-sm font-medium text-gray-700 mb-2 block">
                                Guardian Phone
                              </Label>
                              <Input
                                id="guardianPhone"
                                type="tel"
                                value={formData.guardianPhone}
                                onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                                placeholder="+91 98765 43210"
                                className="h-12 border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                              />
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.5 }}
                            >
                              <Label htmlFor="annualIncome" className="text-sm font-medium text-gray-700 mb-2 block">
                                Annual Family Income
                              </Label>
                              <select
                                id="annualIncome"
                                value={formData.annualIncome}
                                onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                                className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-700"
                              >
                                <option value="">Select Income Range</option>
                                <option value="below-2">Below 2 Lakhs</option>
                                <option value="2-5">2-5 Lakhs</option>
                                <option value="5-10">5-10 Lakhs</option>
                                <option value="10-20">10-20 Lakhs</option>
                                <option value="above-20">Above 20 Lakhs</option>
                              </select>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Documents */}
                  {currentStep === 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="space-y-6">
                        {/* Photo Upload */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200"
                        >
                          <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                              {photoPreview ? (
                                <img
                                  src={photoPreview}
                                  alt="Student preview"
                                  className="w-32 h-32 object-cover rounded-lg border-4 border-white shadow-lg"
                                />
                              ) : (
                                <div className="w-32 h-32 bg-white border-4 border-dashed border-indigo-300 rounded-lg flex items-center justify-center">
                                  <User className="w-16 h-16 text-indigo-400" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                              <h4 className="text-lg font-semibold text-indigo-900 mb-2">
                                Student Photo
                              </h4>
                              <p className="text-sm text-indigo-600 mb-4">
                                Upload a recent passport-size photograph (150x150px)
                              </p>
                              <label
                                htmlFor="photo-upload"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer font-medium"
                              >
                                <Upload className="w-4 h-4" />
                                Choose Photo
                              </label>
                              <input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="hidden"
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Document List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { id: 'birthCert', label: 'Birth Certificate', icon: FileText },
                            { id: 'aadhar', label: 'Aadhar Card', icon: IdCard },
                            { id: 'marksheet', label: 'Previous Marksheet', icon: FileText },
                            { id: 'tc', label: 'Transfer Certificate', icon: FileText },
                          ].map((doc, idx) => (
                            <motion.div
                              key={doc.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                  <doc.icon className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-medium text-gray-900">{doc.label}</h5>
                                  <p className="text-xs text-gray-500">PDF or Image (Max 2MB)</p>
                                </div>
                                <label className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors cursor-pointer text-sm font-medium">
                                  Upload
                                  <input type="file" className="hidden" accept=".pdf,image/*" />
                                </label>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 6: Review & Submit */}
                  {currentStep === 6 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="space-y-6">
                        <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-green-900 mb-2">
                                Review Your Information
                              </h3>
                              <p className="text-green-700 text-sm">
                                Please review all the information carefully before submitting. Once submitted, the student will be added to the system.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Personal Info
                            </h4>
                            <div className="text-sm text-blue-700 space-y-1">
                              <p><strong>Name:</strong> {formData.firstName} {formData.middleName} {formData.lastName}</p>
                              <p><strong>DOB:</strong> {formData.dateOfBirth}</p>
                              <p><strong>Gender:</strong> {formData.gender}</p>
                            </div>
                          </div>

                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              Contact Info
                            </h4>
                            <div className="text-sm text-yellow-700 space-y-1">
                              <p><strong>Phone:</strong> {formData.phone}</p>
                              <p><strong>City:</strong> {formData.city}</p>
                              <p><strong>State:</strong> {formData.state}</p>
                            </div>
                          </div>

                          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                              <BookOpen className="w-4 h-4" />
                              Academic Info
                            </h4>
                            <div className="text-sm text-orange-700 space-y-1">
                              <p><strong>Class:</strong> {formData.admittingToClass}</p>
                              <p><strong>Section:</strong> {formData.section}</p>
                              <p><strong>Previous School:</strong> {formData.previousSchool || 'N/A'}</p>
                            </div>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Parent Info
                            </h4>
                            <div className="text-sm text-purple-700 space-y-1">
                              <p><strong>Father:</strong> {formData.fatherName}</p>
                              <p><strong>Mother:</strong> {formData.motherName}</p>
                              <p><strong>Father's Phone:</strong> {formData.fatherPhone}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <motion.div 
                    className="flex justify-between mt-12 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentStep > 1 ? (
                      <Button
                        type="button"
                        onClick={handlePreviousStep}
                        variant="outline"
                        className="px-6 border-2"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                    ) : (
                      <div />
                    )}

                    {currentStep < steps.length ? (
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                      >
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        className="px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Submit & Add Student
                      </Button>
                    )}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PortalLayout>
  );
}
