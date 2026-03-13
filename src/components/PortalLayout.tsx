import { ReactNode } from "react";
import { PortalSidebar } from "./PortalSidebar";
import { PortalHeader } from "./PortalHeader";
import { useSidebar } from "../contexts/SidebarContext";

interface PortalLayoutProps {
  children: ReactNode;
  role: "admin" | "student" | "teacher";
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  pageTitle?: string;
  breadcrumbs?: string[];
}

export function PortalLayout({
  children,
  role,
  userName = "User",
  userRole = "Role",
  userAvatar,
  pageTitle,
  breadcrumbs = ["Home"],
}: PortalLayoutProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <PortalSidebar role={role} />

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "lg:ml-[70px]" : "lg:ml-[280px]"
        }`}
      >
        {/* Header */}
        <PortalHeader userName={userName} userRole={userRole} userAvatar={userAvatar} />

        {/* Page Title & Breadcrumbs */}
        {(pageTitle || breadcrumbs.length > 0) && (
          <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
            {pageTitle && (
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">{pageTitle}</h1>
            )}
            {breadcrumbs.length > 0 && (
              <div className="flex items-center gap-2 text-xs sm:text-sm overflow-x-auto">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                    <span
                      className={
                        index === breadcrumbs.length - 1
                          ? "text-amber-600 font-semibold"
                          : "text-slate-500"
                      }
                    >
                      {crumb}
                    </span>
                    {index < breadcrumbs.length - 1 && (
                      <span className="text-slate-400">&gt;</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Page Content */}
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}