import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Clock,
  Calendar,
  Award,
  Building,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';

const sidebarMenuItems = [
  { id: 'who-we-are', label: 'About Us', active: false },
  { id: 'history', label: 'History', active: true },
  { id: 'administration', label: 'Administration', active: false },
  { id: 'campus-map', label: 'Campus Map', active: false },
];

const milestones = [
  {
    year: '1950',
    title: 'Foundation',
    description: 'Dumri College was established with a vision to provide quality education to students in rural Jharkhand.',
    icon: Building,
  },
  {
    year: '1975',
    title: 'First Expansion',
    description: 'Added science laboratories and expanded to offer Bachelor of Science programs.',
    icon: Award,
  },
  {
    year: '1990',
    title: 'Modernization',
    description: 'Introduced computer labs and modern library facilities to enhance learning.',
    icon: Clock,
  },
  {
    year: '2005',
    title: 'Accreditation',
    description: 'Received accreditation from NAAC and expanded postgraduate programs.',
    icon: Award,
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    description: 'Launched digital classrooms and online learning platforms for students.',
    icon: Calendar,
  },
  {
    year: '2024',
    title: 'Present Day',
    description: 'Serving over 5,200 students with 85+ faculty members across multiple disciplines.',
    icon: Award,
  },
];

export function HistoryPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('history');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1766355751664-ef8a25cf8463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwaGlzdG9yeSUyMHZpbnRhZ2UlMjBidWlsZGluZyUyMGhlcml0YWdlfGVufDF8fHx8MTc3MjQ5ODM0M3ww&ixlib=rb-4.1.0&q=80&w=1080)',
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
            <span className="text-white text-base">History</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Our History
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Seven decades of educational excellence, transforming lives and building futures
            <br />
            in the heart of Jharkhand.
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
              <div className="bg-white rounded-xl p-8 shadow-sm">
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
                      onClick={() => {
                        setActiveSection(item.id);
                        const routes: Record<string, string> = {
                          'who-we-are': '/about',
                          'history': '/history',
                          'administration': '/administration',
                          'campus-map': '/campus-map',
                        };
                        if (routes[item.id] && item.id !== 'history') {
                          navigate(routes[item.id]);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-all ${
                        activeSection === item.id
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
                    src="https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNDk3NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="College Building"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              {/* Main Title and Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
                  A Legacy of Excellence Since 1950
                </h2>
                <p className="text-gray-600 text-base leading-7 mb-6">
                  Dumri College has been a cornerstone of education in Jharkhand for over seven decades. What began as
                  <br className="hidden lg:block" />
                  a small institution with a handful of students has grown into a respected center of learning, serving
                  <br className="hidden lg:block" />
                  thousands of students and contributing to the educational and social development of the region.
                </p>
                <p className="text-gray-600 text-base leading-7">
                  Throughout our journey, we have remained committed to our founding principles: providing accessible,
                  <br className="hidden lg:block" />
                  quality education to all students, fostering academic excellence, and nurturing responsible citizens
                  <br className="hidden lg:block" />
                  who contribute positively to society.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-6 mb-12">
                <h3 className="text-2xl font-light text-gray-900 mb-8 font-serif">
                  Key Milestones
                </h3>

                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#2F584F] rounded-full flex items-center justify-center">
                        <milestone.icon className="w-6 h-6 text-[#FDC72F]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-[#2563EB]">{milestone.year}</span>
                          <span className="text-lg font-semibold text-gray-900">{milestone.title}</span>
                        </div>
                        <p className="text-gray-600 leading-7">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1627560985113-ab67e8031f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzcyNDk3NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Historic Building"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcyNDQ5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Students Learning"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              </div>

              {/* Quote Box */}
              <div className="bg-[#2F584F] rounded-2xl p-8 text-white">
                <p className="text-lg italic leading-8 mb-4">
                  "From humble beginnings to a prestigious institution, Dumri College has remained steadfast in its
                  commitment to educational excellence and social development. Our history is not just about buildings
                  and programs—it's about the thousands of lives we've touched and the communities we've served."
                </p>
                <p className="text-base font-medium">
                  - Archives of Dumri College
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}