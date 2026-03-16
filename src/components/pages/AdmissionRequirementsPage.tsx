import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle, Calendar, FileText, GraduationCap, Globe, BookOpen } from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import imgDivElementorElement from "figma:asset/1984a55cef37a722e6e3c4f9648e5453dfb17fde.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";
import imgBlueInnerImg12Min from "figma:asset/6f80bfba6db1beafc8dd029dc489318e273a6781.png";
import imgBlueInnerImg11Min from "figma:asset/99f316eb7a0340d02e25db78d33cfef89f9a904a.png";
import imgInnerCatImg1Min from "figma:asset/e1886cb1a3038b5a3e557c24ffe13af7ce6ba265.png";
import imgInnerCatImg2Min from "figma:asset/9f26c0743f65c6213fe7564c446e3fc378c07c31.png";
import imgInnerCatImg3Min from "figma:asset/a21bf85983e046d11ab824973aea9471a85af035.png";

interface Requirement {
  text: string;
}

interface DeadlineRow {
  university: string;
  springIntake: string;
  fallIntake: string;
  decisionDate: string;
  applyBy: string;
}

const ugRequirements: Requirement[] = [
  { text: "Completed application through CUET, specifying interest" },
  { text: "Official SATs are required up to 31 for certain courses" },
  { text: "Results of SATs (if applicable for your country)" },
  { text: "Transcript" }
];

const graduateRequirements: Requirement[] = [
  { text: "Completed application form" },
  { text: "Statement of purpose (a one-page essay)" },
  { text: "At least one recommendation from a teacher or professor" },
  { text: "Proof of English proficiency (if required)" },
  { text: "Official transcript from the graduate institution (original)" },
  { text: "A scan of your valid government-issued ID" }
];

const additionalRequirements: Requirement[] = [
  { text: "3 GRE or GMAT (if applicable for your course)" },
  { text: "Liasre (for applicable courses)" },
  { text: "Interview (for select courses)" },
  { text: "Portfolio (for creative courses)" }
];

const deadlines: DeadlineRow[] = [
  {
    university: "University Accolades",
    springIntake: "Spring Intake",
    fallIntake: "Fall Intake",
    decisionDate: "October 15",
    applyBy: "December 15"
  },
  {
    university: "IIT Bombay",
    springIntake: "Spring Intake",
    fallIntake: "Fall Intake",
    decisionDate: "April 1",
    applyBy: "July 31"
  },
  {
    university: "Postgraduate",
    springIntake: "Spring Intake",
    fallIntake: "Fall Intake",
    decisionDate: "October 15",
    applyBy: "December 30"
  },
  {
    university: "Research/PhD",
    springIntake: "Spring Intake",
    fallIntake: "Fall Intake",
    decisionDate: "October 1",
    applyBy: "January 15"
  },
  {
    university: "International Students",
    springIntake: "All Intakes",
    fallIntake: "6 Months Before",
    decisionDate: "3 Months Before",
    applyBy: "As Stipulated"
  }
];

export function AdmissionRequirementsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section className="relative h-[320px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
            alt="Graduation"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001a2e]/90 via-[#00324d]/85 to-[#004d73]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            alt="" 
            className="absolute h-full left-0 max-w-none top-0 w-[115.51%] object-cover opacity-10" 
            src={imgDivElementorElement} 
          />
        </div>

        {/* Decorative Arrow */}
        <div className="absolute bottom-[40px] right-[100px] z-10 hidden lg:block opacity-50">
          <img 
            alt="" 
            className="w-[100px] h-[100px]" 
            src={imgBnrArrow11} 
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate('/')}
              className="text-white text-sm hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Admission Requirements</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 font-serif">
            Admission Requirements
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-3xl">
            Education goes beyond textbooks and classrooms. We believe in empowering
            <br className="hidden sm:block" />
            students to explore their passions, challenge conventions, and discover their potential.
          </p>
        </div>
      </section>

      {/* Requirements and Deadlines Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">Requirements and Deadlines</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our colleges and universities worldwide are residential. In order that students' Graduation is accelerated, the university maintains both the academic rigor offered at all of our campuses and offers as wide as possible choice among our course offerings.
            </p>
          </motion.div>

          {/* Two Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={imgBlueInnerImg11Min}
                alt="Students on campus"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={imgBlueInnerImg12Min}
                alt="University building"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admissions Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">Admissions Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - UG Requirements */}
              <div>
                <ul className="space-y-4">
                  {ugRequirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#0c5776] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Graduate Requirements:</h3>
                <ul className="space-y-4">
                  {graduateRequirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (ugRequirements.length + index) * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#0c5776] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Additional Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Requirements:</h3>
                <ul className="space-y-4">
                  {additionalRequirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#0c5776] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-[#0c5776]">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Note:</strong> A certified copy of your photo ID from other Indian CUET agencies or states may work. However, if you're applying for any government program, certify your signature and any programs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Deadlines Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">Apply Deadlines</h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0c5776] text-white">
                      <th className="px-6 py-4 text-left text-sm font-normal">University</th>
                      <th className="px-6 py-4 text-left text-sm font-normal">Spring Intake</th>
                      <th className="px-6 py-4 text-left text-sm font-normal">Fall Intake</th>
                      <th className="px-6 py-4 text-left text-sm font-normal">October 15</th>
                      <th className="px-6 py-4 text-left text-sm font-normal">December 15</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deadlines.map((deadline, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                      >
                        <td className="px-6 py-4 text-gray-900 font-medium">{deadline.university}</td>
                        <td className="px-6 py-4 text-gray-600">{deadline.springIntake}</td>
                        <td className="px-6 py-4 text-gray-600">{deadline.fallIntake}</td>
                        <td className="px-6 py-4 text-gray-600">{deadline.decisionDate}</td>
                        <td className="px-6 py-4 text-gray-600">{deadline.applyBy}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">Apply Now</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All programs operate on an annual basis. However, some programs are conducted year-round. Contact us at the Student Onsite Admissions support, at <span className="text-[#0c5776] font-medium">+91 98765 43210</span>. In order to benefit from early considerations, use start (March), and apply as early as high school students can for these programs. Check with an agent in your continent to know the final date for submission.
            </p>
          </motion.div>

          {/* Three Call-to-Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Undergraduate Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imgInnerCatImg1Min}
                  alt="Undergraduate"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <GraduationCap className="w-8 h-8 mb-3" />
                <h3 className="text-2xl font-semibold mb-2">Undergraduate</h3>
                <p className="text-white/90 text-sm mb-4">
                  Begin your academic journey with world-class undergraduate programs and supportive faculty.
                </p>
                <button
                  onClick={() => navigate('/apply')}
                  className="inline-flex items-center gap-2 bg-white text-[#0c5776] px-5 py-2.5 rounded-full font-medium hover:bg-blue-50 transition-colors text-sm"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Graduate Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imgInnerCatImg2Min}
                  alt="Graduate"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <BookOpen className="w-8 h-8 mb-3" />
                <h3 className="text-2xl font-semibold mb-2">Graduate</h3>
                <p className="text-white/90 text-sm mb-4">
                  Advance your career with specialized graduate programs and cutting-edge research.
                </p>
                <button
                  onClick={() => navigate('/apply')}
                  className="inline-flex items-center gap-2 bg-white text-[#0c5776] px-5 py-2.5 rounded-full font-medium hover:bg-blue-50 transition-colors text-sm"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* International Students Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imgInnerCatImg3Min}
                  alt="International Students"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Globe className="w-8 h-8 mb-3" />
                <h3 className="text-2xl font-semibold mb-2">International Students</h3>
                <p className="text-white/90 text-sm mb-4">
                  Join a diverse campus community from around the world with comprehensive support.
                </p>
                <button
                  onClick={() => navigate('/apply')}
                  className="inline-flex items-center gap-2 bg-white text-[#0c5776] px-5 py-2.5 rounded-full font-medium hover:bg-blue-50 transition-colors text-sm"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
