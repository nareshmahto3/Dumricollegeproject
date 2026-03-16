import { useNavigate, useLocation, Outlet } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { ChevronRight } from 'lucide-react';

const sidebarMenuItems = [
  { id: 'overview', label: 'About Jharkhand Commerce Inter College', path: '/about' },
  { id: 'vision-mission', label: 'Vision and Mission', path: '/about/vision-mission' },
  { id: 'administration', label: 'Administration', path: '/about/administration' },
  { id: 'founder', label: 'Founder', path: '/about/founder' },
  { id: 'principal-message', label: 'Principal Message', path: '/about/principal-message' },
  { id: 'alumni', label: 'Our Alumni', path: '/about/alumni' },
];

export function AboutLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    if (path === '/about') {
      return location.pathname === '/about';
    }
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNDk3NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00192C]"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => navigate('/')}
              className="text-white text-base hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">About us</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            About Dumri College
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Education goes beyond textbooks and classrooms. We believe in empowering students
            <br />
            to explore their passions and challenge conventions.
          </p>
        </div>

        {/* Decorative Circle Element */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FDC72F] opacity-20 blur-xl hidden lg:block"></div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F6F4EE] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl p-8 shadow-sm sticky top-8">
                {/* Sidebar Title */}
                <h3 className="text-xl font-light text-gray-900 mb-3 font-serif">
                  Dumri Inside
                </h3>

                {/* Decorative Line */}
                <div className="relative w-full h-[1px] bg-[#E4E4E4] mb-6">
                  <div className="absolute left-0 top-0 w-[70px] h-[2px] bg-[#FDC72F]"></div>
                </div>

                {/* Menu Items */}
                <div className="space-y-3 mb-8">
                  {sidebarMenuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.path)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-all ${
                        isActiveRoute(item.path)
                          ? 'bg-[#2F584F] text-white'
                          : 'bg-[#F6F4EE] text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>

                {/* Sidebar Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcyNDQ5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="College Building"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Area - Dynamic Content from Routes */}
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
