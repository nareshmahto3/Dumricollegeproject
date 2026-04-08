import { API_BASE_URL, API_ENDPOINTS } from "./apiConfig";
import type { ResponseDto } from "../types/responseTypes";
import type { StudentApplication, StudentApplicationApiDto } from "../types/studentTypes";

type StudentApplicationsApiResponse = ResponseDto & {
  data?: StudentApplicationApiDto[];
};

function getFirstNonEmptyString(...values: Array<string | null | undefined>): string | undefined {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
}

export function mapStudentApplication(apiData: StudentApplicationApiDto): StudentApplication {
  const applicationId = apiData.applicationId ?? apiData.ApplicationId ?? 0;
  const applicationNo =
    getFirstNonEmptyString(apiData.ApplicationNo, apiData.applicationNo) ??
    (applicationId ? `APP-${applicationId}` : "");
  const registrationNo = getFirstNonEmptyString(apiData.RegistrationNo, apiData.registrationNo) ?? null;
  const applicationStatus =
    getFirstNonEmptyString(
      apiData.ApplicationStatus,
      apiData.applicationStatus,
      apiData.Status,
      apiData.status,
    ) ?? (registrationNo ? "Approved" : "Pending");

  return {
    applicationId,
    applicationNo,
    registrationNo,
    applicationStatus,
    studentName: apiData.studentName ?? apiData.StudentName ?? "",
    mobileNumber: apiData.mobileNumber ?? apiData.MobileNumber ?? "",
    gender: apiData.gender ?? apiData.Gender,
    createdDate: apiData.createdDate ?? apiData.CreatedDate,
    studentId: apiData.studentId ?? apiData.StudentId,
  };
}

function normalizeStudentList(payload: unknown): StudentApplication[] {
  if (Array.isArray(payload)) {
    return payload.map((item) => mapStudentApplication(item as StudentApplicationApiDto));
  }

  if (payload && typeof payload === "object" && Array.isArray((payload as StudentApplicationsApiResponse).data)) {
    return ((payload as StudentApplicationsApiResponse).data ?? []).map((item) => mapStudentApplication(item));
  }

  return [];
}

export async function getStudentApplications(): Promise<StudentApplication[]> {
  const response = await fetch(API_BASE_URL + API_ENDPOINTS.studentApplications);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch student applications");
  }

  const result: StudentApplicationApiDto[] | StudentApplicationsApiResponse = await response.json();
  return normalizeStudentList(result);
}

// Fetch single student detail and normalize when response has application fields.
export async function getStudentDetail(studentId: string | number): Promise<unknown> {
  const url = `${API_BASE_URL}${API_ENDPOINTS.studentDetail}/${studentId}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Failed to fetch student detail for ID: ${studentId}`);
  }

  const result = (await response.json()) as ResponseDto | StudentApplicationApiDto;
  const payload = (result as ResponseDto)?.data ?? result;

  if (payload && typeof payload === "object" && ("applicationId" in payload || "ApplicationId" in payload)) {
    return mapStudentApplication(payload as StudentApplicationApiDto);
  }

  return payload;
}
