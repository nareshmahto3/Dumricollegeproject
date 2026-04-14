import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import {
	ArrowLeft,
	BadgeCheck,
	CheckCircle2,
	Clock3,
	ExternalLink,
	FileText,
	RefreshCw,
	Search,
	ShieldAlert,
	ShieldCheck,
	Upload,
	XCircle,
} from "lucide-react";
import { PortalLayout } from "../PortalLayout";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import {
	approveDocument,
	getDocumentsByApplicationId,
	rejectDocument,
	reuploadDocument,
	type DocumentItemDto,
} from "../../api/documentApi";
import { API_BASE_URL } from "../../api/apiConfig";

type UiDocument = DocumentItemDto & {
	statusNormalized: "approved" | "pending" | "rejected" | "unknown";
};

function normalizeStatus(status: string): UiDocument["statusNormalized"] {
	const value = status?.toLowerCase().trim();
	if (value === "approved") return "approved";
	if (value === "pending") return "pending";
	if (value === "rejected") return "rejected";
	return "unknown";
}

function formatDate(value: string | null): string {
	if (!value) return "-";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "-";
	return date.toLocaleString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
}

function buildDocumentUrl(filePath: string): string {
	if (!filePath) return "";
	if (/^https?:\/\//i.test(filePath)) return filePath;

	const hostBase = API_BASE_URL.replace(/\/api\/?$/, "");
	const cleanPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;
	return `${hostBase}/${cleanPath}`;
}

export function Approved() {
	const navigate = useNavigate();
	const { applicationId } = useParams();

	const [applicationIdInput, setApplicationIdInput] = useState(applicationId ?? "");
	const [activeApplicationId, setActiveApplicationId] = useState<number | null>(null);
	const [documents, setDocuments] = useState<UiDocument[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [actionLoadingId, setActionLoadingId] = useState<number | null>(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [rejectOpenForId, setRejectOpenForId] = useState<number | null>(null);
	const [rejectReason, setRejectReason] = useState("");
	const [reuploadOpenForId, setReuploadOpenForId] = useState<number | null>(null);
	const [reuploadFile, setReuploadFile] = useState<File | null>(null);
	const [reuploadLoadingId, setReuploadLoadingId] = useState<number | null>(null);

	const summary = useMemo(() => {
		return documents.reduce(
			(acc, doc) => {
				if (doc.statusNormalized === "approved") acc.approved += 1;
				if (doc.statusNormalized === "pending") acc.pending += 1;
				if (doc.statusNormalized === "rejected") acc.rejected += 1;
				if (doc.statusNormalized === "unknown") acc.unknown += 1;
				return acc;
			},
			{ total: documents.length, approved: 0, pending: 0, rejected: 0, unknown: 0 },
		);
	}, [documents]);

	const loadDocuments = async (appId: number, isManualRefresh = false) => {
		try {
			setErrorMessage("");
			setSuccessMessage("");

			if (isManualRefresh) {
				setIsRefreshing(true);
			} else {
				setIsLoading(true);
			}

			const rows = await getDocumentsByApplicationId(appId);
			const normalizedRows: UiDocument[] = rows.map((item) => ({
				...item,
				statusNormalized: normalizeStatus(item.status),
			}));

			setDocuments(normalizedRows);
			setActiveApplicationId(appId);
			setRejectOpenForId(null);
			setRejectReason("");
			setReuploadOpenForId(null);
			setReuploadFile(null);
		} catch (error) {
			setDocuments([]);
			setErrorMessage(error instanceof Error ? error.message : "Unable to fetch document details.");
		} finally {
			setIsLoading(false);
			setIsRefreshing(false);
		}
	};

	useEffect(() => {
		if (!applicationId) return;
		const parsed = Number(applicationId);
		if (Number.isNaN(parsed) || parsed <= 0) {
			setErrorMessage("Invalid application id in URL.");
			return;
		}

		loadDocuments(parsed);
	}, [applicationId]);

	const handleSearch = async () => {
		const parsed = Number(applicationIdInput);
		if (Number.isNaN(parsed) || parsed <= 0) {
			setErrorMessage("Please enter a valid numeric Application ID.");
			return;
		}

		await loadDocuments(parsed);
	};

	const handleApprove = async (verificationId: number) => {
		try {
			setActionLoadingId(verificationId);
			setErrorMessage("");
			setSuccessMessage("");

			const response = await approveDocument(verificationId);
			if (!response.isSuccess) {
				throw new Error(response.message || "Document approval failed.");
			}

			const responseData = response.data && typeof response.data === "object" ? response.data as Record<string, unknown> : null;
			const registrationNo =
				typeof responseData?.registrationNo === "string"
					? responseData.registrationNo
					: typeof responseData?.RegistrationNo === "string"
						? responseData.RegistrationNo
						: "";

			setSuccessMessage(
				registrationNo
					? `Registration Number Generated: ${registrationNo}`
					: response.message || "Document approved successfully.",
			);
			setDocuments((previous) =>
				previous.map((doc) =>
					doc.verificationId === verificationId
						? {
								...doc,
								status: "Approved",
								statusNormalized: "approved",
								verifiedDate: new Date().toISOString(),
								rejectReason: null,
							}
						: doc,
				),
			);

			if (registrationNo && activeApplicationId) {
				await loadDocuments(activeApplicationId, true);
			}
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : "Document approval failed.");
		} finally {
			setActionLoadingId(null);
		}
	};

	const handleReject = async (verificationId: number) => {
		const reason = rejectReason.trim();
		if (!reason) {
			setErrorMessage("Reject reason is required.");
			return;
		}

		try {
			setActionLoadingId(verificationId);
			setErrorMessage("");
			setSuccessMessage("");

			const response = await rejectDocument(verificationId, reason);
			if (!response.isSuccess) {
				throw new Error(response.message || "Document rejection failed.");
			}

			setSuccessMessage(response.message || "Document rejected successfully.");
			setDocuments((previous) =>
				previous.map((doc) =>
					doc.verificationId === verificationId
						? {
								...doc,
								status: "Rejected",
								statusNormalized: "rejected",
								rejectReason: reason,
								verifiedDate: new Date().toISOString(),
							}
						: doc,
				),
			);
			setRejectOpenForId(null);
			setRejectReason("");
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : "Document rejection failed.");
		} finally {
			setActionLoadingId(null);
		}
	};

	const handleReupload = async (applicationId: number, certificateId: number) => {
		if (!reuploadFile) {
			setErrorMessage("Please select a file to reupload.");
			return;
		}

		try {
			setReuploadLoadingId(certificateId);
			setErrorMessage("");
			setSuccessMessage("");

			const response = await reuploadDocument(applicationId, certificateId, reuploadFile);
			if (!response.isSuccess) {
				throw new Error(response.message || "Document reupload failed.");
			}

			setSuccessMessage(response.message || "Document reupload submitted successfully. Awaiting verification.");
			setDocuments((previous) =>
				previous.map((doc) =>
					doc.certificateId === certificateId
						? {
								...doc,
								status: "Pending",
								statusNormalized: "pending",
								rejectReason: null,
								verifiedDate: null,
							}
						: doc,
				),
			);
			setReuploadOpenForId(null);
			setReuploadFile(null);
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : "Document reupload failed.");
		} finally {
			setReuploadLoadingId(null);
		}
	};

	return (
		<PortalLayout
			role="admin"
			userName="Stevie Zone"
			userRole="Admin"
			pageTitle="Document Approval Center"
			breadcrumbs={["Home", "Admin", "Students", "Approved"]}
		>
			<div className="space-y-6">
				<Card className="overflow-hidden border-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white shadow-xl">
					<div className="p-6 sm:p-8">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-blue-100">Verification Workspace</p>
								<h2 className="mt-2 text-2xl font-bold sm:text-3xl">Application Document Review</h2>
								<p className="mt-2 text-sm text-blue-100 sm:text-base">
									Inspect, approve, reject, and reupload documents with complete audit trail.
								</p>
							</div>
							<div className="grid grid-cols-2 gap-3 sm:min-w-[320px]">
								<div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
									<p className="text-xs text-blue-100">Total</p>
									<p className="text-xl font-bold">{summary.total}</p>
								</div>
								<div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
									<p className="text-xs text-blue-100">Pending</p>
									<p className="text-xl font-bold">{summary.pending}</p>
								</div>
								<div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
									<p className="text-xs text-blue-100">Approved</p>
									<p className="text-xl font-bold">{summary.approved}</p>
								</div>
								<div className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
									<p className="text-xs text-blue-100">Rejected</p>
									<p className="text-xl font-bold">{summary.rejected}</p>
								</div>
							</div>
						</div>
					</div>
				</Card>

				<Card className="border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
					<div className="flex flex-col gap-3 md:flex-row md:items-end">
						<div className="flex-1">
							<label className="mb-2 block text-sm font-medium text-slate-700">Application ID</label>
							<Input
								value={applicationIdInput}
								onChange={(e) => setApplicationIdInput(e.target.value)}
								placeholder="Enter application id (e.g. 32)"
								className="h-11 border-slate-300"
							/>
						</div>
						<Button
							onClick={handleSearch}
							className="h-11 bg-blue-600 px-6 text-white hover:bg-blue-700"
							disabled={isLoading}
						>
							<Search className="mr-2 h-4 w-4" />
							Load Documents
						</Button>
						<Button
							variant="outline"
							className="h-11 border-slate-300"
							disabled={!activeApplicationId || isRefreshing}
							onClick={() => activeApplicationId && loadDocuments(activeApplicationId, true)}
						>
							<RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
							Refresh
						</Button>
						<Button variant="outline" className="h-11 border-slate-300" onClick={() => navigate("/admin/students")}>
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back
						</Button>
					</div>

					{activeApplicationId && (
						<p className="mt-3 text-sm text-slate-600">
							Showing documents for Application ID: <span className="font-semibold text-slate-900">{activeApplicationId}</span>
						</p>
					)}

					{errorMessage && (
						<div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</div>
					)}
					{successMessage && (
						<div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{successMessage}</div>
					)}
				</Card>

				<div className="space-y-4">
					{isLoading && (
						<Card className="border border-slate-200 bg-white p-6 text-sm text-slate-600">Loading documents...</Card>
					)}

					{!isLoading && activeApplicationId && documents.length === 0 && (
						<Card className="border border-slate-200 bg-white p-6 text-center">
							<ShieldAlert className="mx-auto h-10 w-10 text-amber-500" />
							<p className="mt-3 text-slate-700">No documents found for this application.</p>
						</Card>
					)}

					{!isLoading &&
						documents.map((doc, index) => {
							const openRejectBox = rejectOpenForId === doc.verificationId;
							const openReuploadBox = reuploadOpenForId === doc.certificateId;
							const isPending = doc.statusNormalized === "pending";
							const cardBorder =
								doc.statusNormalized === "approved"
									? "border-emerald-200"
									: doc.statusNormalized === "rejected"
										? "border-rose-200"
										: "border-slate-200";

							return (
								<motion.div
									key={`${doc.certificateId}-${doc.verificationId}`}
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.05 }}
								>
									<Card className={`border bg-white p-5 shadow-sm ${cardBorder}`}>
										<div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
											<div className="space-y-3">
												<div className="flex flex-wrap items-center gap-2">
													<FileText className="h-5 w-5 text-blue-600" />
													<h3 className="text-lg font-semibold text-slate-900">{doc.certificateType || "Certificate"}</h3>
													{doc.statusNormalized === "approved" && (
														<Badge className="border-0 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
															<BadgeCheck className="mr-1 h-3.5 w-3.5" /> Approved
														</Badge>
													)}
													{doc.statusNormalized === "pending" && (
														<Badge className="border-0 bg-amber-100 text-amber-700 hover:bg-amber-100">
															<Clock3 className="mr-1 h-3.5 w-3.5" /> Pending
														</Badge>
													)}
													{doc.statusNormalized === "rejected" && (
														<Badge className="border-0 bg-rose-100 text-rose-700 hover:bg-rose-100">
															<XCircle className="mr-1 h-3.5 w-3.5" /> Rejected
														</Badge>
													)}
												</div>

												<div className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-slate-600 sm:grid-cols-2">
													<p>Certificate ID: <span className="font-medium text-slate-900">{doc.certificateId}</span></p>
													<p>Verification ID: <span className="font-medium text-slate-900">{doc.verificationId}</span></p>
													<p>Uploaded On: <span className="font-medium text-slate-900">{formatDate(doc.createdDate)}</span></p>
													<p>Verified On: <span className="font-medium text-slate-900">{formatDate(doc.verifiedDate)}</span></p>
												</div>

												{doc.rejectReason && (
													<div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
														Reject reason: <span className="font-medium">{doc.rejectReason}</span>
													</div>
												)}
											</div>

											<div className="flex flex-col gap-2 lg:min-w-[250px]">
												<Button
													variant="outline"
													className="justify-start border-slate-300"
													onClick={() => {
														const url = buildDocumentUrl(doc.filePath);
														if (url) window.open(url, "_blank", "noopener,noreferrer");
													}}
												>
													<ExternalLink className="mr-2 h-4 w-4" />
													Open Document
												</Button>

												{isPending && (
													<>
														<Button
															className="justify-start bg-emerald-600 text-white hover:bg-emerald-700"
															disabled={actionLoadingId === doc.verificationId}
															onClick={() => handleApprove(doc.verificationId)}
														>
															<CheckCircle2 className="mr-2 h-4 w-4" />
															Approve
														</Button>

														<Button
															variant="outline"
															className="justify-start border-rose-300 text-rose-700 hover:bg-rose-50"
															disabled={actionLoadingId === doc.verificationId}
															onClick={() => {
																setRejectOpenForId(openRejectBox ? null : doc.verificationId);
																setRejectReason("");
															}}
														>
															<ShieldAlert className="mr-2 h-4 w-4" />
															Reject
														</Button>
													</>
												)}

												{!isPending && doc.statusNormalized === "approved" && (
													<div className="flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
														<ShieldCheck className="h-4 w-4" />
														Already approved
													</div>
												)}

												{!isPending && doc.statusNormalized === "rejected" && (
													<Button
														className="justify-start border-blue-300 text-blue-700 hover:bg-blue-50"
														variant="outline"
														disabled={reuploadLoadingId === doc.certificateId}
														onClick={() => {
															setReuploadOpenForId(openReuploadBox ? null : doc.certificateId);
															setReuploadFile(null);
														}}
													>
														<Upload className="mr-2 h-4 w-4" />
														Reupload File
													</Button>
												)}
											</div>
										</div>

										{openRejectBox && (
											<div className="mt-4 space-y-3 rounded-lg border border-rose-200 bg-rose-50 p-4">
												<label className="text-sm font-medium text-rose-700">Reject Reason</label>
												<Textarea
													value={rejectReason}
													onChange={(e) => setRejectReason(e.target.value)}
													placeholder="Add a clear reason for rejection"
													className="min-h-[92px] border-rose-200 bg-white"
												/>
												<div className="flex flex-wrap gap-2">
													<Button
														className="bg-rose-600 text-white hover:bg-rose-700"
														disabled={actionLoadingId === doc.verificationId}
														onClick={() => handleReject(doc.verificationId)}
													>
														Confirm Reject
													</Button>
													<Button
														variant="outline"
														className="border-slate-300"
														disabled={actionLoadingId === doc.verificationId}
														onClick={() => {
															setRejectOpenForId(null);
															setRejectReason("");
														}}
													>
														Cancel
													</Button>
												</div>
											</div>
										)}

										{openReuploadBox && (
											<div className="mt-4 space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
												<label className="text-sm font-medium text-blue-700">Select New File to Reupload</label>
												<input
													type="file"
													className="w-full block rounded border border-blue-300 bg-white px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-blue-100 file:px-2 file:py-1 file:text-blue-700"
													onChange={(e) => setReuploadFile(e.target.files?.[0] || null)}
												/>
												{reuploadFile && (
													<p className="text-xs text-blue-600">Selected: <span className="font-medium">{reuploadFile.name}</span></p>
												)}
												<div className="flex flex-wrap gap-2">
													<Button
														className="bg-blue-600 text-white hover:bg-blue-700"
														disabled={!reuploadFile || reuploadLoadingId === doc.certificateId}
														onClick={() => activeApplicationId && handleReupload(activeApplicationId, doc.certificateId)}
													>
														Submit Reupload
													</Button>
													<Button
														variant="outline"
														className="border-slate-300"
														disabled={reuploadLoadingId === doc.certificateId}
														onClick={() => {
															setReuploadOpenForId(null);
															setReuploadFile(null);
														}}
													>
														Cancel
													</Button>
												</div>
											</div>
										)}
									</Card>
								</motion.div>
							);
						})}
				</div>
			</div>
		</PortalLayout>
	);
}
