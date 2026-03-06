import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  GraduationCap, 
  Send, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  MapPin, 
  BookOpen, 
  Users, 
  ClipboardCheck,
  ArrowRight,
  Check,
  Sparkles,
  Upload,
  FileText,
  Download
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';
import { motion, AnimatePresence } from 'motion/react';
import { DocumentUploadSection } from './DocumentUploadSection';

export function AdmissionApplicationForm() {
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
    applyingForClass: '',
    
    // Parent Details
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    motherEmail: '',
    annualIncome: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [applicationId, setApplicationId] = useState('');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [documents, setDocuments] = useState({
    photo: null as File | null,
    birthCertificate: null as File | null,
    previousMarksheet: null as File | null,
    transferCertificate: null as File | null,
    aadharCard: null as File | null,
  });

  const steps = [
    { 
      id: 1, 
      title: 'Personal Details', 
      icon: User,
      description: 'Basic information about the student',
      color: 'blue'
    },
    { 
      id: 2, 
      title: 'Contact Information', 
      icon: MapPin,
      description: 'Address and contact details',
      color: 'yellow'
    },
    { 
      id: 3, 
      title: 'Academic Details', 
      icon: BookOpen,
      description: 'Previous education information',
      color: 'orange'
    },
    { 
      id: 4, 
      title: 'Parent Information', 
      icon: Users,
      description: 'Guardian and family details',
      color: 'purple'
    },
    { 
      id: 5, 
      title: 'Documents', 
      icon: Upload,
      description: 'Upload required documents',
      color: 'indigo'
    },
    { 
      id: 6, 
      title: 'Review & Submit', 
      icon: ClipboardCheck,
      description: 'Verify all information',
      color: 'green'
    },
  ];



  const handleSubmit = () => {
    const generatedId = `APP${new Date().getFullYear()}${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    setApplicationId(generatedId);
    
    toast.success('Application submitted successfully!', {
      description: `Your Application ID is ${generatedId}. Please save this for future reference.`,
      duration: 5000,
    });
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

  const handleDocumentChange = (docType: keyof typeof documents, file: File | null) => {
    setDocuments({ ...documents, [docType]: file });
  };

  const handleDownloadApplication = () => {
    // In a real app, this would generate a PDF
    toast.success('Application downloaded successfully!', {
      description: 'Your application has been saved to your downloads folder.',
    });
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
    <div className="h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col overflow-hidden">
      {/* Modern Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border-b shadow-sm z-50 backdrop-blur-lg bg-white/90 flex-shrink-0"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Admission Application</h3>
                <p className="text-xs text-gray-600">Academic Year 2026-27</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modern Progress Stepper - Fixed */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-3 border-b border-white/50 backdrop-blur-sm flex-shrink-0"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
        </div>
      </motion.div>

      {/* Scrollable Form Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="h-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Success Message */}
          <AnimatePresence>
            {applicationId && (
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
                      Application Submitted Successfully! 🎉
                    </h3>
                    <p className="text-green-100 mb-6">
                      Your application has been submitted successfully. Please save your Application ID for future reference.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border-2 border-white/40">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-100 mb-1">Application ID</p>
                          <motion.p 
                            className="text-3xl font-bold text-white tracking-wider"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {applicationId}
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
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          className="h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl"
                          required
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
                        className="md:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Label htmlFor="previousSchool" className="text-sm font-medium text-gray-700 mb-2 block">
                          Previous School Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="previousSchool"
                          value={formData.previousSchool}
                          onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                          placeholder="Enter previous school name"
                          className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl"
                          required
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Label htmlFor="previousClass" className="text-sm font-medium text-gray-700 mb-2 block">
                          Last Class Completed <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="previousClass"
                          value={formData.previousClass}
                          onChange={(e) => handleInputChange('previousClass', e.target.value)}
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-700"
                          required
                        >
                          <option value="">Select Class</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
                          ))}
                        </select>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Label htmlFor="previousPercentage" className="text-sm font-medium text-gray-700 mb-2 block">
                          Previous Class Percentage <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="previousPercentage"
                          type="number"
                          value={formData.previousPercentage}
                          onChange={(e) => handleInputChange('previousPercentage', e.target.value)}
                          placeholder="85.5"
                          min="0"
                          max="100"
                          step="0.1"
                          className="h-12 border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl"
                          required
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Label htmlFor="applyingForClass" className="text-sm font-medium text-gray-700 mb-2 block">
                          Applying For Class <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="applyingForClass"
                          value={formData.applyingForClass}
                          onChange={(e) => handleInputChange('applyingForClass', e.target.value)}
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-700"
                          required
                        >
                          <option value="">Select Class</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
                          ))}
                        </select>
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
                    className="space-y-8"
                  >
                    {/* Father's Details */}
                    <motion.div 
                      className="p-6 rounded-2xl border-2 border-blue-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-blue-900 mb-6 flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Father's Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <Label htmlFor="fatherName" className="text-sm font-medium text-gray-700 mb-2 block">
                            Father's Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="fatherName"
                            value={formData.fatherName}
                            onChange={(e) => handleInputChange('fatherName', e.target.value)}
                            placeholder="Enter father's name"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="fatherOccupation" className="text-sm font-medium text-gray-700 mb-2 block">
                            Occupation <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="fatherOccupation"
                            value={formData.fatherOccupation}
                            onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                            placeholder="Enter occupation"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="fatherPhone" className="text-sm font-medium text-gray-700 mb-2 block">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="fatherPhone"
                            type="tel"
                            value={formData.fatherPhone}
                            onChange={(e) => handleInputChange('fatherPhone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="fatherEmail" className="text-sm font-medium text-gray-700 mb-2 block">
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="fatherEmail"
                            type="email"
                            value={formData.fatherEmail}
                            onChange={(e) => handleInputChange('fatherEmail', e.target.value)}
                            placeholder="father@example.com"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Mother's Details */}
                    <motion.div 
                      className="p-6 rounded-2xl border-2 border-pink-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="text-lg font-semibold text-pink-900 mb-6 flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Mother's Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <Label htmlFor="motherName" className="text-sm font-medium text-gray-700 mb-2 block">
                            Mother's Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="motherName"
                            value={formData.motherName}
                            onChange={(e) => handleInputChange('motherName', e.target.value)}
                            placeholder="Enter mother's name"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="motherOccupation" className="text-sm font-medium text-gray-700 mb-2 block">
                            Occupation <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="motherOccupation"
                            value={formData.motherOccupation}
                            onChange={(e) => handleInputChange('motherOccupation', e.target.value)}
                            placeholder="Enter occupation"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="motherPhone" className="text-sm font-medium text-gray-700 mb-2 block">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="motherPhone"
                            type="tel"
                            value={formData.motherPhone}
                            onChange={(e) => handleInputChange('motherPhone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="motherEmail" className="text-sm font-medium text-gray-700 mb-2 block">
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="motherEmail"
                            type="email"
                            value={formData.motherEmail}
                            onChange={(e) => handleInputChange('motherEmail', e.target.value)}
                            placeholder="mother@example.com"
                            className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Annual Income */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Label htmlFor="annualIncome" className="text-sm font-medium text-gray-700 mb-2 block">
                        Annual Family Income <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="annualIncome"
                        value={formData.annualIncome}
                        onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                        className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-700"
                        required
                      >
                        <option value="">Select Income Range</option>
                        <option value="below-2.5">Below ₹2.5 Lakhs</option>
                        <option value="2.5-5">₹2.5 - 5 Lakhs</option>
                        <option value="5-10">₹5 - 10 Lakhs</option>
                        <option value="10-20">₹10 - 20 Lakhs</option>
                        <option value="above-20">Above ₹20 Lakhs</option>
                      </select>
                    </motion.div>
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
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-2 border-indigo-200">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Upload className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-indigo-900 mb-3">Upload Required Documents</h4>
                              <ul className="space-y-2 text-sm text-indigo-800">
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  Upload clear, legible scanned copies
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  Supported formats: PDF, JPG, PNG (Max 5MB each)
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  All documents are mandatory for admission
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </motion.div>

                      {/* Document Upload Section */}
                      <DocumentUploadSection 
                        documents={documents} 
                        onDocumentChange={handleDocumentChange} 
                      />
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
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                              <AlertCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-blue-900 mb-3">Before You Submit</h4>
                              <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  Please review all information carefully
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  Ensure all mandatory fields are filled correctly
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  All required documents have been uploaded
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  After submission, you'll receive an Application ID
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </motion.div>

                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[
                          { label: 'Student Name', value: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim() || 'Not provided' },
                          { label: 'Applying For', value: formData.applyingForClass || 'Not specified' },
                          { label: 'Email', value: formData.email || 'Not provided' },
                          { label: 'Phone', value: formData.phone || 'Not provided' },
                          { label: 'City', value: formData.city || 'Not provided' },
                          { label: 'Previous School', value: formData.previousSchool || 'Not provided' },
                        ].map((item, idx) => (
                          <motion.div
                            key={item.label}
                            className="p-5 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-sm font-medium text-gray-600 mb-1">{item.label}</p>
                            <p className="text-base font-semibold text-gray-900">{item.value}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <motion.div 
                  className="flex items-center justify-between mt-10 pt-8 border-t-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div>
                    {currentStep > 1 && !applicationId && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          onClick={handlePreviousStep}
                          className="h-12 px-6 border-2 hover:bg-gray-50"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Previous
                        </Button>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {!applicationId && (
                      <>
                        {currentStep < 6 ? (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              onClick={handleNextStep}
                              className={`h-12 px-8 bg-gradient-to-r ${getStepColor(currentStepData.color).gradient} hover:opacity-90 shadow-lg`}
                            >
                              Next Step
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ 
                              boxShadow: [
                                "0 8px 20px rgba(34, 197, 94, 0.3)",
                                "0 12px 30px rgba(34, 197, 94, 0.5)",
                                "0 8px 20px rgba(34, 197, 94, 0.3)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Button 
                              onClick={handleSubmit}
                              className="h-12 px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                            >
                              <Send className="w-4 h-4 mr-2" />
                              Submit Application
                            </Button>
                          </motion.div>
                        )}
                      </>
                    )}
                    
                    {applicationId && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          onClick={handleDownloadApplication}
                          className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Application
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}