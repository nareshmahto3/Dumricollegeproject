import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ChevronDown,
  HelpCircle,
  BookOpen,
  GraduationCap,
  CreditCard,
  Building,
  Users,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqCategories = [
  { id: 'admission', label: 'Admission', icon: GraduationCap },
  { id: 'academic', label: 'Academic', icon: BookOpen },
  { id: 'fees', label: 'Fees & Payment', icon: CreditCard },
  { id: 'facilities', label: 'Facilities', icon: Building },
  { id: 'general', label: 'General', icon: HelpCircle },
];

const faqs: FAQItem[] = [
  {
    category: 'admission',
    question: 'What are the eligibility criteria for admission?',
    answer: 'For undergraduate programs, students must have passed 10+2 or equivalent examination from a recognized board with minimum 45% marks (40% for reserved categories). For postgraduate programs, a bachelor\'s degree in relevant discipline with minimum 50% marks is required.',
  },
  {
    category: 'admission',
    question: 'How do I apply for admission?',
    answer: 'You can apply online through our website by clicking on "Apply Now" button. Fill the application form, upload required documents, and pay the application fee. You will receive an application number for tracking your application status.',
  },
  {
    category: 'admission',
    question: 'When does the admission process start?',
    answer: 'Admission process typically starts in May each year. The application forms are available from May to July. Merit lists are declared in July, and classes commence in August. Important dates are updated on our website.',
  },
  {
    category: 'admission',
    question: 'Is there any entrance exam for admission?',
    answer: 'For most undergraduate programs, admission is based on merit in the qualifying examination. However, some postgraduate programs may require entrance test. Please check the specific program requirements on our admissions page.',
  },
  {
    category: 'academic',
    question: 'What programs are offered at Dumri College?',
    answer: 'We offer undergraduate programs in Arts, Science, and Commerce streams. Postgraduate programs are available in selected subjects including Hindi, English, Physics, Chemistry, Mathematics, Political Science, and History.',
  },
  {
    category: 'academic',
    question: 'What is the duration of programs?',
    answer: 'Undergraduate programs (B.A., B.Sc., B.Com) are of 3 years duration. Postgraduate programs (M.A., M.Sc., M.Com) are of 2 years duration. All programs follow semester system with two semesters per year.',
  },
  {
    category: 'academic',
    question: 'What is the attendance requirement?',
    answer: 'Students must maintain minimum 75% attendance in each subject to be eligible for semester examinations. Medical certificates and other valid documents may be considered for condonation of shortage in attendance up to 10%.',
  },
  {
    category: 'academic',
    question: 'Are there any placement opportunities?',
    answer: 'Yes, we have a dedicated Training & Placement Cell that organizes campus recruitment drives, job fairs, and skill development programs. Many reputed companies visit our campus for placements. We also provide career counseling and guidance.',
  },
  {
    category: 'fees',
    question: 'What are the fees for different programs?',
    answer: 'Fees vary by program. Undergraduate programs: ₹8,000-₹15,000 per year; Postgraduate programs: ₹12,000-₹20,000 per year. Additional charges for library, sports, and other facilities apply. Detailed fee structure is available on our website.',
  },
  {
    category: 'fees',
    question: 'What payment methods are accepted?',
    answer: 'We accept online payment through debit/credit cards, net banking, and UPI. Offline payments can be made through demand draft in favor of "Dumri College" payable at the college bank. Cash payments are accepted at the college accounts office.',
  },
  {
    category: 'fees',
    question: 'Are scholarships available?',
    answer: 'Yes, we offer merit-based scholarships, need-based financial aid, sports scholarships, and government scholarships for SC/ST/OBC/Minority students. Students can apply for scholarships after admission. Visit our Scholarships page for details.',
  },
  {
    category: 'fees',
    question: 'Can fees be paid in installments?',
    answer: 'Yes, fees can be paid in two installments - one at the time of admission and the second before mid-semester examinations. However, students from economically weaker sections may request special installment facilities from the accounts office.',
  },
  {
    category: 'facilities',
    question: 'Does the college provide hostel facilities?',
    answer: 'Yes, we provide separate hostel facilities for boys and girls with modern amenities including furnished rooms, mess facility, Wi-Fi, common rooms, and 24/7 security. Hostel seats are limited and allotted on merit basis.',
  },
  {
    category: 'facilities',
    question: 'What are the library facilities?',
    answer: 'Our central library has over 50,000 books, journals, magazines, and digital resources. It provides reading rooms, reference section, e-library with computer terminals, and borrowing facility. Library remains open from 9 AM to 7 PM on working days.',
  },
  {
    category: 'facilities',
    question: 'Are there sports facilities available?',
    answer: 'Yes, we have a sports complex with facilities for cricket, football, basketball, volleyball, badminton, table tennis, and athletics. We also have a gymnasium. Students can participate in inter-college tournaments and sports events.',
  },
  {
    category: 'facilities',
    question: 'Does the college have medical facilities?',
    answer: 'Yes, we have a medical room with a qualified doctor and nurse available during college hours. First aid and emergency medical assistance are provided. We also organize health checkup camps and awareness programs regularly.',
  },
  {
    category: 'general',
    question: 'What is the college timing?',
    answer: 'Regular classes are conducted from Monday to Saturday between 9:00 AM to 4:00 PM. The college office operates from 10:00 AM to 5:00 PM. Timings may vary during examinations and vacation periods.',
  },
  {
    category: 'general',
    question: 'How can I contact the college?',
    answer: 'You can contact us through phone (+91 123 456 7890), email (info@dumricollege.edu), or visit our campus during office hours. For specific queries, you can also use the contact form on our website.',
  },
  {
    category: 'general',
    question: 'Does the college organize cultural events?',
    answer: 'Yes, we organize annual cultural fest, sports meet, seminars, workshops, and various co-curricular activities throughout the year. Students actively participate in drama, music, dance, and other cultural programs.',
  },
  {
    category: 'general',
    question: 'Are there any student clubs or societies?',
    answer: 'Yes, we have several student clubs including Nature Club, Literary Society, Debate Club, Science Club, Cultural Committee, and NSS unit. These clubs organize regular activities and encourage student participation.',
  },
];

export function FAQPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('admission');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXElMjBxdWVzdGlvbnMlMjBoZWxwJTIwZGVza3xlbnwxfHx8fDE3NzI0OTg3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080)',
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
            <span className="text-white text-base">FAQ</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Frequently Asked Questions
          </h1>

          {/* Decorative Line */}
          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 w-[145px] h-[2px] bg-white"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base leading-7 max-w-2xl">
            Find answers to common questions about admissions, academics, fees,
            <br />
            facilities, and more at Dumri College.
          </p>
        </div>

        {/* Decorative Circle Element */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FDC72F] opacity-20 blur-xl hidden lg:block"></div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F6F4EE] py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenIndex(null);
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#2563EB] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  {/* Question - Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold mt-1">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#2563EB] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Answer - Accordion Content */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[72px]">
                          <p className="text-gray-600 leading-7">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  No questions found in this category.
                </p>
              </div>
            )}
          </div>

          {/* Still Have Questions Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-[#2563EB] rounded-2xl p-12 text-center text-white">
              <Users className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h3 className="text-3xl font-light font-serif mb-4">
                Still Have Questions?
              </h3>
              <p className="text-white/90 leading-7 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help.
                Contact us through phone, email, or visit our campus during office hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white hover:bg-gray-100 text-[#2563EB] font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => navigate('/apply')}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/30"
                >
                  Apply for Admission
                </button>
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
