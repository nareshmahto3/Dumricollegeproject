interface FormState {
  studentName: string;
  fatherName: string;
  motherName: string;
  permanentAddress: string;
  localAddress: string;
  dateOfBirth: string;
  religionId: string;
  nationality: string;
  casteId: string;
  bloodGroupId: string;
  genderId: string;
  categoryId: string;
  identificationMark: string;
  guardianOccupation: string;
  maritalStatusId: string;
  aadhaarNumber: string;
  mobileNumber: string;
  height: string;
  weight: string;
  facultyId: string;
  compulsorySubjectId: string;
  classId: string;
  optionalSubject1: string;
  optionalSubject2: string;
  optionalSubject3: string;
  additionalSubjectId: string;
  [key: string]: string;
}

interface AcademicEntry {
  enabled: boolean;
  schoolCollege: string;
  boardCouncil: string;
  examName: string;
  yearOfPassing: string;
  divisionRank: string;
  subjects: string;
}

interface AcademicDetails {
  tenth: AcademicEntry;
  eleventh: AcademicEntry;
  other: AcademicEntry;
}

interface DocumentFiles {
  photo: File | null;
  casteCertificate: File | null;
  schoolLeaving: File | null;
  admitCard: File | null;
  marksheet: File | null;
  aadharCard: File | null;
}

export function buildFormData(
  formState: FormState,
  academicDetails: AcademicDetails,
  documents: DocumentFiles
): FormData {
  const fd = new FormData();

  // Personal & contact fields
  fd.append("StudentName", formState.studentName);
  fd.append("FatherName", formState.fatherName);
  fd.append("MotherName", formState.motherName);
  fd.append("PermanentAddress", formState.permanentAddress);
  fd.append("LocalAddress", formState.localAddress);
  fd.append("DateOfBirth", formState.dateOfBirth);
  fd.append("ReligionId", formState.religionId);
  fd.append("Nationality", formState.nationality);
  fd.append("CasteId", formState.casteId);
  fd.append("BloodGroupId", formState.bloodGroupId);
  fd.append("GenderId", formState.genderId);
  fd.append("CategoryId", formState.categoryId);
  fd.append("IdentificationMark", formState.identificationMark);
  fd.append("GuardianOccupation", formState.guardianOccupation);
  fd.append("MaritalStatusId", formState.maritalStatusId);
  fd.append("AadhaarNumber", formState.aadhaarNumber || "");
  fd.append("MobileNumber", formState.mobileNumber);
  fd.append("Height", formState.height);
  fd.append("Weight", formState.weight);

  // Subject selection
  fd.append("ClassId", formState.classId || formState.applyingForClass || "");
  fd.append("FacultyId", formState.facultyId);
  fd.append("CompulsorySubjectId", formState.compulsorySubjectId);
  fd.append("OptionalSubject1Id", formState.optionalSubject1);
  fd.append("OptionalSubject2Id", formState.optionalSubject2);
  fd.append("OptionalSubject3Id", formState.optionalSubject3 || "");
  fd.append("AdditionalSubjectId", formState.additionalSubjectId || "");

  // Academic details — collect all enabled exam sections
  const examDetails: { SchoolCollege: string; BoardCouncil: string; ExamName: string; YearOfPassing: string; DivisionOrRank: string; Subjects: string }[] = [];

  const examMap: { key: keyof AcademicDetails; label: string }[] = [
    { key: 'tenth', label: '10th' },
    { key: 'eleventh', label: '11th' },
    { key: 'other', label: 'Other' },
  ];

  for (const { key } of examMap) {
    const entry = academicDetails[key];
    if (entry.enabled) {
      examDetails.push({
        SchoolCollege: entry.schoolCollege,
        BoardCouncil: entry.boardCouncil,
        ExamName: entry.examName,
        YearOfPassing: entry.yearOfPassing,
        DivisionOrRank: entry.divisionRank,
        Subjects: entry.subjects,
      });
    }
  }

  fd.append("ExamDetails", JSON.stringify(examDetails));

  // Certificate fields (placeholder — extend if form collects these)
  fd.append("CertificateType", "");
  fd.append("CertificateNumber", "");
  fd.append("IssueDate", "");
  fd.append("IssuedBy", "");

  // File attachments
  if (documents.photo) fd.append("PhotoFile", documents.photo);
  if (documents.casteCertificate) fd.append("CasteCertificateFile", documents.casteCertificate);
  if (documents.schoolLeaving) fd.append("SchoolLeavingFile", documents.schoolLeaving);
  if (documents.admitCard) fd.append("AdmitCardFile", documents.admitCard);
  if (documents.marksheet) fd.append("MarksheetFile", documents.marksheet);
  if (documents.aadharCard) fd.append("AadhaarFile", documents.aadharCard);

  return fd;
}
