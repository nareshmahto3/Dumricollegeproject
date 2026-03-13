import { useState } from 'react';
import { motion } from 'motion/react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { ScrollToTop } from '../ScrollToTop';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building2 } from 'lucide-react';
import { Card } from '../ui/card';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success('Message Sent Successfully!', {
      description: 'Thank you for contacting us. We will get back to you soon!',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37, 99, 235, 0.9), rgba(29, 78, 216, 0.9)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90">
              Have questions? We're here to help and answer any questions you might have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 text-center bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-sm text-slate-600">
                  123 Education Street
                  <br />
                  New Delhi, India 110001
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 text-center bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
                <p className="text-sm text-slate-600">
                  +91 123 456 7890
                  <br />
                  +91 098 765 4321
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 text-center bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                <p className="text-sm text-slate-600">
                  info@edumanagepro.edu
                  <br />
                  admissions@edumanagepro.edu
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 text-center bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Office Hours</h3>
                <p className="text-sm text-slate-600">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 9:00 AM - 2:00 PM
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
                  <p className="text-slate-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <Card className="p-8 bg-white border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="overflow-hidden border-slate-200">
                <div className="aspect-[4/3] bg-slate-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.49838034656!2d77.06889754725782!3d28.527252738155032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </Card>

              {/* Departments */}
              <Card className="p-6 bg-white border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Department Contacts
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-900">Admissions Office</p>
                    <p className="text-sm text-slate-600">admissions@edumanagepro.edu</p>
                    <p className="text-sm text-slate-600">+91 123 456 7890</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Student Support</p>
                    <p className="text-sm text-slate-600">support@edumanagepro.edu</p>
                    <p className="text-sm text-slate-600">+91 123 456 7891</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Finance Department</p>
                    <p className="text-sm text-slate-600">finance@edumanagepro.edu</p>
                    <p className="text-sm text-slate-600">+91 123 456 7892</p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] border-none">
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Follow us on social media for the latest updates and news
                </p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quick answers to common questions about our institution
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What are the admission requirements?',
                answer:
                  'Admission requirements vary by program. Generally, you need a high school diploma for undergraduate programs and a bachelor\'s degree for postgraduate programs, along with relevant entrance exam scores.',
              },
              {
                question: 'When does the academic year start?',
                answer:
                  'The academic year typically begins in August. However, some programs may have multiple intake periods throughout the year.',
              },
              {
                question: 'Are scholarships available?',
                answer:
                  'Yes, we offer merit-based and need-based scholarships for eligible students. Visit our admissions office or website for detailed information.',
              },
              {
                question: 'Do you have hostel facilities?',
                answer:
                  'Yes, we provide separate hostel facilities for boys and girls with modern amenities, 24/7 security, and mess facilities.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}