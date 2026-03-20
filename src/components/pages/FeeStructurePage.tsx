import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { motion } from 'motion/react';
import { ChevronRight, GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import imgDivElementorElement from "figma:asset/5978f08e68df0c3b20a797ddcadc0f9253975076.png";
import imgBnrArrow11 from "figma:asset/13bec648740b03b5c9d2c72567cc9f3e05c47165.png";

type StudentCategory = 'undergrad' | 'graduate' | 'doctoral' | 'international';

interface FeeStructure {
  program: string;
  degree: string;
  duration: string;
  annualTuition: string;
  additionalNotes: string;
}

const feeData: Record<StudentCategory, FeeStructure[]> = {
  undergrad: [
    {
      program: 'Intermediate Commerce',
      degree: 'I.Com - Intermediate in Commerce',
      duration: '2 Years',
      annualTuition: '₹15,000',
      additionalNotes: 'Books and stationery not included'
    },
    // {
    //   program: 'Intermediate Science',
    //   degree: 'I.Sc - Intermediate in Science',
    //   duration: '2 Years',
    //   annualTuition: '₹18,000',
    //   additionalNotes: 'Lab fees and equipment included'
    // },
    // {
    //   program: 'Intermediate Arts',
    //   degree: 'I.A - Intermediate in Arts',
    //   duration: '2 Years',
    //   annualTuition: '₹12,000',
    //   additionalNotes: 'Library access included'
    // },
    // {
    //   program: 'Commerce Stream',
    //   degree: 'B.Com - Bachelor of Commerce',
    //   duration: '3 Years',
    //   annualTuition: '₹20,000',
    //   additionalNotes: 'Industry internship opportunities'
    // },
    // {
    //   program: 'Science Stream',
    //   degree: 'B.Sc - Bachelor of Science',
    //   duration: '3 Years',
    //   annualTuition: '₹25,000',
    //   additionalNotes: 'Lab & technology fees included'
    // },
    // {
    //   program: 'Arts & Humanities',
    //   degree: 'B.A - Bachelor of Arts',
    //   duration: '3 Years',
    //   annualTuition: '₹18,000',
    //   additionalNotes: 'Research project funding available'
    // }
  ],
  graduate: [
    {
      program: 'Intermediate Science',
      degree: 'I.Sc - Intermediate in Science',
      duration: '2 Years',
      annualTuition: '₹18,000',
      additionalNotes: 'Lab fees and equipment included'
    },
  ],
  international: [
  {
      program: 'Intermediate Arts',
      degree: 'I.A - Intermediate in Arts',
      duration: '2 Years',
      annualTuition: '₹12,000',
      additionalNotes: 'Library access included'
    },
  ]
};

const studentCategories = [
  { id: 'undergrad' as const, label: 'Intermediate in Commerce (I.Com)', icon: BookOpen },
  { id: 'graduate' as const, label: 'Intermediate in Science (I.Sc)', icon: GraduationCap },
  // { id: 'doctoral' as const, label: 'Intermediate in Arts (I.A)', icon: GraduationCap },
  { id: 'international' as const, label: 'International Students Tuition', icon: GraduationCap }
];

export function FeeStructurePage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<StudentCategory>('undergrad');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section className="relative h-[385px] overflow-hidden">
        {/* Background with imported texture */}
        <div className="absolute inset-0">
          <div className="absolute bg-[#0c5776] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="" 
              className="absolute h-full left-0 max-w-none top-0 w-[115.51%] object-cover opacity-30" 
              src={imgDivElementorElement} 
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00192C]/40 to-transparent"></div>

        {/* Decorative Arrow - Bottom Right */}
        <div className="absolute bottom-[60px] right-[140px] z-10 hidden lg:block">
          <img 
            alt="" 
            className="w-[139px] h-[139px]" 
            src={imgBnrArrow11} 
          />
        </div>

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
            <span className="text-white text-base">Tuition & Fee</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Tuition & Fee
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-3xl">
            Education goes beyond textbooks and classrooms. We believe in empowering students
            <br />
            to explore their passions, challenge conventions, and discover their potential.
          </p>
        </div>
      </section>

      {/* How Much Will It Cost You Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1661693758705-4fa65572bced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMHN0dWRlbnRzJTIwY2FwJTIwZ293bnxlbnwxfHx8fDE3NzM2MDAwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Students in graduation caps"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  How Much Will It Cost You?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our college costs are designed to remain financially accessible for students from diverse backgrounds. Each academic program includes tuition fees, registration charges, and essential learning resources ensuring students for receive education and comprehensive academic support.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We offer various scholarships, financial aid programs, and flexible payment options to make quality education accessible to all deserving students.
                </p>
                <button
                  onClick={() => navigate('/apply')}
                  className="bg-[#0c5776] hover:bg-[#0a4a63] text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Tuition Fees Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Annual Tuition Fees 2026-2027
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-4xl">
                Our Core Courses provide the essential foundation every student needs to thrive academically and professionally. These courses strengthen critical thinking, communication, and digital literacy skills, offering insights at various levels. Each course, tuition includes technology and comprehensive academic support.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex flex-wrap gap-2">
                {studentCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeCategory === category.id
                        ? 'border-[#0c5776] text-[#0c5776] bg-[#0c5776]/5'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fee Table */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0c5776] text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Program
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Degree
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Duration
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Annual Tuition Fee
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Additional Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeData[activeCategory].map((fee, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                        }`}
                      >
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {fee.program}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {fee.degree}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 text-center">
                          {fee.duration}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-semibold text-center">
                          {fee.annualTuition}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {fee.additionalNotes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Financial Aid Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-blue-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-[#0c5776] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Merit Scholarships
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Top-performing students receive merit-based scholarships covering 25-100% of tuition fees based on academic excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-green-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Financial Aid
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Need-based financial assistance available for economically disadvantaged students through government and institutional programs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-purple-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Flexible Payment
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Pay fees in installments across semesters with no additional charges. Special payment plans available on request.
                </p>
              </motion.div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Important Notes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#0c5776] mt-1">•</span>
                  <span>All fees are subject to revision. Current fee structure is valid for the academic year 2025-2026.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#0c5776] mt-1">•</span>
                  <span>Additional charges may apply for special courses, lab facilities, library, sports, and examination fees.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#0c5776] mt-1">•</span>
                  <span>Hostel accommodation and transportation are available at additional costs. Contact the administration for details.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#0c5776] mt-1">•</span>
                  <span>Refund policy: Fees paid are non-refundable except in special circumstances as per college policy.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#0c5776] mt-1">•</span>
                  <span>For scholarship applications and financial aid queries, please contact the Student Welfare Office.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
