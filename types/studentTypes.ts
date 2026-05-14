export interface StudentApplicationApiDto {
  applicationId?: number;
  applicationNo?: string;
  registrationNo?: string | null;
  applicationStatus?: string;
  studentName?: string;
  mobileNumber?: string;
  gender?: string;
  status?: string;
  createdDate?: string | null;
  studentId?: string | number | null;

  ApplicationId?: number;
  ApplicationNo?: string;
  RegistrationNo?: string | null;
  ApplicationStatus?: string;
  StudentName?: string;
  MobileNumber?: string;
  Gender?: string;
  Status?: string;
  CreatedDate?: string | null;
  StudentId?: string | number | null;
}

export interface StudentApplication {
  applicationId: number;
  applicationNo: string;
  registrationNo: string | null;
  applicationStatus: string;
  studentName: string;
  mobileNumber: string;
  gender?: string;
  createdDate?: string | null;
  studentId?: string | number | null;
}

// Backward-compatible alias for older imports.
export type StudentListDto = StudentApplicationApiDto;
