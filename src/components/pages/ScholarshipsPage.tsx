import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Award,
  GraduationCap,
  TrendingUp,
  Users,
  CheckCircle,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';

const scholarships = [
  {
    title: 'Merit-Based Scholarship',
    description: 'For students scoring 85% and above in their qualifying examinations.',
    amount: '₹20,000 - ₹50,000 per year',
    eligibility: 'Minimum 85% marks',
    icon: Award,
    color: 'bg-blue-500',
  },
  {
    title: 'Need-Based Financial Aid',
    description: 'Financial assistance for students from economically weaker sections.',
    amount: 'Up to 100% tuition fee waiver',
    eligibility: 'Family income below ₹2.5 lakhs',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    title: 'Sports Scholarship',
    description: 'For students excelling in sports at state or national level.',
    amount: '₹15,000 - ₹30,000 per year',
    eligibility: 'State/National level participation',
    icon: TrendingUp,
    color: 'bg-orange-500',
  },
  {
    title: 'SC/ST/OBC Scholarship',
    description: 'Government scholarships for students from reserved categories.',
    amount: 'As per government norms',
    eligibility: 'Valid caste certificate',
    icon: GraduationCap,
    color: 'bg-purple-500',
  },
];

const howToApply = [
  'Complete your admission process',
  'Submit scholarship application form',
  'Provide required documents (mark sheets, income certificate, etc.)',
  'Application will be reviewed by scholarship committee',
  'Selected candidates will be notified via email',
  'Scholarship amount will be credited directly to student account',
];

export function ScholarshipsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1589268022628-d0fa3fd7340f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvbGFyc2hpcCUyMGF3YXJkJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc3MjQ5ODM0NXww&ixlib=rb-4.1.0&q=80&w=1080)',
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
            <span className="text-white text-base">Scholarships</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Scholarships & Financial Aid
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Making quality education accessible to all deserving students
            <br />
            through various scholarship programs and financial assistance.
          </p>
        </div>

        {/* Decorative Circle Element */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FDC72F] opacity-20 blur-xl hidden lg:block"></div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F6F4EE] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-5 font-serif leading-tight">
              Supporting Student Dreams
            </h2>
            <p className="text-gray-600 text-base leading-7">
              At Dumri College, we believe that financial constraints should not hinder talented students from
              pursuing higher education. We offer various scholarships and financial aid programs to support
              deserving students in their academic journey.
            </p>
          </div>

          {/* Scholarships Grid */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8 font-serif text-center">
              Available Scholarships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`h-2 ${scholarship.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${scholarship.color} rounded-full flex items-center justify-center`}>
                        <scholarship.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {scholarship.title}
                        </h3>
                        <p className="text-[#2563EB] font-medium text-sm">
                          {scholarship.amount}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-7 mb-4">
                      {scholarship.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#FDC72F]" />
                      <span className="font-medium">Eligibility:</span>
                      <span>{scholarship.eligibility}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8 font-serif text-center">
              How to Apply
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-4">
                {howToApply.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#2F584F] rounded-full flex items-center justify-center text-[#FDC72F] font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg pt-0.5">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#2563EB]" />
                Important Information
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">•</span>
                  <span>Scholarship applications are reviewed twice a year (June and December)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">•</span>
                  <span>Students must maintain minimum 75% attendance to continue receiving scholarships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">•</span>
                  <span>Merit scholarships require maintaining 80%+ marks in annual examinations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">•</span>
                  <span>All documents must be submitted before the deadline</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#2F584F] rounded-2xl p-12 text-center text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-light font-serif mb-4">
              Need More Information?
            </h3>
            <p className="text-white/90 leading-7 mb-8">
              For detailed information about scholarships and eligibility criteria, please contact
              our scholarship office or visit during office hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-[#FDC72F] hover:bg-[#e5b829] text-[#2F584F] font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Contact Scholarship Office
              </button>
              <button
                onClick={() => navigate('/apply')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/20"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}