import { motion } from "motion/react";
import { ChevronRight, GraduationCap, Clock, BookOpen, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router";
// import { SharedNavigation } from "./shared/SharedNavigation";
import { CarouselHeader } from "./CarouselHeader";
import { Footer } from "./Footer";

export function ProgramsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <CarouselHeader />

      {/* Breadcrumb Hero Section */}
      <section 
        className="relative py-20 bg-[#0C5776]"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(0, 25, 44, 0) 0%, rgba(0, 25, 44, 1) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00192C]/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto py-12">
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link 
                    to="/" 
                    className="text-white hover:text-white/80 transition-colors text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 text-white" />
                </li>
                <li>
                  <Link 
                    to="/programs" 
                    className="text-white hover:text-white/80 transition-colors text-base"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 text-white" />
                </li>
                <li>
                  <span className="text-white text-base">
                    Graduate
                  </span>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4 text-white" />
                </li>
                <li>
                  <span className="text-white text-base font-normal">
                    M.Sc. in CSE
                  </span>
                </li>
              </ol>
            </nav>

            {/* Page Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl text-white font-light font-serif mb-6"
            >
              M.Sc. in CSE
            </motion.h1>

            {/* Decorative Line */}
            <div className="w-full max-w-md h-px bg-white/15 relative mb-8">
              <div className="absolute left-0 top-0 w-36 h-0.5 bg-white" />
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-base leading-7 max-w-2xl"
            >
              Education goes beyond textbooks and classrooms. We believe in empowering students
              to explore their passions challenge conventions.
            </motion.p>
          </div>

          {/* Decorative Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[#F6F4EE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
            <button className="px-8 py-5 bg-[#0C5776] text-white font-semibold text-base capitalize whitespace-nowrap border-l border-t border-b border-[#0C5776]">
              Overview
            </button>
            <button className="px-8 py-5 bg-white text-gray-900 font-semibold text-base capitalize whitespace-nowrap border border-gray-200 hover:bg-gray-50 transition-colors">
              Curriculum
            </button>
            <button className="px-8 py-5 bg-white text-gray-900 font-semibold text-base capitalize whitespace-nowrap border border-gray-200 hover:bg-gray-50 transition-colors">
              Program Professors
            </button>
            <button className="px-8 py-5 bg-white text-gray-900 font-semibold text-base capitalize whitespace-nowrap border border-gray-200 hover:bg-gray-50 transition-colors">
              Cost & Financial Aid
            </button>
            <button className="px-8 py-5 bg-white text-gray-900 font-semibold text-base capitalize whitespace-nowrap border border-gray-200 hover:bg-gray-50 transition-colors">
              Admissions
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#F6F4EE] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 text-base leading-7 mb-12"
            >
              Our university offers a comprehensive range of academic programs designed to inspire learning, innovation and real-world impact. Each
              program is carefully crafted to blend theoretical knowledge with practical experience ensuring students gain the skills needed to excel in
              today's competitive global environment. From foundational undergraduate courses to advanced postgraduate and professional degrees our
              curriculum emphasizes critical thinking hands-on learning, and industry relevance. With guidance from experienced faculty access to modern
              laboratories and opportunities for research and internships students are empowered.
            </motion.p>

            {/* Program Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl lg:text-4xl text-gray-900 font-light font-serif mb-8">
                Program Highlight
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Faculty Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#F6F4EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 font-light font-serif mb-1">Faculty</h3>
                    <p className="text-base text-gray-900">Engineering</p>
                  </div>
                </motion.div>

                {/* Duration Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#F6F4EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 font-light font-serif mb-1">Duration</h3>
                    <p className="text-base text-gray-900">2 Years</p>
                  </div>
                </motion.div>

                {/* Credits Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#F6F4EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 font-light font-serif mb-1">Credits</h3>
                    <p className="text-base text-gray-900">120</p>
                  </div>
                </motion.div>

                {/* Language Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#F6F4EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 font-light font-serif mb-1">Language</h3>
                    <p className="text-base text-gray-900">English</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* About Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl lg:text-4xl text-gray-900 font-light font-serif mb-6">
                About Programs
              </h2>
              <p className="text-gray-600 text-base leading-7 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Placerat orci nulla pellentesque dignissim enim sit venenatis urna. Orci porta non pulvinar
                neque laoreet suspendisse interdum consectetur libero. Ipsum suspendisse ultrices gravida dictum fusce. Consectetur libero id faucibus nisl
                et. Suspendisse in est ante in mauris cursus mattis.
              </p>

              {/* Apply Button */}
              <motion.button
                onClick={() => navigate("/apply")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </motion.button>
            </motion.div>

            {/* Additional Content Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl text-gray-900 font-light font-serif mb-4">
                  Career Opportunities
                </h3>
                <p className="text-gray-600 text-base leading-7 mb-6">
                  Graduates of our M.Sc. in Computer Science Engineering program are well-equipped to pursue careers in various fields including software development, data science, artificial intelligence, cybersecurity, and research. Our alumni work at leading tech companies and research institutions worldwide.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Software Engineer / Developer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Data Scientist / ML Engineer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Research Scientist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Cybersecurity Specialist</span>
                  </li>
                </ul>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl text-gray-900 font-light font-serif mb-4">
                  Program Features
                </h3>
                <p className="text-gray-600 text-base leading-7 mb-6">
                  Our program offers a blend of theoretical foundations and practical applications. Students have access to state-of-the-art labs, industry partnerships, and research opportunities that prepare them for success in the rapidly evolving field of computer science.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Advanced Research Facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Industry Collaboration Projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Internship Opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0C5776] mt-2.5 flex-shrink-0" />
                    <span className="text-gray-600">Thesis & Publication Support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}