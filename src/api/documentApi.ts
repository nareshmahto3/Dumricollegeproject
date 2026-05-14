import { API_BASE_URL, API_ENDPOINTS } from "./apiConfig";
import type { ResponseDto } from "../types/responseTypes";

export type DocumentItemDto = {
  certificateId: number;
  applicationId: number;
  certificateType: string;
  filePath: string;
  verificationId: number;
  status: string;
  rejectReason: string | null;
  verifiedDate: string | null;
  isActive: boolean;
  version: number;
  createdDate: string;
};

type DocumentResponseDto = ResponseDto & {
  data?: DocumentItemDto[];
};

const DOCUMENT_BASE = API_BASE_URL + API_ENDPOINTS.documentByApplication;

function normalizeApiResponse(payload: unknown): DocumentItemDto[] {
  if (Array.isArray(payload)) {
    return payload as DocumentItemDto[];
  }

  if (payload && typeof payload === "object" && Array.isArray((payload as DocumentResponseDto).data)) {
    return (payload as DocumentResponseDto).data ?? [];
  }

  return [];
}

export async function getDocumentsByApplicationId(applicationId: number | string): Promise<DocumentItemDto[]> {
  const response = await fetch(`${DOCUMENT_BASE}/${applicationId}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch documents");
  }

  const payload = await response.json();
  return normalizeApiResponse(payload);
}

export async function approveDocument(verificationId: number): Promise<ResponseDto> {
  const response = await fetch(API_BASE_URL + API_ENDPOINTS.documentApprove, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ verificationId }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to approve document");
  }

  return response.json();
}

export async function rejectDocument(verificationId: number, rejectReason: string): Promise<ResponseDto> {
  const response = await fetch(API_BASE_URL + API_ENDPOINTS.documentReject, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ verificationId, rejectReason }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to reject document");
  }

  return response.json();
}

export async function reuploadDocument(
  applicationId: number,
  certificateId: number,
  file: File
): Promise<ResponseDto> {
  const formData = new FormData();
  formData.append("ApplicationId", String(applicationId));
  formData.append("CertificateId", String(certificateId));
  formData.append("file", file);

  const response = await fetch(API_BASE_URL + API_ENDPOINTS.documentReupload, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to reupload document");
  }

  return response.json();
}
