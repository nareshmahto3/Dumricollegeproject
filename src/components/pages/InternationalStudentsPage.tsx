import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Globe,
  FileText,
  Home,
  Heart,
  DollarSign,
  Plane,
  GraduationCap,
  Users,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function InternationalStudentsPage() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: FileText,
      title: 'Application',
      description: 'Submit online application with required documents',
    },
    {
      icon: GraduationCap,
      title: 'Acceptance',
      description: 'Receive admission offer letter within 2-3 weeks',
    },
    {
      icon: Plane,
      title: 'Visa',
      description: 'Apply for student visa with our support',
    },
    {
      icon: Home,
      title: 'Arrival',
      description: 'Airport pickup and campus orientation',
    },
  ];

  const services = [
    {
      icon: Home,
      title: 'Housing Assistance',
      description: 'On-campus and off-campus accommodation options',
      features: ['Furnished rooms', 'Wifi & utilities', '24/7 security', 'Meal plans available'],
    },
    {
      icon: Heart,
      title: 'Student Support',
      description: 'Dedicated international student office',
      features: ['Academic counseling', 'Career guidance', 'Health insurance', 'Cultural events'],
    },
    {
      icon: Globe,
      title: 'Cultural Integration',
      description: 'Programs to help you settle in',
      features: ['Buddy program', 'Language classes', 'Cultural festivals', 'Student clubs'],
    },
    {
      icon: DollarSign,
      title: 'Financial Aid',
      description: 'Scholarships and financial support',
      features: ['Merit scholarships', 'Need-based aid', 'Work opportunities', 'Payment plans'],
    },
  ];

  const requirements = [
    {
      category: 'Academic Documents',
      items: [
        'Official transcripts (English translation)',
        'Degree certificates',
        'English proficiency test (IELTS/TOEFL)',
        'Statement of Purpose',
        'Letters of Recommendation (2)',
      ],
    },
    {
      category: 'Visa Documents',
      items: [
        'Valid passport',
        'Admission offer letter',
        'Proof of financial support',
        'Health insurance',
        'Police clearance certificate',
      ],
    },
  ];

  const statistics = [
    { number: '85+', label: 'Countries Represented' },
    { number: '1,200+', label: 'International Students' },
    { number: '15%', label: 'International Student Ratio' },
    { number: '95%', label: 'Visa Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner Section */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1724018305000-616597f21304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBkaXZlcnNpdHl8ZW58MXx8fHwxNzcyNTQ4MTA5fDA&ixlib=rb-4.1.0&q=80&w=1080)',
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
            <span className="text-white text-base">International Students</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            International Students
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]"></div>
          </div>

          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Welcome to Dumri College - Your gateway to world-class education in India
          </p>
        </div>
      </section>

      {/* Statistics */}
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
      </section>

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
              How to Apply
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simple four-step process to begin your journey at Dumri College
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Student Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive support to ensure your success and well-being
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
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
                      <service.icon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pl-16">
                    {service.features.map((feature, idx) => (
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
              Document Requirements
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Essential documents needed for admission and visa application
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
                International Admissions Office
              </h2>
              <p className="text-lg text-blue-100">
                Our team is here to assist you throughout your application journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a href="mailto:international@dumri.edu" className="text-blue-100 hover:text-white text-sm">
                  international@dumri.edu
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
                <h3 className="font-semibold text-white mb-2">Schedule</h3>
                <p className="text-blue-100 text-sm">
                  Mon-Fri: 9AM - 5PM IST
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
