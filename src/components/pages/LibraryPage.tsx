import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  ChevronRight,
  BookOpen,
  Search,
  Clock,
  Monitor,
  Users,
  Award,
  Download,
  ExternalLink,
  Library,
  FileText,
  Globe,
  Headphones,
} from 'lucide-react';
import { CarouselHeader } from '../CarouselHeader';
import { Footer } from '../Footer';
import { Card } from '../ui/card';

const libraryStats = [
  { label: 'Books & Journals', value: '50,000+', icon: BookOpen },
  { label: 'Digital Resources', value: '10,000+', icon: Monitor },
  { label: 'Daily Visitors', value: '500+', icon: Users },
  { label: 'Journals Subscribed', value: '200+', icon: FileText },
];

const facilities = [
  {
    icon: BookOpen,
    title: 'Main Reading Hall',
    description: 'Spacious reading hall with seating for 300+ readers, designed for focused study.',
  },
  {
    icon: Monitor,
    title: 'Digital Library',
    description: 'Access to e-books, online journals, digital databases, and multimedia resources.',
  },
  {
    icon: Globe,
    title: 'Online Databases',
    description: 'Subscriptions to JSTOR, IEEE Xplore, Elsevier, Springer, and more.',
  },
  {
    icon: Headphones,
    title: 'Audio-Visual Section',
    description: 'Educational videos, documentaries, lectures, and audiobook collections.',
  },
  {
    icon: Users,
    title: 'Group Study Rooms',
    description: '10 air-conditioned group study rooms bookable in advance for collaborative work.',
  },
  {
    icon: FileText,
    title: 'Reference Section',
    description: 'Encyclopedias, dictionaries, handbooks, and specialized reference materials.',
  },
];

const onlineResources = [
  { name: 'JSTOR', category: 'Journals', description: 'Academic journals, books & primary sources', url: '#' },
  { name: 'IEEE Xplore', category: 'Engineering', description: 'Technical literature in EE, CS & electronics', url: '#' },
  { name: 'Elsevier ScienceDirect', category: 'Sciences', description: 'Scientific, technical & medical research', url: '#' },
  { name: 'Springer Link', category: 'Multidisciplinary', description: 'Books and journals across disciplines', url: '#' },
  { name: 'NLIST (e-Shodh Sindhu)', category: 'Government', description: 'UGC funded digital library for India', url: '#' },
  { name: 'Shodhganga', category: 'Theses', description: 'National repository of Indian theses & dissertations', url: '#' },
];

const timings = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Examination Days', time: '8:00 AM – 8:00 PM' },
];

export function LibraryPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <CarouselHeader />

      {/* Hero Banner */}
      <section
        className="relative h-[385px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F584F]/80 to-[#00192C]/90" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pt-20 pb-16">
          <div className="flex items-center gap-2 mb-5">
            <button
              onClick={() => navigate('/')}
              className="text-white text-base hover:underline"
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-white" />
            <span className="text-white text-base">Library</span>
          </div>

          <h1 className="text-5xl font-light text-white mb-5 font-serif">
            Central Library
          </h1>

          <div className="relative w-full max-w-[480px] h-[1px] bg-white/15 mb-5">
            <div className="absolute left-0 top-0 h-full w-[120px] bg-[#FDC72F]" />
          </div>

          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
            Your gateway to knowledge — explore 50,000+ books, digital
            resources, and research databases at Dumri College Central Library.
          </p>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-10 bg-[#2563EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white text-2xl mb-4">Search the Library Catalog</h2>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, author, subject, or ISBN..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-slate-900 border-0 outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button className="bg-white text-[#2563EB] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Search
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-3">
              Or{' '}
              <button
                onClick={() => navigate('/student/library')}
                className="underline hover:text-white"
              >
                login to access the full digital library portal
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {libraryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-md transition-shadow border-t-4 border-t-[#2563EB]">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Library Facilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive learning environment with modern resources for students, faculty, and researchers.
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{facility.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{facility.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Resources */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Online Resources & Databases</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Access world-class academic databases and digital resources through our library subscriptions.
            </p>
            <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {onlineResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900">{resource.name}</h3>
                      <span className="inline-block mt-1 bg-blue-100 text-[#2563EB] text-xs font-medium px-2 py-0.5 rounded">
                        {resource.category}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-slate-600 text-sm">{resource.description}</p>
                  <button
                    onClick={() => navigate('/studentlogin')}
                    className="mt-4 text-[#2563EB] text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Access Database <ExternalLink className="w-3 h-3" />
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Timings & Membership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Library Timings</h2>
              </div>
              <div className="space-y-3">
                {timings.map((t, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <span className="font-medium text-slate-700">{t.day}</span>
                    <span
                      className={`text-sm font-semibold ${
                        t.time === 'Closed' ? 'text-red-500' : 'text-[#2563EB]'
                      }`}
                    >
                      {t.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm mt-4">
                * Timings may vary during holidays and special events.
              </p>
            </motion.div>

            {/* Membership & Rules */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Membership & Rules</h2>
              </div>

              <div className="space-y-4">
                {[
                  'All enrolled students and staff are members automatically.',
                  'Students can borrow up to 3 books for 14 days.',
                  'Faculty members can borrow up to 10 books for 30 days.',
                  'A fine of ₹2 per day is charged for overdue books.',
                  'Maintain silence and keep the library clean.',
                  'Mobile phones must be switched to silent mode.',
                  'Food and beverages are not allowed inside.',
                  'Lost books must be replaced or paid for at current price.',
                ].map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                    </div>
                    <p className="text-slate-600 text-sm">{rule}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1e40af] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Library className="w-14 h-14 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl font-light font-serif mb-4">Access the Digital Library Portal</h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
              Students can log in to access the full digital library portal, request books, view
              borrowing history, and access exclusive digital resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/studentlogin')}
                className="bg-white text-[#2563EB] hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Student Login
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/30"
              >
                Contact Library
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
