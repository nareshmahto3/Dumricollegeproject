import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Mail,
  Phone,
  Shield,
  Users,
  Award,
} from 'lucide-react';

const sidebarMenuItems = [
  { id: 'who-we-are', label: 'Who We Are', active: false },
  { id: 'history', label: 'History', active: false },
  { id: 'administration', label: 'Administration', active: true },
  { id: 'campus-map', label: 'Campus Map', active: false },
];

const administrators = [
  {
    name: 'Dr. Rajesh Kumar',
    position: 'Principal',
    qualification: 'Ph.D. in Education Management',
    email: 'principal@dumricollege.edu',
    phone: '+91 9876543210',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI0OTg1Njl8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Prof. Anita Sharma',
    position: 'Vice Principal',
    qualification: 'M.A., M.Phil.',
    email: 'viceprincipal@dumricollege.edu',
    phone: '+91 9876543211',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjQ5ODU3MHww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Dr. Suresh Patel',
    position: 'Dean of Academic Affairs',
    qualification: 'Ph.D. in Physics',
    email: 'dean.academic@dumricollege.edu',
    phone: '+91 9876543212',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzcyNDk4NTcwfDA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Ms. Priya Singh',
    position: 'Registrar',
    qualification: 'M.Com., MBA',
    email: 'registrar@dumricollege.edu',
    phone: '+91 9876543213',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NzI0OTg1NzF8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
];

const departments = [
  {
    name: 'Academic Department',
    head: 'Dr. Suresh Patel',
    description: 'Oversees all academic programs, curriculum development, and educational quality.',
    icon: Award,
  },
  {
    name: 'Student Affairs',
    head: 'Prof. Meera Reddy',
    description: 'Manages student services, counseling, placements, and extracurricular activities.',
    icon: Users,
  },
  {
    name: 'Administration',
    head: 'Ms. Priya Singh',
    description: 'Handles admissions, examinations, records, and general administration.',
    icon: Shield,
  },
];

export function AdministrationPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('administration');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730701878011-a423ec61c328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYWRtaW5pc3RyYXRpb24lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNDk4MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080)',
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
            <span className="text-white text-base">Administration</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Administration
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Meet our dedicated team of administrators committed to providing excellent
            <br />
            educational services and fostering a supportive learning environment.
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
                        if (routes[item.id] && item.id !== 'administration') {
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
                  Leadership Team
                </h2>
                <p className="text-gray-600 text-base leading-7">
                  Our administrative team brings together decades of experience in education, management, and
                  <br className="hidden lg:block" />
                  student services. They work tirelessly to ensure that Dumri College maintains its standards of
                  <br className="hidden lg:block" />
                  excellence while continuously improving the educational experience for all students.
                </p>
              </div>

              {/* Administrators Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {administrators.map((admin, index) => (
                  <motion.div
                    key={admin.email}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={admin.image}
                        alt={admin.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {admin.name}
                      </h3>
                      <p className="text-[#2563EB] font-medium mb-2">
                        {admin.position}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {admin.qualification}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4 text-[#FDC72F]" />
                          <a href={`mailto:${admin.email}`} className="hover:text-[#2563EB]">
                            {admin.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4 text-[#FDC72F]" />
                          <a href={`tel:${admin.phone}`} className="hover:text-[#2563EB]">
                            {admin.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Departments Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-light text-gray-900 mb-8 font-serif leading-tight">
                  Administrative Departments
                </h2>

                <div className="space-y-6">
                  {departments.map((dept, index) => (
                    <motion.div
                      key={dept.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#2F584F] rounded-full flex items-center justify-center">
                          <dept.icon className="w-6 h-6 text-[#FDC72F]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {dept.name}
                          </h3>
                          <p className="text-[#2563EB] text-sm font-medium mb-2">
                            Head: {dept.head}
                          </p>
                          <p className="text-gray-600 leading-7">
                            {dept.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Banner */}
              <div className="bg-[#2F584F] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-light font-serif mb-4">
                  Get in Touch
                </h3>
                <p className="text-white/90 leading-7 mb-6">
                  For administrative inquiries, please contact our office during business hours
                  (Monday to Friday, 9:00 AM - 5:00 PM) or reach out via email.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FDC72F]" />
                    <span>+91 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FDC72F]" />
                    <span>admin@dumricollege.edu</span>
                  </div>
                </div>
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