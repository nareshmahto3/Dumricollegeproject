import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SidebarProvider } from "./contexts/SidebarContext";
import { Toaster } from "./components/ui/sonner";

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
  return (
    <SidebarProvider>
      <Suspense fallback={<GlobalLoader />}>
        <RouterProvider router={router} />
        <Toaster />
      </Suspense>
    </SidebarProvider>
  );
}