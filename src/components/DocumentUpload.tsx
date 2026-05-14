import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle2,
  Clock,
  X,
  Download,
} from "lucide-react";
import { Card } from "./ui/card";
import { PortalLayout } from "./PortalLayout";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  status: "verified" | "pending" | "rejected";
  uploadDate: string;
}

const requiredDocuments = [
  { id: 1, name: "Birth Certificate", required: true },
  { id: 2, name: "Previous School Marksheet", required: true },
  { id: 3, name: "Transfer Certificate", required: true },
  { id: 4, name: "Passport Size Photo", required: true },
  { id: 5, name: "Address Proof", required: true },
];

export function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<
    UploadedFile[]
  >([
    {
      id: 1,
      name: "Birth_Certificate.pdf",
      size: "2.4 MB",
      status: "verified",
      uploadDate: "2026-01-15",
    },
    {
      id: 2,
      name: "Marksheet_2025.pdf",
      size: "1.8 MB",
      status: "verified",
      uploadDate: "2026-01-16",
    },
    {
      id: 3,
      name: "Transfer_Certificate.pdf",
      size: "1.2 MB",
      status: "pending",
      uploadDate: "2026-02-01",
    },
  ]);
  const [dragActive, setDragActive] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log("Files dropped:", e.dataTransfer.files);
    }
  };

  const handleFileInput = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload
      console.log("Files selected:", e.target.files);
    }
  };

  const removeFile = (id: number) => {
    setUploadedFiles(
      uploadedFiles.filter((file) => file.id !== id),
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <PortalLayout
      role="student"
      userName="Rohan Kumar"
      userRole="Grade 10-A"
      pageTitle="Document Upload"
      breadcrumbs={["Home", "Student", "Documents"]}
    >
      <div className="space-y-6">
        {/* Upload Progress */}
        <Card className="bg-white border-amber-200 shadow-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-900">Upload Progress</h3>
            <span className="text-sm text-slate-600">
              {uploadedFiles.length} of{" "}
              {requiredDocuments.length} documents uploaded
            </span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all"
              style={{
                width: `${(uploadedFiles.length / requiredDocuments.length) * 100}%`,
              }}
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Area */}
          <div className="space-y-6">
            <Card className="bg-white border-amber-200 shadow-lg p-6">
              <h3 className="mb-4 font-bold text-slate-900">Upload Documents</h3>
              <div
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-blue-300 bg-blue-50/50 hover:border-blue-500"
                  }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="mb-2 font-semibold text-slate-900">
                    Drag & drop files here
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    or click to browse from your computer
                  </p>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileInput}
                  />
                  <label htmlFor="file-upload">
                    <Button
                      variant="outline"
                      className="cursor-pointer border-blue-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                      asChild
                    >
                      <span>Browse Files</span>
                    </Button>
                  </label>
                  <p className="text-xs text-slate-500 mt-4">
                    Supported formats: PDF, JPG, PNG (Max 5MB)
                  </p>
                </div>
              </div>
            </Card>

            {/* Required Documents Checklist */}
            <Card className="bg-white border-amber-200 shadow-lg p-6">
              <h3 className="mb-4 font-bold text-slate-900">Required Documents</h3>
              <div className="space-y-3">
                {requiredDocuments.map((doc) => {
                  const uploaded = uploadedFiles.find((f) =>
                    f.name
                      .toLowerCase()
                      .includes(
                        doc.name
                          .toLowerCase()
                          .split(" ")[0],
                      ),
                  );
                  return (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 border border-blue-200 rounded-lg bg-blue-50/30"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${uploaded
                            ? "bg-emerald-100"
                            : "bg-gray-100"
                            }`}
                        >
                          {uploaded ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <FileText className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {doc.name}
                          </p>
                          {doc.required && (
                            <p className="text-xs text-red-600">
                              Required
                            </p>
                          )}
                        </div>
                      </div>
                      {uploaded && (
                        <Badge
                          variant="outline"
                          className="bg-emerald-100 text-emerald-700 border-emerald-200"
                        >
                          Uploaded
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Uploaded Files */}
          <Card className="p-6 h-fit">
            <h3 className="mb-4">Uploaded Files</h3>
            {uploadedFiles.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-muted-foreground">
                  No files uploaded yet
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="p-4 border border-border rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm mb-1 truncate">
                            {file.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {file.size}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="outline"
                        className={getStatusColor(
                          file.status,
                        )}
                      >
                        {file.status === "verified" && (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        )}
                        {file.status === "pending" && (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        <span className="capitalize">
                          {file.status}
                        </span>
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        Uploaded: {file.uploadDate}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-emerald-600 hover:bg-emerald-50 border-emerald-300 hover:text-green-700"
                      onClick={() =>
                        console.log(
                          "Downloading",
                          file.name,
                        )
                      }
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}