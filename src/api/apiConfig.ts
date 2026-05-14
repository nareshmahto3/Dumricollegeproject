export const API_BASE_URL = "https://localhost:44361/api";

export const API_ENDPOINTS = {
  faculties: "/Subject/Faculties",
  compulsorySubjects: "/Subject/Compulsory",
  facultyCompulsorySubjects: "/Subject/FacultyCompulsory",
  optionalSubjectsByFaculty: "/Subject/OptionalByFaculty",
  additionalSubjects: "/Subject/Additional",
  classes: "/Subject/Classes",
  registerStudent: "/Registration/RegisterStudent",
  deleteStudent: "/Registration/DeleteStudent",
  studentApplications: "/Student/applications",
  studentDetail: "/Student", // GET /api/Student/{id} for single student detail
  applicationPdf: "/Student/application-pdf",
  religions: "/Subject/Religions",
  castes: "/Subject/Castes",
  genders: "/Subject/Genders",
  categories: "/Subject/Categories",
  bloodGroups: "/Subject/BloodGroups",
  maritalStatuses: "/Subject/MaritalStatuses",
  documentByApplication: "/Document",
  documentApprove: "/Document/approve",
  documentReject: "/Document/reject",
  documentReupload: "/Document/reupload",
};
