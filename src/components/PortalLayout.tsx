import { ReactNode } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  // Function to get the route for a breadcrumb
  const getBreadcrumbRoute = (crumb: string, index: number): string => {
    const lowerCrumb = crumb.toLowerCase();
    
    // Home breadcrumb
    if (lowerCrumb === "home") {
      return "/";
    }
    
    // Role-based dashboard (Admin, Student, Teacher)
    if (lowerCrumb === "admin") {
      return "/admin";
    }
    if (lowerCrumb === "student") {
      return "/student";
    }
    if (lowerCrumb === "teacher") {
      return "/teacher";
    }
    
    // Build path based on role and previous breadcrumbs
    const basePath = role === "admin" ? "/admin" : role === "student" ? "/student" : "/teacher";
    
    // Map common breadcrumb names to routes
    const routeMap: { [key: string]: string } = {
      "admissions": "/admissions",
      "students": "/students",
      "teachers": "/teachers",
      "classes": "/classes",
      "subjects": "/subjects",
      "schedule": "/schedule",
      "fees": "/fees",
      "payment": "/payment",
      "account": "/account",
      "exams": "/exams",
      "results": "/results",
      "attendance": "/attendance",
      "notices": "/notices",
      "library": "/library",
      "transport": "/transport",
      "hostel": "/hostel",
    };
    
    if (routeMap[lowerCrumb]) {
      return basePath + routeMap[lowerCrumb];
    }
    
    return "#"; // Default for unknown routes
  };

  const handleBreadcrumbClick = (crumb: string, index: number) => {
    // Don't navigate if it's the last breadcrumb (current page)
    if (index === breadcrumbs.length - 1) {
      return;
    }
    
    const route = getBreadcrumbRoute(crumb, index);
    if (route !== "#") {
      navigate(route);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <PortalSidebar role={role} />

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "lg:ml-[70px]" : "lg:ml-[235px]"
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
                      onClick={() => handleBreadcrumbClick(crumb, index)}
                      className={
                        index === breadcrumbs.length - 1
                          ? "text-amber-600 font-semibold cursor-default"
                          : "text-slate-500 hover:text-blue-600 cursor-pointer transition-colors"
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