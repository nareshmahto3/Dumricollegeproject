import { useNavigate, useLocation, Outlet } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { ChevronRight } from 'lucide-react';
import imgAboutSidebarThumb from "../imports/svg-xmjpvvfj2s";

const sidebarMenuItems = [
  {
    id: 'overview',
    label: 'About Jharkhand Commerce Inter College',
    path: '/about',
    //image: 'https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcyNDQ5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    //bannerImage: 'https://images.unsplash.com/photo-1682161473727-402b497251b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzczOTM4MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    // bannerTitle: 'About Dumri College',
    // bannerDescription: 'Education goes beyond textbooks and classrooms. We believe in empowering students to explore their passions and challenge conventions.'
  },
  {
    id: 'administration',
    label: 'Administration',
    path: '/about/administration',
    //image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
  //  bannerImage: 'https://images.unsplash.com/photo-1748261595246-5516b94b2dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZG1pbmlzdHJhdGlvbiUyMG9mZmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM5MzgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
   // bannerTitle: 'Administration',
    //bannerDescription: 'Meet our dedicated administrative team committed to excellence in education. Our leadership ensures smooth operations and academic excellence across all departments.'
  },
  {
    id: 'founder',
    label: 'Founder',
    path: '/about/founder',
  //  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
   // bannerImage: 'https://images.unsplash.com/photo-1769071166862-8cc3a6f2ac5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VuZGVyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczOTM4MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
   // bannerTitle: 'Founder',
   // bannerDescription: 'Learn about the visionary founder who established Dumri College with a mission to provide quality education and empower generations of students.'
  },
  {
    id: 'principal-message',
    label: 'Principal Message',
    path: '/about/principal-message',
   // image: 'https://images.unsplash.com/photo-1754531976838-436a70636c96?w=400&q=80',
   // bannerImage: 'https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzkzODM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    bannerTitle: 'Principal Message',
    bannerDescription: 'A message from our Principal, guiding our institution towards academic excellence and holistic development of every student.'
  },
  {
    id: 'alumni',
    label: 'Our Alumni',
    path: '/about/alumni',
    // image: 'https://images.unsplash.com/photo-1754531976838-436a70636c96?w=400&q=80',
    //bannerImage: 'https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzkzODM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
   // bannerTitle: 'Our Alumni',
    //bannerDescription: 'Celebrating the success stories of our distinguished alumni who have made significant contributions in various fields across the globe.'
  },
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

  // Get current active menu item
  const activeMenuItem = sidebarMenuItems.find(item => isActiveRoute(item.path)) || sidebarMenuItems[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${activeMenuItem.bannerImage})`,
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
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">{activeMenuItem.label}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            {activeMenuItem.bannerTitle}
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            {activeMenuItem.bannerDescription}
          </p>
        </div>

        {/* Decorative Circle Element */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FDC72F] opacity-20 blur-xl hidden lg:block"></div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F6F4EE] py-20 lg:py-32">
        <div className="container mx-auto   sm:px-6 ">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl p-8 shadow-sm sticky top-8">
                {/* Sidebar Title */}
                <h3 className="font-['Bitter',serif] font-thin text-[20px] leading-[30px] text-[#030303] mb-3">
                  College Inside
                </h3>

                {/* Decorative Line */}
                <div className="relative w-full h-[1px] bg-[#E4E4E4] mb-6">
                  <div className="absolute left-0 top-[-0.5px] w-[70px] h-[2px] bg-[#00ade2]"></div>
                </div>

                {/* Menu Items */}
                <div className="space-y-3 mb-8">
                  {sidebarMenuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.path)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-all font-['Inter',sans-serif] font-medium text-base leading-[26px] ${isActiveRoute(item.path)
                          ? 'bg-[#0c5776] text-white'
                          : 'bg-[#F6F4EE] text-[#030303] hover:bg-[#e8e6de]'
                        }`}
                    >
                      <span>{item.label}</span>
                      <svg className="w-4 h-4" viewBox="0 0 15.8931 12.3194" fill="none">
                        <path
                          d="M10.3029 12.3194H9.34898C9.1664 8.968 11.2414 7.21023 12.2899 6.69629H0V5.66864H12.2899C9.77351 4.29027 9.15333 1.6218 9.35031 0H10.295C9.88631 3.99989 14.0936 5.66354 15.8931 5.66864V6.68675C10.6724 7.2879 10.0956 11.0413 10.3029 12.3194Z"
                          fill={isActiveRoute(item.path) ? 'white' : '#030303'}
                        />
                      </svg>
                    </button>
                  ))}
                </div>

                {/* Sidebar Image */}
                {/* <div className="rounded-xl overflow-hidden">
                  <img
                    src={activeMenuItem.image}
                    alt={activeMenuItem.label}
                    className="w-full h-40 object-cover transition-all duration-300"
                  />
                </div> */}
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