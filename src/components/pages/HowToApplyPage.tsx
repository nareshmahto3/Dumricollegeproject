import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  FileText,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  ClipboardCheck,
  UserCheck,
  BookOpen,
  Award,
  Upload,
  CreditCard,
  GraduationCap,
  FileBadge,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function HowToApplyPage() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: FileText,
      title: 'Online Application',
      description: 'Complete and submit the online admission form with accurate details',
    },
    {
      icon: Upload,
      title: 'Document Upload',
      description: 'Upload required academic and personal documents',
    },
    {
      icon: UserCheck,
      title: 'Verification',
      description: 'Our team reviews and verifies your application',
    },
    {
      icon: CreditCard,
      title: 'Fee Payment',
      description: 'Pay admission fee after receiving acceptance letter',
    },
    {
      icon: GraduationCap,
      title: 'Enrollment',
      description: 'Complete enrollment process and begin your journey',
    },
  ];

  const programs = [
    {
      icon: BookOpen,
      title: 'Undergraduate Programs',
      description: 'Bachelor degrees in Arts, Science, Commerce & more',
      features: ['3-4 year programs', 'Various specializations', 'Industry-aligned curriculum', 'Practical training'],
    },
    {
      icon: Award,
      title: 'Postgraduate Programs',
      description: 'Master degrees with advanced specializations',
      features: ['2 year programs', 'Research opportunities', 'Expert faculty', 'Career advancement'],
    },
    {
      icon: FileBadge,
      title: 'Diploma Courses',
      description: 'Short-term professional courses',
      features: ['6-12 month duration', 'Skill-focused', 'Certificate programs', 'Flexible schedules'],
    },
    {
      icon: ClipboardCheck,
      title: 'Certificate Courses',
      description: 'Specialized certificate programs',
      features: ['3-6 month duration', 'Professional skills', 'Industry recognition', 'Quick completion'],
    },
  ];

  const requirements = [
    {
      category: 'Academic Documents',
      items: [
        'Previous academic transcripts and mark sheets',
        'Transfer certificate from last institution',
        'Character certificate',
        'Migration certificate (if applicable)',
        'Caste/Category certificate (if applicable)',
      ],
    },
    {
      category: 'Personal Documents',
      items: [
        'Recent passport-size photographs (4 copies)',
        'Aadhaar card copy',
        'Date of birth certificate',
        'Address proof',
        'Guardian/Parent ID proof',
      ],
    },
  ];

  const statistics = [
    { number: '50+', label: 'Programs Offered' },
    { number: '5,000+', label: 'Students Enrolled' },
    { number: '98%', label: 'Admission Success Rate' },
    { number: '100+', label: 'Expert Faculty' },
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'May 1, 2026' },
    { event: 'Application Deadline', date: 'July 15, 2026' },
    { event: 'Document Verification', date: 'July 20-25, 2026' },
    { event: 'Merit List Release', date: 'July 30, 2026' },
    { event: 'Admission & Fee Payment', date: 'August 1-10, 2026' },
    { event: 'Classes Commence', date: 'August 15, 2026' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwYWRtaXNzaW9uJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzQxMDI0MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          <div className="flex items-center gap-2 mb-5">
            <button onClick={() => navigate('/')} className="text-white text-base hover:underline">
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <button onClick={() => navigate('/academics')} className="text-white text-base hover:underline">
              Academics
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">How to Apply</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            How to Apply
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]"></div>
          </div>

          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Your journey to excellence begins here - Simple steps to join Jharkhand Commerce Inter College
          </p>
        </div>
      </section>

      {/* Statistics
      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow these simple steps to complete your admission to Dumri College
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#FDC72F] rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Available */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Programs Available
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from a wide range of programs to match your career goals
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all border-0 bg-white h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                      <p className="text-slate-600 mb-4">{program.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pl-16">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/programs')}
              className="bg-[#2563EB] hover:bg-[#1e40af] text-white px-8 py-6 text-lg"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Essential documents needed for admission application
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-0 shadow-lg h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-[#2563EB]" />
                    {req.category}
                  </h3>
                  <ul className="space-y-3">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Important Dates
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mark your calendar with these key admission dates
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <span className="text-slate-900 font-semibold">{item.event}</span>
                    </div>
                    <span className="text-slate-600 font-medium">{item.date}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Admissions Office
              </h2>
              <p className="text-lg text-blue-100">
                Our team is here to assist you throughout your application journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a href="mailto:admissions@dumri.edu" className="text-blue-100 hover:text-white text-sm">
                  admissions@dumri.edu
                </a>
              </Card>

              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+918112522557" className="text-blue-100 hover:text-white text-sm">
                  +91 8112522557
                </a>
              </Card>

              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Office Hours</h3>
                <p className="text-blue-100 text-sm">
                  Mon-Sat: 9AM - 5PM
                </p>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={() => navigate('/apply')}
                className="bg-white text-[#2563EB] hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Start Your Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
