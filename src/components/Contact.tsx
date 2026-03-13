import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  Building, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  HelpCircle,
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  Home,
  Calendar,
  Check,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
// import { SharedNavigation } from './shared/SharedNavigation';
import { CarouselHeader } from './CarouselHeader';
import { SharedFooter } from './shared/SharedFooter';
import { Footer } from './Footer';
import { Preloader } from './shared/Preloader';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function Contact() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <CarouselHeader />

        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1614690595284-e64d21f18260?w=1920&q=80"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/95 via-blue-900/90 to-indigo-900/85" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                <Badge className="bg-blue-500/30 text-blue-100 border-blue-400/50 backdrop-blur-md mb-8 px-8 py-4 text-lg">
                  <Phone className="w-6 h-6 mr-3" />
                  We're Here to Help • 24/7 Support
                </Badge>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                  Get in Touch
                </h1>
                <p className="text-2xl md:text-3xl text-blue-100 mb-6 max-w-4xl mx-auto font-light">
                  Your Questions, Our Priority
                </p>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                  Connect with us for admissions, campus visits, or any queries
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Quick Contact Cards */}
        <section className="py-16 bg-white -mt-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all h-full cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-white/90 text-sm mb-3 leading-relaxed">Dumri, Jharkhand - 825311</p>
                  <div className="text-white text-sm font-semibold flex items-center gap-2">
                    Get Directions
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all h-full cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                  <p className="text-white/90 text-sm mb-3 leading-relaxed">+91 123 456 7890</p>
                  <div className="text-white text-sm font-semibold flex items-center gap-2">
                    Call Now
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2 * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-gradient-to-br from-orange-500 to-amber-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all h-full cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                  <p className="text-white/90 text-sm mb-3 leading-relaxed">info@dumricollege.edu</p>
                  <div className="text-white text-sm font-semibold flex items-center gap-2">
                    Send Email
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 3 * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all h-full cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Office Hours</h3>
                  <p className="text-white/90 text-sm mb-3 leading-relaxed">Mon - Sat: 9:00 AM - 5:00 PM</p>
                  <div className="text-white text-sm font-semibold flex items-center gap-2">
                    View Schedule
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-blue-100 text-blue-700 border-0 mb-6 px-4 py-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                  Drop Us a Message
                </h2>
                <p className="text-lg text-slate-600 mb-10">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <Card className="p-10 shadow-2xl border-0">
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          Last Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                          placeholder="+91 "
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Subject *
                      </label>
                      <select className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all">
                        <option>Admissions Query</option>
                        <option>Campus Visit</option>
                        <option>Program Information</option>
                        <option>Technical Support</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Your Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                        <textarea
                          rows={6}
                          className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                    >
                      Send Message
                      <Send className="ml-3 w-5 h-5" />
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <Badge className="bg-indigo-100 text-indigo-700 border-0 mb-6 px-4 py-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Location
                  </Badge>
                  <h3 className="text-4xl font-black text-slate-900 mb-6">
                    Find Us Here
                  </h3>
                </div>

                <Card className="overflow-hidden border-0 shadow-2xl">
                  <div className="h-96 bg-slate-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9058283867653!2d85.31788931498079!3d23.74762798459156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0b3e3c3d3d3%3A0x0!2zMjPCsDQ0JzUxLjUiTiA4NcKwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Dumri College Location"
                    />
                  </div>
                  <div className="p-8 space-y-6 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg mb-1">Campus Address</p>
                        <p className="text-slate-600">
                          Dumri College Campus<br />
                          Dumri, Jharkhand - 825311<br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg mb-1">How to Reach</p>
                        <p className="text-slate-600">
                          Located on NH-33, 60 km from Ranchi<br />
                          Well-connected by road and rail<br />
                          Nearest Airport: Birsa Munda Airport
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Department Contacts
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Connect with specific departments for specialized assistance
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: 'Admissions Office',
                  email: 'admissions@dumricollege.edu',
                  phone: '+91 123 456 7891',
                  timing: 'Mon-Sat: 9 AM - 5 PM',
                  color: 'blue',
                },
                {
                  icon: BookOpen,
                  title: 'Academic Office',
                  email: 'academics@dumricollege.edu',
                  phone: '+91 123 456 7892',
                  timing: 'Mon-Fri: 10 AM - 4 PM',
                  color: 'indigo',
                },
                {
                  icon: HelpCircle,
                  title: 'General Enquiry',
                  email: 'info@dumricollege.edu',
                  phone: '+91 123 456 7890',
                  timing: 'Mon-Sat: 9 AM - 5 PM',
                  color: 'orange',
                },
              ].map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`p-8 h-full hover:shadow-2xl transition-all border-t-4 border-t-${dept.color}-600`}>
                    <div className={`w-14 h-14 bg-${dept.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                      <dept.icon className={`w-7 h-7 text-${dept.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">{dept.title}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <a href={`mailto:${dept.email}`} className="text-slate-600 hover:text-blue-600 transition-colors break-all">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <a href={`tel:${dept.phone}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                          {dept.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{dept.timing}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="bg-blue-100 text-blue-700 border-0 mb-4 px-4 py-2">
                <HelpCircle className="w-4 h-4 mr-2" />
                Common Questions
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Quick answers to common queries
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              {[
                {
                  question: 'What are the admission requirements?',
                  answer: 'For undergraduate programs, students must have passed 10+2 or equivalent examination from a recognized board with minimum 45% marks (40% for reserved categories). For postgraduate programs, a bachelor\'s degree in relevant discipline with minimum 50% marks is required.',
                },
                {
                  question: 'How can I schedule a campus visit?',
                  answer: 'You can schedule a campus visit by contacting our admissions office at +91 123 456 7891 or emailing admissions@dumricollege.edu. Campus tours are available Monday through Saturday.',
                },
                {
                  question: 'What scholarship opportunities are available?',
                  answer: 'We offer merit-based scholarships, need-based financial aid, sports scholarships, and special scholarships for underprivileged students. Contact our admissions office for detailed information.',
                },
                {
                  question: 'Does the college provide hostel facilities?',
                  answer: 'Yes, we have separate hostels for boys and girls with modern amenities including WiFi, mess facilities, study rooms, and recreational areas. Hostel admission is subject to availability.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  {/* Question - Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 flex-1 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
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
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <Button
                onClick={() => navigate('/faq')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                View All FAQs
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                Connect on Social Media
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Follow us for latest updates, events, and campus news
              </p>
              <div className="w-24 h-2 bg-blue-600 mx-auto mt-8" />
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Facebook, name: 'Facebook', color: 'blue', bgColor: 'bg-blue-50', handle: '@dumricollege' },
                { icon: Twitter, name: 'Twitter', color: 'sky', bgColor: 'bg-sky-50', handle: '@dumricollege' },
                { icon: Instagram, name: 'Instagram', color: 'pink', bgColor: 'bg-pink-50', handle: '@dumricollege' },
                { icon: Linkedin, name: 'LinkedIn', color: 'indigo', bgColor: 'bg-indigo-50', handle: 'Dumri College' },
                { icon: Youtube, name: 'YouTube', color: 'red', bgColor: 'bg-red-50', handle: 'Dumri College Official' },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Card className={`p-8 text-center hover:shadow-2xl transition-all cursor-pointer border-t-4 border-t-${social.color}-600 group ${social.bgColor}`}>
                    <div className={`w-16 h-16 bg-${social.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <social.icon className={`w-8 h-8 text-${social.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{social.name}</h3>
                    <p className="text-sm text-slate-600">{social.handle}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Visit CTA */}
        <section className="py-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-8 text-blue-200" />
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Visit Our Campus
              </h2>
              <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
                Experience the vibrant campus life, meet our faculty, and explore our 
                world-class facilities. Schedule your personalized campus tour today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-8 text-xl font-bold shadow-2xl"
                >
                  <Calendar className="mr-3 w-6 h-6" />
                  Book Campus Tour
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white hover:text-blue-600 hover:border-white hover:shadow-2xl px-12 py-8 text-xl font-bold transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-3 w-6 h-6" />
                  Call Us Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}