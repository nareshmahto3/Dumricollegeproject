import * as react from 'react';
import { useNavigate } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Quote,
  GraduationCap,
  Users,
  Award,
} from 'lucide-react';

const sidebarMenuItems = [
  { id: 'About Jharkhand Commerce Inter College', label: 'About Jharkhand Commerce Inter College', active: true },
  { id: 'Vision and Mission', label: 'Vision and Mission', active: false },
  { id: 'administration', label: 'Administration', active: false },
  { id: 'Founder', label: 'Founder', active: false },
  { id: 'Principal Message', label: 'Principal Message', active: false },
  { id: 'Our Alumini', label: 'Our Alumini', active: false },
];

export function AboutPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = react.useState('who-we-are');

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
                      onClick={() => setActiveSection(item.id)}
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
                    src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcyNDQ5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="College Building"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              {/* Main Title and Description */}
              <div className="mb-8">
                <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
                  About Dumri College
                </h2>
                <p className="text-gray-600 text-base leading-7">
                  At Dumri College, education goes beyond textbooks and classrooms. We believe in empowering
                  <br className="hidden lg:block" />
                  students to explore their passions, challenge conventions, and discover their potential through
                  <br className="hidden lg:block" />
                  meaningful experiences. Our distinguished faculty members are leaders in their respective fields,
                  <br className="hidden lg:block" />
                  dedicated to delivering world-class education that integrates theory with practical support and
                  <br className="hidden lg:block" />
                  application. With cutting-edge facilities, modern laboratories, and a vibrant learning
                  <br className="hidden lg:block" />
                  environment, we ensure that every student has the tools and support to excel academically
                  <br className="hidden lg:block" />
                  and personally.
                </p>
              </div>

              {/* Quote Box */}
              <div className="bg-white rounded-lg p-6 mb-8">
                {/* Quote Icon */}
                <div className="flex items-start gap-1 mb-5">
                  <Quote className="w-10 h-10 text-[#FDC72F] fill-[#FDC72F]" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-900 text-lg italic leading-8 mb-5">
                  "Our diverse community welcomes students from across the globe, fostering
                  <br className="hidden lg:block" />
                  cultural exchange and mutual understanding. Through international
                  <br className="hidden lg:block" />
                  collaborations, research initiatives, and innovation hubs, we provide
                  <br className="hidden lg:block" />
                  opportunities for students to engage with global challenges and contribute to
                  <br className="hidden lg:block" />
                  sustainable solutions."
                </p>

                {/* Author */}
                <p className="text-gray-900 text-lg font-light font-serif">
                  - Dr. Rajesh Kumar, Principal
                </p>
              </div>

              {/* Additional Content */}
              <div className="mb-10">
                <p className="text-gray-600 text-base leading-7">
                  Our diverse community welcomes students from across the globe, fostering cultural exchange
                  <br className="hidden lg:block" />
                  and mutual understanding. Through international collaborations, research initiatives, and
                  <br className="hidden lg:block" />
                  innovation hubs, we provide opportunities for students to engage with global challenges and
                  <br className="hidden lg:block" />
                  contribute to sustainable solutions. At the heart of Dumri College lies a commitment to
                  <br className="hidden lg:block" />
                  excellence and inclusivity. We help students gain the skills, confidence, and perspective to lead in an ever-changing
                  <br className="hidden lg:block" />
                  world.
                </p>
              </div>

              {/* Image Gallery with Overlay Circle */}
              <div className="relative mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1627560985113-ab67e8031f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2xhc3Nyb29tJTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzcyNDk3NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Campus Life"
                      className="w-full h-72 object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1767595789539-cd012af80914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyNDg3NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Student Activities"
                      className="w-full h-72 object-cover"
                    />
                  </motion.div>
                </div>

                {/* Overlapping Circular Element */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#2F584F] rounded-full flex items-center justify-center p-5 shadow-xl hidden md:block">
                  <GraduationCap className="w-20 h-20 text-[#FDC72F]" />
                </div>
              </div>

              {/* Statistics Banner */}
              <div
                className="relative rounded-2xl p-6 lg:p-8 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1673609218895-bb331f054e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyNDk3NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080)',
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F584F] via-[#2F584F]/80 to-[#2F584F]/60 rounded-2xl"></div>

                {/* Stats Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <GraduationCap className="w-10 h-10 text-[#FDC72F]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-4xl font-light text-white font-serif">5.2</span>
                        <span className="text-4xl font-bold text-white font-serif">K</span>
                      </div>
                      <p className="text-white text-sm">Students Enrolled</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-[2px] h-16 bg-white/30"></div>

                  {/* Stat 2 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Users className="w-10 h-10 text-[#FDC72F]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-4xl font-light text-white font-serif">85</span>
                        <span className="text-4xl font-bold text-white font-serif">+</span>
                      </div>
                      <p className="text-white text-sm">Academic Staff</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-[2px] h-16 bg-white/30"></div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Award className="w-10 h-10 text-[#FDC72F]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-4xl font-light text-white font-serif">50</span>
                        <span className="text-4xl font-bold text-white font-serif">+</span>
                      </div>
                      <p className="text-white text-sm">Years of Excellence</p>
                    </div>
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