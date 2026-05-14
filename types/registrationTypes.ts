export interface ExamDetailDto {
  SchoolCollege: string;
  BoardCouncil: string;
  ExamName: string;
  YearOfPassing: string;
  DivisionOrRank: string;
  Subjects: string;
}

export interface StudentRegistration {
  StudentName: string;
  FatherName: string;
  MotherName: string;
  PermanentAddress: string;
  LocalAddress: string;
  DateOfBirth: string;
  ReligionId: string;
  Nationality: string;
  CasteId: string;
  BloodGroupId: string;
  GenderId: string;
  CategoryId: string;
  IdentificationMark: string;
  GuardianOccupation: string;
  MaritalStatusId: string;
  AadhaarNumber: string;
  MobileNumber: string;
  Height: string;
  Weight: string;

  FacultyId: string;
  CompulsorySubjectId: string;
  OptionalSubject1Id: string;
  OptionalSubject2Id: string;
  OptionalSubject3Id: string;
  AdditionalSubjectId: string;

  ExamDetails: ExamDetailDto[];

  CertificateType: string;
  CertificateNumber: string;
  IssueDate: string;
  IssuedBy: string;
}

export interface RegistrationResultApiDto {
  applicationId?: number;
  applicationNo?: string;
  registrationNo?: string | null;
  applicationStatus?: string;
  ApplicationId?: number;
  ApplicationNo?: string;
  RegistrationNo?: string | null;
  ApplicationStatus?: string;
}

export interface RegistrationResultDto {
  applicationId: number | null;
  applicationNo: string;
  registrationNo: string | null;
  applicationStatus: string;
}
