import { API_BASE_URL, API_ENDPOINTS } from "./apiConfig";
import type { ResponseDto } from "../types/responseTypes";
import type { RegistrationResultApiDto, RegistrationResultDto } from "../types/registrationTypes";

export type RegisterStudentResponseDto = Omit<ResponseDto, "data"> & {
  data: RegistrationResultDto;
};

function normalizeRegistrationResult(data: unknown): RegistrationResultDto {
  if (data && typeof data === "object") {
    const item = data as RegistrationResultApiDto;
    const applicationId = item.applicationId ?? item.ApplicationId ?? null;
    const applicationNo = item.applicationNo ?? item.ApplicationNo ?? (applicationId ? `APP-${applicationId}` : "");
    const registrationNo = item.registrationNo ?? item.RegistrationNo ?? null;
    const applicationStatus = item.applicationStatus ?? item.ApplicationStatus ?? (registrationNo ? "Approved" : "Pending");

    return {
      applicationId,
      applicationNo,
      registrationNo,
      applicationStatus,
    };
  }

  if (typeof data === "number") {
    return {
      applicationId: data,
      applicationNo: `APP-${data}`,
      registrationNo: null,
      applicationStatus: "Pending",
    };
  }

  if (typeof data === "string") {
    return {
      applicationId: Number.isFinite(Number(data)) ? Number(data) : null,
      applicationNo: data,
      registrationNo: null,
      applicationStatus: "Pending",
    };
  }

  return {
    applicationId: null,
    applicationNo: "",
    registrationNo: null,
    applicationStatus: "Pending",
  };
}

export async function registerStudent(formData: FormData): Promise<RegisterStudentResponseDto> {
  const response = await fetch(API_BASE_URL + API_ENDPOINTS.registerStudent, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Registration failed");
  }

  const result = (await response.json()) as ResponseDto;

  return {
    isSuccess: !!result?.isSuccess,
    message: result?.message || "",
    data: normalizeRegistrationResult(result?.data),
  };
}
