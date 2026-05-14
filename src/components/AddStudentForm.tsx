import { useState, useEffect } from 'react';
import { 
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
  Download,
  Edit2,
  Loader2
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { PortalLayout } from './PortalLayout';
import { toast } from 'sonner@2.0.3';
import { motion, AnimatePresence } from 'motion/react';
import { DocumentUploadSection } from './DocumentUploadSection';
import { 
  getFaculties, 
  getCompulsorySubjects, 
  getFacultyCompulsorySubjects, 
  getOptionalSubjectsByFaculty, 
  getAdditionalSubjects,
  getClasses,
  getReligions,
  getCastes,
  getGenders,
  getCategories,
  getBloodGroups,
  getMaritalStatuses
} from '../api/subjectApi';
import { registerStudent } from '../api/registrationApi';
import { buildFormData } from '../services/formDataBuilder';
import { API_BASE_URL, API_ENDPOINTS } from '../api/apiConfig';
import type { 
  Faculty, 
  CompulsorySubject, 
  FacultyCompulsorySubject, 
  OptionalSubject, 
  AdditionalSubject,
  ClassDto,
  ReligionDto,
  CasteDto,
  GenderDto,
  CategoryDto,
  BloodGroupDto,
  MaritalStatusDto
} from '../types/subjectTypes';

export function AddStudentForm() {
  const [formData, setFormData] = useState({
    // StudentApplication table fields
    studentName: '',
    dateOfBirth: '',
    genderId: '',
    bloodGroupId: '',
    religionId: '',
    nationality: 'Indian',
    casteId: '',
    categoryId: '',
    identificationMark: '',
    height: '',
    weight: '',
    permanentAddress: '',
    localAddress: '',
    mobileNumber: '',
    fatherName: '',
    motherName: '',
    guardianOccupation: '',
    fatherOccupation: '',
    guardianAddress: '',
    maritalStatusId: '',
    // Academic fields (legacy, for compatibility)
    previousSchool: '',
    previousPercentage: '',
    classId: '',
    // Subject Selection fields
    facultyId: '',
    compulsorySubjectId: '',
    optionalSubject1: '',
    optionalSubject2: '',
    optionalSubject3: '',
    additionalSubjectId: '',
    aadhaarNumber: '',
  });

  // API-fetched subject data
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [compulsorySubjects, setCompulsorySubjects] = useState<CompulsorySubject[]>([]);
  const [facultyCompulsorySubjects, setFacultyCompulsorySubjects] = useState<FacultyCompulsorySubject[]>([]);
  const [optionalSubjects, setOptionalSubjects] = useState<OptionalSubject[]>([]);
  const [additionalSubjects, setAdditionalSubjects] = useState<AdditionalSubject[]>([]);
  const [classes, setClasses] = useState<ClassDto[]>([]);
  
  // Reference data states
  const [religions, setReligions] = useState<ReligionDto[]>([]);
  const [castes, setCastes] = useState<CasteDto[]>([]);
  const [genders, setGenders] = useState<GenderDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [bloodGroups, setBloodGroups] = useState<BloodGroupDto[]>([]);
  const [maritalStatuses, setMaritalStatuses] = useState<MaritalStatusDto[]>([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPermanentSameAsLocal, setIsPermanentSameAsLocal] = useState(false);

  // Fetch subject data on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [
          fac, 
          comp, 
          add,
          cls,
          rel,
          cas,
          gen,
          cat,
          blg,
          mrs
        ] = await Promise.all([
          getFaculties(),
          getCompulsorySubjects(),
          getAdditionalSubjects(),
          getClasses(),
          getReligions(),
          getCastes(),
          getGenders(),
          getCategories(),
          getBloodGroups(),
          getMaritalStatuses(),
        ]);
        setFaculties(fac);
        setCompulsorySubjects(comp);
        setAdditionalSubjects(add);
        setClasses(cls);
        setReligions(rel);
        setCastes(cas);
        setGenders(gen);
        setCategories(cat);
        setBloodGroups(blg);
        setMaritalStatuses(mrs);
      } catch (err) {
        console.error('Failed to load data:', err);
        toast.error('Failed to load form data. Some dropdowns may be empty.');
      }
    }
    loadData();
  }, []);

  // Fetch optional subjects and faculty compulsory subjects when faculty changes
  useEffect(() => {
    const facultyId = Number(formData.facultyId);
    if (!facultyId) {
      setOptionalSubjects([]);
      setFacultyCompulsorySubjects([]);
      return;
    }
    async function loadFacultyData() {
      try {
        const [opt, facComp] = await Promise.all([
          getOptionalSubjectsByFaculty(facultyId),
          getFacultyCompulsorySubjects(facultyId),
        ]);
        setOptionalSubjects(opt);
        setFacultyCompulsorySubjects(facComp);
      } catch (err) {
        console.error('Failed to load faculty subjects:', err);
        setOptionalSubjects([]);
        setFacultyCompulsorySubjects([]);
      }
    }
    loadFacultyData();
  }, [formData.facultyId]);

  // Filter optional subjects by selected faculty
  const filteredOptionalSubjects = optionalSubjects;

  // Max optional subjects based on faculty
  const maxOptionalSubjects = Number(formData.facultyId) === 1 ? 3 : 2;

  // Academic Details for government form (fixed structure)
  const [academicDetails, setAcademicDetails] = useState({
    tenth: {
      enabled: true,
      schoolCollege: '',
      boardCouncil: '',
      examName: '',
      yearOfPassing: '',
      divisionRank: '',
      subjects: ''
    },
    eleventh: {
      enabled: false,
      schoolCollege: '',
      boardCouncil: '',
      examName: '',
      yearOfPassing: '',
      divisionRank: '',
      subjects: ''
    },
    other: {
      enabled: false,
      schoolCollege: '',
      boardCouncil: '',
      examName: '',
      yearOfPassing: '',
      divisionRank: '',
      subjects: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [applicationId, setApplicationId] = useState('');
  const [applicationNo, setApplicationNo] = useState('');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [documents, setDocuments] = useState({
    photo: null as File | null,
    casteCertificate: null as File | null,
    schoolLeaving: null as File | null,
    admitCard: null as File | null,
    marksheet: null as File | null,
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
      title: 'Subject Selection', 
      icon: BookOpen,
      description: 'Choose your subjects',
      color: 'indigo'
    },
    { 
      id: 6, 
      title: 'Documents', 
      icon: Upload,
      description: 'Upload required documents',
      color: 'blue'
    },
    { 
      id: 7, 
      title: 'Review & Submit', 
      icon: ClipboardCheck,
      description: 'Verify all information',
      color: 'green'
    },
  ];

  // Sequential academic section fill checks
  const isTenthFilled =
    academicDetails.tenth.enabled &&
    !!academicDetails.tenth.schoolCollege.trim() &&
    !!academicDetails.tenth.boardCouncil.trim() &&
    !!academicDetails.tenth.examName.trim() &&
    !!academicDetails.tenth.yearOfPassing.trim();

  const isEleventhFilled =
    academicDetails.eleventh.enabled &&
    !!academicDetails.eleventh.schoolCollege.trim() &&
    !!academicDetails.eleventh.boardCouncil.trim() &&
    !!academicDetails.eleventh.examName.trim() &&
    !!academicDetails.eleventh.yearOfPassing.trim();

  const handleSubmit = async () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix highlighted fields');
      const firstErrorKey = Object.keys(validationErrors)[0];
      const targetStep = getStepForField(firstErrorKey);
      setCurrentStep(targetStep);
      setTimeout(() => {
        scrollToField(firstErrorKey);
      }, targetStep === currentStep ? 100 : 350);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    try {
      const payload = buildFormData(formData as any, academicDetails, documents);
      const response = await registerStudent(payload);

      if (response.isSuccess) {
        const returnedId = response.data?.applicationId;
        const returnedApplicationNo =
          response.data?.applicationNo || (returnedId ? `APP-${returnedId}` : `APP-${Date.now()}`);

        setApplicationNo(String(returnedApplicationNo));
        if (returnedId) {
          setApplicationId(String(returnedId));
        }

        toast.success('Application submitted successfully!', {
          description: `Your Application Number is ${returnedApplicationNo}. Please save this for future reference.`,
          duration: 5000,
        });
      } else {
        toast.error(response.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      toast.error(err.message || 'An error occurred while submitting the application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'localAddress' && isPermanentSameAsLocal) {
      setFormData({ ...formData, localAddress: value, permanentAddress: value });
      clearError('permanentAddress');
      return;
    }

    setFormData({ ...formData, [field]: value });
    clearError(field);
  };

  useEffect(() => {
    if (!isPermanentSameAsLocal) return;

    setFormData((prev) => ({
      ...prev,
      permanentAddress: prev.localAddress,
    }));
    clearError('permanentAddress');
  }, [isPermanentSameAsLocal, formData.localAddress]);

  const clearError = (fieldName: string) => {
    setErrors((prev) => {
      if (!prev[fieldName]) return prev;
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  };

  type AcademicSection = 'tenth' | 'eleventh' | 'other';
  type AcademicField = 'schoolCollege' | 'boardCouncil' | 'examName' | 'yearOfPassing' | 'divisionRank' | 'subjects';

  const getAcademicErrorKey = (section: AcademicSection, field: AcademicField) =>
    `academic${section.charAt(0).toUpperCase()}${section.slice(1)}${field.charAt(0).toUpperCase()}${field.slice(1)}`;

  const getAcademicEnabledErrorKey = (section: AcademicSection) =>
    `academic${section.charAt(0).toUpperCase()}${section.slice(1)}Enabled`;

  const clearAcademicSectionErrors = (section: AcademicSection) => {
    const errorKeys = [
      getAcademicEnabledErrorKey(section),
      getAcademicErrorKey(section, 'schoolCollege'),
      getAcademicErrorKey(section, 'boardCouncil'),
      getAcademicErrorKey(section, 'examName'),
      getAcademicErrorKey(section, 'yearOfPassing'),
      getAcademicErrorKey(section, 'divisionRank'),
      getAcademicErrorKey(section, 'subjects'),
    ];

    setErrors((prev) => {
      const next = { ...prev };
      errorKeys.forEach((key) => delete next[key]);
      return next;
    });
  };

  const handleAcademicInputChange = (section: AcademicSection, field: AcademicField, value: string) => {
    setAcademicDetails((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));

    clearError(getAcademicErrorKey(section, field));
  };

  const handleAcademicToggle = (section: AcademicSection, checked: boolean) => {
    setAcademicDetails((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        enabled: checked,
      },
    }));

    clearError(getAcademicEnabledErrorKey(section));
    if (!checked) {
      clearAcademicSectionErrors(section);
    }
  };

  const getErrorFieldClass = (baseClassName: string, fieldName: string) => {
    if (errors[fieldName]) {
      return `${baseClassName} border-red-500 focus:border-red-500 focus:ring-red-200`;
    }
    return baseClassName;
  };

  const validateForm = () => {
    const validationErrors: Record<string, string> = {};
    const isDigitsOnly = (value: string) => /^\d+$/.test(value);
    const isYearValid = (value: string) => /^\d{4}$/.test(value);
    const selectedOptionalSubjects = [
      formData.optionalSubject1,
      formData.optionalSubject2,
      formData.optionalSubject3,
    ].filter(Boolean);
    const requiredOptionalSubjectsCount = Number(formData.facultyId) === 1 ? 3 : 2;

    if (!formData.studentName.trim()) validationErrors.studentName = 'Student name is required';
    if (!formData.dateOfBirth) validationErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.genderId) validationErrors.genderId = 'Gender is required';
    if (!formData.bloodGroupId) validationErrors.bloodGroupId = 'Blood group is required';
    if (!formData.religionId) validationErrors.religionId = 'Religion is required';
    if (!formData.nationality.trim()) validationErrors.nationality = 'Nationality is required';
    if (!formData.casteId) validationErrors.casteId = 'Caste is required';
    if (!formData.categoryId) validationErrors.categoryId = 'Category is required';
    if (!formData.maritalStatusId) validationErrors.maritalStatusId = 'Marital status is required';
    if (!formData.permanentAddress.trim()) validationErrors.permanentAddress = 'Permanent address is required';

    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required';
    } else if (!isDigitsOnly(formData.mobileNumber) || formData.mobileNumber.length !== 10) {
      validationErrors.mobileNumber = 'Mobile number must be 10 digits';
    }

    if (!formData.fatherName.trim()) validationErrors.fatherName = "Father's name is required";
    if (!formData.motherName.trim()) validationErrors.motherName = "Mother's name is required";

    if (!academicDetails.tenth.enabled) {
      validationErrors.academicTenthEnabled = '10th academic details are required';
    }

    if (academicDetails.tenth.enabled) {
      if (!academicDetails.tenth.schoolCollege.trim()) {
        validationErrors.academicTenthSchoolCollege = '10th school/college is required';
      }
      if (!academicDetails.tenth.boardCouncil.trim()) {
        validationErrors.academicTenthBoardCouncil = '10th board/council is required';
      }
      if (!academicDetails.tenth.examName.trim()) {
        validationErrors.academicTenthExamName = '10th exam name is required';
      }
      if (!academicDetails.tenth.yearOfPassing.trim()) {
        validationErrors.academicTenthYearOfPassing = '10th year of passing is required';
      } else if (!isYearValid(academicDetails.tenth.yearOfPassing.trim())) {
        validationErrors.academicTenthYearOfPassing = '10th year of passing must be 4 digits';
      }
    }

    if (academicDetails.eleventh.enabled) {
      if (!academicDetails.eleventh.schoolCollege.trim()) {
        validationErrors.academicEleventhSchoolCollege = '11th school/college is required';
      }
      if (!academicDetails.eleventh.boardCouncil.trim()) {
        validationErrors.academicEleventhBoardCouncil = '11th board/council is required';
      }
      if (!academicDetails.eleventh.examName.trim()) {
        validationErrors.academicEleventhExamName = '11th exam name is required';
      }
      if (!academicDetails.eleventh.yearOfPassing.trim()) {
        validationErrors.academicEleventhYearOfPassing = '11th year of passing is required';
      } else if (!isYearValid(academicDetails.eleventh.yearOfPassing.trim())) {
        validationErrors.academicEleventhYearOfPassing = '11th year of passing must be 4 digits';
      }
    }

    if (academicDetails.other.enabled) {
      if (!academicDetails.other.schoolCollege.trim()) {
        validationErrors.academicOtherSchoolCollege = 'Other school/college is required';
      }
      if (!academicDetails.other.boardCouncil.trim()) {
        validationErrors.academicOtherBoardCouncil = 'Other board/council is required';
      }
      if (!academicDetails.other.examName.trim()) {
        validationErrors.academicOtherExamName = 'Other exam name is required';
      }
      if (!academicDetails.other.yearOfPassing.trim()) {
        validationErrors.academicOtherYearOfPassing = 'Other year of passing is required';
      } else if (!isYearValid(academicDetails.other.yearOfPassing.trim())) {
        validationErrors.academicOtherYearOfPassing = 'Other year of passing must be 4 digits';
      }
    }

    if (!formData.classId) validationErrors.classId = 'Class is required';
    if (!formData.facultyId) validationErrors.facultyId = 'Faculty is required';
    if (!formData.compulsorySubjectId) validationErrors.compulsorySubjectId = 'Compulsory subject is required';

    if (formData.facultyId && selectedOptionalSubjects.length < requiredOptionalSubjectsCount) {
      validationErrors.optionalSubjects = `Please select at least ${requiredOptionalSubjectsCount} optional subjects`;
    }

    if (!formData.aadhaarNumber.trim()) {
      validationErrors.aadhaarNumber = 'Aadhaar number is required';
    } else if (!isDigitsOnly(formData.aadhaarNumber) || formData.aadhaarNumber.length !== 12) {
      validationErrors.aadhaarNumber = 'Aadhaar number must be 12 digits';
    }

    return validationErrors;
  };

  const scrollToFirstError = (validationErrors: Record<string, string>) => {
    const firstErrorKey = Object.keys(validationErrors)[0];
    if (!firstErrorKey) return;

    scrollToField(firstErrorKey);
  };

  const getStepForField = (fieldName: string) => {
    const fieldStepMap: Record<string, number> = {
      studentName: 1,
      dateOfBirth: 1,
      genderId: 1,
      bloodGroupId: 1,
      religionId: 1,
      nationality: 1,
      casteId: 1,
      categoryId: 1,
      aadhaarNumber: 1,
      maritalStatusId: 1,
      permanentAddress: 2,
      mobileNumber: 2,
      academicTenthEnabled: 3,
      academicTenthSchoolCollege: 3,
      academicTenthBoardCouncil: 3,
      academicTenthExamName: 3,
      academicTenthYearOfPassing: 3,
      academicEleventhSchoolCollege: 3,
      academicEleventhBoardCouncil: 3,
      academicEleventhExamName: 3,
      academicEleventhYearOfPassing: 3,
      academicOtherSchoolCollege: 3,
      academicOtherBoardCouncil: 3,
      academicOtherExamName: 3,
      academicOtherYearOfPassing: 3,
      fatherName: 4,
      motherName: 4,
      classId: 5,
      facultyId: 5,
      compulsorySubjectId: 5,
      optionalSubjects: 5,
    };

    return fieldStepMap[fieldName] || 7;
  };

  const scrollToField = (fieldName: string) => {
    if (!fieldName) return;

    const fieldIdMap: Record<string, string> = {
      optionalSubjects: 'optionalSubjectsGroup',
      compulsorySubjectId: 'compulsorySubjectGroup',
      academicTenthEnabled: 'tenthSectionToggle',
      academicTenthSchoolCollege: 'tenthSchoolCollege',
      academicTenthBoardCouncil: 'tenthBoardCouncil',
      academicTenthExamName: 'tenthExamName',
      academicTenthYearOfPassing: 'tenthYearOfPassing',
      academicEleventhSchoolCollege: 'eleventhSchoolCollege',
      academicEleventhBoardCouncil: 'eleventhBoardCouncil',
      academicEleventhExamName: 'eleventhExamName',
      academicEleventhYearOfPassing: 'eleventhYearOfPassing',
      academicOtherSchoolCollege: 'otherSchoolCollege',
      academicOtherBoardCouncil: 'otherBoardCouncil',
      academicOtherExamName: 'otherExamName',
      academicOtherYearOfPassing: 'otherYearOfPassing',
    };

    const elementId = fieldIdMap[fieldName] || fieldName;
    const targetElement =
      document.getElementById(elementId) || document.getElementById('validation-error-summary');

    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleNextStep = () => {
    const validationErrors = validateForm();
    const currentStepErrors = Object.entries(validationErrors).reduce<Record<string, string>>(
      (acc, [field, message]) => {
        if (getStepForField(field) === currentStep) {
          acc[field] = message;
        }
        return acc;
      },
      {}
    );

    setErrors((prev) => {
      const next = { ...prev };

      Object.keys(next).forEach((field) => {
        if (getStepForField(field) === currentStep) {
          delete next[field];
        }
      });

      return { ...next, ...currentStepErrors };
    });

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

  const handleDownloadApplication = async () => {
    if (!applicationId) {
      toast.error('Application ID not available for PDF download yet.');
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.applicationPdf}/${applicationId}`);
      if (!response.ok) throw new Error('Failed to download PDF');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `application-${applicationId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      toast.success('Application downloaded successfully!');
    } catch (err: any) {
      toast.error(err.message || 'Failed to download application PDF.');
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
      pageTitle="Add Student"
      breadcrumbs={["Home", "Admin", "Students", "Add Student"]}
    >
    <div className="min-h-[70vh] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col overflow-hidden rounded-2xl border border-slate-200">
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
            {(applicationNo || applicationId) && (
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
                      Your application has been submitted successfully. Please save your Application Number for future reference.
                    </p>
                    
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border-2 border-white/40">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-100 mb-1">Application Number</p>
                          <motion.p 
                            className="text-3xl font-bold text-white tracking-wider"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {applicationNo || applicationId}
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

                {/* Step 1: Personal Details (Schema fields only) */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <Label htmlFor="studentName" className="text-sm font-medium text-gray-700 mb-2 block">
                          Student Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="studentName"
                          value={formData.studentName}
                          onChange={(e) => handleInputChange('studentName', e.target.value)}
                          placeholder="Enter full name"
                          className={getErrorFieldClass('h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl', 'studentName')}
                          required
                        />
                        {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700 mb-2 block">
                          Date of Birth <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          className={getErrorFieldClass('h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl', 'dateOfBirth')}
                          required
                        />
                        {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <Label htmlFor="genderId" className="text-sm font-medium text-gray-700 mb-2 block">
                          Gender <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="genderId"
                          value={formData.genderId}
                          onChange={(e) => handleInputChange('genderId', e.target.value)}
                          className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700', 'genderId')}
                          required
                        >
                          <option value="">Select Gender</option>
                          {genders.map(gender => (
                            <option key={gender.genderId} value={gender.genderId}>
                              {gender.genderName}
                            </option>
                          ))}
                        </select>
                        {errors.genderId && <p className="text-red-500 text-xs mt-1">{errors.genderId}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <Label htmlFor="bloodGroupId" className="text-sm font-medium text-gray-700 mb-2 block">
                          Blood Group <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="bloodGroupId"
                          value={formData.bloodGroupId}
                          onChange={(e) => handleInputChange('bloodGroupId', e.target.value)}
                          className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700', 'bloodGroupId')}
                          required
                        >
                          <option value="">Select Blood Group</option>
                          {bloodGroups.map(bg => (
                            <option key={bg.bloodGroupId} value={bg.bloodGroupId}>
                              {bg.bloodGroupName}
                            </option>
                          ))}
                        </select>
                        {errors.bloodGroupId && <p className="text-red-500 text-xs mt-1">{errors.bloodGroupId}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                        <Label htmlFor="religionId" className="text-sm font-medium text-gray-700 mb-2 block">
                          Religion <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="religionId"
                          value={formData.religionId}
                          onChange={(e) => handleInputChange('religionId', e.target.value)}
                          className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700', 'religionId')}
                          required
                        >
                          <option value="">Select Religion</option>
                          {religions.map(religion => (
                            <option key={religion.religionId} value={religion.religionId}>
                              {religion.religionName}
                            </option>
                          ))}
                        </select>
                        {errors.religionId && <p className="text-red-500 text-xs mt-1">{errors.religionId}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                        <Label htmlFor="nationality" className="text-sm font-medium text-gray-700 mb-2 block">
                          Nationality <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="nationality"
                          value={formData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          placeholder="Indian"
                          disabled
                          className={getErrorFieldClass('h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed', 'nationality')}
                          required
                        />
                        {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
                        <Label htmlFor="casteId" className="text-sm font-medium text-gray-700 mb-2 block">
                          Caste <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="casteId"
                          value={formData.casteId}
                          onChange={(e) => handleInputChange('casteId', e.target.value)}
                          className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700', 'casteId')}
                          required
                        >
                          <option value="">Select Caste</option>
                          {castes.map(caste => (
                            <option key={caste.casteId} value={caste.casteId}>
                              {caste.casteName}
                            </option>
                          ))}
                        </select>
                        {errors.casteId && <p className="text-red-500 text-xs mt-1">{errors.casteId}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
                        <Label htmlFor="categoryId" className="text-sm font-medium text-gray-700 mb-2 block">
                          Category <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="categoryId"
                          value={formData.categoryId}
                          onChange={(e) => handleInputChange('categoryId', e.target.value)}
                          className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700', 'categoryId')}
                          required
                        >
                          <option value="">Select Category</option>
                          {categories.map(cat => (
                            <option key={cat.categoryId} value={cat.categoryId}>
                              {cat.categoryName}
                            </option>
                          ))}
                        </select>
                        {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
                        <Label htmlFor="identificationMark" className="text-sm font-medium text-gray-700 mb-2 block">
                          Identification Mark
                        </Label>
                        <Input
                          id="identificationMark"
                          value={formData.identificationMark}
                          onChange={(e) => handleInputChange('identificationMark', e.target.value)}
                          placeholder="Enter identification mark"
                          className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                        />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
                        <Label htmlFor="height" className="text-sm font-medium text-gray-700 mb-2 block">
                          Height (cm)
                        </Label>
                        <Input
                          id="height"
                          type="number"
                          value={formData.height}
                          onChange={(e) => handleInputChange('height', e.target.value)}
                          placeholder="Enter height in cm"
                          className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                        />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>
                        <Label htmlFor="weight" className="text-sm font-medium text-gray-700 mb-2 block">
                          Weight (kg)
                        </Label>
                        <Input
                          id="weight"
                          type="number"
                          value={formData.weight}
                          onChange={(e) => handleInputChange('weight', e.target.value)}
                          placeholder="Enter weight in kg"
                          className="h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl"
                        />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
                        <Label htmlFor="aadhaarNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                          Aadhaar Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="aadhaarNumber"
                          value={formData.aadhaarNumber}
                          onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                          placeholder="Enter Aadhaar number (12 digits)"
                          className={getErrorFieldClass('h-12 border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all rounded-xl', 'aadhaarNumber')}
                          maxLength={12}
                        />
                        {errors.aadhaarNumber && <p className="text-red-500 text-xs mt-1">{errors.aadhaarNumber}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>
                        <Label htmlFor="maritalStatusId" className="text-sm font-medium text-gray-700 mb-2 block">
                          Marital Status <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="maritalStatusId"
                          value={formData.maritalStatusId}
                          onChange={(e) => handleInputChange('maritalStatusId', e.target.value)}
                          className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-700', 'maritalStatusId')}
                          required
                        >
                          <option value="">Select Status</option>
                          {maritalStatuses.map(status => (
                            <option key={status.maritalStatusId} value={status.maritalStatusId}>
                              {status.maritalStatusName}
                            </option>
                          ))}
                        </select>
                        {errors.maritalStatusId && <p className="text-red-500 text-xs mt-1">{errors.maritalStatusId}</p>}
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Contact Information (Schema fields only) */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <Label htmlFor="localAddress" className="text-sm font-medium text-gray-700 mb-2 block">
                          Local Address
                        </Label>
                        <textarea
                          id="localAddress"
                          value={formData.localAddress}
                          onChange={(e) => handleInputChange('localAddress', e.target.value)}
                          placeholder="Enter local address"
                          rows={3}
                          className="w-full p-3 border-2 border-gray-200 rounded-xl resize-none bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all outline-none text-gray-700"
                        />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <Label htmlFor="permanentAddress" className="text-sm font-medium text-gray-700 block">
                            Permanent Address <span className="text-red-500">*</span>
                          </Label>
                          <label className="flex items-center gap-2 text-xs text-gray-600">
                            <input
                              type="checkbox"
                              checked={isPermanentSameAsLocal}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setIsPermanentSameAsLocal(checked);
                                if (checked) {
                                  setFormData((prev) => ({
                                    ...prev,
                                    permanentAddress: prev.localAddress,
                                  }));
                                  clearError('permanentAddress');
                                }
                              }}
                              className="accent-yellow-500"
                            />
                            Same as local address
                          </label>
                        </div>
                        <textarea
                          id="permanentAddress"
                          value={formData.permanentAddress}
                          onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                          placeholder="Enter permanent address"
                          rows={3}
                          disabled={isPermanentSameAsLocal}
                          className={getErrorFieldClass(`w-full p-3 border-2 border-gray-200 rounded-xl resize-none bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all outline-none text-gray-700 ${isPermanentSameAsLocal ? 'opacity-70 cursor-not-allowed bg-gray-100' : ''}`, 'permanentAddress')}
                          required
                        />
                        {errors.permanentAddress && <p className="text-red-500 text-xs mt-1">{errors.permanentAddress}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <Label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                          Mobile Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="mobileNumber"
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                          placeholder="Enter mobile number"
                          className={getErrorFieldClass('h-12 border-2 border-gray-200 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all rounded-xl', 'mobileNumber')}
                          required
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Academic Details (Government Form Layout, vertical sections) */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="p-6 mb-6 bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200">
                      <Label className="text-lg font-semibold text-orange-900 mb-4 block">Academic Details</Label>
                      <div className="space-y-6">
                        {/* 10th Section */}
                        <div id="tenthSectionToggle">
                          <label className={`flex items-center gap-2 text-base mb-2 ${errors.academicTenthEnabled ? 'text-red-600' : 'text-gray-700'}`}>
                            <input
                              type="checkbox"
                              checked={academicDetails.tenth.enabled}
                              onChange={e => handleAcademicToggle('tenth', e.target.checked)}
                              className={errors.academicTenthEnabled ? 'accent-red-600' : ''}
                            />
                            10th <span className="text-red-500">*</span>
                          </label>
                          {errors.academicTenthEnabled && <p className="text-red-500 text-xs mt-1 mb-2">{errors.academicTenthEnabled}</p>}
                          {academicDetails.tenth.enabled && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-xl p-4 border border-orange-200 mb-2"
                            >
                              <div>
                                <Label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                  <BookOpen className="w-4 h-4 text-orange-500" />
                                  School / College <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="tenthSchoolCollege"
                                  value={academicDetails.tenth.schoolCollege}
                                  onChange={e => handleAcademicInputChange('tenth', 'schoolCollege', e.target.value)}
                                  placeholder="Enter school/college"
                                  className={getErrorFieldClass('h-11 border-2 border-orange-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-lg', 'academicTenthSchoolCollege')}
                                />
                                {errors.academicTenthSchoolCollege && <p className="text-red-500 text-xs mt-1">{errors.academicTenthSchoolCollege}</p>}
                              </div>
                              <div>
                                <Label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                  <BookOpen className="w-4 h-4 text-orange-500" />
                                  Board / Council <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="tenthBoardCouncil"
                                  value={academicDetails.tenth.boardCouncil}
                                  onChange={e => handleAcademicInputChange('tenth', 'boardCouncil', e.target.value)}
                                  placeholder="Enter board/council"
                                  className={getErrorFieldClass('h-11 border-2 border-orange-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-lg', 'academicTenthBoardCouncil')}
                                />
                                {errors.academicTenthBoardCouncil && <p className="text-red-500 text-xs mt-1">{errors.academicTenthBoardCouncil}</p>}
                              </div>
                              <div>
                                <Label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                  <BookOpen className="w-4 h-4 text-orange-500" />
                                  Name Of Exam <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="tenthExamName"
                                  value={academicDetails.tenth.examName}
                                  onChange={e => handleAcademicInputChange('tenth', 'examName', e.target.value)}
                                  placeholder="Enter exam name"
                                  className={getErrorFieldClass('h-11 border-2 border-orange-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-lg', 'academicTenthExamName')}
                                />
                                {errors.academicTenthExamName && <p className="text-red-500 text-xs mt-1">{errors.academicTenthExamName}</p>}
                              </div>
                              <div>
                                <Label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                  <BookOpen className="w-4 h-4 text-orange-500" />
                                  Year Of Passing <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="tenthYearOfPassing"
                                  value={academicDetails.tenth.yearOfPassing}
                                  onChange={e => handleAcademicInputChange('tenth', 'yearOfPassing', e.target.value)}
                                  placeholder="YYYY"
                                  maxLength={4}
                                  className={getErrorFieldClass('h-11 border-2 border-orange-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 rounded-lg', 'academicTenthYearOfPassing')}
                                />
                                {errors.academicTenthYearOfPassing && <p className="text-red-500 text-xs mt-1">{errors.academicTenthYearOfPassing}</p>}
                              </div>
                              <div>
                                <Label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                  <BookOpen className="w-4 h-4 text-orange-500" />
                                  Division
                                </Label>
                                <Input
                                  value={academicDetails.tenth.divisionRank}
                                  onChange={e => handleAcademicInputChange('tenth', 'divisionRank', e.target.value)}
                                  placeholder="Division/Rank"
                                  className="h-11 border-2 border-orange-200 focus:border-orange-400 rounded-lg"
                                />
                              </div>
                              <div>
                                <Label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                  <BookOpen className="w-4 h-4 text-orange-500" />
                                  Subject
                                </Label>
                                <Input
                                  value={academicDetails.tenth.subjects}
                                  onChange={e => handleAcademicInputChange('tenth', 'subjects', e.target.value)}
                                  placeholder="Subjects"
                                  className="h-11 border-2 border-orange-200 focus:border-orange-400 rounded-lg"
                                />
                              </div>
                            </motion.div>
                          )}
                        </div>
                        {/* 11th Section */}
                        <div>
                          <label className={`flex items-center gap-2 text-base mb-2 ${isTenthFilled ? 'text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}>
                            <input
                              type="checkbox"
                              checked={academicDetails.eleventh.enabled}
                              disabled={!isTenthFilled}
                              onChange={e => {
                                if (!isTenthFilled) {
                                  toast.warning('Please fill 10th details first.');
                                  return;
                                }
                                setAcademicDetails(prev => ({
                                  ...prev,
                                  eleventh: { ...prev.eleventh, enabled: e.target.checked }
                                }));
                                clearError('academicEleventhSchoolCollege');
                                clearError('academicEleventhBoardCouncil');
                                clearError('academicEleventhExamName');
                                clearError('academicEleventhYearOfPassing');
                              }}
                              className={!isTenthFilled ? 'cursor-not-allowed opacity-40' : ''}
                            />
                            11th
                            {!isTenthFilled && (
                              <span className="text-xs text-orange-400 ml-1">(Fill 10th first)</span>
                            )}
                          </label>
                          {academicDetails.eleventh.enabled && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-xl p-4 border border-orange-200 mb-2"
                            >
                              <div>
                                <Label>
                                  School / College <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="eleventhSchoolCollege"
                                  value={academicDetails.eleventh.schoolCollege}
                                  onChange={e => handleAcademicInputChange('eleventh', 'schoolCollege', e.target.value)}
                                  placeholder="Enter school/college"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicEleventhSchoolCollege')}
                                />
                                {errors.academicEleventhSchoolCollege && <p className="text-red-500 text-xs mt-1">{errors.academicEleventhSchoolCollege}</p>}
                              </div>
                              <div>
                                <Label>
                                  Board / Council <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="eleventhBoardCouncil"
                                  value={academicDetails.eleventh.boardCouncil}
                                  onChange={e => handleAcademicInputChange('eleventh', 'boardCouncil', e.target.value)}
                                  placeholder="Enter board/council"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicEleventhBoardCouncil')}
                                />
                                {errors.academicEleventhBoardCouncil && <p className="text-red-500 text-xs mt-1">{errors.academicEleventhBoardCouncil}</p>}
                              </div>
                              <div>
                                <Label>
                                  Name of Exam <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="eleventhExamName"
                                  value={academicDetails.eleventh.examName}
                                  onChange={e => handleAcademicInputChange('eleventh', 'examName', e.target.value)}
                                  placeholder="Enter exam name"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicEleventhExamName')}
                                />
                                {errors.academicEleventhExamName && <p className="text-red-500 text-xs mt-1">{errors.academicEleventhExamName}</p>}
                              </div>
                              <div>
                                <Label>
                                  Year of Passing <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="eleventhYearOfPassing"
                                  value={academicDetails.eleventh.yearOfPassing}
                                  onChange={e => handleAcademicInputChange('eleventh', 'yearOfPassing', e.target.value)}
                                  placeholder="YYYY"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicEleventhYearOfPassing')}
                                  maxLength={4}
                                />
                                {errors.academicEleventhYearOfPassing && <p className="text-red-500 text-xs mt-1">{errors.academicEleventhYearOfPassing}</p>}
                              </div>
                              <div>
                                <Label>Division / Rank</Label>
                                <Input
                                  value={academicDetails.eleventh.divisionRank}
                                  onChange={e => handleAcademicInputChange('eleventh', 'divisionRank', e.target.value)}
                                  placeholder="Division/Rank"
                                  className="h-10 border-orange-200"
                                />
                              </div>
                              <div>
                                <Label>Subjects</Label>
                                <Input
                                  value={academicDetails.eleventh.subjects}
                                  onChange={e => handleAcademicInputChange('eleventh', 'subjects', e.target.value)}
                                  placeholder="Subjects"
                                  className="h-10 border-orange-200"
                                />
                              </div>
                            </motion.div>
                          )}
                        </div>
                        {/* Other Section */}
                        <div>
                          <label className={`flex items-center gap-2 text-base mb-2 ${isEleventhFilled ? 'text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}>
                            <input
                              type="checkbox"
                              checked={academicDetails.other.enabled}
                              disabled={!isEleventhFilled}
                              onChange={e => {
                                if (!isEleventhFilled) {
                                  toast.warning('Please fill 11th details first.');
                                  return;
                                }
                                setAcademicDetails(prev => ({
                                  ...prev,
                                  other: { ...prev.other, enabled: e.target.checked }
                                }));
                                clearError('academicOtherSchoolCollege');
                                clearError('academicOtherBoardCouncil');
                                clearError('academicOtherExamName');
                                clearError('academicOtherYearOfPassing');
                              }}
                              className={!isEleventhFilled ? 'cursor-not-allowed opacity-40' : ''}
                            />
                            Other
                            {!isEleventhFilled && (
                              <span className="text-xs text-orange-400 ml-1">(Fill 11th first)</span>
                            )}
                          </label>
                          {academicDetails.other.enabled && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-xl p-4 border border-orange-200 mb-2"
                            >
                              <div>
                                <Label>
                                  School / College <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="otherSchoolCollege"
                                  value={academicDetails.other.schoolCollege}
                                  onChange={e => handleAcademicInputChange('other', 'schoolCollege', e.target.value)}
                                  placeholder="Enter school/college"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicOtherSchoolCollege')}
                                />
                                {errors.academicOtherSchoolCollege && <p className="text-red-500 text-xs mt-1">{errors.academicOtherSchoolCollege}</p>}
                              </div>
                              <div>
                                <Label>
                                  Board / Council <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="otherBoardCouncil"
                                  value={academicDetails.other.boardCouncil}
                                  onChange={e => handleAcademicInputChange('other', 'boardCouncil', e.target.value)}
                                  placeholder="Enter board/council"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicOtherBoardCouncil')}
                                />
                                {errors.academicOtherBoardCouncil && <p className="text-red-500 text-xs mt-1">{errors.academicOtherBoardCouncil}</p>}
                              </div>
                              <div>
                                <Label>
                                  Name of Exam <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="otherExamName"
                                  value={academicDetails.other.examName}
                                  onChange={e => handleAcademicInputChange('other', 'examName', e.target.value)}
                                  placeholder="Enter exam name"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicOtherExamName')}
                                />
                                {errors.academicOtherExamName && <p className="text-red-500 text-xs mt-1">{errors.academicOtherExamName}</p>}
                              </div>
                              <div>
                                <Label>
                                  Year of Passing <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="otherYearOfPassing"
                                  value={academicDetails.other.yearOfPassing}
                                  onChange={e => handleAcademicInputChange('other', 'yearOfPassing', e.target.value)}
                                  placeholder="YYYY"
                                  className={getErrorFieldClass('h-10 border-orange-200 focus:ring-4 focus:ring-orange-100', 'academicOtherYearOfPassing')}
                                  maxLength={4}
                                />
                                {errors.academicOtherYearOfPassing && <p className="text-red-500 text-xs mt-1">{errors.academicOtherYearOfPassing}</p>}
                              </div>
                              <div>
                                <Label>Division / Rank</Label>
                                <Input
                                  value={academicDetails.other.divisionRank}
                                  onChange={e => handleAcademicInputChange('other', 'divisionRank', e.target.value)}
                                  placeholder="Division/Rank"
                                  className="h-10 border-orange-200"
                                />
                              </div>
                              <div>
                                <Label>Subjects</Label>
                                <Input
                                  value={academicDetails.other.subjects}
                                  onChange={e => handleAcademicInputChange('other', 'subjects', e.target.value)}
                                  placeholder="Subjects"
                                  className="h-10 border-orange-200"
                                />
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}

                {/* Step 4: Parent Information (Schema fields only) */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <Label htmlFor="fatherName" className="text-sm font-medium text-gray-700 mb-2 block">
                          Father's Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fatherName"
                          value={formData.fatherName}
                          onChange={(e) => handleInputChange('fatherName', e.target.value)}
                          placeholder="Enter father's name"
                          className={getErrorFieldClass('h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl', 'fatherName')}
                          required
                        />
                        {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <Label htmlFor="motherName" className="text-sm font-medium text-gray-700 mb-2 block">
                          Mother's Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="motherName"
                          value={formData.motherName}
                          onChange={(e) => handleInputChange('motherName', e.target.value)}
                          placeholder="Enter mother's name"
                          className={getErrorFieldClass('h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl', 'motherName')}
                          required
                        />
                        {errors.motherName && <p className="text-red-500 text-xs mt-1">{errors.motherName}</p>}
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <Label htmlFor="fatherOccupation" className="text-sm font-medium text-gray-700 mb-2 block">
                          Father Occupation
                        </Label>
                        <Input
                          id="fatherOccupation"
                          value={formData.fatherOccupation}
                          onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                          placeholder="Enter father's occupation"
                          className="h-12 border-2 border-gray-200 bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all rounded-xl"
                        />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                        <Label htmlFor="guardianAddress" className="text-sm font-medium text-gray-700 mb-2 block">
                          Father / Guardian Address
                        </Label>
                        <textarea
                          id="guardianAddress"
                          value={formData.guardianAddress}
                          onChange={(e) => handleInputChange('guardianAddress', e.target.value)}
                          placeholder="Enter father / guardian address"
                          rows={3}
                          className="w-full p-3 border-2 border-gray-200 rounded-xl resize-none bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all outline-none text-gray-700"
                        />
                      </motion.div>

                    </div>
                  </motion.div>
                )}


                {/* Step 5: Subject Selection */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="space-y-6">
                      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-2 border-indigo-200">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-indigo-900 mb-3">Subject Selection</h4>
                            <ul className="space-y-2 text-sm text-indigo-800">
                              <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                Select your faculty and subjects as per rules
                              </li>
                              <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                Arts: 3 optional, Science/Commerce: 2 optional
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Class Dropdown */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                          <Label htmlFor="classId" className="text-sm font-medium text-gray-700 mb-2 block">
                            Class <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="classId"
                            value={formData.classId}
                            onChange={e => handleInputChange('classId', e.target.value)}
                            className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-gray-700', 'classId')}
                            required
                          >
                            <option value="">Select Class</option>
                            {classes.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                          {errors.classId && <p className="text-red-500 text-xs mt-1">{errors.classId}</p>}
                        </motion.div>
                        {/* Faculty Dropdown */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                          <Label htmlFor="facultyId" className="text-sm font-medium text-gray-700 mb-2 block">
                            Faculty <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="facultyId"
                            value={formData.facultyId}
                            onChange={e => {
                              const faculty = e.target.value;
                              setFormData(prev => ({
                                ...prev,
                                facultyId: faculty,
                                compulsorySubjectId: '',
                                optionalSubject1: '',
                                optionalSubject2: '',
                                optionalSubject3: '',
                                additionalSubjectId: ''
                              }));
                              setErrors(prev => {
                                const next = { ...prev };
                                delete next.facultyId;
                                delete next.optionalSubjects;
                                delete next.compulsorySubjectId;
                                return next;
                              });
                            }}
                            className={getErrorFieldClass('w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-gray-700', 'facultyId')}
                            required
                          >
                            <option value="">Select Faculty</option>
                            {faculties.map(f => (
                              <option key={f.facultyId} value={f.facultyId}>{f.facultyName}</option>
                            ))}
                          </select>
                          {errors.facultyId && <p className="text-red-500 text-xs mt-1">{errors.facultyId}</p>}
                        </motion.div>
                        {/* Faculty Compulsory Subjects (filtered by faculty, read-only display) */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                          <Label className="text-sm font-medium text-gray-700 mb-2 block">
                            Faculty Compulsory Subjects
                          </Label>
                          {formData.facultyId ? (
                            <div className="min-h-[3rem] px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-700">
                              {facultyCompulsorySubjects
                                .map(s => s.subjectName)
                                .join(', ') || 'No compulsory subjects found'}
                            </div>
                          ) : (
                            <div className="min-h-[3rem] px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-400 italic">
                              Select a faculty first
                            </div>
                          )}
                        </motion.div>
                        {/* Compulsory Subject (Mother Tongue) - from CompulsorySubjects table */}
                        <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                          <Label className="text-sm font-medium text-gray-700 mb-2 block">
                            Compulsory Subject (Mother Tongue) <span className="text-red-500">*</span>
                          </Label>
                          <div
                            id="compulsorySubjectGroup"
                            className={errors.compulsorySubjectId ? 'p-3 rounded-xl border-2 border-red-500 bg-red-50/30' : ''}
                          >
                            <div className="flex flex-wrap gap-6">
                            {compulsorySubjects.map(s => (
                              <label key={s.compulsorySubjectId} className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name="motherTongue"
                                  value={String(s.compulsorySubjectId)}
                                  checked={formData.compulsorySubjectId === String(s.compulsorySubjectId)}
                                  onChange={e => handleInputChange('compulsorySubjectId', e.target.value)}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                                <span className="text-sm text-gray-700">{s.subjectName}</span>
                              </label>
                            ))}
                            </div>
                          </div>
                          {errors.compulsorySubjectId && <p className="text-red-500 text-xs mt-1">{errors.compulsorySubjectId}</p>}
                        </motion.div>
                        {/* Optional Subjects (checkboxes from API, filtered by faculty) */}
                        <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                          <Label className="text-sm font-medium text-gray-700 mb-2 block">
                            Optional Subjects <span className="text-red-500">*</span>
                            <span className="text-xs text-gray-500 ml-2">(Max {maxOptionalSubjects})</span>
                          </Label>
                          <div
                            id="optionalSubjectsGroup"
                            className={errors.optionalSubjects ? 'p-3 rounded-xl border-2 border-red-500 bg-red-50/30' : ''}
                          >
                            <div className="flex flex-wrap gap-6">
                            {filteredOptionalSubjects.map(subject => {
                              const idStr = String(subject.optionalSubjectId);
                              const selected = [formData.optionalSubject1, formData.optionalSubject2, formData.optionalSubject3].filter(Boolean);
                              const isChecked = selected.includes(idStr);
                              const isFull = selected.length >= maxOptionalSubjects;
                              return (
                                <label key={subject.optionalSubjectId} className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    disabled={isFull && !isChecked}
                                    onChange={e => {
                                      let next = [...selected];
                                      if (e.target.checked) {
                                        if (next.length < maxOptionalSubjects) next.push(idStr);
                                      } else {
                                        next = next.filter(s => s !== idStr);
                                      }
                                      setFormData(prev => ({
                                        ...prev,
                                        optionalSubject1: next[0] || '',
                                        optionalSubject2: next[1] || '',
                                        optionalSubject3: next[2] || '',
                                      }));
                                      setErrors(prev => {
                                        if (!prev.optionalSubjects) return prev;
                                        const nextErrors = { ...prev };
                                        delete nextErrors.optionalSubjects;
                                        return nextErrors;
                                      });
                                    }}
                                  />
                                  {subject.subjectName}
                                </label>
                              );
                            })}
                            {formData.facultyId && filteredOptionalSubjects.length === 0 && (
                              <p className="text-sm text-gray-500 italic">No optional subjects available for this faculty.</p>
                            )}
                            </div>
                          </div>
                          {errors.optionalSubjects && <p className="text-red-500 text-xs mt-1">{errors.optionalSubjects}</p>}
                        </motion.div>
                        {/* Additional Subject Dropdown */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                          <Label htmlFor="additionalSubjectId" className="text-sm font-medium text-gray-700 mb-2 block">
                            Additional Subject
                          </Label>
                          <select
                            id="additionalSubjectId"
                            value={formData.additionalSubjectId}
                            onChange={e => setFormData(prev => ({ ...prev, additionalSubjectId: e.target.value }))}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-gray-700"
                          >
                            <option value="">Select Additional Subject</option>
                            {additionalSubjects.map(s => (
                              <option key={s.additionalSubjectId} value={s.additionalSubjectId}>{s.subjectName}</option>
                            ))}
                          </select>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 6: Documents Upload */}
                {currentStep === 6 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="space-y-6">
                      {Object.keys(errors).length > 0 && (
                        <motion.div
                          id="validation-error-summary"
                          className="p-4 rounded-xl border-2 border-red-200 bg-red-50"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <p className="text-red-700 font-semibold text-sm">Please fill all required fields</p>
                          <p className="text-red-600 text-xs mt-1">Please fix highlighted fields before submitting.</p>
                        </motion.div>
                      )}
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

                {/* Step 7: Professional Review Dashboard */}
                {currentStep === 7 && (
                  <ReviewDashboard
                    formData={formData}
                    academicDetails={academicDetails}
                    documents={documents}
                    faculties={faculties}
                    compulsorySubjects={compulsorySubjects}
                    optionalSubjects={optionalSubjects}
                    additionalSubjects={additionalSubjects}
                    classes={classes}
                    genders={genders}
                    religions={religions}
                    castes={castes}
                    categories={categories}
                    bloodGroups={bloodGroups}
                    maritalStatuses={maritalStatuses}
                    onEditStep={setCurrentStep}
                  />
                )}

                {/* Step 6: Review & Submit (Schema fields only) */}
               
                {/* Navigation Buttons */}
                <motion.div 
                  className="flex items-center justify-between mt-10 pt-8 border-t-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div>
                    {currentStep > 1 && !(applicationNo || applicationId) && (
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
                    {!(applicationNo || applicationId) && (
                      <>
                        {currentStep < 7 ? (
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
                              disabled={isSubmitting}
                              className="h-12 px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                            >
                              {isSubmitting ? (
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              ) : (
                                <Send className="w-4 h-4 mr-2" />
                              )}
                              {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </Button>
                          </motion.div>
                        )}
                      </>
                    )}
                    
                    {(applicationNo || applicationId) && (
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
    </PortalLayout>
  );
}

// Type-safe helper to get file preview URL
const getFilePreview = (file: File | null): string | null => {
  if (!file) return null;
  return URL.createObjectURL(file);
};

// Type-safe derived values for Step 7
interface ReviewDashboardProps {
  formData: Record<string, string>;
  academicDetails: any;
  documents: Record<string, File | null>;
  faculties: Faculty[];
  compulsorySubjects: CompulsorySubject[];
  optionalSubjects: OptionalSubject[];
  additionalSubjects: AdditionalSubject[];
  classes: ClassDto[];
  genders: GenderDto[];
  religions: ReligionDto[];
  castes: CasteDto[];
  categories: CategoryDto[];
  bloodGroups: BloodGroupDto[];
  maritalStatuses: MaritalStatusDto[];
  onEditStep: (step: number) => void;
}

const ReviewDashboard: React.FC<ReviewDashboardProps> = ({
  formData,
  academicDetails,
  documents,
  faculties,
  compulsorySubjects,
  optionalSubjects,
  additionalSubjects,
  classes,
  genders,
  religions,
  castes,
  categories,
  bloodGroups,
  maritalStatuses,
  onEditStep,
}) => {
  // Type-safe derived values
  const optionalSubjectIds: string[] = [
    formData.optionalSubject1,
    formData.optionalSubject2,
    formData.optionalSubject3,
  ].filter((id): id is string => Boolean(id));

  const optionalNames: string = optionalSubjects
    .filter((s) => optionalSubjectIds.includes(String(s.optionalSubjectId)))
    .map((s) => s.subjectName)
    .join(', ');

  const facultyName: string | undefined = faculties.find(
    (f) => String(f.facultyId) === formData.facultyId
  )?.facultyName;

  const compulsorySubjectName: string | undefined = compulsorySubjects.find(
    (s) => String(s.compulsorySubjectId) === formData.compulsorySubjectId
  )?.subjectName;

  const additionalSubjectName: string | undefined = additionalSubjects.find(
    (s) => String(s.additionalSubjectId) === formData.additionalSubjectId
  )?.subjectName;

  const genderName: string | undefined = genders.find(
    (g) => String(g.genderId) === formData.genderId
  )?.genderName;

  const religionName: string | undefined = religions.find(
    (r) => String(r.religionId) === formData.religionId
  )?.religionName;

  const casteName: string | undefined = castes.find(
    (c) => String(c.casteId) === formData.casteId
  )?.casteName;

  const categoryName: string | undefined = categories.find(
    (c) => String(c.categoryId) === formData.categoryId
  )?.categoryName;

  const bloodGroupName: string | undefined = bloodGroups.find(
    (b) => String(b.bloodGroupId) === formData.bloodGroupId
  )?.bloodGroupName;

  const className: string | undefined = classes.find(
    (item) => String(item.id) === formData.classId
  )?.name;

  const maritalStatusName: string | undefined = maritalStatuses.find(
    (m) => String(m.maritalStatusId) === formData.maritalStatusId
  )?.maritalStatusName;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-2">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div> */}
            {/* <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Review Your Application
            </h2> */}
          </div>
          <p className="text-gray-600">Please verify all information before final submission</p>
        </motion.div>

        {/* Personal Details */}
        <ReviewSection
          title="Personal Details"
          icon={<User className="w-5 h-5" />}
          onEditStep={() => onEditStep(1)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReviewField label="Student Name" value={formData.studentName} required />
            <ReviewField label="Date of Birth" value={formData.dateOfBirth} required />
            <ReviewField label="Gender" value={genderName} required />
            <ReviewField label="Blood Group" value={bloodGroupName} required />
            <ReviewField label="Religion" value={religionName} required />
            <ReviewField label="Caste" value={casteName} required />
            <ReviewField label="Category" value={categoryName} required />
            <ReviewField label="Marital Status" value={maritalStatusName} required />
            <ReviewField label="Nationality" value={formData.nationality} required />
          </div>
        </ReviewSection>

        {/* Contact Information */}
        <ReviewSection
          title="Contact Information"
          icon={<MapPin className="w-5 h-5" />}
          onEditStep={() => onEditStep(2)}
        >
          <div className="grid grid-cols-1 gap-4">
            <ReviewField label="Mobile Number" value={formData.mobileNumber} required />
            <ReviewField label="Aadhaar Number" value={formData.aadhaarNumber} required />
            <ReviewField label="Permanent Address" value={formData.permanentAddress} required fullWidth />
            <ReviewField label="Local Address" value={formData.localAddress} required fullWidth />
          </div>
        </ReviewSection>

        {/* Academic Details */}
        <ReviewSection
          title="Academic Details"
          icon={<BookOpen className="w-5 h-5" />}
          onEditStep={() => onEditStep(3)}
        >
          <div className="space-y-4">
            {academicDetails.tenth.enabled && (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-3">10th Standard</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <ReviewField label="School/College" value={academicDetails.tenth.schoolCollege} required />
                  <ReviewField label="Board/Council" value={academicDetails.tenth.boardCouncil} />
                  <ReviewField label="Year of Passing" value={academicDetails.tenth.yearOfPassing} required />
                </div>
              </div>
            )}
            {academicDetails.eleventh.enabled && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">11th Standard</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <ReviewField label="School/College" value={academicDetails.eleventh.schoolCollege} required />
                  <ReviewField label="Board/Council" value={academicDetails.eleventh.boardCouncil} />
                  <ReviewField label="Year of Passing" value={academicDetails.eleventh.yearOfPassing} required />
                </div>
              </div>
            )}
            {academicDetails.other.enabled && (
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Other Qualifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <ReviewField label="School/College" value={academicDetails.other.schoolCollege} />
                  <ReviewField label="Exam Name" value={academicDetails.other.examName} />
                  <ReviewField label="Year of Passing" value={academicDetails.other.yearOfPassing} />
                </div>
              </div>
            )}
          </div>
        </ReviewSection>

        {/* Parent/Guardian Information */}
        <ReviewSection
          title="Parent/Guardian Information"
          icon={<Users className="w-5 h-5" />}
          onEditStep={() => onEditStep(4)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReviewField label="Father's Name" value={formData.fatherName} required />
            <ReviewField label="Mother's Name" value={formData.motherName} required />
            <ReviewField label="Father's Occupation" value={formData.fatherOccupation} />
          </div>
        </ReviewSection>

        {/* Subject Selection */}
        <ReviewSection
          title="Subject Selection"
          icon={<BookOpen className="w-5 h-5" />}
          onEditStep={() => onEditStep(5)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReviewField label="Faculty" value={facultyName} required />
            <ReviewField label="Compulsory Subject (Mother Tongue)" value={compulsorySubjectName} required />
            <div className="md:col-span-2">
              <h4 className="font-semibold text-gray-700 mb-2">Optional Subjects</h4>
              <p className="text-sm font-semibold text-gray-900">
                {optionalNames || <span className="text-red-500">Not Selected</span>}
              </p>
            </div>
            {additionalSubjectName && (
              <ReviewField label="Additional Subject" value={additionalSubjectName} />
            )}
          </div>
        </ReviewSection>

        {/* Documents */}
        <ReviewSection
          title="Uploaded Documents"
          icon={<FileText className="w-5 h-5" />}
          onEditStep={() => onEditStep(6)}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <DocumentPreview file={documents.photo} label="Photo" required />
            <DocumentPreview file={documents.casteCertificate} label="Caste Certificate" required />
            <DocumentPreview file={documents.schoolLeaving} label="School Leaving" required />
            <DocumentPreview file={documents.admitCard} label="Admit Card" required />
            <DocumentPreview file={documents.marksheet} label="Marksheet" required />
            <DocumentPreview file={documents.aadharCard} label="Aadhaar Card" required />
          </div>
        </ReviewSection>
      </div>
    </motion.div>
  );
};

// Review Section Component
interface ReviewSectionProps {
  title: string;
  icon: React.ReactNode;
  onEditStep: () => void;
  children: React.ReactNode;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ title, icon, onEditStep, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="p-6 rounded-2xl border-2 border-gray-200 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={onEditStep}
            className="flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </Button>
        </div>
        <div>{children}</div>
      </Card>
    </motion.div>
  );
};

// Review Field Component
interface ReviewFieldProps {
  label: string;
  value?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const ReviewField: React.FC<ReviewFieldProps> = ({ label, value, required, fullWidth }) => {
  return (
    <div className={fullWidth ? 'md:col-span-2' : ''}>
      <label className="block text-xs text-gray-500 mb-1">
        <span>{label}</span>
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <p className="text-sm font-semibold text-gray-900">
        {value || <span className="text-red-500">Not Provided</span>}
      </p>
    </div>
  );
};

// Document Preview Component
interface DocumentPreviewProps {
  file: File | null;
  label: string;
  required?: boolean;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ file, label, required }) => {
  const preview = getFilePreview(file);
  const isImage = file?.type.startsWith('image/') ?? false;

  return (
    <div className={`p-3 rounded-lg border-2 text-center transition-colors ${
      file ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-300'
    }`}>
      {file ? (
        <div className="flex flex-col items-center gap-2">
          {isImage && preview ? (
            <img src={preview} alt={label} className="w-16 h-16 object-cover rounded" />
          ) : (
            <FileText className="w-6 h-6 text-blue-500" />
          )}
          <p className="text-xs font-medium text-gray-700 truncate">{file.name}</p>
          <Badge className="bg-green-500 text-white text-xs">✓ Uploaded</Badge>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <FileText className="w-6 h-6 text-gray-400" />
          <p className="text-xs font-medium text-gray-600">{label}</p>
          {required ? (
            <Badge className="bg-red-300 text-red-700 text-xs">* Required</Badge>
          ) : (
            <Badge className="bg-gray-300 text-gray-700 text-xs">Optional</Badge>
          )}
        </div>
      )}
    </div>
  );
};