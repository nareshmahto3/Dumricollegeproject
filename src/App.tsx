import { Suspense, useState, useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SidebarProvider } from "./contexts/SidebarContext";
import { Toaster } from "./components/ui/sonner";
import { Preloader } from "./components/shared/Preloader";

function GlobalLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          Loading EduManage Pro…
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Hide preloader after initial load
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000); // Adjust duration as needed (2000ms = 2 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <SidebarProvider>
      {/* Initial Page Load Preloader */}
      {showPreloader && <Preloader />}

      {/* Main App Content */}
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
        <Toaster />
      </Suspense>
    </SidebarProvider>
  );
}
