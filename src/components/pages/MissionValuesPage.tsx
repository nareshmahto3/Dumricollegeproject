import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { ChevronRight } from 'lucide-react';
import imgDivElementorElement from "figma:asset/6002cd04081dfc7b58c5ece1c4f0d07c2bcd2bad.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";
import imgInnerCatImg1Min from "figma:asset/e1886cb1a3038b5a3e557c24ffe13af7ce6ba265.png";
import imgInnerCatImg2Min from "figma:asset/9f26c0743f65c6213fe7564c446e3fc378c07c31.png";
import imgInnerCatImg3Min from "figma:asset/a21bf85983e046d11ab824973aea9471a85af035.png";

export function MissionValuesPage() {
  const [valueExpanded, setValueExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-[#0c5776] to-[#00192c] py-28 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0">
          <div className="absolute bg-[#0c5776] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute h-full left-0 max-w-none top-0 w-[115.51%] object-cover"
              src={imgDivElementorElement}
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00192c] opacity-80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white mb-6">
              <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span>Mission & Value</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 font-serif">
              Mission & Value
            </h1>

            {/* Divider */}
            <div className="relative h-px bg-white/15 w-full max-w-md mb-6">
              <div className="absolute left-0 top-0 h-0.5 w-36 bg-white" />
            </div>

            {/* Description */}
            <p className="text-white/90 text-base leading-relaxed max-w-xl">
              Education goes beyond textbooks and classrooms. We believe in empowering<br />
              students to explore their passions challenge conventions.
            </p>
          </div>
        </div>

        {/* Decorative Arrow */}
        <div className="absolute bottom-16 right-32 hidden xl:block">
          <img src={imgBnrArrow11} alt="" className="w-32 h-32" />
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f6f4ee] py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Sidebar - Sticky */}
              <div className="lg:col-span-4">
                <div className="sticky top-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080" alt="Mission Icon" className="w-60 h-30" />
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl font-light text-gray-900 mb-8 font-serif">
                    The Jharkhand Commerce Inter College Mission
                  </h2>

                  {/* Counter */}
                  <div className="mb-6">
                    <div className="text-5xl font-light text-gray-900 font-serif">
                      74<span className="text-gray-900">%</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    of our students successfully graduate<br />
                    and begin their career development
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-8 flex gap-8">
                {/* Vertical Timeline */}
                <div className="relative">
                  <div className="absolute left-0 top-12 bottom-0 w-px bg-gray-300">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#003a65] border-2 border-white rounded-full shadow-lg" />
                  </div>
                </div>

                {/* Mission Content */}
                <div className="flex-1 space-y-8">
                  {/* Mission Section */}
                  <div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4 font-serif">
                      Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Jharkhand Commerce Inter College is committed to delivering college-based education that blends academic excellence with<br />
                      practical knowledge, and ethical values. Our mission is to empower students with industry-relevant<br />
                      skills, innovative thinking, and global awareness preparing them to become competent responsibility<br />
                      professionals, responsible leaders, and positive contributors to society through research, learning,<br />
                      and real-world engagement.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Through extensive research industry collaboration and global academic standards ensuring that THE<br />
                      students receive a forward-thinking and career-focused education from undergraduate foundations to<br />
                      advanced graduate and professional pathways, our programs emphasize THE innovation creativity
                    </p>

                    {/* Mission Image */}
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Mission"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Marquee Section */}
      {/* <section className="bg-white py-16 overflow-hidden">
        <div className="relative">
          <div className="flex items-center justify-center gap-8 animate-marquee whitespace-nowrap">
            <div className="flex items-center gap-8">
              <p className="text-6xl font-light text-gray-900 font-serif uppercase">
                2024 best 10 university Award
              </p>
              <img src="https://images.unsplash.com/photo-1589939705066-5a101c17f1ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=100" alt="Award Icon" className="w-12 h-12" />
              <p className="text-6xl font-light text-[#00ade2] font-serif uppercase">
                2024 best 10 university Awards
              </p>
              <img src="https://images.unsplash.com/photo-1589939705066-5a101c17f1ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=100" alt="Award Icon" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Overview Section - Exact Figma Design */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Overview Heading */}
            <div className="mb-8">
              <h2 className="text-4xl font-light text-gray-900 mb-4 font-serif">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our college curriculum is designed to deliver a balanced future-focused learning experience that empowers students with both academic knowledge and practical competencies Each program is structured to combine foundational coursework specialized major subjects hands-on learning and interdisciplinary opportunities By integrating theory research and real-world applications we prepare students to excel in a rapidly evolving global environment Students begin with core courses that build essential skills in communication, critical thinking, digital literacy, and quantitative analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
              {/* Left - Image */}
              <div className="lg:col-span-5">
                <div className="sticky top-8">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjAwfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Vision"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* Right - Accordion */}
              <div className="lg:col-span-7">
                <div className="flex flex-col gap-4 max-w-2xl">
                  {/* Vision Accordion - Always Open */}
                  <div className="bg-transparent rounded-xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] overflow-hidden">
                    {/* Vision Header */}
                    <div className="bg-[#0c5776] px-6 py-5">
                      <h3 className="text-xl font-medium text-white">
                        Vision
                      </h3>
                    </div>

                    {/* Vision Content */}
                    <div className="bg-white">
                      <div className="flex gap-5 p-6">
                        {/* Vertical Line with Dot */}
                        <div className="relative pt-3.5">
                          <div className="w-px h-52 bg-gray-300 relative">
                            <div className="absolute -left-1.5 -top-2 w-3 h-3 bg-[#003a65] border-2 border-white rounded-full shadow-lg" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <p className="text-gray-600 leading-relaxed mb-4">
                            Conventions and discover their potential through meaningful Our face<br />
                            support experiences Our distinguished faculty members are leaders their<br />
                            and respective fields dedicated to delivering world-class education that<br />
                            integrates theory with practical support application With.
                          </p>

                          {/* Bullet List */}
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                              <svg className="w-1.5 h-1.5 flex-shrink-0" viewBox="0 0 6 6" fill="currentColor">
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                              <span>Completed secondary education (HSC/A-Level/Equivalent).</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <svg className="w-1.5 h-1.5 flex-shrink-0" viewBox="0 0 6 6" fill="currentColor">
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                              <span>Minimum GPA/grade requirements as set by the College.</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                              <svg className="w-1.5 h-1.5 flex-shrink-0" viewBox="0 0 6 6" fill="currentColor">
                                <circle cx="3" cy="3" r="3" />
                              </svg>
                              <span>For graduate programs: a bachelor's degree with required CGPA.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-transparent rounded-xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] overflow-hidden">
                    {/* Value Header - Clickable Button */}
                    <button
                      onClick={() => setValueExpanded(!valueExpanded)}
                      className={`w-full px-6 py-5 text-left transition-colors ${valueExpanded ? 'bg-[#0c5776]' : 'bg-white hover:bg-[#0c5776] hover:text-white'
                        }`}
                    >
                      <h3 className={`text-xl font-medium ${valueExpanded ? 'text-white' : 'text-gray-900'
                        }`}>
                        Value
                      </h3>
                    </button>

                    {/* Value Content - Expandable */}
                    {valueExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white overflow-hidden"
                      >
                        <div className="flex gap-5 p-6 pt-0">
                          {/* Vertical Line with Dot */}
                          <div className="relative pt-3.5">
                            <div className="w-px h-52 bg-gray-300 relative">
                              <div className="absolute -left-1.5 -top-2 w-3 h-3 bg-[#003a65] border-2 border-white rounded-full shadow-lg" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <p className="text-gray-600 leading-relaxed mb-4">
                              Our core values guide everything we do. Integrity, Excellence, Innovation, Inclusivity, and Social Responsibility form the ethical foundation that shapes our decisions, actions, and relationships with students, faculty, and the wider community.
                            </p>

                            {/* Bullet List */}
                            <ul className="space-y-2">
                              <li className="flex items-center gap-2 text-gray-600">
                                <svg className="w-1.5 h-1.5 flex-shrink-0" viewBox="0 0 6 6" fill="currentColor">
                                  <circle cx="3" cy="3" r="3" />
                                </svg>
                                <span>Integrity in all academic and professional endeavors.</span>
                              </li>
                              <li className="flex items-center gap-2 text-gray-600">
                                <svg className="w-1.5 h-1.5 flex-shrink-0" viewBox="0 0 6 6" fill="currentColor">
                                  <circle cx="3" cy="3" r="3" />
                                </svg>
                                <span>Excellence through continuous improvement and innovation.</span>
                              </li>
                              <li className="flex items-center gap-2 text-gray-600">
                                <svg className="w-1.5 h-1.5 flex-shrink-0" viewBox="0 0 6 6" fill="currentColor">
                                  <circle cx="3" cy="3" r="3" />
                                </svg>
                                <span>Social responsibility and community engagement.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section - Exact Figma Design */}
      <section className="bg-[#f6f4ee] py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-gray-900 mb-4 font-serif">
                Application Now
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our program costs are designed to remain transparent competitive and accessible for students from diverse backgrounds. Each academic program includes tuition fees registration charges and essential learning resources ensuring students receive high-quality education and comprehensive academic support Costs may vary based on program type, course load, and mode of study (on-campus, hybrid, or online) We aim to provide exceptional value through modern facilities, expert faculty, and industry aligned curriculum making your investment in education both meaningful and future-focused.
              </p>
            </div>

            {/* Three Cards - Exact Figma Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* I.Com Card */}
              <div className="flex bg-white rounded-2xl pb-3 flex-col items-center text-center">
                <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={imgInnerCatImg1Min}
                    alt="Undergraduate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-['Bitter',serif] font-thin text-2xl leading-[34px] text-[#030303] mb-3">
                  Intermediate in Commerce (I.Com)

                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-6">
                  Build a strong foundation in commerce and business studies.
                </p>
                <button
                  onClick={() => navigate('/apply')}
                  className="bg-[#0c5776] text-white px-8 py-3 rounded-full font-['Inter',sans-serif] font-medium text-base hover:bg-[#094561] transition-colors inline-flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* I.Sc Card */}
              <div className="flex bg-white rounded-2xl pb-3 flex-col items-center text-center">
                <div className="w-full aspect-[1/1] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={imgInnerCatImg2Min}
                    alt="Graduate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-['Bitter',serif] font-thin text-2xl leading-[34px] text-[#030303] mb-3">
                  Intermediate in Science (I.Sc)
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-6">
                  Explore the world of science with comprehensive laboratory experience.
                </p>
                <button
                  onClick={() => navigate('/apply')}
                  className="bg-[#0c5776] text-white px-8 py-3 rounded-full font-['Inter',sans-serif] font-medium text-base hover:bg-[#094561] transition-colors inline-flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* I.A Card */}
              <div className="flex flex-col bg-white rounded-2xl pb-3 items-center text-center">
                <div className="w-full  aspect-[1/1] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={imgInnerCatImg3Min}
                    alt="International Students"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-['Bitter',serif] font-thin text-2xl leading-[34px] text-[#030303] mb-3">
                  Intermediate in Arts (I.A)
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-base leading-7 text-[#4c4c4c] mb-6">
                  Discover humanities, languages, and social sciences.
                </p>
                <button
                  onClick={() => navigate('/apply')}
                  className="bg-[#0c5776] text-white px-8 py-3 rounded-full font-['Inter',sans-serif] font-medium text-base hover:bg-[#094561] transition-colors inline-flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}